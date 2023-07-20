import './App.css'
import Paper from './components/Paper';
import PaperProvider, { PaperDataContext } from './context/PaperDataContext';
import LeftSideContainer from './components/left-side/LeftSideContainer';

function App() {

    //FIXME: KEYBOARD HANDLER FOR SAVE CHANGES NOT WORKING

  return (
    <PaperProvider>
      <div className="min-h-screen flex justify-center w-full items-center">
        <div className="absolute bottom-4">Made by /t0px July 2023</div>
        <div className="w-9/12 max-lg:w-11/12 h-screen relative py-14 flex flex-row max-lg:flex-col justify-between gap-10">
          <LeftSideContainer />
          <Paper />
        </div>
      </div>
    </PaperProvider>
  );
}

export default App
