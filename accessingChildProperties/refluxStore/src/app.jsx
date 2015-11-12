var React = require("react");
var Reflux = require("reflux");
var request = require("superagent");

var store = Reflux.createStore({
    data: {people: []},

    init() {
        var that = this;
        request.get('https://output.jsbin.com/dekafa.json')
                .set('crossOrigin', 'true')
                .end(function(err, res){
                    console.log(this);
                    that.data.people = JSON.parse(res.text);
                    that.trigger(that.data);
                });
    },

    getInitialState() {
        return this.data;
    }
});

var App = React.createClass({

    mixins: [Reflux.connect(store)],

    render() {
        return (<div>
            {this.state.people.map(person => {
                return (<div key={person.id}>
                    <h2>{person.name}</h2>
                    <img src={person.avatar}/>
                </div>)
            })}
        </div>);
    }
})

React.render(<App/>, document.getElementById('example'));