import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data.json'

function App() {

  const [info , setInfo] = useState(data)

  const one = info.level1
  const two = info.level2
  const three = info.level3

  return (
    <div className="App">
      <div className='level1-main'>
      {
        one.map(item => (
          <div className='container-one' key={item.id}>
            <div className='level'>{item.player}</div>
            <div><hr className='horizontal' /></div>
          </div>
          
        ))
      }
      </div>
      <div className='level2-main'>
      <div><hr className='vertical' /></div>
      {
        two.map(item => (
          <div className='container-one' key={item.id}>
            <div className='level'>{item.player}</div>
            <div><hr className='horizontal' /></div>
          </div>
        ))
      }
      <div><hr className='vertical' /></div>
      </div>
      <div className='level3-main'>
      {
        three.map(item => (
          <div className='level' key={item.id}>{item.player}</div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
