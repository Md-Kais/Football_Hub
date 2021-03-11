import React, { createContext, useState, useContext, useEffect } from 'react';


import { LeagueCardContext } from './../Home/Home.js'
import AllLeagueCardDesign from './../AllLeagueCardDesign/AllLeagueCardDesign.js'
export const LeagueDetailContext = createContext();



const AllLeagueCard = () => {
    let LeagueIdArray = useContext(LeagueCardContext);

    LeagueIdArray = [...new Set(LeagueIdArray)];

    let newData = [];
    let setData = [];
    LeagueIdArray.map((pd) => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${pd}`;
        fetch(url)
            .then(res => res.json())
            .then(data => success(data))

    })
   
    
    let [datam,setDatam]=useState([])
   

    
    async function success(data) {
        
        
            newData = [...newData, Object.values(data)];
        
        
        if (newData.length === LeagueIdArray.length) {
            await setData.push(newData);
            await hello(setData);
        }
    }
    //console.log(datam.length);
   
    function hello(setData) {
        if (datam.length === 0) {

         
            setDatam(setData)
            return 0;
        }
        else {
            return 0;
        }
         
    }
    
    const ans = datam.length > 0 && <AllLeagueCardDesign datam={datam}></AllLeagueCardDesign>



    
 
     
    
    
      //console.log(datam);

    return (


        <div>
            {
                
                ans
            }

        </div >




    );
};

export default AllLeagueCard;