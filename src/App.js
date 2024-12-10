import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("https://new-backendd-6731a6c3a88d.herokuapp.com/api")
            .then((response) => {
                if (response.status === 200) {
                    setMessage(response.data.message);
                } else {
                    setMessage("Failed to fetch data from backend");
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

