import React from "react";
import "./TimeLineComp.css";
import Post from "./Post/Post.jsx";

function TimeLineComp({ id, name, time, text, image_url, like_count , dislike_count,author_id}) {
  // const { postData } = props; // Assuming postData is an array of post objects
  // console.log("authorid",author_id)
  return (
    <div className="timeLinePosts">
      <Post
        key={id}
        id = {id}
        name={name}
        time={time}
        text={text}
        image_url={image_url}
        like_count={like_count}
        dislike_count={dislike_count}
        author_id={author_id}
      />
    </div>
  );
}

export default TimeLineComp;
