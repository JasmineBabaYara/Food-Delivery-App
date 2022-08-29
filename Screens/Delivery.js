import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Entypo } from "@expo/vector-icons";
const GOOGLE_API_KEY = "AIzaSyA5NOK1t9h7oajQTzDcqWpzCYcU0Mk0fMI";
import car from "../assets/icons/car.png";

export default function Delivery({ route, navigation }) {
  const mapView = React.useRef();

  const [restaurant, setRestaurant] = React.useState(null);
  const [streetName, setStreetName] = React.useState("");
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  React.useEffect(() => {
    let { restaurant, currentLocation } = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  function renderMap() {
    const destinationMarker = () => (
      <Marker coordinate={toLocation}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "darkorange",
            }}
          >
            <Entypo name="location-pin" size={25} color="white" />
          </View>
        </View>
      </Marker>
    );

    const carIcon = () => (
      <Marker
        coordinate={fromLocation}
        anchor={{ x: 0.5, y: 0.5 }}
        flat={true}
        // rotation={angle}
      >
        <Image
          source={car}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );

    return (
      <View style={{ flex: 1 }}>
        <MapView
          // ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{ flex: 1 }}
        >
          <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={"darkorange"}
            optimizeWaypoints={true}
            // onReady={result => {
            //     setDuration(result.duration)

            //     if (!isReady) {
            //         // Fit route into maps
            //         mapView.current.fitToCoordinates(result.coordinates, {
            //             edgePadding: {
            //                 right: (width / 20),
            //                 bottom: (height / 4),
            //                 left: (width / 20),
            //                 top: (height / 8)
            //             }
            //         })

            //         // Reposition the car
            //         let nextLoc = {
            //             latitude: result.coordinates[0]["latitude"],
            //             longitude: result.coordinates[0]["longitude"]
            //         }

            //         if (result.coordinates.length >= 2) {
            //             let angle = calculateAngle(result.coordinates)
            //             setAngle(angle)
            //         }

            //         setFromLocation(nextLoc)
            //         setIsReady(true)
            //     }
            // }}
          />
          {destinationMarker()}
          {carIcon()}
        </MapView>
      </View>
    );
  }

  return <View style={{ flex: 1 }}>{renderMap()}</View>;
}
