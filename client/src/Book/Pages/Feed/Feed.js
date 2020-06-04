import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as BookActions from "../../Store/book.actions";
import server from "../../../constants/server";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feed.css";
import defaultCover from "../../Assets/book.jpg";

const FeedPage = styled.div`
  padding: 2em;
  position: absolute;
  top: 80px;
  border-radius: 6px;
  left: 40px;
  margin-top: 5px;
  background-color: ${(props) => (props.primary ? "bisque" : "#202c3d")};
  width: 100%;
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

const mapStatetoProps = (state) => {
  return {
    theme: state.util.theme,
    feed: state.BookState.feed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: (genre) => dispatch({ type: BookActions.FETCH_FEED, genre }),
  };
};

class Feed extends React.Component {
  componentDidMount() {
    this.props.fetchFeed(this.props.match.params.genre);
  }
  render() {
    return (
      <FeedPage primary={this.props.theme === "light" ? true : null}>
        <h3>
          {
            //TODO fix routes
          }
          <div className="feed-nav">
            <a href="/books/feed/philosphy">Philosphy</a>
            <span className="sperator"></span>
            <a href="/books/feed/software_development">Software Development</a>
            <span className="sperator"></span>
            <a href="/books/feed/self_improvement">Self Improvement</a>
            <span className="sperator"></span>
            <a href="/books/feed/psychology">Psychology</a>
          </div>
        </h3>
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
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Feed);
