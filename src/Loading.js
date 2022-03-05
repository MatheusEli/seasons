import React from "react";
import './Loading.css'

const Loading = (props) => {
    return (
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    );
};

Loading.defaultProps = {
    message: 'Loading...'
}
export default Loading;