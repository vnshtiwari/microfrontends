import * as React from 'react';
import '../styles/feedback.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Feedback() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <form className="container">
      <h1 className="heading">Give feedback</h1>
      <p className="para">
        Select service/area you want to provide feedback about
      </p>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Service/Area</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={'select'}></MenuItem>
          <MenuItem value={'Cost'}>Cost</MenuItem>
          <MenuItem value={'Simplicity'}>Simplicity</MenuItem>
          <MenuItem value={'User interaction'}>User interaction</MenuItem>
          <MenuItem value={'Support'}>Support</MenuItem>
          <MenuItem value={'Product'}>Product</MenuItem>
        </Select>
      </FormControl>

      <div className="feedback-msg">
        <p className="para">
          Please provide detailed feedback about service/area.
        </p>
        <textarea name="" id=""></textarea>
      </div>

      <div className="buttons">
        <a href="javascript:alert('Thanks for submiting your feedback')">
          Submit
        </a>
        <a href="You just cancelled your to submit the feedback">Cancel</a>
      </div>
    </form>
  );
}
