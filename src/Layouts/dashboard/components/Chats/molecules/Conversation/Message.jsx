import { Box, Stack } from "@mui/material";
import { TextMsg, DocMsg, MediaMsg } from "./MsgTypes";
import React from "react";

const Message = ({ chatData }) => {
  // console.log("===========chat data in Message==========", chatData);
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {chatData?.map((chat, index) => {
          switch (true) {
            case chat.description !== undefined && chat.description !== "":
              return <TextMsg key={index} chat={chat} />;
            case chat.file !== undefined && chat.type === "document":
              return <DocMsg key={index} chat={chat} />;
            case chat.file !== undefined && chat.type === "image":
              return <MediaMsg key={index} chat={chat} />;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;

// {ChatHistory.map((chat, index) => {
//   switch (chat.type) {
//     case "divider":
//       //Timeline
//       return <Timeline key={index} chat={chat} />;

//     case "msg":
//       switch (chat.subtype) {
//         case "img":
//           return <MediaMsg key={index} chat={chat} />;
//         case "doc":
//           return <DocMsg key={index} chat={chat} />;
//         case "link":
//           return <LinkMsg key={index} chat={chat} />;
//         case "reply":
//           return <ReplayMsg key={index} chat={chat} />;
//         default:
//           return <TextMsg key={index} chat={chat} />;
//       }
//     default:
//       return <></>;
//   }