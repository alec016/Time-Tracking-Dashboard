import { useState } from 'react';
import './App.scss';
import './components/css/variables.scss'
import Filtering from './components/Filtering'
import Card from './components/Card'

function App() {

  const [filter, setFilter] = useState("daily");

  return (
    <div className='grid col-4 row-2 dashboard'>
      <Card filter={filter} child={<Filtering state={{filter, setFilter}}/>}/>
      <Card filter={filter} type="Work"/>
      <Card filter={filter} type="Play"/>
      <Card filter={filter} type="Study"/>
      <Card filter={filter} type="Exercise"/>
      <Card filter={filter} type="Social"/>
      <Card filter={filter} type="Self Care"/>
    </div>
  );
}

export default App;
