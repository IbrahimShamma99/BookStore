import React from "react";

import InfoForm from "./from";
import PaymentForm from "./Payment";


import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        BookApp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfoForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}



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
