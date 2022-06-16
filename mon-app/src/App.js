import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

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
