import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleChatConversation } from "../../store/actions/chatActions";
import { pusherInitialization, ChatHistory } from "../../utils";

const useConversation = () => {
  const [chatData, setChatData] = useState([]);
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.folder.selectedChat);

  const pushChatData = (chat) => {
    // console.log("in array append function", chat);
    setChatData((prevChat) => [...prevChat, chat]);
  };

  useEffect(() => {
    // pusherInitialization();

    const formData = new FormData();
    formData.append("login_as", "outlook");
    formData.append("sender_email_address", "amirtariq6864@outlook.com");
    formData.append("receiver_email_address", "amirtariq3@gmail.com");
    // sendMailGoogle
    dispatch(singleChatConversation(formData))
      .then((result) => {
        setChatData(result.data.payload);

        // console.log(
        //     "single chat response in custom hook=========",
        //   result.data.payload
        // );
      })
      .catch((error) => {
        console.log("error in catch======", error);
      });
  }, [selectedChat]);

  // console.log("==========selectedChat===========", selectedChat);
  // console.log("===========chat data==========", chatData);

  return { chatData, pushChatData };
};

export default useConversation;