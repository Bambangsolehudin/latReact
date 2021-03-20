// import thisStringValue from 'es-abstract/2015/thisstringvalue';
import React, { Component, Fragment } from 'react';
import CartProduct from '../../CartProduct/CartProduct';
import './Product.css';
import {connect} from 'react-redux';
// import {RootContext} from '../../Home/Home'
import { GlobalConsumer } from '../../../context/context';


class Product extends Component {
    // state = {
    //     order:0,
    //     name: 'bambang'
    // }

    // handlePlus = () => {
    //     // alert(this.state.order)
    //     this.setState({
    //         order: this.state.order + 1

    //     })
    //     // this.setState(this.state.order+1);
    // }

    // handleMinus = () => {
    //     if(this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         })
    //     }
    // }

    // handleCounterChange = (newValue) => {
    //             this.setState({
    //             order: newValue
    //         })
    // }

    render() {
    //     return (
    //         <Fragment>
    //             <p>Halaman Product</p>
    //             <hr  />
    //         <div className="header">
    //             <div className="logo">
    //                etane
    //             </div>
    //             <div className="troley">
    //             <img src="https://5.imimg.com/data5/KU/IN/MY-4500003/supermarket-trolley-500x500.png" />
    //             <div className="count">{this.props.order}</div>
    //             </div>
    //             <div className="troley">

    //             </div>
    //         </div>
    //         {/* <CartProduct onCounterChange={(value) => this.handleCounterChange(value)} /> */}
    //         <CartProduct />
    // //         </Fragment>
    //     )

 return(
     


//     <RootContext.Consumer>
//     {
//         value => {
//             return (
               
                   
//                     <
                   
    
                        
//             )
//         }
//     }
// </RootContext.Consumer>

    <Fragment>
        <p>Halaman Product</p>
        <hr  />
        <div className="header">
        <div className="logo">
        etane
        </div>
        <div className="troley">
        <img src="https://5.imimg.com/data5/KU/IN/MY-4500003/supermarket-trolley-500x500.png" />
        <div className="count">{this.props.state.totalOrder}</div>
        </div>
        <div className="troley">

        </div>
        </div>
        {/* <CartProduct onCounterChange={(value) => this.handleCounterChange(value)} /> */}
        <CartProduct />
    </Fragment>
 )
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

}
// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);


