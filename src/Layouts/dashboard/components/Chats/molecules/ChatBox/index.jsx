import {
    Stack,
    Box,
    useTheme,
    Typography,
    IconButton,
    Divider,
  } from "@mui/material";
  import { useChatsStyles } from "../../styles";
  import { CircleDashed, MagnifyingGlass } from "phosphor-react";
  import { SimpleBarStyle } from "../Scrollbar";
  import {
    ChatElement,
    Search,
    SearchIconWrapper,
    StyledInputBase,
  } from "../ChatsElements";
  
  import { useEffect } from "react";
  
  import { useRef } from "react";
  import ChatBoxSkeleton from "./Skeleton";
  
  const ChatContainer = ({ listData, chatData }) => {
    const theme = useTheme();
    const styles = useChatsStyles({ theme });
  
    const ref = useRef(null);
  
    useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatData]);
  
    return listData.length ? (
      <Box sx={styles.mainBox}>
        <Stack p={3} spacing={2.5} sx={styles.chatContainerStack}>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Chats</Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>
  
          <Stack>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
  
          <Divider />
  
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2} direction="column" sx={styles.chatsParentStack}>
              <Stack spacing={2}>
                <Typography variant="subtitle2" color="#676767">
                  All Chats
                </Typography>
                {listData.map((e) => {
                  return <ChatElement key={e.id} chat={e} focusRef={ref} />;
                })}
              </Stack>
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Box>
    ) : (
      <ChatBoxSkeleton />
    );
  };
  
  export default ChatContainer;