import * as React from 'react';
import { useState } from 'react';

const Nav = () => {
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '300%',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '-15%',
      }}
    >
      Counter App
      <div
        style={{
          fontSize: '120%',
          position: 'relative',
          top: '10vh',
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: '60%',
            position: 'relative',
            top: '20vh',
            marginRight: '5px',
            backgroundColor: 'green',
            borderRadius: '8%',
            color: 'white',
          }}
          onClick={handleClick1}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: '60%',
            position: 'relative',
            top: '20vh',
            marginLeft: '5px',
            backgroundColor: 'red',
            borderRadius: '8%',
            color: 'white',
          }}
          onClick={handleClick2}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

// class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

export default Nav;
