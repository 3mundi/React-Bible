import React, { Component } from 'react';
import {StaggeredMotion, spring, presets} from 'react-motion';
import './css/main.scss';

class staggeredExample extends Component {
  constructor(){
    super();
    this.state = {
      items: Array.from(Array(18).keys())
    };
  }

  getDefaults() {
    let arr = [];
    this.state.items.forEach(key =>{
      arr.push({
        rotate: key % 2 === 0 ? 360 : -360,
        scale: key % 2 === 0 ? 2 : 0
      })
    })
    return arr;
  }

  getEnds() {
    return animatedStyles => {
      let arr = [];
      this.state.items.forEach(key =>{
        arr.push({
            rotate: spring(0),
            scale: spring(1)
        })
      })

      return arr;
    }
  }

  render(){
    return (
      <StaggeredMotion
        defaultStyles={this.getDefaults()}
        styles={this.getEnds()}>
        {current =>
            <div>
              {current.map((style, key) => {
                let {rotate,scale} = style;
                let embedStyle = {
                  transform: `rotate(${rotate}deg) scale(${scale})`,
                  height: '50px',
                  width: '50px',
                  float: 'left',
                  backgroundColor: '#b00b00',
                  margin: '2px',
                  color: '#fff',
                };
                return (
                  <div
                    key={key}
                    className="block"
                    style={embedStyle}>
                    {key}
                  </div>
                );
              })}
            </div>
        }
      </StaggeredMotion>
    )
  }
}

export default staggeredExample;
