import Axios from 'axios';
import React, { Component } from 'react'

export default class DetailPost extends Component {
    state= {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        let id= this.props.match.params.id
        Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            console.log(res);
            let post = res.data;
            this.setState({
                post:{
                    title:post.title,
                    body:post.body
                }
            })
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <p className="detail">{this.state.post.title}</p>
                <p className="body">{this.state.post.body}</p>
            </div>
        )
    }
}
