import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './LeagueDetailed.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import { green } from '@material-ui/core/colors';
import { blue ,indigo } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import LeagueDetailsCard from '../LeagueDetailsCard/LeagueDetailsCard';
import FemalePhoto from './../../Images/female.png'
import MalePhoto from './../../Images/Rectangle 28.png'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const LeagueDetailed = () => {
    let { idLeague } = useParams();
    console.log(idLeague);

    const [data, setData] = useState({});


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.leagues[0]))
    }, {})

    //console.log(data);
    const { intFormedYear, strLeagueAlternate, dateFirstEvent, strGender, strCountry,  strSport, strDescriptionEN, strLeague, strLogo } = data;

    let {strFacebook, strTwitter,strPoster, strWebsite, strYoutube}=data;
    // console.log(intFormedYear, dateFirstEvent , strLeague , strCountry ,strDescriptionEN , strSport , strLeague ,strPoster);
    console.log(strDescriptionEN);
    let description = `${strDescriptionEN}`;
    console.log(strFacebook,strWebsite);
    //description='';//all ok. if there no description . put this
    if (description.length === 0) {
        description = `The ${strLeague}, often referred to as ${strLeagueAlternate} or the EPL outside ${strCountry}, is the top level of the ${strCountry} football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the ${strCountry} Football League (EFL). Seasons run from August to May with each team playing 38 matches (playing all 19 other teams both home and away). Most games are played on Saturday and Sunday afternoons.

        The competition was founded as the FA Premier League on ${dateFirstEvent} following the decision of clubs in the Football League First Division to break away from the Football League, founded in ${intFormedYear}, and take advantage of a lucrative television rights deal. The deal was worth around £1 billion a year domestically as of 2013–14, with Sky and BT Group securing the domestic rights to broadcast 116 and 38 games respectively. The league is a corporation in which the member clubs act as shareholders, and generates €2.2 billion per year in domestic and international television rights. Clubs were apportioned central payment revenues of £2.4 billion in 2016–17, with a further £343 million in solidarity payments to ${strCountry} Football League (EFL) clubs.

        ${strLeague} is the most-watched sports league in the world, broadcast in 212 territories to 643 million homes and a potential TV audience of 4.7 billion people. For the 2018–19 season average Premier League match attendance was at 38,181, second to the Bundesliga's 43,500, while aggregated attendance across all matches is the highest of any league at 14,508,981. Most stadium occupancies are near capacity. The Premier League ranks second in the UEFA coefficients of leagues based on performances in ${strCountry} competitions over the past five seasons as of 2019, only behind Spain's La Liga.

        Forty-nine clubs have competed since the inception of the ${strLeague} in 1992: forty-seven ${strCountry} and two Welsh clubs. Seven of them have won the title: Manchester United (13), Chelsea (5), Manchester City (4), Arsenal (3), Blackburn Rovers (1), Leicester City (1) and most recently Liverpool (1). The record of most points in a Premier League season is 100, set by Manchester City in 2017–18.`
    }
    const classes = useStyles();
    
    const gender=strGender;
    if(strPoster===null){
        strPoster=MalePhoto;
    }
    else{
        strPoster=MalePhoto;
    }
    const posterImageUrl = gender ==='Male' ? strPoster : FemalePhoto;

    console.log(posterImageUrl);
    strWebsite="https://"+strWebsite;
    strFacebook = "https://" + strFacebook;
    strTwitter = "https://" + strTwitter;
    strYoutube = "https://" + strYoutube;
   console.log(typeof(strWebsite));
    return (
        
        <div style={{ backgroundColor: '#1D1D2D', color: 'whitesmoke', borderRadius: '20px', padding: '20px' }}>
            
            <div className='bgImageDetailed'>
                <Box component="span">
                    <img src={strLogo} alt={strLeague} className="bgImageLogo"></img>

                </Box>
            </div>
            <div className={classes.root} style={{ backgroundColor: '#3A42FF', color: 'whitesmoke', borderRadius: '20px', padding: '20px' }}>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                        
                        <LeagueDetailsCard data={data}></LeagueDetailsCard>
                    </Grid>
                    <Grid item sm={12} md={6} className="leagueImage">
                        <center>
                            <img src={posterImageUrl} alt="ImageOfUs" width='100%' height='100%' style={{ textAlign: 'center' }} />
                        </center>
                        
                       
                    </Grid>
                </Grid>
            </div>
            <div style={{ padding: '20px' }}>
                <pre><div style={{ wordWrap: 'break-word' }}>{description}</div></pre>

            </div>

            <div className={classes.root} >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center" style={{ backgroundColor: '#1D1D2D' }}>
                    
                    <Grid item xs={12} sm={8} md={6} lg={4} style={{ backgroundColor: '#1D1D2D' }}>
                        <Paper className={classes.paper} style={{ backgroundColor: '#1D1D2D' }}>
                        <Grid container
                            direction="row"
                            justify="center"
                                alignItems="center" style={{ backgroundColor: '#1D1D2D' }}>
                            <Grid item xs={12}  sm={3}>
                            <a href={strWebsite} target="_blank" rel="noopener noreferrer"><LanguageIcon style={{ color: green[500], fontSize: 40 }}  /></a>
                                
                                
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <a href={strFacebook} target="_blank" rel="noopener noreferrer"><FacebookIcon style={{ color: indigo[500], fontSize: 40 }} /></a>

                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <a href={strTwitter} target="_blank" rel="noopener noreferrer"><TwitterIcon style={{ color: blue[500], fontSize: 40 }} /></a>

                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <a href={strYoutube} target="_blank" rel="noopener noreferrer"><YouTubeIcon style={{ color: red[500], fontSize: 40 }} /></a>

                            </Grid>
                        </Grid></Paper>
                    </Grid>
                   
                </Grid>
               
            </div>
        </div>
    );
};

export default LeagueDetailed;
