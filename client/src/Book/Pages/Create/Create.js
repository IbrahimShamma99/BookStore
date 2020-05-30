import React from "react";
import Button from "react-bootstrap/Button";

class CreateBook extends React.Component {
  componentDidMount() {
    this.props.refreshBook();
  }

  onChangeHandler = (name) => (event) => {
    if (name === "cover") {
      return this.props.change(name, event.target.files[0]);
    }
    this.props.change(name, event.target.value);
  };
  clickSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.props.userId);
  };

  render() {
    return (
      <div className="update-container">
        <form>
          {this.props.open_error ? (
            <div className="alert">
              <span className="closebtn">&times;</span>
              {this.props.error}
            </div>
          ) : null}

          {this.props.open_message ? (
            <div className="alert-success">
              <span
                className="closebtn"
                onClick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {this.props.message}
            </div>
          ) : null}

          <label htmlFor="Title">Title:</label>
          <br />
          <input
            value={this.props.title}
            onChange={this.onChangeHandler("title")}
            type="text"
            id="Title"
            name="Title"
          ></input>
          <br />

          <label htmlFor="Brief">Brief:</label>
          <br />
          <textarea
            value={this.props.brief}
            onChange={this.onChangeHandler("brief")}
            type="text"
            id="Brief"
            name="Brief"
          ></textarea>
          <br />

          <label htmlFor="Author">Author:</label>
          <br />
          <input
            value={this.props.author}
            onChange={this.onChangeHandler("author")}
            type="text"
            id="Author"
            name="Author"
          ></input>
          <br />
          <label htmlFor="genre">Choose genre:</label>
          <select
            name="genre"
            id="genre"
            onChange={this.onChangeHandler("genre")}
          >
            <option value="philosphy">Philosphy</option>
            <option value="software_development">Software_development</option>
            <option value="self_improvement">Self_improvement</option>
          </select>

          <br />
          <input
            type="file"
            className=""
            name="cover"
            onChange={this.onChangeHandler("cover")}
          />

          <Button size="md" variant="flat" onClick={this.clickSubmit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default CreateBook;

