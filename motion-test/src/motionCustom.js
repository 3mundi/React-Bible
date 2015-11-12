import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';

class MotionCustom extends Component {
  render(){
    return (
      <Motion
        defaultStyle={{
          y: 500,
          z: 4
        }}
        style={{
          y: spring(100, presets.wobbly),
          z: spring(1, presets.wobbly),
        }}>
        {obj => {
          let style= {
            transform: `translate(100px, ${obj.y}px) scale(${obj.z})`,
            border: '1px solid red',
            width: '100px',
            height: '100px',
            backgroundColor: '#b00b00',
          }
          return <div style={style} className="block"></div>
        }}
      </Motion>
    )
  }
}

export default MotionCustom;
