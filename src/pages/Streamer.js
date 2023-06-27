import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function Streamer() {
    const [streamer, setStreamer] = useState({});

    const params = useParams();


    useEffect(() => {
        axios.get(`http://localhost:3030/streamers/${params.id}`)
            .then(res => setStreamer(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <a href="/">Go back</a>
            <img src="/assets/images/placeholder.png" alt="placeholder"/>
            <h2>{streamer.name}</h2>
            <h3>{streamer.platform}</h3>
            <p>{streamer.description}</p>
        </div>
    );
}
