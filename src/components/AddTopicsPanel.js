import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { addTopic } from "../actions/topicActions";
import List from "./List";

class AddWebsitesPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTopic: "",
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReturnBtnClick = this.handleReturnBtnClick.bind(this);
  }

  handleChange(event) {
    this.setState({ newTopic: event.target.value });
  }

  handleSubmit(event) {
    this.props.addTopic(this.state.newTopic, this.props.userId);
    document.getElementById("topic-form").reset();
    event.preventDefault();
  }

  handleReturnBtnClick() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <React.Fragment>
        <div style={{ height: "5%", width: "90%", marginBottom: "2%" }}>
          <form id="topic-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="topicName"
              onChange={this.handleChange}
              style={{ height: "100%", width: "90%" }}
            />
            <button
              type="submit"
              className="btn"
              style={{ height: "100%", padding: "0", width: "10%" }}
            >
              <span
                className="glyphicon glyphicon-plus-sign"
                style={{
                  fontSize: "20px",
                }}
              />
            </button>
          </form>
        </div>
        <div style={{ height: "80%", width: "90%" }}>
          <List
            items={this.props.topics}
            toggleActive={this.props.toggleWebsite}
          />
        </div>
        <button
          type="button"
          onClick={this.handleReturnBtnClick}
          style={{
            backgroundColor: "#e7e7e7",
            color: "black",
            width: "90%",
            height: "5%",
            border: "none",
            display: "flex",
            alignItems: "baseline",
            flexDirection: "row",
            justifyContent: "center",
            position: "relative",
            marginBottom: "2%",
          }}
        >
          <p style={{ margin: "0" }}>Return to Overview</p>
        </button>
      </React.Fragment>
    );
  }
}

AddWebsitesPanel.propTypes = {
  userId: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addTopic: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.userId,
  topics: state.topics.list.map((el) => ({ name: el.name })),
});

export default connect(mapStateToProps, { addTopic })(AddWebsitesPanel);
