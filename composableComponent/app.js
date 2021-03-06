/**
 * Created by wandarkaf on 25/05/15.
 */
var App = React.createClass({
    getInitialState:function(){
        return {
            red: 0
        }
    },
    update: function(){
        this.setState({
            red: React.findDOMNode(this.refs.red.refs.inp).value
        });
    },
    render:function(){
        return (
            <div>
                <NumInput
                    ref="red"
                    min={0}
                    max={255}
                    step={0.01}
                    val={+this.state.red}
                    type="range"
                    label="Red"
                    update={this.update} />
            </div>
        );

    }
});

var NumInput = React.createClass({
    propTypes: {
        min: React.PropTypes.number,
        max: React.PropTypes.number,
        step: React.PropTypes.number,
        val: React.PropTypes.number,
        label: React.PropTypes.string,
        update: React.PropTypes.func.isRequired,
        type: React.PropTypes.oneOf(['number', 'range'])
    },
    getDefaultProps:function(){
        return {
            min: 0,
            max: 0,
            step: 1,
            val: 0,
            label: '',
            type: 'range'
        }
    },
    render:function(){
        var label = this.props.label !== '' ?
            <label>{this.props.label} {this.props.val}</label> : ''
        return (
            <div>
                <input
                    ref="inp"
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    defaultValue={this.props.val}
                    onChange={this.props.update} />
                {label}
            </div>
        );

    }
});

React.render(<App />, document.body);

