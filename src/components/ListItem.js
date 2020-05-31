import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ textAlign: "center" }}>{this.props.name}</p>
        {this.props.isActive !== null && this.props.isActive !== undefined && (
          <label
            className="switch"
            style={{ opacity: this.props.isTrained === false ? "50%" : "100%" }}
          >
            <input type="checkbox" disabled={this.props.isTrained === false} />
            <span className="slider round"></span>
          </label>
        )}
      </div>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isTrained: PropTypes.bool,
  toggleActive: PropTypes.func,
};

export default ListItem;
