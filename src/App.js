import { useState } from 'react';
import './App.css';
import Main from './components/component/Main';
import Navigator from './components/component/Navigator';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <Navigator active={active}/>
      <Main active={active} setActive={setActive} />
      
    </div>
  );
}

export default App;
