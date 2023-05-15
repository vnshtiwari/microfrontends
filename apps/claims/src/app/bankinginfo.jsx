import '../styles/claims.scss';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export function BankingInfo() {
  return (
    <div className="hospitalizationForm center">
      <Typography variant="caption" display="block">
        BANK DETAILS
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="mt-30 form-field">
            <TextField
              required
              fullWidth
              size="small"
              id="account-holder-name"
              label="Account Holder Name"
              defaultValue=""
            />
          </div>
        </Grid>
        <Grid item xs={6}>
        <div className="mt-30 form-field">
            <TextField
              required
              fullWidth
              size="small"
              id="account-number"
              label="Account Number"
              defaultValue=""
            />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="mt-30 form-field">
            <TextField
              required
              fullWidth
              size="small"
              id="confirm-account-number"
              label="Confirm Account Number"
              defaultValue=""
            />
          </div>{' '}
        </Grid>

        <Grid item xs={6}>
          <div className="mt-30 form-field">
            <TextField
              required
              size="small"
              fullWidth
              id="ifsc-code"
              label="IFSC Code"
              defaultValue=""
            />
          </div>
        </Grid>
      </Grid>

      <div className='mt-30'> <input className='save-next' type='button' value='Save and Next'/> </div>
    </div>
  );
}

export default BankingInfo;
