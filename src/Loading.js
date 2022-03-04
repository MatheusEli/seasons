import React from "react";
import './Loading.css'

const Loading = () => {
    return (
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui text loader">Loading</div>
            </div>
            <p></p>
        </div>
    );
};

export default Loading;