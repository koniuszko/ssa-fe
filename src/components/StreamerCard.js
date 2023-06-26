export default function StreamerCard({streamer}) {
    return (
        <div>
            <h2>{streamer.name}</h2>
            <div>
                <button>+</button>
                <p>{streamer.votes}</p>
                <button>-</button>
            </div>
        </div>
    );
}
