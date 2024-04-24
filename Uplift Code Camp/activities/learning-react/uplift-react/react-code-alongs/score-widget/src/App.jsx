import ChildA from './components/ChildA';
import ScoreWidget from './components/ScoreWidget';

function App() {
  const data = 'I came from App Component';
  return (
    <>
      <ScoreWidget points={12} passing={10}>
        <h1>Children Props</h1>
        <p>12</p>
      </ScoreWidget>
      <ChildA data={data} />
    </>
  );
}

export default App;
