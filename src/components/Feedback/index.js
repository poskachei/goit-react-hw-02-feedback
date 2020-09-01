import React from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";
import Notification from "../Notification";

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    this.setState({ [name]: this.state[name] + 1 }, this.countTotalFeedback);
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    this.setState({ total: total }, this.countPositiveFeedbackPercentage);
  }

  countPositiveFeedbackPercentage() {
    const { good, total } = this.state;
    this.setState({ positiveFeedback: ((good / total) * 100).toFixed(0) });
  }

  render() {
    const options = [
      {
        name: "good",
        key: 0,
      },
      {
        name: "neutral",
        key: 1,
      },
      {
        name: "bad",
        key: 2,
      },
    ];

    return (
      <div className="feedback">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <div className="statistics">
          <Section title="Statistics">
            {this.state.total > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.total}
                positiveFeedback={this.state.positiveFeedback}
              />
            ) : (
              <Notification message="No feedback given"></Notification>
            )}
          </Section>
        </div>
      </div>
    );
  }
}
