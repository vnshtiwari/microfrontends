import styled from 'styled-components';
import Hospitalisation from '../app/hospitalisation';
import BankingInfo from '../app/bankinginfo';
import UplodDocuments from '../app/uploaddocuments';

export function App() {
  return (
    <>
      <Hospitalisation></Hospitalisation>
      <BankingInfo></BankingInfo>
      <UplodDocuments></UplodDocuments>

    </>
  );
}

export default App;
