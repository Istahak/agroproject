import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Dhaka')
    const [thisLocation, setLocation] = useState('')
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/json?token=8d987e9b4e69ab');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPlace(data.city);
        } catch (error) {
            console.error('Error fetching geolocation data:', error);
        }
        };

        fetchData();
    }, []);

    // fetch api
    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': 'b6f3aa7ba7msh96a293d7b35c514p1ebb95jsn67afa7446b69',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try {
            const response = await axios.request(options);
            // console.log(response.data)
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
        } catch (e) {
            console.error(e);
            // if the api throws error.
            alert('This place does not exist')
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [place])

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)