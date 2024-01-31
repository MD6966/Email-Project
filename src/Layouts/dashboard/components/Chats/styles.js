import { alpha } from "@mui/material/styles";
export const useChatsStyles = ({ theme }) => {
  const style = {
    chatLayoutConversationWidth: {
      height: "100vh",
      width: "calc(100vw - 400px)",
      // backgroundColor: alpha("rgb(205, 198, 198)", 1),
      backgroundColor: "#FFFF",
    },
    mainBox: {
      ml: "4%",
      width: 320,
      backgroundColor: "#F0EDED",
      boxShadow: "8px 8px 2px (0,0,0,0.25)",
    },
    chatContainerStack: {
      height: "100vh",
      // height: "auto",
      overflowY: "scroll",
    },
    chatsParentStack: { flexGrow: 1, overflow: "hidden", height: "100%" },
    conversationHeader: {
      height: 100,
      width: "100%",
      backgroundColor: alpha("rgb(205, 198, 198)", 1),
      boxShadow: "8px 0px 2px rgb(0, 0, 0, 0.25)",
    },
    conversationHeaderStack: { width: "100%", height: "100%" },
    anchorOrigin: { vertical: "bottom", horizontal: "right" },
    conversationFooter: {
      height: 100,
      width: "100%",
      backgroundColor: alpha("rgb(205, 198, 198)", 1),
      boxShadow: "8px 0px 2px rgb(0, 0, 0, 0.25)",
    },
    footerBox: {
      height: 48,
      width: 48,
      backgroundColor: "#F0EDED",
      borderRadius: 1.5,
    },
    defaultStack: { height: "100%" },
    defaultImageBox: { width: 400, height: 300 },
    defaultImage: { width: "100%", height: "100%", objectFit: "cover" },
    startConversation: {
      fontWeight: 800,
      fontSize: "50px",
      fontStyle: "italic",
    },
    messageBox: { flexGrow: 1, height: "100%", overflowY: "scroll" },
  };
  return style;
};