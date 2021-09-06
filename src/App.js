import './App.css';

import Form from './components/Form';
import Github from './components/Github';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase"> Github profile</h1>
      
      <Form />
      <Github />
     

    </div>
  );
}

export default App;
