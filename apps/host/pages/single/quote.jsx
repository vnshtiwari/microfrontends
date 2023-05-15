import dynamic from 'next/dynamic';
import { useState } from 'react';

const Quote = dynamic(() => import('basicDetails/Quote'), {
  ssr: false,
});

const Rating = dynamic(() => import('rating/Rating'), {
    ssr: false,
  });
  

export default function Index() {
    const [isCompleted, setCompleted] = useState(false)
  return (
    <>
      {!isCompleted && <Quote
        nextCallback={() => {
          setCompleted(true)
        }}
      ></Quote>}
      {isCompleted && <Rating></Rating>}
    </>
  );
}
