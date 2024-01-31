import { Stack, Box, useTheme } from "@mui/material";

import ChatsBox from "./molecules/ChatBox";
import Conversation from "./molecules/Conversation";
import DefaultChat from "./molecules/DefaultChat";
import { useChatsStyles } from "./styles";
import { useSelector } from "react-redux";
import { useChatList, useConversation } from "../../../../hooks";
// import { useChatList, useConversation } from "../../../../hooks";

const Chats = () => {
  const theme = useTheme();
  const styles = useChatsStyles({ theme });
  const selectedChat = useSelector((state) => state.folder.selectedChat);
  const { listData } = useChatList();
  const { chatData, pushChatData } = useConversation();
  console.log("selectedChat state in Chats component===========", selectedChat);
  // console.log(
  //   "selectedChat state in Chats component===========",
  //   Object.values(selectedChat).length
  // );

  return (
    <Stack
      direction={"row"}
      sx={{ width: "100%", height: "100vh", overflowY: "hidden" }}
    >
      {/* Chats */}
      <ChatsBox listData={listData} chatData={chatData} />
      {/* Conversation */}
      <Box sx={styles.chatLayoutConversationWidth}>
        
        {
        selectedChat && 
        Object.values(selectedChat )?.length ? (
          <Conversation
            listData={listData}
            chatData={chatData}
            pushChatData={pushChatData}
          />
        ) : (
          <DefaultChat />
        )}
      </Box>
    </Stack>
  );
};

export default Chats;