import React from 'react';
import Thumbnail from './Thumbnail';
import './App.css';
 
function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
    </div>
  )
}
 
export default Portfolio;