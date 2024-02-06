import React from "react";

function Won({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses.length} guesses</strong>.
      </p>
    </div>
  );
}

function Lost({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function GameStatus({ status, answer, guesses }) {
  return (
    <>
      {status === "won" && <Won guesses={guesses} />}
      {status === "lost" && <Lost answer={answer} />}
    </>
  );
}

export default GameStatus;
