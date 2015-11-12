/**
 * Created by wandarkaf on 25/05/15.
 */
var Button = React.createClass({
    getInitialState:function(){
        return {val: 0}
    },
    update: function(){
        this.setState({val: this.state.val+1});
    },
    componentWillMount:function(){
        //console.log('mounting');
        this.setState({m:2})
    },
    render:function(){
        console.log('rendering');
        return <button onClick={this.update}>{this.state.val*this.state.m}</button>
    },
    componentDidMount:function(){
        //console.log('mounted');
        this.inc = setInterval(this.update,500)
    },
    componentWillUnmount:function(){
        //console.log('bye!');
        clearInterval(this.inc);
    }
});

var App = React.createClass({
    mount: function(){
        React.render(<Button />, document.getElementById('app'));
    },
    unmount: function(){
        React.unmountComponentAtNode(document.getElementById('app'));
    },
    render:function(){
        return (
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>Unmount</button>
                <div id="app"></div>
            </div>
        );
    }
});


React.render(<App />, document.body);

