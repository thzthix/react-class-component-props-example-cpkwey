import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Hello extends React.Component {
  render() {
    return <p>Hello, {this.props.animal}!</p>;
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <Hello animal="fubao" />
        <Hello animal="fubao" />
      </div>
    );
  }
}
const el = <App />;
ReactDOM.render(el, document.getElementById('root'));
