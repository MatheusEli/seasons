import React from "react";

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    return (
        <h3>{season === 'summer' ? "Lets hit the beach" : "Burr, it's chilly"}</h3>
    );
};

export default SeasonDisplay;