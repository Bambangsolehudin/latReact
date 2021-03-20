import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComponent/YoutubeComponent.jsx'


class YoutubeComponent extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp time="3.12" title="hahaha1"/>
                <YoutubeComp time="3.13" title="hahaha2"/>
                <YoutubeComp time="3.14" title="hahaha3"/>
                <YoutubeComp time="3.15" title="hahaha4"/>
                <YoutubeComp time="3.16" />
                <YoutubeComp />
            
            </Fragment>
        )
    }
}

export default YoutubeComponent;
