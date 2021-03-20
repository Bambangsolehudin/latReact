import React from 'react';
import './YoutubeComponent.css';

const YoutubeComp= (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cmH04HRcmgaTEaF3-vEz4V7qLXcpzB9TjA&usqp=CAU" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc"> desc here </p>
         </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'haha'
}

export default YoutubeComp;