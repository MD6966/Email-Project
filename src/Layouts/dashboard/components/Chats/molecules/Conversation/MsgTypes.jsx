import {
    Stack,
    Box,
    Divider,
    Typography,
    useTheme,
    Link,
    IconButton,
  } from "@mui/material";
  import { useChatsStyles } from "../../styles";
  import { alpha } from "@mui/material/styles";
  import Image from "mui-image";
  import { DownloadSimple, Image as PhosphorImage } from "phosphor-react";
  import { useRef, useEffect } from "react";
  
  // import DOMPurify from "dompurify";
  
  const DocMsg = ({ chat }) => {
    // console.log("chat object======", chat);
    return (
      <Stack
        direction={"row"}
        justifyContent={
          "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
          chat?.parentFolderId
            ? "start"
            : "end"
        }
      >
        <Box
          p={1.5}
          sx={{
            backgroundColor:
              "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
              chat?.parentFolderId
                ? alpha("rgb(205, 198, 198)", 1)
                : "#BDBDBD",
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              direction={"row"}
              spacing={3}
              alignItems="center"
              sx={{
                backgroundColor:
                  "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
                  chat?.parentFolderId
                    ? alpha("rgb(205, 198, 198)", 1)
                    : "#BDBDBD",
              }}
            >
              <PhosphorImage
                size={48}
                color={
                  "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
                  chat?.parentFolderId
                    ? "#000"
                    : "#fff"
                }
              />
              <Typography
                variant="caption"
                sx={{
                  color:
                    "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
                    chat?.parentFolderId
                      ? "#000"
                      : "#fff",
                }}
              >
                {chat?.file?.name}
              </Typography>
              <IconButton>
                <DownloadSimple
                  color={
                    "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
                    chat?.parentFolderId
                      ? "#000"
                      : "#fff"
                  }
                />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    );
  };
  
  const LinkMsg = ({ chat }) => {
    return (
      <Stack direction={"row"} justifyContent={chat.incoming ? "start" : "end"}>
        <Box
          p={1.5}
          sx={{
            backgroundColor: alpha("rgb(205, 198, 198)", 1),
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              spacing={3}
              alignItems="start"
              sx={{ backgroundColor: alpha("rgb(205, 198, 198)", 1) }}
            >
              <Image
                src={chat.preview}
                alt={chat.message}
                style={{ maxHeight: 210, borderRadius: "10px" }}
              />
              <Stack spacing={2}>
                <Typography variant="subtitle2">Creating Chat App</Typography>
                <Typography
                  variant="subtitle2"
                  component={Link}
                  sx={{ color: "primary" }}
                  to="https://www.youtube.com"
                >
                  www.youtube.com
                </Typography>
              </Stack>
              <Typography variant="body2"> {chat.message}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    );
  };
  
  const ReplayMsg = ({ chat }) => {
    return (
      <Stack direction={"row"} justifyContent={chat.incoming ? "start" : "end"}>
        <Box
          p={1.5}
          sx={{
            backgroundColor: "#BDBDBD",
  
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction="column"
              spacing={3}
              alignItems={"center"}
              sx={{
                backgroundColor: chat.incoming
                  ? alpha("rgb(205, 198, 198)", 1)
                  : "#F0EDEF",
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" color={"#000"}>
                {chat.message}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={chat.incoming ? alpha("rgb(205, 198, 198)", 1) : "#fff"}
            >
              {chat.reply}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    );
  };
  
  const MediaMsg = ({ chat }) => {
    return (
      <Stack direction={"row"} justifyContent={chat.incoming ? "start" : "end"}>
        <Box
          p={1.5}
          sx={{
            backgroundColor:
              "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
              chat.parentFolderId
                ? alpha("rgb(205, 198, 198)", 1)
                : "#BDBDBD",
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          <Stack spacing={1}>
            <Image
              src={URL.createObjectURL(chat.file)}
              alt={"image"}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Typography
              variant="body2"
              color={
                "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
                chat?.parentFolderId
                  ? "#000"
                  : "#fff"
              }
            >
              {chat?.file?.name}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    );
  };
  
  const TextMsg = ({ chat }) => {
    const chatRef = useRef(null);
    useEffect(
      () =>
        chatRef.current.scrollIntoView({
          behavior: "smooth",
        }),
      [chatRef]
    );
  
    return (
      <Stack
        direction={"row"}
        justifyContent={
          "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
          chat.parentFolderId
            ? "start"
            : "end"
        }
        sx={{ overflowX: "hidden" }}
      >
        <Box
          p={1.5}
          sx={{
            backgroundColor:
              "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
              chat.parentFolderId
                ? alpha("rgb(205, 198, 198)", 1)
                : "#BDBDBD",
            color:
              "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEJAAAA" ===
              chat?.parentFolderId
                ? "#000"
                : "#fff",
            borderRadius: 1.5,
            width: "max-content",
          }}
        >
          {/* <Typography
            variant="body1"
            color={chat.incoming ? "#000000" : "#ffffff"}
          >
            {chat.message}
          </Typography> */}
          <div
            style={{ minHeight: "80%", marginBottom: 5 }}
            dangerouslySetInnerHTML={{ __html: chat?.description || "" }}
            ref={chatRef}
          />
        </Box>
      </Stack>
    );
  };
  
  const Timeline = ({ chat }) => {
    const theme = useTheme();
    const styles = useChatsStyles({ theme });
    return (
      <Stack direction="row" alignItems="center" justifyContent={"space-between"}>
        <Divider width="46%" />
        <Typography variant="caption">{chat.text}</Typography>
        <Divider width="46%" />
      </Stack>
    );
  };
  
  export { Timeline, TextMsg, MediaMsg, ReplayMsg, LinkMsg, DocMsg };