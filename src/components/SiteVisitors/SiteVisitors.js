import React from 'react';
import CountriesList from "./CountriesList";
import VisitorsOnMap from "./VisitorsOnMap";
import {countryList} from "./data";
import Grid from "@mui/material/Grid";
import CardQuick from '../CardQuick/CardQuick';
import { cardTitles } from '../../mock_data/cardTitles';

const SiteVisitors = () => {
    return (
        <CardQuick
            title={cardTitles.widgets.title.siteVisitors}
            subheader={t('widgets.subheader.siteVisitors')}
        >
            <Grid container spacing={3.75}>
                <Grid item xs={12} md={5}>
                    <CountriesList countries={countryList}/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <VisitorsOnMap/>
                </Grid>
            </Grid>
        </CardQuick>
    );
};

export default SiteVisitors;
