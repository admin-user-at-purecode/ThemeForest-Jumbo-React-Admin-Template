import { useEffect, useState } from "react";
import { tasksList } from "../../mock_data/tasksList";
import TaskList from "./TaskList";
import CategoryDropdown from "./CategoryDropdown";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import CardQuick from "../CardQuick/CardQuick";
import Scrollbar from "../Scrollbar/Scrollbar";
import { cardTitles } from "../../mock_data/cardTitles";

const TaskListExpandable = ({ scrollHeight }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasksList);

  useEffect(() => {
    if (activeCategory && activeCategory !== "all")
      setFilteredTasks(
        tasksList.filter((task) => task.category === activeCategory)
      );
    else setFilteredTasks(tasksList);
  }, [activeCategory]);

  return (
    <CardQuick
      title={cardTitles.widgets.title.taskListExpandable}
      subheader={cardTitles.widgets.subheader.taskListExpandable}
      action={
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <CategoryDropdown
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Stack>
      }
      headerSx={{
        borderBottom: 1,
        borderBottomColor: "divider",
      }}
      wrapperSx={{ p: 0 }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={scrollHeight ? scrollHeight : 392}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        <TaskList tasks={filteredTasks} />
      </Scrollbar>
    </CardQuick>
  );
};

export default TaskListExpandable;
