import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState("");

    // Set the base URL for the API
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5008';

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api`)
            .then((response) => {
                if (response.status === 200) {
                    // setMessage(response.data.message);
                    setMessage("data successfully fetched");
                }
            })
            .catch((error) => {
                console.error(error);
                setMessage("Failed to fetch data from backend");
            });
    }, []);


    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default App;

