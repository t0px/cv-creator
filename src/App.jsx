import './App.css'
import Paper from './components/Paper';
import PaperProvider, { PaperDataContext } from './context/PaperDataContext';
import LeftSideContainer from './components/left-side/LeftSideContainer';

function App() {

    // FIXME: fix edit checkmark and pencil change
    // on all education blocks
    //TODO: create professional blocks
    //TODO: FOOTER
    // FIXME: ADD CARETS TO EACH SECTION HEADER (DONE)
    //FIXME: KEYBOARD HANDLER FOR SAVE CHANGES NOT WORKING

  return (
    <PaperProvider>
      <div className="min-h-screen flex justify-center w-full ">
        <div className="absolute bottom-4">Made by Meir July 2023</div>
        <div className="w-9/12 h-screen relative py-14 flex justify-between gap-10">
          <LeftSideContainer />
          <Paper />
        </div>
      </div>
    </PaperProvider>
  );
}

export default App
