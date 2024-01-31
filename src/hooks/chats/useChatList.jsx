import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChatListData } from "../../store/actions/listActions";

const useChatList = () => {
  const dispatch = useDispatch();
  const [listData, setListData] = useState([]);
  useEffect(() => {
    // getListData
    dispatch(getChatListData())
      .then((result) => {
        // console.log("====result======", result.data.payload);
        setListData(result.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { listData };
};

export default useChatList;