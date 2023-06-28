export default function StreamerDetails({ streamer }) {
  return (
    <>
      <div className="streamer-container">
        <a href="/">
          <button className="back-button">Go back</button>
        </a>
        <img
          src="/assets/images/placeholder.png"
          alt="placeholder"
        />
        <div className="streamer-details">
          <h2>{streamer.name}</h2>
          <h3>{streamer.platform}</h3>
        </div>
      </div>
      <div className="streamer-container">
        <p className="streamer-description">{streamer.description}</p>
      </div>
    </>
  );
}
