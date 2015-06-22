var Group = React.createClass({
  getInitialState:function(){
    return {
      selectedValue: 'None'
    }
  },
  selectItem: function(v){
    this.setState({selectedValue:v});
  },
  render:function(){
    var items = this.props.children.map(function(child){
      return React.addons.cloneWithProps(child,{
        onClick: this.selectItem.bind(null, child.props.value)
      });
    }.bind(this));
    return (
        <div>
          You Selected {this.state.selectedValue}
          <hr />
          {items}
        </div>
      )
  }
});

var App = React.createClass({
  render:function(){
    return (
        <Group>
          <button value="A">A</button>
          <button value="B">B</button>
          <button value="C">C</button>
        </Group>
      )
  }
});

React.render(<App />,document.body);