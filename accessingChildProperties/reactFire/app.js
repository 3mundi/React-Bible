/** @jsx React.DOM */

var lessonTitle = 'Intro to ReactFire';

var MessageInput = React.createClass({
  addMessage: function(e) {
    var messageNode = this.refs.message.getDOMNode();
    if (e.which === 13) {
      this.props.onAddMessage({
        name: this.refs.name.getDOMNode().value,
        message: messageNode.value
      });
      messageNode.value = '';
    }
  },
  render: function() {
    return (
      <div className="message-input">
        <label>
          Name:<br />
          <input ref="name" placeholder="Be creative..." />
        </label>
        <br />
        <label>
          Message:<br />
          <textarea ref="message" onKeyUp={this.addMessage} placeholder="Type and hit enter..."></textarea>
      </label>
      </div>
    );
  }
});

var Messages = React.createClass({
  render: function() {
    var messageEls = this.props.messages.map(function(item, index) {
      return (
        <div key={index}><strong>{item.name}</strong>: {item.message}</div>
      );
    });
    return <div className="messages">{messageEls}</div>;
  },
  scrollToBottom: function() {
    var el = this.getDOMNode();
    el.scrollTop = el.scrollHeight;
  },
  componentDidMount: function() {
    this.scrollToBottom();
  },
  componentDidUpdate: function() {
    this.scrollToBottom();
  }
});

var ChatClient = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return { messages: [] };
  },
  addMessage: function(newMessage) {
    this.firebaseRefs.messages.push(newMessage);
  },
  componentWillMount: function() {
    this.bindAsArray(new Firebase('https://ultimate-donut.firebaseio.com/egghead/react/intro/messages'), 'messages');
  },
  render: function() {
    return (
      <div>
        <Messages messages={this.state.messages} />
        <MessageInput onAddMessage={this.addMessage} />
      </div>
    );
  }
});

var Demo = React.createClass({
  render: function() {
    return (
      <div>
        <h3>ReactFire IRC</h3>
        <ChatClient />
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>React version: {React.version}</h1>
        <h2>
          {lessonTitle || 'React Lesson'}
          <small> by <a href="http://twitter.com/kentcdodds">@kentcdodds</a></small>
        </h2>
        <hr />
        <h2>Demo</h2>
        <Demo />
      </div>
    );
  }
});

React.renderComponent(<App />, document.body);