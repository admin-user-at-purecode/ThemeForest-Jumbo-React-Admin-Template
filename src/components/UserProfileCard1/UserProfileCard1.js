import {Avatar, Typography} from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import Content from "../Content/Content";
import DdMenu from "../DdMenu/DdMenu";
import avatar8 from '../../assets/images/90x90.png'

const UserProfileCard1 = () => {
    return (
        <CardQuick noWrapper>
            <Content
                action={
                    <DdMenu
                        menuItems={[
                            {title: "Profile", slug: "profile"},
                            {title: "Friends", slug: "friends"}
                        ]}
                    />
                }
            />
            <Content
                sx={{
                    p: theme => theme.spacing(0, 3, 3),
                    textAlign: 'center'
                }}
            >
                <Avatar sx={{width: 90, height: 90, boxShadow: 2, m: '0 auto 20px'}}
                        src={avatar8}/>
                <Typography variant={"h5"}>Garry Sobers</Typography>
                <Typography variant={"h6"} color="text.secondary" mb={2}>Graphic Designer</Typography>
            </Content>
            <Content
                sx={{
                    p: 3,
                    textAlign: 'center',
                    backgroundColor: theme => theme.palette.action.hover
                }}
            >
                <Typography variant={"body1"}>
                    Cenas in erat accusman, hendrerit vel, pulvinar adio. Quisque eu conva tend
                </Typography>
            </Content>
        </CardQuick>
    );
};

export default UserProfileCard1;
