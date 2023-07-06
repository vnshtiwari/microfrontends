import '../styles/claims.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export function Hospitalisation() {
  const [categary, setCategary] = useState('');

  const handleChange = (event) => {
    setCategary(event.target.value);
  };
  return (
    <div className="hospitalizationForm center">
      <Typography variant="caption" display="block">
        HOSPITALIZATION DETAILS
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="mt-30 ">
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="demo-simple-select-label" size="small">
                Category of Claim
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categary}
                label="Category of Claim"
                onChange={handleChange}
                size="small"
              >
                <MenuItem value={'Daycare'}>Daycare</MenuItem>
                <MenuItem value={'Hospitalization'}>Hospitalization</MenuItem>
                <MenuItem value={'Pre-Post Hospitalisation'}>
                  Pre-Post Hospitalisation
                </MenuItem>
                <MenuItem value={'OPD'}>OPD</MenuItem>
                <MenuItem value={'Annual Health Checkup'}>
                  Annual Health Checkup
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={6}></Grid>
        <div className="heading mt-30">Cause of Hospitalization</div>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Contaract"
                    control={<Radio />}
                    label="Contaract"
                  />
                  <FormControlLabel
                    value="Fever"
                    control={<Radio />}
                    label="Fever"
                  />
                  <FormControlLabel
                    value="Typhoid Fever"
                    control={<Radio />}
                    label="Typhoid Fever"
                  />
                  <FormControlLabel
                    value="Maternity - Noramal Delivery"
                    control={<Radio />}
                    label="Maternity - Noramal Delivery"
                  />
                  <FormControlLabel
                    value="Maternity - Caeserean"
                    control={<Radio />}
                    label="Maternity - Caeserean"
                  />
                  <FormControlLabel
                    value="Gall Stone"
                    control={<Radio />}
                    label="Gall Stone"
                  />
                  <FormControlLabel
                    value="Corona Infection"
                    control={<Radio />}
                    label="Corona Infection"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Contaract"
                    control={<Radio />}
                    label="Contaract"
                  />
                  <FormControlLabel
                    value="Fever"
                    control={<Radio />}
                    label="Fever"
                  />
                  <FormControlLabel
                    value="Typhoid Fever"
                    control={<Radio />}
                    label="Typhoid Fever"
                  />
                  <FormControlLabel
                    value="Maternity - Noramal Delivery"
                    control={<Radio />}
                    label="Maternity - Noramal Delivery"
                  />
                  <FormControlLabel
                    value="Maternity - Caeserean"
                    control={<Radio />}
                    label="Maternity - Caeserean"
                  />
                  <FormControlLabel
                    value="Gall Stone"
                    control={<Radio />}
                    label="Gall Stone"
                  />
                  <FormControlLabel
                    value="Corona Infection"
                    control={<Radio />}
                    label="Corona Infection"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <div className="mt-30 form-field">
            <TextField
              required
              fullWidth
              size="small"
              id="hospital-city"
              label="Hospital City"
              defaultValue=""
            />
          </div>
        </Grid>
        <Grid item xs={6}></Grid>

        <Grid item xs={12}>
          <div className="mt-30 form-field">
            <TextField
              required
              fullWidth
              size="small"
              id="hospital-name"
              label="Hospital Name"
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
              id="date-of-admission"
              label="Date of Admission"
              defaultValue=""
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="mt-30 form-field">
            <TextField
              required
              size="small"
              fullWidth
              id="date-of-discharge"
              label="Date of Discharge"
              defaultValue=""
            />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="mt-30 form-field">
            <TextField
              required
              size="small"
              fullWidth
              id="tatal-claim"
              label="Total Claim"
              defaultValue=""
            />
          </div>{' '}
        </Grid>
      </Grid>

      <div className="mt-30">
        {' '}
        <input className="save-next" type="button" value="Save and Next" />{' '}
      </div>
    </div>
  );
}

export default Hospitalisation;
