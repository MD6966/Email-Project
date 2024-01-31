import { Stack, Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

import ConversationSkeleton from "./Skeleton";
import { useTheme } from "@mui/material";
import { useChatsStyles } from "../../styles";

const Conversation = ({ listData, chatData, pushChatData }) => {
  const theme = useTheme();
  const styles = useChatsStyles({ theme });

  return listData?.length ? (
    <Stack height="100%" maxHeight={"100vh"} width="auto">
      {/* Chat Header */}
      <Header />
      {/* Msg */}
      <Box width="100%" sx={styles.messageBox}>
        <Message chatData={chatData} />
      </Box>
      {/* Chat Footer */}
      <Footer pushChatData={pushChatData} />
    </Stack>
  ) : (
    <ConversationSkeleton />
  );
};

export default Conversation;