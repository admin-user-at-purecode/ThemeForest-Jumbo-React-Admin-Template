import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ScheduleList from "./ScheduleList";
import Stack from "@mui/material/Stack";
import CardQuick from "../CardQuick/CardQuick";
import Content from "../Content/Content";
import DdMenu from "../DdMenu/DdMenu";

const ScheduleCard = () => {
    return (
        <CardQuick noWrapper>
            <Content
                bgColor={["#843CF6", "#38B8F2"]}
                action={
                    <DdMenu
                        menuItems={[
                            {title: "Setup a call"},
                            {title: "Schedule a task"}
                        ]}
                    />
                }
                sx={{height: 260, color: "common.white"}}
            >
                <Stack alignItems={"center"} mt={-2}>
                    <Avatar
                        sx={{
                            bgcolor: 'common.white',
                            height: 90,
                            width: 90,
                            fontSize: 28,
                            color: '#475259',
                            boxShadow: 2,
                            mb: 2
                        }}
                    >28</Avatar>
                    <Typography variant={"h4"} color={"common.white"}>Monday</Typography>
                    <Typography variant={"body1"} mb={1}>December 2021</Typography>
                </Stack>
            </Content>
            <Content sx={{p: 3}}>
                <ScheduleList/>
            </Content>
        </CardQuick>
    );
};

export default ScheduleCard;
