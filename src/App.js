import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("/api")
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

