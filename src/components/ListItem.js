import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
  render() {
    // console.log(this.props.item);
    console.log("HERE");
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ textAlign: "center" }}>{this.props.name}</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
};

export default ListItem;
