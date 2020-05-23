import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles/styles.css';

const calc = (x, y) => [(y - window.innerHeight / 2) / 8, -(x - window.innerWidth / 2) / 8, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const shadow = (x, y, s) => `0 ${1 + (100 * (s - 1))}px ${3 + (200 * (s - 1))}px ${1 + (30 * (1 - s))}px hsl(0, 0%, 65%)`;
const color = (x, y, s) => `hsl(220, 50%, ${50 + (x / 1.5)}%)`;

function App() {
  
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1] }));

  return (
    <div className={'wrapper'}>
      <animated.div
      className={'card'}
      style={{ 
        boxShadow: props.xys.interpolate(shadow),
        transform: props.xys.interpolate(trans),
        backgroundColor: props.xys.interpolate(color)
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({xys: [0, 0, 1]})} />
    </div>
  );
}

export default App;
