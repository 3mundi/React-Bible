var Box = React.createClass({
  render: function () {
    return (
      <div className={"box"}></div>
    )
  }
});


var Container = React.createClass({
  componentDidMount: function () {
    var top = this.refs.top.getDOMNode();
    var right = this.refs.right.getDOMNode();
    var bottom = this.refs.bottom.getDOMNode();
    var left = this.refs.left.getDOMNode();

    var t = new TimelineMax({repeat:-1, yoyo:true});
    //var tl = new TimelineMax({repeat:-1});
    //tl.staggerTo(".box", 0.5,  {opacity:0, repeat:1, yoyo:true}, 1);

    t.to(top, .5, {y:"-=100"})
    .to(right, .5, {x:"+=100"})
    .to(bottom, .5, {y:"+=100"})
    .to(left, .5, {x:"-=100"});
  },

  render: function () {
    return (
      <div className={"container"}>
        <Box ref="top"></Box>
        <Box ref="right"></Box>
        <Box ref="bottom"></Box>
        <Box ref="left"></Box>
      </div>
    )
  }
});

React.render(<Container/>, document.getElementById("tweenBasic"));