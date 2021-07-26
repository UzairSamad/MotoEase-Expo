import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'

const useGetToken = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('uid');
                if (value !== null) {
                    // value previously stored
                    setToken(value);
                }
            } catch (e) {
                // error reading value
                console.log(e);
            }
        }
        getData();
    }, [token])


    return token;
}

export default useGetToken
