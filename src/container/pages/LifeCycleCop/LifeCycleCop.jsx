// import { null } from 'check-types';
import React, { Component, Fragment } from 'react';
import "./LifeCycleCop.css"
import {connect} from 'react-redux';
import {RootContext} from '../../Home/Home'
import { GlobalConsumer } from '../../../context/context';


class LifeCycleCop extends Component {
  constructor (props) {
      super(props);
      this.state = {
        count:1
    }
    console.log('constructor');
  }
  static getDrivedStateFromProps(props, state) {
    console.log('getDrivedFromProps');
    return null;
  }

  componentDidMount() {
      
      console.log('componentDidMount');
    //   setTimeout(()=>{

    //       this.setState({
    //           count:2
    //       })
    //   },3000)

  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUodate');
      
      if(nextState.count >=4 ){
        return false;
      }
      return true;
  }
  
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
}
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  ChangeCount = () => {
    this.setState({
        count:this.state.count + 1
    })
  }

    render() {
        // return (
            // <Fragment>
            //   <p>Halaman LifeCycle</p>
            //   <hr />
            //     <button className="btn" onClick={this.ChangeCount}> Component Button {this.state.count}</button>
            //     <hr />
            //   <p>Total Bayar : {this.props.order}</p>

            // </Fragment>
        // )
        return(
                  <Fragment>
                  <p>Halaman LifeCycle</p>
                  <hr />
                    <button className="btn" onClick={this.ChangeCount}> Component Button {this.state.count}</button>
                    <hr />
                  <p>Total Bayar : {this.props.state.totalOrder}</p>
    
                </Fragment>
          // <RootContext.Consumer>
          //   {
          //     value => {
          //       return (
                  
          //       )
          //     }
          //   }
          // </RootContext.Consumer>
        )
    }
}


// const mapStateToProps = (state) => {
//   return {
//       order: state.totalOrder
//   }
// }

// export default connect(mapStateToProps)(LifeCycleCop);
export default GlobalConsumer (LifeCycleCop);
