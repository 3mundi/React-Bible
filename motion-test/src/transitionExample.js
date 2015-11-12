import React, { Component } from 'react';
import {TransitionMotion, spring, presets} from 'react-motion';

class TransitionExample extends Component {
  constructor(){
    super();
    this.state = {
      items: [0,1,2,3],
      currentCount: 3
    }
  }

  handleAdd = (key) => {
    let items = this.state.items;
    let currentCount = this.state.currentCount+1;
    items.push(currentCount);
    this.setState({items, currentCount});
  }

  handleRemove = (key) => {
    let items = this.state.items;
    let keyIndex = items.indexOf(+key);
    if(keyIndex !== -1){
      items.splice(keyIndex, 1);
      this.setState({items});
    }
  }

  getDefaults() {
    let defaults = {};
    this.state.items.forEach(key => {
      defaults[key] = {
        width: 0,
        opacity: 0,
        scale: 1,
      }
    })
    return defaults;
  }

  getStyles() {
    let configs = {};
    this.state.items.forEach(key => {
      configs[key] = {
        width: spring(100),
        opacity: spring(1),
        scale: spring(1),
      }
    })
    return configs;
  }

  willLeave() {
    return {
      width: spring(0),
      opacity: spring(0),
      scale: spring(0)
    }
  }

  willEnter(key) {
    return {
      width: spring(0),
      opacity: spring(0),
      scale: spring(1),
    }
  }

  render(){
    return (
      <div>
        <button onClick={this.handleAdd}>Add Box</button>
        <hr />
        <TransitionMotion
          defaultStyles={this.getDefaults()}
          styles={this.getStyles()}
          willEnter={this.willEnter}
          willLeave={this.willLeave}>
          {current =>
            <div>
            {Object.keys(current).map(key => {
              const { width, opacity, scale } = current[key];
              let style = {
                width,
                opacity,
                transform: `scale(${scale})`
              };
              return (
                <div
                  className="block"
                  onClick={this.handleRemove.bind(null, key)}
                  key={key}
                  style={style}>
                  {key}
                </div>
              );
            })}
            </div>
        }
        </TransitionMotion>
      </div>
    )
  }
}

export default TransitionExample;
