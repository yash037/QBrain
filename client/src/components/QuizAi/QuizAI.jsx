import React, { Component } from "react";
import NavBar from "../Layout/NavBar";
import Emoji from "../Layout/Emoji";
import { Redirect } from "react-router-dom";
import QuizService from "../../service/QuizService";

class QuizAI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      tags: "",
      file: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  handleReset = () => {
    this.setState({ title: "", description: "", tags: "", file: null });
  };

  handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("tags", this.state.tags);
    if (this.state.file) formData.append("file", this.state.file);

    QuizService.submitAI(formData).then((res) => {
      if (res?._id) {
        this.props.history.push({
          pathname: "/quiz-done",
          state: { quiz_id: res._id },
        });
      }
    });
  };

  render() {
    if (!this.props.checkLogin()) {
      return <Redirect to={{ pathname: "/login" }} />;
    }

    return (
      <React.Fragment>
        <NavBar
          isLoggedIn={this.props.isLoggedIn}
          checkLogin={this.props.checkLogin}
          onLogout={this.props.onLogout}
        />
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 section">
              <h2 className="mb-4">
                <Emoji emoji="🧠" /> AI-Powered Quiz Generator
              </h2>
              <input
                className="input-quiz-title"
                name="title"
                placeholder="Enter Quiz Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <textarea
                className="input-quiz-desc mt-2"
                name="description"
                placeholder="What is this quiz about?"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <input
                className="input-quiz-tags mt-2"
                name="tags"
                placeholder="Comma-separated tags (e.g. AI, math, coding)"
                value={this.state.tags}
                onChange={this.handleChange}
              />
              <input
                type="file"
                className="input-file mt-3"
                onChange={this.handleFileChange}
              />
              <div className="mt-4 text-center">
                <button className="tool-button" onClick={this.handleSubmit}>
                  <Emoji emoji="🔨" /> Generate Quiz
                </button>
                <button className="tool-button ml-2" onClick={this.handleReset}>
                  <Emoji emoji="♻️" /> Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default QuizAI;
