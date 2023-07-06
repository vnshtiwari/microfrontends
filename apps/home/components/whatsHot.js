import Card7 from '../assets/card-7.jpg';
import Card8 from '../assets/card-8.png';
import Image from 'next/image';
import { imageLoader } from '../utility';

const whatsHot = () => {
  const hotList = [
    {
      id: 1,
      name: 'Our health and  wellbeing services',
      desc: "Pulse by Prudential, our health and wellbeing super-app, is transforming our business. Now available in 17 markets and 11 languages across Asia and Africa, Pulse has rapidly become one of Asia's most popular health ecosystems",
      image: Card7,
    },
    {
      id: 2,
      name: 'Prudence Foundation',
      desc: "Prudence Foundation's strategy is focused around health and resilience issues relevant to the communities in which we operate, education, particularly financial education, and building resilience across communities.",
      image: Card8,
    },
  ];
  return (
    <div className="mainContainer">
      <p className="title">
        <strong>What Hot</strong>
      </p>
      <div style={{ display: 'flex', overflowY: 'auto' }}>
        {hotList.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="cardMainContainer">
      <div className="cardInnerContainer">
        <Image
          loader={imageLoader}
          alt=""
          src={data.image}
          className="cardImage"
        />
        <div className="cardTextContainer">
          <p
            style={{
              marginLeft: 22,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {data.name}
          </p>
          <p
            style={{
              marginLeft: 22,
              fontSize: 18,
            }}
          >
            {data.desc}
          </p>
        </div>
      </div>
      <a href={`/home/hotsDetail/${data.id}`}>
        {' '}
        <button
          style={{
            backgroundColor: '#ed1b2e',
            width: 30,
            height: 30,
            position: 'absolute',
            right: 30,
            bottom: 5,
            borderRadius: 15,
            border: '1px solid #ed1b2e',
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: 20,
            }}
          >
            {'>'}
          </span>
        </button>
      </a>
    </div>
  );
};
export default whatsHot;
