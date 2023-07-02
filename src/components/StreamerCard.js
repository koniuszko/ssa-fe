import axios from "axios";
import {url} from "../config";

export default function StreamerCard({streamer}) {
    const vote = (voteType) => {
        axios
            .put(`${url}/streamers/${streamer._id}/vote`, {voteType})
            .then((res) => {
                console.log(res.data);
                window.location.reload();
            })
            .catch((err) => console.log(err));

    };

    return (
        <div className="streamer-card">
            <div className="streamer-votes">
                <button
                    className="vote-button"
                    onClick={() => vote("upvote")}
                >
                    +
                </button>
                <p className="votes-number">{streamer.votes}</p>
                <button
                    className="vote-button"
                    onClick={() => vote("downvote")}
                >
                    -
                </button>
            </div>
            <h2>{streamer.name}</h2>
            <a href={`/streamers/${streamer._id}`}>
                <button className="details-button">Details</button>
            </a>
        </div>
    );
}
