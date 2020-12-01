import React from "react";
import { geolocated } from "react-geolocated";
import {withGoogleMap, Map, Marker, GoogleApiWrapper } from 'google-maps-react';
 
class Demo extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div>
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{this.props.coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{this.props.coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{this.props.coords.speed}</td>
                    </tr>
                    <tr>
                        <td>맵</td>
                        <td>{this.props.coords.speed}</td>
                    </tr>
                </tbody>
            </table>
            <Map
                        google={this.props.google}
                        zoom={18}
                        initialCenter={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude}}
                      >
                        <Marker position={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude}}/>
                      </Map>
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
Demo = geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);

export default GoogleApiWrapper({
    apiKey: "AIzaSyAqxsM9QVFmJ9pEPX1Txxd4Z2lTFmXs8i0"
  })(Demo);