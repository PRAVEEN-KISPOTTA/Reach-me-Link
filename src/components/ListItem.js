import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="ListItem" style={{ backgroundColor: item.bgColor }}>
        <a href={item.link}>
          <img src={item.icon} alt={item.name} />
          {item.name}
        </a>
      </div>
    );
  }
}

export default ListItem;
