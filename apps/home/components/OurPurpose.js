import Slider from 'react-slick';
import Image from 'next/image';
import { imageLoader } from '../utility';

import girlComputer from '../assets/girlWithComputer.jpg';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div
      style={{ position: 'absolute', left: 10 }}
      className={className}
      onClick={onClick}
    ></div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div
      style={{ position: 'absolute', right: 10 }}
      className={className}
      onClick={onClick}
    >
      {'&#x2190;'}
    </div>
  );
};

const OurPurpose = () => {
  return (
    <div className="purpose">
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: -5 }}>
        <div style={{ width: '90%', textAlign: 'center' }}>
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
            <Card
              img={girlComputer}
              title="Our Purpose"
              desc="We help people get the most out of life"
            />
            <Card
              img={girlComputer}
              title="Our Purpose"
              desc="We help people get the most out of life"
            />
          </Slider>
        </div>
      </div>
      <div class="stockExchangeContainer">
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

const Card = ({ img, title, desc }) => {
  return (
    <div className="cardContainer">
      <Image alt="" src={img} loader={imageLoader} className={'cardImage'} />
      <div className="cardDetailView">
        <p className="cardTitle">{title}</p>
        <p className="cardDesc">{desc}</p>
        <a href="/home/PurposeDetail">
          <button className="redButton"> Find out more</button>
        </a>
      </div>
    </div>
  );
};
export default OurPurpose;
