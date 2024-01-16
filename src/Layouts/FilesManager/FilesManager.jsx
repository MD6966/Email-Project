import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Cloud, Folder, Upload } from '@mui/icons-material';
import UploadFile from './components/UploadFile/UploadFile';
import MyUploads from './components/MyUploads/MyUploads';
const drawerWidth = 240;
const listData = [
  { id: 1, title: 'Upload File', icon: <Upload /> },
  { id: 2, title: 'My Uploads', icon: <Cloud /> }
];

export default function FilesManager() {
  const [selectedItem, setSelectedItem] = React.useState(listData[0]);

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: '#040263',
        }}
      >
        <Toolbar>
          <Folder />
          <Typography variant="h6" noWrap component="div" mt={0.5} ml={1}>
            Manage your Files
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 3 }}>
          <List>
            {listData.map((text) => (
              <ListItem
                key={text.id}
                disablePadding
                selected={selectedItem && selectedItem.id === text.id}
                onClick={() => handleListItemClick(text)}
                sx={{
                  '&:hover': {
                    backgroundColor: selectedItem && selectedItem.id === text.id ? '#001f3f' : 'inherit',
                    color: selectedItem && selectedItem.id === text.id ? 'white' : 'inherit',
                  },
                }}
              >
                <ListItemButton
                  sx={{
                    backgroundColor: selectedItem && selectedItem.id === text.id ? '#001f3f' : 'inherit',
                    color: selectedItem && selectedItem.id === text.id ? 'white' : 'inherit',
                  }}
                >
                  <ListItemIcon
                  sx={{
                    color: selectedItem && selectedItem.id === text.id ? 'white' : 'inherit',
                  }}
                  >{text.icon}</ListItemIcon>
                  <ListItemText
                    primary={text.title}
                    sx={{
                      color: selectedItem && selectedItem.id === text.id ? 'white' : 'inherit',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box >
          {selectedItem && (
            <>
            {selectedItem.id == 1 && <UploadFile selected={()=>setSelectedItem(listData[1])}/> }
            {selectedItem.id == 2 && <MyUploads />}
            </>
          )}
          
        </Box>
      </Box>
    </Box>
  );
}