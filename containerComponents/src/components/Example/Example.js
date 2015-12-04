import React from 'react';
import styles from './styles';

class Example extends React.Component {
  render() {
    return (
      <p style={styles.announcement}>{this.props.content}</p>
    );
  }
}

Example.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Example;
