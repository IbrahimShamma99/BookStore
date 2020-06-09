import React from "react";
import styled from "styled-components";
import server from "../../../constants/server";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feed.css";
import defaultCover from "../../Assets/book.jpg";
import url from "../../../constants/server";

const papar = styled.div`
  position: absolute;
`;

const FeedPage = styled.div`
  padding: 2em;
  position: absolute;
  top: 80px;
  border-radius: 6px;
  left: 200px;
  margin-top: 5px;
  background-color: ${(props) => (props.primary ? "bisque" : "#202c3d")};
  width: 85%;
  height: auto;
  max-width: 95%;
  & > h3 {
    left: 0;
    top: 0;
    color: ${(props) => (props.primary ? "#505050" : "bisque")};
  }
  & > span {
    opacity: 1;
    background: #4e57ef;
    background: #cfd7ff;
    border: 1px solid #4e57ef;
    box-shadow: 3px 4px 0px #4e57ef;
  }
`;
const Book = styled.div`
  padding: 1em;
  border-width: 1px 1px 1px 2px; /*top left bottom right */
  border-style: solid;
  width: 180px;
  height: 260px;
  margin-right: 10px;
  border-color: #141f2d;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  font-size: 14px;
  display: inline-block;
  overflow-y: hidden;
  & > img {
    postion: absolute;
    margin-left: 4px;
    align: middle;
    width: 150px;
    height: 200px;
    border-radius: 5px;
  }
  &:hover {
    transition: transform 0.8s ease;
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    transform: scale(1.05);
  }
  & > span {
    display: block;
    white-space: initial;
  }
`;

const SideBar = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 80px;
  left: 40px;
  background-color: transparent;
  overflow-x: hidden;
  padding-top: 20px;
`;

class Feed extends React.Component {
  componentDidMount() {
    this.props.fetchFeed(this.props.match.params.genre);
  }
  render() {
    return (
      <papar>
        <FeedPage primary={this.props.theme === "light" ? true : null}>
          <h3></h3>
          {this.props.feed.map((post) => {
            return (
              <a href={"/book/" + post._id}>
                <Book primary={this.props.theme === "light" ? true : null}>
                  {post.cover.filename ? (
                    <img
                      alt="cover"
                      src={server.concat("/", post.cover.filename)}
                    ></img>
                  ) : (
                    <img alt="cover" src={defaultCover}></img>
                  )}
                  <span>{post.title}</span>
                  {post.author ? (
                    <div>
                      <p>{post.author}</p>
                    </div>
                  ) : null}
                </Book>
              </a>
            );
          })}
        </FeedPage>
        <SideBar>
          {this.props.user.avatar ? (
            <div>
              <img
                alt="profile"
                src={url.concat("/", this.props.user.avatar.filename)}
              ></img>
            </div>
          ) : null}
          <div className="feed-nav">
            <a href="/books/feed/">All</a>
            <span className="sperator"></span>
            <br />
            <a href="/books/feed/philosphy">Philosphy</a>
            <span className="sperator"></span>
            <br />
            <a href="/books/feed/software_development">Software Development</a>
            <span className="sperator"></span>
            <br />
            <a href="/books/feed/self_improvement">Self Improvement</a>
            <span className="sperator"></span>
            <br />
            <a href="/books/feed/psychology">Psychology</a>
            <span className="sperator"></span>
            <br />
          </div>
        </SideBar>
      </papar>
    );
  }
}
export default Feed;
