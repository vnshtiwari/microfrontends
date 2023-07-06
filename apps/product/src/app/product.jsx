import { useState } from 'react';
import '../styles/product.css';
import Style from '../styles/product.module.css';
import InputAdornment from '@mui/material/InputAdornment';
import ContactPhone from '@mui/icons-material/ContactPhone';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export default function Product({ nextCallback, setPlanList }) {
  let [contactData, setContactData] = useState({});

  let [error, setError] = useState({});
  let [selectedProduct, setSelctedProduct] = useState('Health AdvantEdge');

  let [products, setProdcuts] = useState([
    {
      name: 'Health AdvantEdge',
      desc: 'Comprehensive health policy',
      detail:
        'Comprehensive policy for the whole family. Comes with exclusive benefits like no room rent capping, no co-payment, OPD cover &amp; lifelong renewability. Coverage starts from ₹5 lakh for a monthly premium as low as ₹542*.',
    },
    {
      name: 'Arogya Sanjeevani Policy',
      desc: 'Standard health policy',
      detail:
        'Standard policy for your primary healthcare needs. Ideal for those who need a starter health insurance policy on an individual or family basis. Coverage ranges from ₹1 to ₹5 lakh..',
    },
    {
      name: 'Health Booster',
      desc: 'Increase your existing cover value',
      detail:
        'Super top-up policy to enhance your existing health coverage. Covers your medical expenses when your basic insurance plan falls short. Coverage goes up to ₹50 lakh.',
    },
    {
      name: 'Personal Protect',
      desc: 'Accident protection',
      detail:
        'Accident protection policy. Gives coverage against death or permanent total disablement (PTD) due to an accident. Coverage goes up to ₹25 lakh.',
    },
  ]);

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
    //nextCallback();
    setPlanList([...content.quote]);
    nextCallback();
    //setLoader(false);

    //setPlan([...content.quote]);

    // }
  }

  return (
    <div className={Style.mainContainer}>
      <div className={`${Style.prodcutHeading} mt-30 horizental-align `}>
        <h1>Zero hassle health plans starting @₹15/day#</h1>
        <ul className={`${Style.planBenifits} no-bullets`}>
          <li>No medical checkup required</li>
          <li>6500+ cashless hospitals in our network*</li>
          <li>Instant policy</li>
          <li>60 mins TAT for cashless hospitalisation</li>
        </ul>
      </div>

      <div className={`${Style.productBody} horizental-align mt-30`}>
        <ul className={`${Style.planBenifits} no-bullets`}>
          {products.map((p) => {
            return (
              <li
                className={selectedProduct === p.name ? 'active' : ''}
                onClick={() => setSelctedProduct(p.name)}
              >
                <h2>{p.name}</h2>
                <p class="desk-para">{p.desc}</p>
                <p class="mob-para">{p.detail}</p>
                <span class="icon chiIcon"></span>
              </li>
            );
          })}
        </ul>

        {/* <div className={`${Style.quoteForm} mt-30`}>
          <div className={`${Style.inputContainer}`}>
            <TextField
              id="filled-basic"
              fullWidth
              label="Mobile No."
              variant="standard"
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
                    <ContactPhone /> <span className="prefix-code">+91</span>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={`${Style.inputContainer}`}>
            <TextField
              id="filled-basic"
              fullWidth
              label="Pin code"
              variant="standard"
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
          <div className={`${Style.inputContainer}`}>
            <TextField
              id="filled-basic"
              fullWidth
              label="Email"
              variant="standard"
              value={contactData['email ']}
              onChange={(e) => {
                contactData['email'] = e.target.value;
                setContactData({ ...contactData });
              }}
              // onBlur={(e) => {
              //   validate(0, "pincode");
              // }}
              error={error['pincode'] != null}
              helperText={error['pincode']}
              spellCheck={false}
              required
            />
          </div>
          <div className={`${Style.inputContainer}`}>
            <button
              _ngcontent-ukv-c29=""
              type="button"
              id="city-get-quote"
              class="btn-primary btn-orange apr-submit-btn"
              onClick={next}
            >
              Get quote
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
