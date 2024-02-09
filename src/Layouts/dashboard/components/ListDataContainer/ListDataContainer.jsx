import {
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FilterListIcon from "@mui/icons-material/FilterList";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { listDataContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Groups from "./components/Groups/Groups";
import { content, resetLoading } from "../../../../store/actions/folderActions";
import { RotatingLines } from "react-loader-spinner";
import {
  archiveEmail,
  deleteMail,
  markAsRead,
  markAsReadGoogle,
  resetCheckBox,
  selectMail,
  stateManager,
} from "../../../../store/actions/mailActions";
import Labels from "./components/Labels/Labels";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Archive, CheckBox, Delete } from "@mui/icons-material";
import Pusher from "pusher-js";
import { Success } from "../../../../Components/alerts/Success";
import Loading from "../../../../Components/loaders/loading";
import { pageChanger } from "../../../../store/actions/otherActions";
const ListDataContainer = ({
  data,
  type,
  group,
  groupData,
  memberSuccess,
  label,
}) => {
  // console.log(group, "DATA FROM CONTAINER")
  useEffect(() => {
    const pusher = new Pusher("82628df56f67349095e7", {
      cluster: "ap2",
    });
    const channel1 = pusher.subscribe("New-Mail-channel");
    channel1.bind("newMail", function (data) {
      console.log(data);
    });

    return () => {
      pusher.unsubscribe("New-Mail-channel");
    };
  }, []);
  const [selectedItem, setSelectedItem] = useState(0);
  const [list_data, setList_data] = useState("");
  const l_data =
    type === "Outlook"
      ? useSelector((state) => state.folder.folderData)
      : useSelector((state) => state.folder.folderDataG);
  // console.log(list_data, "YYYYYY")
  const isLoading = useSelector((state) => state.folder.isLoading);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const folder_name = useSelector((state) => state.folder.folder_name);
  const [selectedContent, setSelectedContent] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [a_open, set_a_open] = useState(false);
  const cont_data = useSelector((state) => state.folder.content);
  const c_b = useSelector((state) => state.folder.c_b);
  const dispatch = useDispatch();
  const isSelected = (index) => {
    return selectedItem === index;
  };
  useLayoutEffect(() => {
    if (type === "Outlook") {
      // console.log(l_data, 'THIS IS L_DATA')
      setList_data(l_data);
    }
    if (type == "Google") {
      setList_data(l_data);
    }
  }, [l_data]);
  // console.log(list_data, 'HELLOOOOOOO')
  useEffect(() => {
    if (list_data && !selectedContent) {
      setSelectedContent(list_data[0]);
    }
  }, [list_data, selectedContent, data]);
  // console.log(selectedContent, "++++____+++++")
  useEffect(() => {
    // dispatch(content(selectedContent))
  }, [selectedContent, list_data]);
  useLayoutEffect(() => {
    setSelectedItem(0);
  }, [list_data]);
  const formatTime = (dateTimeString) => {
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    return new Date(dateTimeString).toLocaleTimeString([], options);
  };
  const handleContent = (cont, index) => {
    setSelectedItem(index);
    setSelectedContent(cont);
    // console.log(cont, "++++++");
    dispatch(content(cont));
    if (type === "Outlook") {
      // const formData = new FormData()
      // formData.append('message_id', cont.mail_id)
      // formData.append('mail_id',cont.id )
      const body = {
        // message_id : cont.mail_id ,
        mail_id: [cont.id],
      };
      dispatch(markAsRead(body))
        .then((result) => {
          console.log(result);
          dispatch(stateManager());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const formDataG = new FormData();
      formDataG.append("id", cont.id);
      dispatch(markAsReadGoogle(formDataG))
        .then((result) => {
          dispatch(stateManager());
        })
        .catch((err) => {});
    }
  };
  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    dispatch(pageChanger(value));
    setPage(value);
  };

  // const startIndex = (page - 1) * itemsPerPage;
  // console.log(data, "This is Data");
  // const endIndex = startIndex + itemsPerPage;
  // const currentPageData = data.slice(startIndex, endIndex);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const handleArchive = () => {
    set_a_open(true);
    // const formData = new FormData()
    // formData.append('message_id', cont_data?.mail_id || '')
    // formData.append("mail_id", cont_data?.id || '')
    const body = {
      mail_id: [cont_data?.id || ""],
      slug: "archive",
    };
    dispatch(archiveEmail(body))
      .then((result) => {
        console.log(result);
        set_a_open(false);
        Success("Archived Successfully ");
      })
      .catch((err) => {
        set_a_open(false);
        console.log(err);
      });
  };
  const handleDelete = () => {
    setOpen(true);
    const formData = new FormData();
    formData.append("message_id", cont_data?.mail_id || "");
    formData.append("mail_id", cont_data?.id || "");
    dispatch(deleteMail(formData))
      .then((result) => {
        setOpen(false);
        Success("Deleted Successfully!");
      })
      .catch((err) => {
        setOpen(false);
        console.log(err);
      });
  };
  const toggleItemSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      const allIds = data.data.map((item) => item.id);
      setSelectedItems(allIds);
    }
    setSelectAll(!selectAll);
  };
  // console.log(selectedItems)
  useEffect(() => {
    if (selectedItems.length < 1) {
      dispatch(selectMail(false, selectedItems));
    } else {
      dispatch(selectMail(true, selectedItems));
    }
  }, [selectAll, selectedItems]);
  useEffect(() => {
    setSelectAll(false);
  }, []);
  useEffect(() => {
    setSelectAll(false);
    setSelectedItems([]);
  }, [c_b]);

  return (
    <>
      <Box sx={listDataContainer}>
        <>
          {!group ? (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
                {folder_name ? (
                  folder_name
                ) : (
                  <Skeleton variant="text" width={50} />
                )}
              </Typography>
              {/* <Box>
          <ContentCopyIcon style={{ fontSize: '24px', marginRight: '10px' }} />
          <FilterListIcon style={{ fontSize: '24px' }}  />
        </Box> */}
            </Box>
          ) : null}
          <Box sx={{ mt: 2 }}>
            {/* <Typography style={{ fontSize: '14px' }}>
          Today
        </Typography> */}
            {/* <Typography>
              {" "}
              Showing{" "}
              <b>
                {data.length < 10 * page
                  ? data.length
                  : page * 10 - 9 + "-" + 10 * page}
              </b>{" "}
              of <b>{data.length}</b>
            </Typography> */}
            <Stack spacing={2} sx={{ mt: 2 }}>
              <Pagination
                count={data.last_page}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                siblingCount={0}
                color="primary"
              />
            </Stack>
            <Divider sx={{ mt: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormGroup sx={{ ml: 3 }}>
                <FormControlLabel
                  control={<Checkbox onClick={toggleSelectAll} />}
                  label="Select All"
                />
              </FormGroup>
              {/* {
              selectAll &&
              <>
              <CheckBox />
              <Typography sx={{ml:0.5, cursor:'pointer'}}>
            Mark as read
            </Typography>
              </>
            } */}
            </Box>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {isLoading ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RotatingLines
                    strokeColor="#040263"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={isLoading}
                  />
                  <Typography sx={{ ml: 1, fontWeight: "bold" }}>
                    Please wait
                  </Typography>
                </Box>
              ) : list_data[0] && list_data[0].length < 1 && !group ? (
                <Typography sx={{ textAlign: "center", mt: 3 }}>
                  No Messages Found
                </Typography>
              ) : group ? (
                <Groups groupData={groupData} memberSuccess={memberSuccess} />
              ) : label ? (
                <Labels />
              ) : (
                data.data &&
                data.data.map((val, index) => {
                  // console.log(val, 'INSIDE')
                  return (
                    <React.Fragment key={index}>
                      <ListItem
                        alignItems="flex-start"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        sx={{
                          cursor: "pointer",
                          width: "150%",
                          mb: 0.5,
                          // background:( isSelected(index)||hoveredIndex === index) ? '#C8DEF4' : 'inherit',
                          background: selectedItems.includes(val.id)
                            ? "#C8DEF4"
                            : val.isRead === "1" || val.isRead === "READ"
                            ? null
                            : "#e2e2e2",
                          // '&:hover': {
                          //   background: (isSelected(index) || hoveredIndex === index) ? '#C8DEF4' : '',
                          // },
                          "&:hover": {
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      >
                        <Checkbox
                          checked={selectedItems.includes(val.id)}
                          onChange={() => toggleItemSelection(val.id)}
                        />
                        <ListItemAvatar>
                          <Avatar
                            alt={val.sender_name ? val.sender_name : "R"}
                            src="/static/images/avatar/1.jpg"
                            sx={{ background: "#040263" }}
                          />
                        </ListItemAvatar>
                        <Box>
                          <ListItemText
                            primary={
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    minWidth: 0,
                                    flexGrow: 1,
                                    fontWeight:
                                      val.isRead == "0" ? "bold" : "null",
                                  }}
                                >
                                  {type === "Outlook" && val.sender_name
                                    ? val.sender_name
                                    : ""}
                                  {type === "Google" && val.from
                                    ? val.from
                                    : ""}
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: "11px",
                                      textAlign: "right",
                                      fontWeight:
                                        val.isRead == "0" ? "bold" : "null",
                                    }}
                                  >
                                    {type === "Outlook" &&
                                      formatTime(val.createdDateTime || "")}
                                    {type === "Google" &&
                                      formatTime(val.date || "")}
                                  </Typography>
                                </Box>
                              </Box>
                            }
                            secondary={
                              <React.Fragment>
                                {hoveredIndex === index && (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "flex-start",
                                    }}
                                  >
                                    <Tooltip title="Delete">
                                      <Delete
                                        sx={{ mr: 1, fontSize: "20px" }}
                                        onClick={handleDelete}
                                      />
                                    </Tooltip>
                                    <Tooltip title="Archive">
                                      <Archive
                                        sx={{ mr: 1, fontSize: "20px" }}
                                        onClick={handleArchive}
                                      />
                                    </Tooltip>
                                    {/* <Tooltip title="Snooze">
          <SnoozeIcon sx={{mr:1, fontSize:'20px'}}/> 
          </Tooltip>
          <Tooltip title="Mark as read">
          <DoneAllIcon sx={{mr:1, fontSize:'20px'}}/> 
          </Tooltip> */}
                                  </Box>
                                )}
                              </React.Fragment>
                            }
                            onClick={() => handleContent(val, index)}
                          />
                        </Box>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  );
                })
              )}
            </List>
          </Box>
        </>
        <Loading open={open} title="Deleting please wait..." />
        {a_open && <Loading open={a_open} title="Please Wait" />}
      </Box>
    </>
  );
};

export default ListDataContainer;
