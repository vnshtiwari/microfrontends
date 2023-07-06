import React from 'react';

const PurposeDetail = ({ repo }) => {
  console.log(repo);
  const [counter, setCounter] = React.useState(repo.stargazers_count);

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
    <div className="purposeDetail">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {repo.stargazers_count}
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
      </div>
      <div className="stockExchangeContainer">
        <div>
          <p className="stockExchangeDetail">London stock exchange</p>
          <p className="stockExchangeDetailValue">1,005.00 GBp</p>
        </div>
        <div>
          <p className="stockExchangeDetail">Hong Kong stock exchange</p>
          <p className="stockExchangeDetailValue">94.30 HKD</p>
        </div>
        <div>
          <p className="stockExchangeDetail">Singapore stock exchange</p>
          <p className="stockExchangeDetailValue">13.70 USD</p>
        </div>
        <div>
          <p className="stockExchangeDetail">New York stock exchange</p>
          <p className="stockExchangeDetailValue">24.47 USD</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
};

export default PurposeDetail;
