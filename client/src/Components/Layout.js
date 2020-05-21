import React from "react";
import moon from "../logos/moon.png";
import sun from "../logos/sun.png";
import Toggle from "./Toggle";

class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.theme !== null ? (
          <Toggle
            icons={{
              checked: (
                <img
                  alt="dark mode"
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  alt="light mode"
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
            }}
            checked={this.props.checked}
            onChange={this.props.onChange}
          />
        ) : (
          <div style={{ height: "24px" }} />
        )}
      </div>
    );
  }
}
export default Layout;
