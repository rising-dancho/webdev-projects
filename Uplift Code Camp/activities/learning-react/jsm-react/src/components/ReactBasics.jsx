function ReactBasics() {
  const name = 'adfinem';
  const isNameShowing = true;

  return (
    <div>
      <h1>Hello, {isNameShowing ? name : 'world'}! 🚀</h1>
    </div>
  );
}

export default ReactBasics;
