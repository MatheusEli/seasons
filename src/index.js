import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude })
            , (err) => this.setState({ errorMessage: err.message })
        );
        // we did not 
        //this.state.lat = position.coords.latitude;
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (<div>Error: {this.state.errorMessage}</div>);
        } else if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Loading message="Please, accept the location request..." />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));