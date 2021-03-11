


import { LeagueDetailContext } from '../AllLeagueCard/AllLeagueCard.js';
import LeagueCardDesign from './../LeagueCardDesign/LeagueCardDesign.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import LeagueCardDesign from './../LeagueCardDesign/LeagueCardDesign.js';
import './AllLeagueCardDesign.css'
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

const AllLeagueCardDesign = ({ datam }) => {
    //console.log(datam[0].length);
    // console.log(datam[0].length);
    // for(let i=0;i<datam[0].length;i++){
    //     // console.log(datam[i]);
    //     let ans=datam[0];
    //    console.log(ans[0][0]);
    // }
   // console.log(datam);
    const classes = useStyles();
    let count = 0;

    return (
        <div className={classes.root} style={{textAlign:'center'}}>
              <Grid container className='grid-Changer'>
                {

               datam[0].map((pd) => {
                    let data = pd[0][0];
                   // console.log(data);
                        return (
                            <Grid item sm={12} md={6} lg={4} style={{ textAlign: 'center', borderRadius:'50px'}}>

                                <Paper className={classes.paper} style={{ textAlign: 'center' }}>
                                <LeagueCardDesign key={count} data={data}></LeagueCardDesign>

                                </Paper>
                            </Grid>
                            
                        )
                }
                )
            }

        </Grid>
        </div>
    );
}

export default AllLeagueCardDesign;