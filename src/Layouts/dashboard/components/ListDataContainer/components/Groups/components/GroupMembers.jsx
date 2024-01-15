import React, { useEffect, useState } from 'react';
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
  Typography,
  Box,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addContactsGroup, getGroupContacts, removeContactsFromGroup } from '../../../../../../../store/actions/folderActions';
import { RotatingLines } from 'react-loader-spinner';
import { useSnackbar } from 'notistack';
const GroupMembers = (props) => {
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const handleToggle = (groupMembers) => () => {
      const newSelectedMembers = [...selectedMembers];
    
      const selectedIndex = newSelectedMembers.findIndex((selectedMember) => selectedMember.id === groupMembers.id);
    
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
      setLoading(true)
      const selectedMemberIds = selectedMembers.map((selectedMember) => selectedMember.id);
      // console.log(JSON.stringify(selectedMemberIds))
      const formData = new FormData()
      formData.append('contact_ids', JSON.stringify(selectedMemberIds))
      formData.append('group_id', props.data.id)
      dispatch(removeContactsFromGroup(formData)).then((result) => {
        enqueueSnackbar(result.data.message, {
          variant:'success'
        })
        props.close()
        setSelectedMembers([])
        setLoading(false)
        props.memberSuccess()
      }).catch((err) => {
        setLoading(false)
        console.log(err)
      });
  
    }
  return (
    <div>
      <Dialog open={props.open} onClose={props.close} fullWidth>
        <DialogTitle>
            Group Members
            {
                props.data.outlook_contacts.length > 0 &&
            <Typography sx={{color:'#888'}}>Select member to remove from group</Typography>
            }
        </DialogTitle>
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
                    sx={{mt:1}}
                  />
                ))}
              </div>
            </div>
          )}

          <List>
            {props.data.outlook_contacts.map((member) => {
              const labelId = `checkbox-list-label-${member.id}`;
              const isSelected = selectedMembers.some((selectedMember) => selectedMember.id === member.id);
              return (
                <ListItem
                  key={member.id}
                  dense
                  button
                  onClick={handleToggle(member)}
                  className={isSelected ? 'selected-list-item' : ''}
                >
                  <ListItemAvatar>
                    <Avatar sx={{background:'#050444'}}>S</Avatar>
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={member.name} secondary={member.email} />
                  <Checkbox
                   iconStyle={{fill: '#000'}}
                    edge="end"
                    checked={isSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                    disabled={isSelected}
                    sx={{
                        [`&, &.${checkboxClasses.checked}`]: {
                          color: '#050444',
                        },
                      }}
                  />
                </ListItem>
              );
            })}
          </List>
          {props.data.outlook_contacts.length === 0 &&
          <Box sx={{display:'flex', justifyContent:'center', flexDirection:"column", alignItems:'center'}}>
          <Typography fontWeight="bold" textAlign="center">
          No Contacts in this group
          </Typography>
          <Button variant='outlined' sx={{mt:2}} 
          onClick={props.addM}
          >
            Add Members
          </Button>
          </Box>
          }
        </DialogContent>
        <Divider />
        <DialogActions>
            <Button variant='outlined'
            onClick={handleClose}
            >
                Cancel
            </Button>
            {
              loading ? 
              <RotatingLines
                strokeColor="#040263"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={loading}
              />
              :
            <Button variant='contained'
            onClick={handleAddMembers}
            disabled={selectedMembers.length == 0}

            >
                Remove
            </Button>

            }
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default GroupMembers
