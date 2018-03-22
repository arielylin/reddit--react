import React, { Component } from 'react';
import './App.css';
import {redditData} from './static-data';
import Posts from './Post';
import Avatar from './Avatar'

class App extends Component {

  // we want to get the post title within each post. 
  renderPosts = (posts) => (
    <ul className="redditPosts">
      {posts.map(currentPost => 
        <li key={currentPost.data.id} className="postItem">
          {/* breaking out into component in post.js */}
          <Avatar images={currentPost}></Avatar>
          <Posts post={currentPost}></Posts>
        </li>
      )}
    </ul>
  )

  render() {
    return (
      <div className="App">
        <ul className="Posts">
        </ul>
        <div className="Post">
          <div className="Votes">
            <div className="upVotes">
            </div>
            <div className="voteCount">
            </div>
            <div className="downVotes">
            </div>
          </div>
          <div className="Avatar">
            {/* what if i wanted to define my props for images here? */}
          </div>
          <div className="postContent">
            <div className="postTitle">
              {this.renderPosts(redditData.data.children)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
