import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { toggleTopic, fetchTopics } from "../actions/topicActions";
import List from "./List";

class TopicPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };

    this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
  }

  handleAddBtnClick() {
    this.setState({ redirect: true });
  }

  componentWillMount() {
    if (!this.props.isFetching) {
      this.props.fetchTopics(this.props.userId);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/add-topics" />;
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
          <p style={{ margin: "0" }}>Whitelist Topic</p>
          <span
            className="glyphicon glyphicon-plus-sign"
            style={{
              position: "absolute",
              right: "3%",
              top: "10%",
              fontSize: "20px",
            }}
          ></span>
        </button>

        <div style={{ height: "80%", width: "100%" }}>
          <List
            items={this.props.topics}
            toggleActive={this.props.toggleTopic}
          />
        </div>
      </div>
    );
  }
}

TopicPanel.propTypes = {
  userId: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      isTrained: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  toggleTopic: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.userId,
  topics: state.topics.list,
  isFetchingTopics: state.topics.isFetching,
});

export default connect(mapStateToProps, { toggleTopic, fetchTopics })(
  TopicPanel
);
