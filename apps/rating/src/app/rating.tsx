import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import '../styles/rating.scss';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <main>
      <form>
        <h1>Rate Us</h1>
        <p>
          How was your experience using our application? Your rating matter!
        </p>

        <div className="rating">
          <div className="rating__box">
            <Rating
              name="simple-controlled"
              size="large"
              value={value}
              precision={0.5} 
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>

        <div className="textarea-group">
          <label>
            <span>Justify your rating : </span>
            <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Additional comment"
    />
          </label>
        </div>

        <div className="action-group">
          <input type="button" value="Submit" />
          <input type="reset" value="Cancel" />
        </div>
      </form>
    </main>
  );
}
