import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import {
  getAllFolders,
  getAllFoldersGoogle,
} from "../../../../../store/actions/folderActions";
import { movemail } from "../../../../../store/actions/mailActions";
import { Success } from "../../../../../Components/alerts/Success";
import { useSelector } from "react-redux";
const MoveMailDialog = ({ open, close, id, type }) => {
  // console.log(id)
  const [age, setAge] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [folders, setFolders] = useState([]);
  const dispatch = useDispatch();
  const folders_outlook = useSelector((state) => state.folder.folders);
  const folders_google = useSelector((state) => state.folder.folders_google[0]);
  console.log(folders_google, "Google");
  console.log(folders_outlook, "Outlook");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {
    if (type === "Outlook") {
      setFolders(folders_outlook);
    } else {
      setFolders(folders_google);
    }
  }, []);
  const handleMoveMail = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("folder_id", age);
    formData.append("id", id);
    formData.append("move_as", type === "Outlook" ? "outlook" : "google");
    dispatch(movemail(formData))
      .then((result) => {
        setLoading(false);
        close();
        Success("Mail moved!");
        setAge("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Dialog open={open} onClose={close} fullWidth>
      <DialogTitle>
        Select folder
        <Typography sx={{ color: "#888" }}>
          Please select folder below in which you want to move mail
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Folder</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Select Folder"
            onChange={handleChange}
          >
            {folders.map((val, ind) => {
              // console.log(val);
              return type === "Outlook" && val.type === "default" ? (
                <MenuItem key={val.folder_id} value={val.folder_id}>
                  {val.folder_name}
                </MenuItem>
              ) : type === "Google" && val.type === "system" ? (
                <MenuItem key={val.folder_id} value={val.folder_id}>
                  {console.log(val)}
                  {val.name}
                </MenuItem>
              ) : null;
            })}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        {loading ? (
          "Please wait..."
        ) : (
          <Button variant="contained" onClick={handleMoveMail}>
            Move
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default MoveMailDialog;
