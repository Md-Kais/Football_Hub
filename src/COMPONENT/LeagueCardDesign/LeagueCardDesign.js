import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './LeagueCardDesign.css'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
        backgroundColor: '#fe9355',
    },
    media: {
        height: 'auto',
        backgroundColor:'#fe9355',
    },
    border: {
        border: 'none',
    }
});

export default function MediaCard(props) {
    const classes = useStyles();
    let { strCountry, strLeagueAlternate, strLeague, strLogo } = props.data;
    console.log(props.data);
    if(strLeagueAlternate===''){
        strLeagueAlternate=strLeague;
    }
    //console.log(props.data);

    //  author.toUpperCase()
    return (
        <>
           
            <CardActionArea className='card-Bg-Change' style={{ 
        borderRadius:'20px'}}>
                <CardMedia style={{ textAlign: 'center'}}
                        className={classes.media}
                          
                        component="img"
                        alt={strLeague}

                        image={strLogo}
                />
                    <CardContent>

                    <Typography gutterBottom variant="h5" component="h2" style={{ color: '#15101A', fontFamily: 'bold',fontSize: '24px',fontWeight:'600' }}>
                            {strLeague}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {strLeagueAlternate}<br/>
                            
                        </Typography>
                    <Typography variant="h5" style={{ color: '#15101A', fontFamily: 'normal', fontSize: '16px', fontWeight: '300' }}>
                        Country: {strCountry}<br />

                    </Typography>
                      

                    </CardContent>
                <Button size="small" variant="contained" color="secondary" style={{margin:'5px'}}>
                    Explore →
                </Button>

                </CardActionArea>
                

                   


                

            
        </>
    );
}