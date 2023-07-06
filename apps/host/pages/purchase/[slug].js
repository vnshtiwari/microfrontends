import { useState } from 'react';

import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router';

const BasicDetails = dynamic(() => import('basicDetails/App'), {
  ssr: false,
});
const Plans = dynamic(() => import('plans/App'), {
  ssr: false,
});

const Underwriting = dynamic(() => import('underwriting/App'), {
  ssr: false,
});

const PersonalisedQuote = dynamic(() => import('personalisedQuote/App'), {
  ssr: false,
});
const Ekyc = dynamic(() => import('ekyc/App'), {
  ssr: false,
});
const Proposal = dynamic(() => import('proposal/App'), {
  ssr: false,
});

const Payment = dynamic(() => import('payment/App'), {
  ssr: false,
});

export default function Products() {
  let router = useRouter();

  const [planList, setPlanList] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [state, setState] = useState({
    Self: false,
    Mother: false,
    Father: false,
    Spouse: false,
    Son: false,
    Daughter: false,
    'Mother-in-law': false,
    'Faher-in-law': false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  let [basicData, setBasicData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
  });

  return (
    <>
      {router.query.slug == 'basicdetails' && (
        <BasicDetails
          nextCallback={(basicDetails) => {
            Router.push(
              {
                pathname: '/purchase/plans',
                query: { data: JSON.stringify(basicDetails) },
              },
              '/purchase/plans'
            );
          }}
          setPlanList={setPlanList}
        ></BasicDetails>
      )}
      {router.query.slug == 'plans' && (
        <Plans
          planList={planList}
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase/personalisedQuote',
              },
              '/purchase/personalisedQuote'
            );
          }}
          setSelectedPlan={setSelectedPlan}
          state={state}
          handleChange={handleChange}
        ></Plans>
      )}
      {router.query.slug == 'personalisedQuote' && (
        <PersonalisedQuote
          selectedPlan={selectedPlan}
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase/ekyc',
              },
              '/purchase/ekyc'
            );
          }}
        ></PersonalisedQuote>
      )}
      {router.query.slug == 'underwriting' && (
        <Underwriting
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase/personalisedQuote',
              },
              '/purchase/personalisedQuote'
            );
          }}
        ></Underwriting>
      )}
      {router.query.slug == 'ekyc' && (
        <Ekyc
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase/proposal',
              },
              '/purchase/proposal'
            );
          }}
          basicData={basicData}
          setBasicData={setBasicData}
        ></Ekyc>
      )}
      {router.query.slug == 'proposal' && (
        <Proposal
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase/payment',
              },
              '/purchase/payment'
            );
          }}
          basicData={basicData}
          insParty={state}
        ></Proposal>
      )}

      {router.query.slug == 'payment' && (
        <Payment
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase/underwriting',
              },
              '/purchase/underwriting'
            );
          }}
        ></Payment>
      )}
    </>
  );
}
