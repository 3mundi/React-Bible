var App = React.createClass({
    render:function(){
        return <h1>Hello World</h1>
    }
});

React.render(<App />, document.body);

// var App = React.createClass({
//   render:function(){
//     return React.DOM.h1(null, "Hi there")
//   }
// });

// React.render(App(), document.body);
//
// var App = React.createClass({
//   render:function(){
//     return React.createElement("h1", null, "Yo")
//   }
// });

// React.render(React.createElement(App), document.body);