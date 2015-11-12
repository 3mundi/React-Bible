/**
 * Created by wandarkaf on 20/06/15.
 */
var App = React.createClass({
    propTypes: {
        title: function(props, propName, componentName){
            if(!(propName in props))  {
                throw new Error("hey where's the prop?")
            }

            if(props[propName].length < 10) {
                throw new Error("nice try, not long enough!")
            }
        }
    },
    render:function(){
        return <h1>{this.props.title}</h1>
    }
});

// React.render(<App />, document.body); //missing prop
// React.render(<App title="123" />, document.body); //prop not valid
React.render(<App title="1234567890" />, document.body); //all good