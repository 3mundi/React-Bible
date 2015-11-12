var d = React.DOM;
var UpDown = React.createClass({
  displayName: 'UpDown',
  getInitialState:function(){
    return {val:0}
  },
  inc:function(){
    this.setState({val: this.state.val+1});
  },
  dec:function(){
    this.setState({val: this.state.val-1});
  },
  render:function(){
    return d.div(null,
      d.button({ref:'dec',onClick: this.dec}, '-'),
      d.span({ref:'val'}, this.state.val ),
      d.button({ref:'inc',onClick: this.inc}, '+')
    )
  }
});