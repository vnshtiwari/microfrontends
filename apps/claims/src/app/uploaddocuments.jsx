import '../styles/claims.scss';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FileUpload from './fileUpload';
import { useState } from 'react';

export function UplodDocuments() {
  let [docList, setDocList] = useState([
    'Discharge Summery',
    'Hospital Bill and Payment Details',
    'Investigation & Lab Report',
    'Other documents',
    'Cancelled Cheque',
    'KYC document',
    'PAN Card',
    'Aadhaar Card',
    'Passport Photo',
  ]);
  return (
    <div className="hospitalizationForm center">
      <Typography variant="caption" display="block">
        Upload Documents
      </Typography>

      <Grid container spacing={2}>
        {docList.map((item) => {
          return (
            <Grid item xs={12}>
              <FileUpload heading={item}></FileUpload>
            </Grid>
          );
        })}
      </Grid>
      <div class="col-100 diclairation">
        <input
          type="checkbox"
          id="chkDeclaration1"
          data-gtm-form-interact-field-id="6"
        />

        <label class="chobox-wrap">
          I hereby declare that the benefits paid under this claim shall not be
          claimed from anywhere else in any form. Further, Niva Bupa Health
          Insurance Company reserves the right to ask for original claim
          documents for processing of claims wherever necessary.
          <span class="checkmark-ab"></span>
        </label>
      </div>
      <div class="col-100 diclairation">
        <input
          type="checkbox"
          id="chkDeclaration2"
          data-gtm-form-interact-field-id="5"
        />

        <label class="chobox-wrap">
          I hereby declare that the information furnished by me under this claim
          is true &amp; correct to the best of my knowledge and belief. If I
          have made any false or untrue statement, suppression or concealment of
          any material fact with respect to questions asked in relation to this
          claim, my right to claim reimbursement shall be forfeited. I give my
          consent to appointed representative of Niva Bupa Health Insurance Co.
          Ltd. to verify and collect necessary documents or statements from any
          hospital or medical practitioner whom I have consulted in past as part
          of verifying submitted claim authenticity. I hereby declare that I
          have included all the bills /receipts for the purpose of this claim
          &amp; that I will not be making any supplementary claim except the
          pre/post hospitalization claim, if any.
          <span class="checkmark-ab"></span>
        </label>
      </div>

      <div className="mt-30">
        <input className="save-next" type="button" value="Submit" />
      </div>
    </div>
  );
}

export default UplodDocuments;
