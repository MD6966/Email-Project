import { Stack, Box, IconButton, useTheme } from "@mui/material";
import { useChatsStyles } from "../../styles";
import { PaperPlaneTilt } from "phosphor-react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendGoogleChatMail,
  sendOutlookChatMail,
} from "../../../../../../store/actions/mailActions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { ChatInput } from "../ChatsElements";

const Footer = ({ pushChatData }) => {
  const theme = useTheme();
  const styles = useChatsStyles({ theme });
  const [inputValue, setInputValue] = useState("");
  const [openPicker, setOpenPicker] = useState(false);
  const src = useSelector((state) => state.folder.src);
  const selectedChat = useSelector((state) => state.folder.selectedChat);
  const dispatch = useDispatch();

  // console.log("src=====", src);
  // console.log("input value=====", inputValue);

  const submitChat = () => {
    // console.log("inputValue", inputValue);

    const chat = {
      description: inputValue,
      parentFolderId: "awainHi",
      conversationId:
        "AQQkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAQACFF6-D6isBBkCM8eL0NT-o=",
    };
    pushChatData(chat);
    setInputValue("");
    const formData = new FormData();
    formData.append("email", selectedChat.receiver_email_address);
    formData.append("subject", selectedChat.subject);
    formData.append("description", inputValue);

    if (src === "Outlook") {
      dispatch(sendOutlookChatMail(formData))
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
    if (src === "Google") {
      dispatch(sendGoogleChatMail)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    // console.log("=====emoji==", emoji);
    setInputValue((prevValue) => prevValue + emoji);
    // console.log("inputValue==", inputValue);
  };

  // useEffect(() => {
  //   const keyDownHandler = (event) => {
  //     if (event.key === "Enter") {
  //       console.log("User pressed: ", event.key);
  //       // event.preventDefault();

  //       // 👇️ your logic here
  //       submitChat();
  //     }
  //   };

  //   document.addEventListener("keydown", keyDownHandler);

  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  // }, [src, inputValue, selectedChat, dispatch]);

  // if (attachment instanceof File) {
  //   console.log("attachment File", attachment);
  // }
  // console.log("attachment File ", attachment);
  // }
  // console.log("attachment File type", Array.from(attachment));

  return (
    <Box p={2} sx={styles.conversationFooter}>
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          {" "}
          {/* Chat Input */}
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker data={data} emojiSize={20} onEmojiSelect={addEmoji} />
          </Box>
          <ChatInput
            openPicker={openPicker}
            setOpenPicker={setOpenPicker}
            inputValue={inputValue}
            setInputValue={setInputValue}
            pushChatData={pushChatData}
          />
        </Stack>

        <Box sx={styles.footerBox}>
          <Stack
            sx={styles.conversationHeaderStack}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton color="#F0EDED" onClick={submitChat}>
              <PaperPlaneTilt />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;