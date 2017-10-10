import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './side-menu';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from react</h1>
        <SideBar />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("content"));
