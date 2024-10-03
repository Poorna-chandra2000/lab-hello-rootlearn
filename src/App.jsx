import React from 'react';
import './App.css';
import Cards from './component/Cards';
import Header from './component/Header';

function App() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <Header/>
      <Cards/>
    </div>
  )
}

export default App
