import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    // this.props.items.forEach((el) => {
    //   console.log(el.name);
    // });
    return (
      <div style={{ overflow: "auto", height: "80%" }}>
        {this.props.items.map((el) => (
          <ListItem
            key={el.name}
            name={el.name}
            isActive={el.isActive}
            toggleActive={this.props.toggleActive}
          />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleActive: PropTypes.func.isRequired,
};

export default List;
