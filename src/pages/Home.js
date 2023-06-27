import SubmissionForm from "../components/SubmissionForm";
import StreamerCard from "../components/StreamerCard";
import {useEffect, useState} from "react";
import axios from "axios";

import '../styles/home.css';


export default function Home() {
    const [streamers, setStreamers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/streamers')
            .then(res => setStreamers(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1 className="title">Streamer Spotlight</h1>
            <SubmissionForm/>
            <section className="streamers-list">
                {streamers.map((streamer, index) => (
                    <StreamerCard key={index} streamer={streamer}/>
                )).sort((a, b) => b.props.streamer.votes - a.props.streamer.votes)}
            </section>
        </div>
    );
}
