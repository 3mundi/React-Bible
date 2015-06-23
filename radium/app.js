var App = React.createClass({
  mixins:[Radium.StyleResolverMixin, Radium.BrowserStateMixin],
  render:function(){
    var styles = {
      padding: 10,
      width:100,
      borderRadius: 100,
      border:0,
      color: '#fff',
      cursor: 'pointer',
      fontSize: 16,

      states: [
        {hover: {background: 'black'}},
        {focus: {background: 'pink', outline: 'none', color: 'black'}}
      ],

      modifiers: [
        {kind: {
          primary: {background: 'green'},
          warning: {background: 'red'}
        }}
      ]

    }
    return <button {...this.getBrowserStateEvents()} style={this.buildStyles(styles)}>hello</button>
  }
});

React.render(<App kind="primary" />, document.body);
