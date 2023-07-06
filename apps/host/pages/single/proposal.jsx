import { useState } from 'react';

import dynamic from 'next/dynamic';

const Proposal = dynamic(() => import('proposal/Proposal'), {
  ssr: false,
});

const Rating = dynamic(() => import('rating/Rating'), {
  ssr: false,
});

export default function Index() {
  const [isCompleted, setCompleted] = useState(false);
  return (
    <>
      <Proposal
        nextCallback={() => {
          setCompleted(true);
        }}
      ></Proposal>
      {isCompleted && <Rating></Rating>}
    </>
  );
}
