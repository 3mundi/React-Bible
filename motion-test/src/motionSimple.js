import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';

class MotionSimple extends Component {
  render(){
    return (
      <Motion defaultStyle={{x: 0}} style={{x: spring(360, [120, 17])}}>
      {val => {
        let style = {
          width: val.x,
          height: val.x,
          position: 'absolute',
          top: val.x*0.25,
          left: val.x*0.25,
          border: '1px solid red',
          transform: `rotate(${val.x}deg)`
        }
        return <div style={style}>{val.x}</div>
      }}
      </Motion>
    )
  }
}

export default MotionSimple;
