import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleWebsite } from "../actions/websiteActions";
import List from "./List";

class WebsitePanel extends React.Component {
  render() {
    return (
      <div style={{ width: "90%", height: "50%" }}>
        <button
          type="button"
          style={{
            backgroundColor: "#e7e7e7",
            color: "black",
            width: "100%",
            height: "20%",
            border: "none",
            display: "flex",
            alignItems: "baseline",
            flexDirection: "row",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <p style={{ margin: "0" }}>Blacklist Website</p>
          <span
            class="glyphicon glyphicon-plus-sign"
            style={{ position: "absolute",     right: "3%"
            top: "22%"}}
          ></span>
        </button>

        <List
          items={this.props.websites}
          toggleActive={this.props.toggleWebsite}
        />
      </div>
    );
  }
}

WebsitePanel.propTypes = {
  websites: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleWebsite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  websites: state.websites,
});

export default connect(mapStateToProps, { toggleWebsite })(WebsitePanel);
