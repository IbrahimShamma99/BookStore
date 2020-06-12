import React from "react";
import styled from "styled-components";
import server from "../../../constants/server";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feed.css";
import defaultCover from "../../Assets/book.jpg";
import url from "../../../constants/server";

import BookIcon from "@material-ui/icons/Book";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RateReviewIcon from "@material-ui/icons/RateReview";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import InfoIcon from "@material-ui/icons/Info";
import FaceIcon from "@material-ui/icons/Face";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PortraitIcon from "@material-ui/icons/Portrait";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";

// const DevIcon = (props) => (
//   <div>
//     <a href="https://dev.to/ibrahimshamma99">
//       <img
//         src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
//         alt="Ibrahim Abushammah's DEV Profile"
//         height="30"
//         width="30"
//       />
//     </a>
//   </div>
// );

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
  width: 80%;
  height: auto;
  max-width: 2650px;
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
  @media (min-width: 256px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
  @media (min-width: 1440px) {
    width: 85%;
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
  left: 30px;
  background-color: transparent;
  overflow-x: hidden;
  padding-top: 20px;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  margin-bottom: 10px;
  margin-left: 4px;

  &:hover {
    transition: transform 0.8s ease;
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    transform: scale(1.1);
    border: 4px;
    border-color: azure;
  }
`;

class Feed extends React.Component {
  componentWillMount() {
    this.props.fetchFeed(this.props.match.params.genre);
  }
  render() {
    return (
      <papar>
        <FeedPage primary={this.props.theme === "light" ? true : null}>
          <h3>Feed Page</h3>
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
            <div className="User-nav">
              <ProfileImg
                alt="profile"
                src={url.concat("/", this.props.user.avatar.filename)}
              ></ProfileImg>
              <a href={"/".concat(this.props.user.username)}>
                {this.props.user.username}
              </a>
            </div>
          ) : null}
          <div className="feed-nav">
            <h3>Genres</h3>
            <a href="/books/feed/">All</a>
            <br />
            <a href="/books/feed/philosphy">Philosphy</a>
            <br />
            <a href="/books/feed/software_development">Software Development</a>
            <br />
            <a href="/books/feed/self_improvement">Self Improvement</a>
            <br />
            <a href="/books/feed/psychology">Psychology</a>
            <br />
            <br />
            <div>
              <BookIcon />
              <a>Read later</a>
              <br />
              <FavoriteIcon />
              <a>Favorite</a>
              <br />
              <RateReviewIcon />
              <a>Reviewed</a>
              <br />
              <LocalOfferIcon />
              <a>Tags</a>
              <br />
              <FaceIcon />
              <a>Terms</a>
              <br />
              <EmojiObjectsIcon />
              <a>FAQ</a>
              <br />
              <InfoIcon />
              <a>About</a>
              <br />
              <h3>Contacts</h3>
              <GitHubIcon />
              <a>Github</a>
              <br />
              <LinkedInIcon />
              <a>LinkedIn</a>
              <br />
              <PortraitIcon />
              <a>Portfolio</a>
              <br />
              <PinterestIcon />
              <a>Pinterest</a>
              <br />
              <TwitterIcon />
              <a>Twitter</a>
              <br />
            </div>
          </div>
        </SideBar>
      </papar>
    );
  }
}
export default Feed;
