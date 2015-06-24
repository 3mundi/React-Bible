/**
 * Created by wandarkaf on 20/06/15.
 */
//see console tab for output!

var App = React.createClass({
    statics: {
        add: function(x, y){
            console.log('the answer is', x+y);
        }
    },
    render:function(){
        return null
    }
});

App.add(5,8)
var a = React.render(<App x={5} />,document.body);
App.add(a.props.x, 10)