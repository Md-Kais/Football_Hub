import { AccessTime, LocalConvenienceStore, Public, SportsSoccer, Wc } from '@material-ui/icons';
import React from 'react';
import './LeagueDetailedCard.css'
const LeagueDetailsCard = (props) => {
    //console.log(props.data)
    const { intFormedYear, dateFirstEvent, strCountry, strSport, strLeague, strGender } = props.data;

    return (
        <div>

            <h2>{strLeague}</h2>

            <div className="detail--icon">
                <LocalConvenienceStore /><h6>Founded: {intFormedYear}</h6>
            </div>

            <div className="detail--icon">
                <Public /><h6> Country : {strCountry}</h6>
            </div>

            <div className="detail--icon">
               <AccessTime></AccessTime>  <h6>First Play: {dateFirstEvent}</h6>
            </div>

            <div className="detail--icon">
                <SportsSoccer /><h6> Sport Type: {strSport}</h6>
            </div>

            <div className="detail--icon">
                <Wc /><h6>Gender: {strGender}</h6>
            </div>

        </div>
    );
};

export default LeagueDetailsCard;