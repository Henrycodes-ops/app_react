const ErrorExample = () => {
  let count = 0

  const handleCLick = () => {
    count = count + 1
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleCLick} className="btn">Increase</button>
    </div>
  );
};

export default ErrorExample;
