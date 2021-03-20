import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../context/context';
import ActionType from '../../redux/reducer/globalActionType';
// import {RootContext} from '../Home/Home';


class Counter extends Component {
    // state = {
    //     order:0,
    //     name: 'bambang'
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     // alert(this.state.order)
    //    this.setState({
    //         order: this.state.order + 1    
    //     }, () => {
    //         this.handleCounterChange(this.state.order)

    //     })
    //     // console.log(dara);
    //     // this.handleCounterChange(this.state.order)
    //     // this.setState(this.state.order+1);
    // }

    // handleMinus = () => {
    //     if(this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         },  () => {
    //             this.handleCounterChange(this.state.order)
    
    //         })
    //     }
    // }
    // render() {

        // return (
        //     // <Fragment>
        //         <div className="counter">
        //             <button className="minus" onClick={this.props.handleMinus}>-</button>
        //             <input type="text" value={this.props.order} />
        //             <button className="plus" onClick={this.props.handlePlus}>+</button>

        //         </div>
                
        //     // </Fragment>
        // )

        render() {
            console.log(this);
        return (
            // console.log('value: ', value)
            <div className="counter">
                <button className="minus" onClick={() =>this.props.dispatch({type:'MINUS_ORDER'})}>-</button>
                <input type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() =>this.props.dispatch({type:'PLUS_ORDER'})}>+</button>

            </div>
        // <RootContext.Consumer>
        //     {
        //         value => {
        //             return (
                       
            
                                
        //             )
        //         }
        //     }
        // </RootContext.Consumer>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type:ActionType.MINUS_ORDER})
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default GlobalConsumer(Counter);
