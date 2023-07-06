import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ContactPhone from '@mui/icons-material/ContactPhone';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import style from './basic-info.module.css';
import './home.css';

export default function ContactInfo({ setPlanList, nextCallback }) {
  let [contactData, setContactData] = useState({});

  let [error, setError] = useState({});

  async function next() {
    // if (true) {
    console.log(contactData);

    //setLoader(true);

    const rawResponse = await fetch(
      'https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/quote/request',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      }
    );
    const content = await rawResponse.json();
    setPlanList([...content.quote]);
    nextCallback();
    //setLoader(false);

    //setPlan([...content.quote]);

    // }
  }
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">Welcome! Start your insurance journey</h3>

            <div className={style.basicDetailContainer}>
              <div class="input-container  mt30 text">
                <TextField
                  id="filled-basic"
                  fullWidth
                  label="Mobile No."
                  variant="outlined"
                  value={contactData['mobile']}
                  onChange={(e) => {
                    contactData['mobile'] = e.target.value.slice(0, 10);
                    setContactData({ ...contactData });
                  }}
                  // onBlur={(e) => {
                  //   validate(0, "mobile");
                  // }}
                  error={error['mobile'] != null}
                  helperText={error['mobile']}
                  spellCheck={false}
                  type="number"
                  required
                  inputProps={{
                    maxlength: 13,
                    autocomplete: 'off',
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ContactPhone />{' '}
                        <span className="prefix-code">+91</span>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div class="input-container  mt30 text">
                <TextField
                  id="filled-basic"
                  fullWidth
                  label="Pin code"
                  variant="outlined"
                  value={contactData['pincode']}
                  onChange={(e) => {
                    contactData['pincode'] = e.target.value.slice(0, 6);
                    setContactData({ ...contactData });
                  }}
                  // onBlur={(e) => {
                  //   validate(0, "pincode");
                  // }}
                  error={error['pincode'] != null}
                  helperText={error['pincode']}
                  spellCheck={false}
                  type="number"
                  required
                  inputProps={{
                    maxlength: 6,
                    autocomplete: 'off',
                  }}
                />
              </div>
            </div>
          </div>
          <div class="submit-wrap align-center">
            <Button
              variant="contained"
              onClick={next}
              color="error"
              endIcon={<SendIcon />}
            >
              Next
            </Button>
          </div>
        </div>
      </span>
    </section>
  );
}
