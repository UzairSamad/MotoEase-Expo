import { useState, useEffect } from "react"
import * as Location from 'expo-location';

const useCurrentLocation = () => {
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [Latitude, setLatitude] = useState('');
    const [Longitude, setLongitude] = useState('');

    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
                'Location Service not enabled',
                'Please enable your location services to continue',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);

    // create the handler method

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;

            setLatitude(latitude);
            setLongitude(longitude);

        }
    };


    return [Latitude, Longitude]
}

export default useCurrentLocation
