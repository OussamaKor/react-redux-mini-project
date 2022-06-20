import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dictaphone from './components/Dictaphone';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar />
        <Form />
      </div>


    </div>
  );
}

export default App;
