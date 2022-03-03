import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState
                this.setState({
                    lat: position.coords.latitude
                });
                console.log(position.coords.latitude)
            }, (err) => {
                this.setState({ errorMessage: err.message })
            });

        // we did not 
        //this.state.lat = position.coords.latitude;
    }

    render() {
        if(this.state.errorMessage && !this.state.lat){
            return (<div>Error: {this.state.errorMessage}</div>);
        }else if(this.state.lat && !this.state.errorMessage){
            return (<div>Latitude: {this.state.lat}</div>);
        }else{
            return (<div>Loading...</div>);
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));