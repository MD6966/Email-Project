import React, { useState } from 'react';
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
} from '@mui/material';

const AddMember = (props) => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const members = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more members as needed
  ];

  const handleToggle = (member) => () => {
    const newSelectedMembers = [...selectedMembers];
  
    const selectedIndex = newSelectedMembers.findIndex((selectedMember) => selectedMember.id === member.id);
  
    if (selectedIndex === -1) {
      newSelectedMembers.push(member);
    } else {
      newSelectedMembers.splice(selectedIndex, 1);
    }
  
    setSelectedMembers(newSelectedMembers);
  };

  const handleChipDelete = (member) => () => {
    const newSelectedMembers = [...selectedMembers];
    const selectedIndex = newSelectedMembers.indexOf(member);

    if (selectedIndex !== -1) {
      newSelectedMembers.splice(selectedIndex, 1);
      setSelectedMembers(newSelectedMembers);
    }
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
                    sx={{mt:1}}
                  />
                ))}
              </div>
            </div>
          )}

          <List>
            {members.map((member) => {
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
        </DialogContent>
        <Divider />
        <DialogActions>
            <Button variant='outlined'
            onClick={props.close}
            >
                Cancel
            </Button>
            <Button variant='contained'
            onClick={props.close}
            >
                Add
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddMember;
