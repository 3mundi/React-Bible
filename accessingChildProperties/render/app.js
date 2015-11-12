/**
 * Created by wandarkaf on 22/05/15.
 */
var App = React.createClass({
    render:function(){
        return (
            <div>
                <b>BOLD</b>
                <h1>Hello World</h1>
            </div>
        );
    }
});

React.render(<App />, document.body);
