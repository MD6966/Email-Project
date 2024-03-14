import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Checkbox,
  Chip,
  DialogActions,
  Button,
  Divider,
  checkboxClasses,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addContactsGroup,
  getGroupContacts,
} from "../../../../../../../store/actions/folderActions";
import { RotatingLines } from "react-loader-spinner";
import { useSnackbar } from "notistack";
import { Success } from "../../../../../../../Components/alerts/Success";

const AddMember = (props) => {
  // console.log(props.data.outlook_contacts)
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [groupMembers, setGroupMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const getGroupMembers = () => {
    dispatch(getGroupContacts())
      .then((result) => {
        setGroupMember(result.data.payload[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getGroupMembers();
  }, []);

  const handleToggle = (groupMembers) => () => {
    const newSelectedMembers = [...selectedMembers];

    const selectedIndex = newSelectedMembers.findIndex(
      (selectedMember) => selectedMember.id === groupMembers.id
    );

    if (selectedIndex === -1) {
      newSelectedMembers.push(groupMembers);
    } else {
      newSelectedMembers.splice(selectedIndex, 1);
    }

    setSelectedMembers(newSelectedMembers);
  };

  const handleChipDelete = (groupMembers) => () => {
    const newSelectedMembers = [...selectedMembers];
    const selectedIndex = newSelectedMembers.indexOf(groupMembers);

    if (selectedIndex !== -1) {
      newSelectedMembers.splice(selectedIndex, 1);
      setSelectedMembers(newSelectedMembers);
    }
  };
  const handleClose = () => {
    setSelectedMembers([]);
    props.close();
  };
  const handleAddMembers = () => {
    setLoading(true);
    const selectedMemberIds = selectedMembers.map(
      (selectedMember) => selectedMember.id
    );
    // console.log(JSON.stringify(selectedMemberIds))
    const formData = new FormData();
    // formData.append("contact_ids", JSON.stringify(selectedMemberIds));
    formData.append("contact_ids", selectedMemberIds);

    formData.append("group_id", props.data.id);
    dispatch(addContactsGroup(formData))
      .then((result) => {
        Success("Members addedd to the group");
        props.close();
        setSelectedMembers([]);
        setLoading(false);
        props.memberSuccess();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const isMemberInOutlookContacts = (member) => {
    return props.data.outlook_contacts.some(
      (outlookMember) => outlookMember.id === member.id
    );
  };
  return (
    <div>
      <Dialog open={props.open} onClose={props.close} fullWidth>
        <DialogTitle>Add Member</DialogTitle>
        <DialogContent>
          {selectedMembers.length > 0 && (
            <div>
              <p>Selected Members:</p>
              <div>
                {selectedMembers.map((selectedMember) => (
                  <Chip
                    key={selectedMember.id}
                    label={selectedMember.name}
                    onDelete={handleChipDelete(selectedMember)}
                    sx={{ mt: 1 }}
                  />
                ))}
              </div>
            </div>
          )}

          <List>
            {groupMembers.map((member) => {
              const labelId = `checkbox-list-label-${member.id}`;
              const isSelected = selectedMembers.some(
                (selectedMember) => selectedMember.id === member.id
              );
              const isDisabled = isMemberInOutlookContacts(member);
              return (
                <ListItem
                  key={member.id}
                  dense
                  button
                  onClick={handleToggle(member)}
                  disabled={isDisabled}
                  className={isSelected ? "selected-list-item" : ""}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ background: "#050444" }}>S</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={
                      !isDisabled
                        ? member.name
                        : member.name + " " + "(Already member)"
                    }
                    secondary={member.email}
                  />
                  <Checkbox
                    iconStyle={{ fill: "#000" }}
                    edge="end"
                    checked={isSelected}
                    inputProps={{ "aria-labelledby": labelId }}
                    disabled={isSelected}
                    sx={{
                      [`&, &.${checkboxClasses.checked}`]: {
                        color: "#050444",
                      },
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          {loading ? (
            <RotatingLines
              strokeColor="#040263"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={loading}
            />
          ) : (
            <Button
              variant="contained"
              onClick={handleAddMembers}
              disabled={selectedMembers.length == 0}
            >
              Add
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddMember;
