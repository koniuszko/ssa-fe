import axios from "axios";

export default function StreamerCard({streamer}) {

    const vote = (voteType) => {
        axios.put(`http://localhost:3030/streamers/${streamer._id}/vote`, {voteType})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        window.location.reload();
    }

    return (
        <div>
            <h2>{streamer.name}</h2>
            <div>
                <button onClick={() => vote('upvote')}>+</button>
                <p>{streamer.votes}</p>
                <button onClick={() => vote('downvote')}>-</button>
            </div>
            <a href={`/streamers/${streamer._id}`}>Details... ></a>
        </div>
    );
}
