import './App.css'
import Menu from './components/Menu'
import Paper from './components/Paper';
import BottomBar from './components/BottomBar';
import PaperProvider from './context/PaperDataContext';

function App() {
    // FIXME: fix edit checkmark and pencil change
    // on all education blocks
    //TODO: create professional blocks
    //TODO: FOOTER

  return (
    <PaperProvider>
      <div className="min-h-screen flex justify-center w-full ">
        <div className="absolute bottom-4">Made with ❤️ by Meir July 2023</div>
        <div className="w-8/12 h-screen relative py-14 flex justify-between gap-10">
          <div className="flex-col flex gap-4 flex-1">
            <Menu />
            <BottomBar />
          </div>
          <Paper />
        </div>
      </div>
    </PaperProvider>
  );
}

export default App
