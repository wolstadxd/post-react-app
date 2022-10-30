import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



















// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 26
//         }
//         // this.nextYear = this.nextYear.bind(this) // 1
//
//         // this.nextYear = () => { // 2
//         //     this.setState(state => ({
//         //         years: ++state.years
//         //     }))
//         // }
//
//     }
//
//     // nextYear = () => { // 3
//     //     this.setState(state => ({
//     //         years: ++state.years
//     //     }))
//     // }
//
//     // nextYear() { // 1
//     //
//     //     this.setState(state => ({
//     //         years: ++state.years
//     //     }))
//     // }
//
//     render () {
//         const {name, surname, link} = this.props
//         const {years} = this.state
//         return (
//             <>
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//                 <a href={link}>My profile</a>
//             </>
//         )
//     }
// }
//
// const All = () => {
//     return (
//         <>
//             <WhoAmI name='John' surname="Smith" link='facebook.com' />
//             <WhoAmI name='Smith' surname="Smith" link='facebook.com' />
//             <WhoAmI name='Alex' surname="Shepard" link='facebook.com' />
//         </>
//     )
// }
