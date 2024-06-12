import logo from './logo.svg';
import './App.css';import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import React, { useState } from 'react';

function App() {
 const[list , setlist] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,])
  return (
    <div>

    <Stage width={window.innerWidth} height={window.innerHeight * .9}>
    <Layer>
      {list .map(() => (
        <BoxRender />
        ))}
    </Layer>
  </Stage>
  <button onClick={() => setlist(prev => [...prev,1])} style={{width:"40vw",}}>ADD MORE</button>
      </div>
  );
}

export default App;

const BoxRender = () => {
const [color, setcolor] = useState(Konva.Util.getRandomColor())
const [value, setvalue] = useState(Math.round(Math.random() * 1300))
const [valuex, setvaluex] = useState(Math.round(Math.random() * 500))


return(
  <Rect 
  x={value}
  y={valuex}
  width={200}
  height={200}
  shadowBlur={0}
  fill={color}
  onclick={()=> setcolor("white")}
  />
)
}

