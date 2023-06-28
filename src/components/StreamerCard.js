import axios from "axios";

export default function StreamerCard({ streamer }) {
  const vote = (voteType) => {
    axios
      .put(`http://localhost:3030/streamers/${streamer._id}/vote`, { voteType })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    window.location.reload();
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
