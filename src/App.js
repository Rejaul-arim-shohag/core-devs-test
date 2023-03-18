import Slider from './components/Slider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ComingSoon} from './components/ComingSoon';

function App() {
  return (
    <>
     <ToastContainer />
      <Slider />
      <ComingSoon />
    </>
  );
}

export default App;
