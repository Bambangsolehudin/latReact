import React, { Component, useState, useEffect } from 'react'

//  class Hooks extends Component {
//     state = {
//         count:0
//     }

//     onUpdate = () => {
//         this.setState({
//             count:this.state.count + 1
//         })
//     }

//     componentDidMount() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentDidUpdate() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = `Reactjs Helloworld`

//     }

//     render() {
//         return (
//             <div>
//                 <p>Nilai saya saat ni adalah: {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update NIlai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title Change: ${count}`;
        return () => {
            document.title = `Reactjs Helloworld Bambang`;
        }
    })
    return (
        <div>
        <p>Nilai saya saat ni adalah: {count}</p>
        <button onClick={() => setCount(count + 1)}>Update NIlai</button>
    </div>
    )
}

export default Hooks;