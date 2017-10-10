import React from 'react';
import MenuList from './menu-list';


export default class SideBar extends React.Component {
  toggle() {
    console.log("toggling");
  }
  render() {
    const items = [
      {name: "Home", url: "/"},
      {name: "Test", url: "/test/"},
    ];
    return (
      <div id="nav" className="sideNav">
        <a href="" className="closeBtn" onClick={this.toggle}>&times;</a>
        <h1 className="title">Navigator</h1>
        <MenuList>{items}</MenuList>
      </div>
    );
  }
}
