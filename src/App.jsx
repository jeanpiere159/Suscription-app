import './App.css'
import Header from './components/Header'
import FormApp from './components/FormApp'
import MainControl from './components/MainControl'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [isValid, setIsValid] = useState(false)

  const component = isValid
                    ? <MainControl count={count}/>
                    : <FormApp setCount={setCount} setIsValid={setIsValid}/>;
  return (
    <>
      <div className="App">
        <Header />
        {component}
      </div>
    </>
  );
}

export default App
