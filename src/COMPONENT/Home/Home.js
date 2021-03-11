import React, { createContext, useContext } from 'react';


import './Home.css'
import AllLeagueCard from './../AllLeagueCard/AllLeagueCard'
import { LeagueIDContext } from './../../App.js'

import Box from '@material-ui/core/Box';
export const LeagueCardContext = createContext();


let IdArray = [];



export default function ImgMediaCard() {
   


    
    const LeagueId = useContext(LeagueIDContext);
  
    //console.log(LeagueId);



    function makeArray() {
        for (let i = 0; ;) {
            const { strSport } = LeagueId[i];
            if (strSport === 'Soccer') {
                const { idLeague } = LeagueId[i];

                IdArray.push(idLeague);
                i++;
            }

            if (i === 20) {
                break;
            }

        }
    }
 

    LeagueId && makeArray();
    
   
    // 'https://wallpapercave.com/wp/vvZQmlz.jpg'
        


    return (
        <React.Fragment>
            <Box component="span">
                <img src='https://wallpapercave.com/wp/vvZQmlz.jpg' alt="camp Kais Stadium" width='100%'></img>
                <LeagueCardContext.Provider value={IdArray}>
                    <AllLeagueCard />

                </LeagueCardContext.Provider>
            </Box>
            {/* <Box component="span" p={3}>
               
               
            </Box> */}
            <Box component="span" p={3} textAlign="center">
                <small> All Rights Reserved</small>

                <small>Copyright &#169; footballhub.com</small>
            </Box>

            
        </React.Fragment>

    );
}
