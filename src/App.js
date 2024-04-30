import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
    <>
    <Navbar title="Text Utils" aboutText="About TextUtils" />
    {/* <Navbar /> */}
    <div className='container'>
    <TextForm heading="Enter the text to anlyze"/>
    </div>
</>
  );
}

export default App;
