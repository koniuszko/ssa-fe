import SubmissionForm from "../components/SubmissionForm";
import StreamerCard from "../components/StreamerCard";


const streamers = [
    {
        name: "LIRIK",
        votes: 0
    },
    {
        name: "summit1g",
        votes: 0
    },
    {
        name: "sodapoppin",
        votes: 3
    }
];
export default function Home() {
    return (
        <div>
            <SubmissionForm/>
            <section className="streamers-list">
                {streamers.map((streamer, index) => (
                    <StreamerCard key={index} streamer={streamer}/>
                )).sort((a, b) => b.props.streamer.votes - a.props.streamer.votes)}
            </section>
        </div>
    );
}
