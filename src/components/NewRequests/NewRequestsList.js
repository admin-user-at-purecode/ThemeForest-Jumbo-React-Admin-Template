import { List, Snackbar } from "@mui/material";
import NewRequestItem from "./NewRequestItem";
import { reducer } from "./reducer";
import Scrollbar from "../Scrollbar/Scrollbar";
import { useEffect, useReducer, useState } from "react";

const init = (data) => {
  return [...data];
};

const NewRequestsList = ({ requests, refresh, onRefreshCallback }) => {
  const [newRequests, dispatch] = useReducer(reducer, requests, init);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (refresh && typeof onRefreshCallback === "function") {
      dispatch({ type: "RELOAD", payload: requests });
      onRefreshCallback(false);
    }
  }, [refresh]);

  const onAction = (action, item) => {
    dispatch({ type: action.value, payload: item });
    switch (action.value) {
      case "ACCEPTED":
        setToastMessage("Request accepted");
        break;
      case "DENIED":
        setToastMessage("Request denied");
        break;
      case "IGNORED":
        setToastMessage("Request ignored");
        break;
      default:
    }
    setShowToast(true);
  };

  return (
    <Scrollbar
      autoHeight
      autoHeightMin={304}
      autoHide
      autoHideDuration={200}
      autoHideTimeout={500}
    >
      <Snackbar
        onClose={() => setShowToast(false)}
        open={showToast}
        message={toastMessage}
        autoHideDuration={1000}
      />
      <List disablePadding>
        {newRequests.map((item, index) => (
          <NewRequestItem item={item} key={index} onAction={onAction} />
        ))}
      </List>
    </Scrollbar>
  );
};

export default NewRequestsList;
