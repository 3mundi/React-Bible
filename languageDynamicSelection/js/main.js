/**
 * Created by alonsolamas on 5/25/15.
 */


/**
 * Mixin and initialitation setup.
 */
var IntlMixin       = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;
var FormattedDate = ReactIntl.FormattedDate;


var ReactMixin = {
    ajaxCall: function(){
        reqwest({
            url: 'http://filltext.com/?rows=10&val={randomNumber}&date={date}',
            type: 'jsonp',
            crossOrigin: true,
            success:function(resp){
                this.setState({data:resp})
            }.bind(this)
        })
    }
}

/**
 * Internationalitation selection component.
 */
var LocaleSelect = React.createClass({
    getInitialState: function(){
        return { data: [
            {name:"English", value:"en-US"},
            {name:"Japanese", value:"ja-JP"},
            {name:"Spanish", value:"es-AR"},
        ] }
    },
    render:function(){
        var rows = this.state.data.map(function(option, i){
            return <OptionRow data={option} key={i} />
        })
        return <select ref="language" className="form-control" onChange={this.props.update}>{rows}</select>
    }
});

var OptionRow = React.createClass({
    render:function(){
        return <option value={this.props.data.value}>{this.props.data.name}</option>
    }
});

/**
 * Flight timeline component.
 */
var Flights = React.createClass({
    mixins:[ReactMixin],
    propTypes:{
        locales: React.PropTypes.array
    },
    getDefaultProps:function(){
        return{
            locales: ["en-US"]
        }
    },
    getInitialState: function(){
        return {data: [] }
    },
    update: function () {
        this.props.locales.pop();
        this.props.locales.push(React.findDOMNode(this.refs.selectLang.refs.language).value);
        this.forceUpdate();
    },
    componentWillMount:function(){
        setInterval(this.ajaxCall, 5000);
    },
    render:function(){
        var props  = this.props;
        var rows = this.state.data.map(function(flights, i){
            return <FlightRow locales={props.locales} data={flights} key={i} />
        })

        return <div className="col-md-9">
                    <LocaleSelect ref="selectLang" update={this.update} />
                    <hr/>
                    {rows}
               </div>
    },
    componentDidMount:function(){
        this.setState(this.ajaxCall);
    }
});

var FlightRow = React.createClass({
    mixins: [IntlMixin],
    propTypes:{
        locales: React.PropTypes.array
    },
    getDefaultProps:function(){
        return{
            locales: ["ja-JP"]
        }
    },

    render:function(){
        return(

            <div className="jumbotron">
                <div className="container">
                    <p>{this.props.data.val} </p>
                    <p>
                        <FormattedDate
                            locales={this.props.locales}
                            value={this.props.data.date}
                            day="numeric"
                            month="long"
                            year="numeric" />
                    </p>
                </div>
            </div>
        )
    }
});

/**
 * Render initialitation.
 */
React.render(<Flights />, document.body);