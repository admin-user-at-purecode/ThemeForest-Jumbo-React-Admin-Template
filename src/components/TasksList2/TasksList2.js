import { useCallback, useState } from "react";
import React from "react";
import { Typography } from "@mui/material";
// import RqTabs from "../RqTabs/RqTabs";
import Scrollbar from "../Scrollbar/Scrollbar";
// import RqList from "../RqList/RqList";
import CardQuick from "../CardQuick/CardQuick";
import TaskItem from "./TaskItem";
import DdMenu from "../DdMenu/DdMenu";
import { cardTitles } from "../../mock_data/cardTitles";

// to be removed
// import baseAxios from "axios";

// const axios = baseAxios.create({
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// const taskService = {};

// taskService.getTasks = async ({ queryKey }) => {
//   const { queryParams } = queryKey[queryKey.length - 1];
//   const { data } = await axios.get("/tasks", {
//     params: {
//       ...queryParams,
//     },
//   });
//   return data;
// };

// taskService.getTaskCategories = async () => {
//   const { data } = await axios.get("/tasks/categories");
//   return data;
// };

const TasksList2 = ({ scrollHeight }) => {
  const renderTasksItem = useCallback((taskItem) => {
    return <TaskItem item={taskItem} />;
  }, []);

  const [queryOptions, setQueryOptions] = useState({
    queryKey: "tasks",
    queryParams: { myTask: { id: 1, name: "All Tasks", userId: 100 } },
    dataKey: "tasks",
  });

  const handleCategory = useCallback((myTask) => {
    setQueryOptions((state) => ({ ...state, queryParams: { myTask: myTask } }));
  }, []);

  return (
    <CardQuick
      title={
        <Typography
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant={"h4"} mb={0}>
            {cardTitles.widgets.title.taskList}
          </Typography>
          {/* <RqTabs
            service={taskService.getTaskCategories}
            queryOptions={{
              queryKey: "task-categories",
              dataKey: "taskCategories",
            }}
            map={{ label: "name" }}
            primaryKey={"id"}
            onChange={handleCategory}
            sx={{
              flex: 1,
              justifyContent: "center",
            }}
          /> */}
        </Typography>
      }
      action={
        <DdMenu
          menuItems={[
            { id: 1, title: "More Detail", slug: "more-detail" },
            { id: 2, title: "Close", slug: "close" },
          ]}
        />
      }
      headerSx={{
        borderBottom: 1,
        borderColor: "divider",

        "& .MuiCardHeader-action": {
          my: -0.75,
        },
      }}
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 408}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        {/* <RqList
          queryOptions={queryOptions}
          primaryKey={"id"}
          service={taskService.getTasks}
          renderItem={renderTasksItem}
          componentElement={"div"}
        /> */}
      </Scrollbar>
    </CardQuick>
  );
};

export default TasksList2;
