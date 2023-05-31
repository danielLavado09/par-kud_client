import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDxOh0FlVxEhiqIIq3V5nrGtfCa9SQVAyE");

Geocode.setRegion("co");

Geocode.setLanguage("en");

Geocode.setLocationType("ROOFTOP");

Geocode.enableDebug();

const getLatitude = (address) => {
  Geocode.fromAddress("Carrera 58 #127-20").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
};

const Maps = (props) => {
  getLatitude("");
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />
  );
};

export default withScriptjs(withGoogleMap(Maps));
