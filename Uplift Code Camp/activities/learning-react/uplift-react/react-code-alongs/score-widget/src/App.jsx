import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import ChildC from './components/ChildC';
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
      <ChildB data={data} />
      <ChildC data={data} />
    </>
  );
}

export default App;
