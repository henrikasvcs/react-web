import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Gallery = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-around my-3">
          <InstagramEmbed
            url="https://www.instagram.com/p/CehBLf3t7XF/"
            width={300}
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/CehBLf3t7XF/"
            width={300}
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/CehBLf3t7XF/"
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
