import React from 'react';

export default class MenuList extends React.Component {
  render() {
    var elements = this.props.children.map(function (item, index) {
      return <a className="listBtn" key={index} href={item.url}>{item.name}</a>;
    });
    return (
      <div>{elements}</div>
    )
  }
}
