import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

function Joke(props) {
  const { id, vote, votes, text } = props;

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={() => vote(id, +1)}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={() => vote(id, -1)}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}

export default Joke;
