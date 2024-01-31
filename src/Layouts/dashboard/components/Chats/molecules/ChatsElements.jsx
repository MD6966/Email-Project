import {
    Stack,
    Box,
    Typography,
    Avatar,
    Badge,
    InputBase,
    TextField,
    InputAdornment,
    IconButton,
    Tooltip,
    Fab,
  } from "@mui/material";
  import { styled, alpha } from "@mui/material/styles";
  import moment from "moment";
  import { selectedChat } from "../../../../../store/actions/listActions";
  import { useDispatch, useSelector } from "react-redux";
  import { useRef, useState } from "react";
  import { LinkSimple, Smiley } from "phosphor-react";
  import { Actions } from "../../../../../utils";
  
  export const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  
  export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha("rgb(205, 198, 198)", 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  }));
  
  export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvent: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
      width: "100%",
    },
  }));
  
  export const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingTop: "12px !important",
      paddingBottom: "12px !important",
    },
  }));
  
  export const ChatElement = ({ chat, focusRef }) => {
    // console.log("chat=========", chat);
    const dispatch = useDispatch();
    const setChat = useSelector((state) => state.folder.selectedChat);
    // console.log("selected Chat=========", setChat);
    const { conversationId, subject, id, receiver_name, receivedDateTime } = chat;
    return (
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor:
          conversationId &&   conversationId === setChat?.conversationId
              ? "#BDBDBD"
              : alpha("rgb(205, 198, 198)", 1),
        }}
        onClick={() => dispatch(selectedChat(chat))}
        p={2}
        ref={conversationId === setChat.conversationId ? focusRef : null}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{
                textTransform: "capitalize",
                backgroundColor:
                  conversationId === setChat.conversationId
                    ? alpha("rgb(205, 198, 198)", 1)
                    : "#BDBDBD",
              }}
            >
              {" "}
              {receiver_name && receiver_name[0]}
            </Avatar>
  
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {receiver_name && receiver_name.substring(0, 10)}
              </Typography>
              <Typography variant="caption">
                {" "}
                {subject && subject.substring(0, 15) + "..."}
              </Typography>
            </Stack>
          </Stack>
  
          <Stack spacing={2} alignItems={"center"}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {receivedDateTime && moment(receivedDateTime).format("h:mm")}
            </Typography>
            <Badge />
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export const ChatInput = ({
    openPicker,
    setOpenPicker,
    inputValue,
    setInputValue,
    pushChatData,
  }) => {
    const fileInputRef = useRef();
  
    const [openActions, setOpenActions] = useState(false);
  
    const fileIsSelected = (event) => {
      const selectedFile = event.target.files[0];
  
      // console.log("targeted file=====", selectedFile.type.startsWith("image/"));
      // console.log("filTarget Input====", fileInputRef.current.files[0]);
  
      const chat = {
        description: inputValue,
        parentFolderId: "awainHi",
        conversationId:
          "AQQkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAQACFF6-D6isBBkCM8eL0NT-o=",
        file: event.target.files[0],
        type: selectedFile.type.startsWith("image/") ? "image" : "document",
      };
      pushChatData(chat);
      event.target.value = null;
    };
  
    const getFileAcceptValue = (type) => {
      switch (type) {
        case "image":
          return ".jpg, .jpeg, .png, .gif";
        case "document":
          return ".pdf, .docx, .xlsx";
        case "software":
          return ".exe";
        default:
          return "";
      }
    };
    const showOpenFileDialog = () => {
      fileInputRef.current?.click();
      setOpenActions(!openActions);
    };
  
    return (
      <StyledInput
        fullWidth
        name="inputValue"
        value={inputValue}
        placeholder="Write a message..."
        variant="filled"
        InputProps={{
          disableUnderline: true,
  
          startAdornment: (
            <Stack sx={{ width: "max-content" }}>
              <Stack
                sx={{
                  position: "relative",
                  display: openActions ? "inline-block" : "none",
                }}
              >
                {Actions.map((el, index) => (
                  <Tooltip key={index} placement="right" title={el.title}>
                    <Fab
                      sx={{
                        position: "absolute",
                        top: -el.y,
                        backgroundColor: el.color,
                      }}
                      aria-label="add"
                      onClick={showOpenFileDialog}
                      // onClick={
                      //   el.icon === Image
                      //     ? fileIsSelected
                      //     : (event) => console.log(event.target)
                      // }
                    >
                      <el.icon size={24} />
  
                      <input
                        type="file"
                        id="file-input"
                        style={{ display: "none" }}
                        accept={getFileAcceptValue(el.type)}
                        onChange={fileIsSelected}
                        ref={fileInputRef}
                      />
                    </Fab>
                  </Tooltip>
                ))}
              </Stack>
  
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setOpenActions(!openActions);
                  }}
                >
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
                <Smiley />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        sx={{
          "& .MuiInputBase-input": {
            paddingTop: "12px !important",
            paddingBottom: "12px !important",
            "&:-webkit-autofill": {
              WebkitBoxShadow: " 0 0 0 100px #C1BABA inset",
            },
          },
        }}
      />
    );
  }