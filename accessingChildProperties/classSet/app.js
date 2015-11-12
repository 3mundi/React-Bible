var d = React.DOM;
var theTasks = [{
    "importance": 0,
    "status": 1,
    "description": "Learn React"
}, {
    "importance": 2,
    "status": 0,
    "description": "Make Video"
}, {
    "importance": 2,
    "status": 1,
    "description": "Use classSet"
}];


var TaskList = React.createClass({
    render: function() {
        var items = this.props.tasks.map(function(task, i) {
            var classes = React.addons.classSet({
              'task': true,
              'complete': task.status === 1,
              'high': task.importance === 2,
              'medium': task.importance === 1,
              'low': task.importance === 0
            })
            return <li key={i} className={classes}> {task.description}</li>
        })
        return <ul>{items}</ul>
    }
});

React.render(<TaskList tasks={theTasks}/>,document.getElementById('tasks'))
