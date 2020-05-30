const environment = process.env.NODE_ENV || "development";
const API_URL = "https://myapp.herokuapp.com";

const ServerUrl = () => {
  if (environment !== "development") {
    return API_URL;
  }
  return "http://localhost:5000";
};

const url = ServerUrl();
export default url;
