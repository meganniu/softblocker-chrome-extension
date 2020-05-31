import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <div style={{ overflow: "auto", height: "100%", width: "100%" }}>
        {this.props.items.map((el) => (
          <div key={el.name} style={{ width: "100%" }}>
            <ListItem
              name={el.name}
              isActive={el.isActive === undefined ? null : el.isActive}
              isTrained={el.isTrained === undefined ? null : el.isTrained}
              toggleActive={
                this.props.toggleActive === undefined
                  ? null
                  : this.props.toggleActive
              }
            />
          </div>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
      isTrained: PropTypes.bool,
    }).isRequired
  ).isRequired,
  toggleActive: PropTypes.func,
};

export default List;
