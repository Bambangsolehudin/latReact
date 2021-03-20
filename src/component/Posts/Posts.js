import React, { Fragment } from "react";
// import { Card, Button, ButtonGroup } from "react-bootstrap";
// import './Posts.css'

const Posts = (props) => {
  return (
    // 
    <div className="post">
        <div className="img-thumb">
        <img src="http://placeimg.com/200/150/any" alt="dummy"/>

        </div>
        <div className="content">
            <p className="title" onClick={()=>props.goDetail(props.data.id)}>{props.data.title}</p>
            <p className="desc">{props.data.body}</p>
            <button className="update" onClick={()=>props.update(props.data)}>Update</button>
            <button className="button" onClick={()=>props.remove(props.data.id)}>Remove</button>
        </div>
    </div>
  );
};

export default Posts;