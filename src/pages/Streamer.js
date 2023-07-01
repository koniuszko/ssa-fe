import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import StreamerDetails from "../components/StreamerDetails";

import "../styles/streamer.css";
import {url} from "../config";

export default function Streamer() {
  const [streamer, setStreamer] = useState({});

  const params = useParams();


  useEffect(() => {
    axios
        .get(`${url}/streamers/${params.id}`)
        .then((res) => setStreamer(res.data))
        .catch((err) => console.log(err));
  }, []);

  return (
      <>
        <StreamerDetails streamer={streamer}/>
      </>
  );
}
