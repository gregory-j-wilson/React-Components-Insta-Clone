/* 
Start here and work your way down the nested components.
Not all files in the project need code added.
Look at each file to see what props need to be passed.
*/

// Import the state hook
import React, { useState } from "react";
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import "./App.css";
import "./components/Posts/LikeSection"
import "./components/Posts/Post"
import "./components/Posts/PostHeader"
import Posts from "./components/Posts/Posts"

import "./components/SearchBar/SearchBar"

import data from "./dummy-data"
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {

  const [posts, setPosts] = useState(data)
  // Create a state called 'posts' to hold the list of posts, initializing to dummyData.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: (post.likes + 1) }
      }
      return post
    }))
    // This function is passed into nested components using props, to allow them to update application state.
    // It takes a post id as its only argument. The idea is to increase the 'likes' count of the post with the given `id`.
    // We will update the posts slice of state using `setPosts`, passing as the new state the invocation of `posts.map()`.
    // The callback passed into `posts.map()` performs the following logic:
    //  - if the `id` of the post matches `postId`, return a new post object containing an increased 'likes' count.
    //  - otherwise just return the post object unchanged.
  };

  return (
    <div className="AppDisplay">
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
      <SearchBar />
      <Posts posts={posts} likePost={likePost} />
    </div>
  );
};

export default App;
