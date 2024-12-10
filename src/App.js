import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState("");

    // Set the base URL for the API
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5003';

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api`)
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default App;

