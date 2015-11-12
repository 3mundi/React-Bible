var CardDescription = React.createClass({
  render: function(){
    return(
      <div className="long">long</div>
    )
  }
});

var CardHighlight = React.createClass({
  render: function(){
    return(
      <div className="short">
        <a href="link.html" className="disable-link">Link</a>
        <a href="test.html" className="disable-link"> Sexy Link</a>
      </div>
    )
  }
});

var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  handleClick: function(){
    $(this.getDOMNode()).parent().find('li').removeClass('on').addClass('off');
    $(this.getDOMNode()).parent().find('a').addClass('disable-link');
    $(this.getDOMNode()).removeClass('off').addClass('on');
    $(this.getDOMNode()).find('a').removeClass('disable-link');
    //this.state.showResults ? this.setState({ showResults: false, cardSwitch: "card fade-in off" }) : this.setState({ showResults: true, cardSwitch: "card fade-in on"});
  },
  render: function(){
    //{ this.state.showResults ? <CardDescription/> : null }
    return(
      <li className="card fade-in off" onClick={this.handleClick}>
        <CardHighlight/>
        <CardDescription/>
      </li>  
    )
  }
});

var Schedule = React.createClass({
  render: function(){
    return (
      <ul>
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
      </ul>
    )
  }
});

React.render(<Schedule/>, document.getElementById("cardList"));

