import React from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import CardFeatured from '../CardFeatured/CardFeatured';
import Image from '../../assets/images/460x218.png'

const EarnRewardCard = () => {
    return (
        <CardFeatured
            showTick
            tickSx={{bgcolor: 'warning.main'}}
            bgColor={["#38B8F2", "#843CF6"]}
            direction={"column"}
            textAlign={"center"}
            imgSrc= {Image}
            imgSx={{height: 218}}
        >
            <Typography variant={"h3"} color={"common.white"} mb={2}>
                earn from $10 to $200 from your friend's payment
            </Typography>
            <Button variant={"contained"} color={"warning"} sx={{mb: .5}}>Learn More</Button>
        </CardFeatured>
    );
};

export default EarnRewardCard;
