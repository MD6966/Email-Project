import {
    Box,
    Stack,
    Avatar,
    Typography,
    IconButton,
    Divider,
    useTheme,
    Fab,
    Tooltip,
  } from "@mui/material";
  import { faker } from "@faker-js/faker";
  import {
    Phone,
    MagnifyingGlass,
    VideoCamera,
    CaretDown,
    Users,
  } from "phosphor-react";
  import { StyledBadge } from "../ChatsElements";
  import { useChatsStyles } from "../../styles";
  import { useSelector } from "react-redux";
  
  const ConversationsHeader = () => {
    const theme = useTheme();
    const styles = useChatsStyles({ theme });
    const selectedChat = useSelector((state) => state.folder.selectedChat);
  
    return (
      <Box p={2} sx={styles.conversationHeader}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent="space-between"
          sx={styles.conversationHeaderStack}
        >
          <Stack direction={"row"} spacing={2}>
            <Box>
              <Avatar sx={{ textTransform: "capitalize" }}>
                {selectedChat.receiver_name[0]}
              </Avatar>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant="subtitle2">
                {selectedChat.receiver_name}
              </Typography>
              <Typography variant="caption">{selectedChat.subject}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Tooltip placement="bottom" title={"Video Call"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={"Audio Call"}>
              <IconButton>
                <Phone />
              </IconButton>
            </Tooltip>
  
            <Tooltip placement="bottom" title={"New Group"}>
              <IconButton>
                <Users />
              </IconButton>
            </Tooltip>
  
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export default ConversationsHeader;