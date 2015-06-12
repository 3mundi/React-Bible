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

//React.render(<Container/>, document.getElementById("tweenBasic"));

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ScheduleLong = React.createClass({
  render: function(){
    return(
      <div className="long">long</div>
    )
  }
});

var Card = React.createClass({
  getInitialState: function() {
    return { showLong: false };
  },
  handleClick: function(){
    this.state.showResults ? this.setState({ showResults: false }) : this.setState({ showResults: true});
  },

  componentWillUnmount:function(){
    console.log('bye!');
  },
  render: function(){
    return(
      <div className="schedule" onClick={this.handleClick}>
        <div className="short">short</div>
        { this.state.showResults ? <ScheduleLong/> : null }
      </div>  
    )
  }
});


var Schedule = React.createClass({
  componentDidMount:function(){
    console.log('mounted');
    var element = this.refs.cardAnimation.getDOMNode();
    var animation = new TimelineMax({repeat:-1});

    animation.staggerTo(element, 2,  {opacity:0, repeat:1, yoyo:true}, 1);
  },
  render: function(){
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
           <Card ref="cardAnimation"></Card>
           <Card ref="cardAnimation2"></Card>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

React.render(<Schedule/>, document.getElementById("tweenCard"));