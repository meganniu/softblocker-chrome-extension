import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { toggleWebsite } from "../actions/websiteActions";
import List from "./List";

class WebsitePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };

    this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
  }

  handleAddBtnClick() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/add-websites" />;
    }

    return (
      <div style={{ width: "90%", height: "50%", marginBottom: "2%" }}>
        <button
          type="button"
          onClick={this.handleAddBtnClick}
          style={{
            backgroundColor: "#e7e7e7",
            color: "black",
            width: "100%",
            height: "10%",
            border: "none",
            display: "flex",
            alignItems: "baseline",
            flexDirection: "row",
            justifyContent: "center",
            position: "relative",
            marginBottom: "2%",
          }}
        >
          <p style={{ margin: "0" }}>Blacklist Website</p>
          <span
            className="glyphicon glyphicon-plus-sign"
            style={{
              position: "absolute",
              right: "3%",
              top: "10%",
              fontSize: "20px",
            }}
          />
        </button>

        <div style={{ height: "80%", width: "100%" }}>
          <List
            items={this.props.websites}
            toggleActive={this.props.toggleWebsite}
          />
        </div>
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
