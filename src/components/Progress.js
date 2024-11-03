const Progress = ({
  index,
  points,
  maxPossiblePoints,
  numQuestions,
  answer,
}) => {
  // nice little trick
  // Number(true) return 1, false, return 0
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
