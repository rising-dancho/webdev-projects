import AboutJSX from './components/AboutJSX';
import TemplateLiterals from './components/TemplateLiterals';
import JSXChallenge from './components/JSXChallenge';
import ReactStyling from './components/ReactStyling';
import ImportExportModules from './components/ImportExportModules';
import ImportExportChallenge from './components/ImportExportChallenge';
// import ReactProps from './components/ReactProps';
import ReactPropsChallenge from './components/ReactPropsChallenge';
import Destructuring from './components/Destructuring';

function App() {
  return (
    <>
      <TemplateLiterals />
      <ReactStyling />
      <AboutJSX />
      <ImportExportModules />
      <ImportExportChallenge />
      {/* <ReactProps /> */}
      <ReactPropsChallenge />
      <Destructuring />
      <JSXChallenge />
    </>
  );
}

export default App;
