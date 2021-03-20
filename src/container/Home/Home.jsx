import React, { Component, Fragment, createContext } from 'react'
import BlogPost from '../pages/BlogPost/BlogPost'
import LifeCycleCop from '../pages/LifeCycleCop/LifeCycleCop'
import Product from '../pages/product/Product.jsx';
import YoutubeComponent from '../../container/pages/YoutubeComp/YoutubeComponent'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

  
import './Home.css';
import YoutubeComp from '../pages/YoutubeComp/YoutubeComponent';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';





// export const RootContext = createContext();
// const Provider = RootContext.Provider;



class Home extends Component {
    // state = {
    //     showComponent : true
    // }

    // dispatch = (action) => {
    //     if(action.type === 'PLUS_ORDER') {
    //         return this.setState({
    //             totalOrder:this.state.totalOrder + 1
    //         })
    //     }

    //     if(action.type === 'MINUS_ORDER') {
    //         return this.setState({
    //             totalOrder:this.state.totalOrder - 1
    //         })
    //     }
        
    // }

    // componentDidMount() {
    //     // setTimeout(()=>{
    //     //     this.setState({
                
    //     //         showComponent:false
    //     //     });
    //     // },15000)
    // }

    // state = {
    //     totalOrder: 5
    // }


    render() {

        return (
            <BrowserRouter>
            {/* <Provider value={{
                state: this.state,
                dispatch:this.dispatch              
                }
            }> */}
{/*             
            <div>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp time="3.12" title="hahaha1"/>
                <YoutubeComp time="3.13" title="hahaha2"/>
                <YoutubeComp time="3.14" title="hahaha3"/>
                <YoutubeComp time="3.15" title="hahaha4"/>
                <YoutubeComp time="3.16" />
                <YoutubeComp />
                <hr />
                <Product />
                {
                    this.state.showComponent
                    ?
                    <LifeCycleCop />
                    :
                    null

                }
                <p>BlogPost</p>
                <hr />
                <BlogPost />
            </div> */}
            <Fragment >
                <div className="navigation">
                    <Link to="/"> BlogPost </Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">Lifecycle</Link>
                    <Link to="/youtube">YoutubeComponent</Link>
                    <Link to="/Hooks">HooksComponent</Link>
                </div>
                <Route path="/" exact component={BlogPost}/>
                <Route path="/product" exact component={Product}/>
                <Route path="/lifecycle" exact component={LifeCycleCop}/>
                <Route path="/youtube" exact component={YoutubeComponent}/>
                <Route path="/detail-post/:id"  component={DetailPost}/>
                <Route path="/Hooks"  component={Hooks}/>



            </Fragment>

            {/* </Provider> */}
            </BrowserRouter>
        )
    }
}

export default  GlobalProvider(Home)