var React = require('react');
var Reflux = require('Reflux');
var $ = require('jquery');  

var actions = Reflux.createActions([
    "one",
    "two",
    "three"
]);

setTimeout(actions.one, 1000);
setTimeout(actions.two, 2000);
setTimeout(actions.three, 3000);

var store = Reflux.createStore({
    listenables: [actions],

    onOne(){
        this.trigger({message: "One triggered!"});
    },
    onTwo(){
        this.trigger({message: "Two triggered!"});
    },
    onThree(){
        this.trigger({message: "Three triggered!"});
    },

    getInitialState(){
        return {message: "Initial state"};
    },
})


var App = React.createClass({
    mixins: [Reflux.connect(store)],

    render(){
        return (
            <div>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
})

React.render(<App/>, document.getElementById('example'));


$(document).ready(function () {
  $("#button").click(event=> actions.two());
});