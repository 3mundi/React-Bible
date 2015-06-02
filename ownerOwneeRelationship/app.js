/**
 * Created by wandarkaf on 22/05/15.
 */
var App = React.createClass({
    getInitialState:function(){
        return {
            txt: ''
        };
    },
    update: function(e){
        this.setState({txt: e.target.value});
    },
    render:function(){
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
            </div>
        );

    }
});

var Widget = React.createClass({
    render:function(){
        return (
            <div>
                <input type="text" onChange={this.props.update} />
                <br />
                <b>{this.props.txt}</b>
            </div>
        );

    }
});

React.render(<App txt="this is the txt prop"  />, document.body);