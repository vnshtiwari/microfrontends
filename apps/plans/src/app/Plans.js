import { React, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import TransgenderIcon from "@mui/icons-material/Transgender";
import Divider from "@mui/material/Divider";
import style from "./basic-info.module.css";
import "./home.css";
import "./plans.module.css";

export default function Plans({
  planList,
  state,
  setSelectedPlan,
  nextCallback,
  handleChange
}) {
  let [planId, setPlanId] = useState(null);
  let [amount, setAmount] = useState(null);
  let [plan, setPlan] = useState();

  // let [selectedPlan, setSelectedPlan] = useState(null);

  function selectCard(name, amount, productId) {
    if (name === plan) {
      setPlan("");
      setAmount(null);
      return;
    }
    setPlan(name);
    setPlanId(productId);
    setAmount(amount);
  }

  async function getPersonaliseQuote() {
    let quoteData = {
      mobile: "7338209890",
      gender: "male",
      messageOptIn: true,
      sumInsured: 100000,
      tenure: 2,
      amount: 7500,
      insurableParty: [
        {
          smokingStatus: false,
          dob: "10/02/1989",
          relationship: "self",
        },
        {
          smokingStatus: false,
          dob: "12/04/1991",
          relationship: "father",
        },
      ],
    };
    quoteData["selectedProductId"] = planId || selectedPlan.productId;
    //setLoader(true);
    const rawResponse = await fetch(
      "https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/quote/request",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quoteData),
      }
    );
    const content = await rawResponse.json();
    //setLoader(false);
    console.log(content);
    setSelectedPlan({ ...content.quote[0] });
    setAmount(content.quote[0].amount);
    sessionStorage.setItem("customerId", content.customerId);
    sessionStorage.setItem("quoteId", content.quoteId);
    nextCallback()
  }



  const [gender, setGender] = useState("");

  const selectGender = (gender) => {
    setGender(gender);
  };
  const error =
    Object.values(state).filter((v) => v).length >= 1 ? false : true;

  return (
    <section className="plan-container">
      <div class=" cGIqAI dmGYTj  chat-question-inner user_name  text_single ">
        <Typography gutterBottom variant="h2" component="h2">
          Pru Products
        </Typography>
      </div>
      <div>
        <Grid container sx={{}} justifyContent="space-around">
          {planList.map((item) => {
            return (
              <Grid
                key={item.productId}
                sx={{
                  cursor: "pointer",
                  borderTop: plan == item.productName ? "red solid 4px" : null,
                  width: "300px",
                  marginTop: 8,
                }}
                item
                onClick={() => {
                  selectCard(item.productName, item.amount, item.productId);
                }}
              >
                <Typography gutterBottom variant="h4" component="h2">
                  {item.productName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.productDescription}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {item.productId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹ {item.amount}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Benefits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ul>
                    {item.productFeatures.map((pf) => {
                      return <li key={pf}>{pf}</li>;
                    })}
                  </ul>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <Divider light />

      <div>
        {plan && (
          <Grid
            sx={{
              marginTop: 10,
            }}
            justifyContent="space-around"
            container
          >
            <Grid sx={{}} item>
              <FormGroup sx={{ width: 300 }}>
                {/* <TextField
                  id="outlined-basic"
                  label="Illness"
                  variant="outlined"
                  sx={{ marginBottom: 5 }}
                /> */}
                <Typography gutterBottom>Sum Insured (Lakhs)</Typography>
                <Slider
                  aria-label="Small steps"
                  getAriaValueText={(value) => {
                    return `₹{value} Lakh`;
                  }}
                  style={{ color: "red" }}
                  sx={{ marginBottom: 5 }}
                  defaultValue={1}
                  step={1}
                  min={0}
                  max={5}
                  valueLabelDisplay="auto"
                />
                <Typography gutterBottom>Tenure (Years)</Typography>
                <Slider
                  aria-label="Small steps"
                  getAriaValueText={(value) => {
                    return `₹{value} Year`;
                  }}
                  style={{ color: "red" }}
                  sx={{ marginBottom: 5 }}
                  defaultValue={1}
                  step={1}
                  min={0}
                  max={5}
                  valueLabelDisplay="auto"
                />

                <div>
                  <FormControl sx={{ width: "100%" }} required>
                    <FormLabel>Gender</FormLabel>
                    <div className={`mt10 ${style.genderList}`}>
                      <div onClick={(e) => selectGender("Women")}>
                        <WomanIcon
                          className={gender == "Women" ? style.active : null}
                        />
                        <p>Women</p>
                      </div>
                      <div onClick={(e) => selectGender("Man")}>
                        <ManIcon
                          className={gender == "Man" ? style.active : null}
                        />
                        <p>Man</p>
                      </div>
                      <div onClick={(e) => selectGender("Other")}>
                        <TransgenderIcon
                          className={gender == "Other" ? style.active : null}
                        />
                        <p>Other</p>
                      </div>
                    </div>
                  </FormControl>
                </div>
              </FormGroup>
            </Grid>

            <Grid item>
              <Typography gutterBottom>
                Who would you like to insure today?
              </Typography>
              <Box sx={{ display: "flex" }}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "red" }}
                          onChange={handleChange}
                          name="Self"
                        />
                      }
                      label="Self"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "red" }}
                          onChange={handleChange}
                          name="Spouse"
                        />
                      }
                      label="Spouse"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "red" }}
                          onChange={handleChange}
                          name="Son"
                        />
                      }
                      label="Son"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "red" }}
                          onChange={handleChange}
                          name="Daughter"
                        />
                      }
                      label="Daughter"
                    />
                  </FormGroup>
                </FormControl>
                <FormControl
                  required
                  component="fieldset"
                  sx={{ m: 3 }}
                  variant="standard"
                  error={error}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{ color: "red" }}
                          name="Mother"
                        />
                      }
                      label="Mother"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{ color: "red" }}
                          name="Father"
                        />
                      }
                      label="Father"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{ color: "red" }}
                          name="Mother-in-law"
                        />
                      }
                      label="Mother-in-law"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          style={{ color: "red" }}
                          name="Father-in-law"
                        />
                      }
                      label="Father-in-law"
                    />
                  </FormGroup>
                  <FormHelperText>Please select at least one.</FormHelperText>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        )}
      </div>
      {amount && (
        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            color: "black",
            backgroundColor: "white",
          }}
        >
          <Toolbar style={{ "text-align": "right" }}>
            <div className="action-bar">
              <span className="premium">
                <div className="premium-label">Base premium</div>
                <div className="premium-amount">Rs {amount}</div>
              </span>
              <Button
                onClick={getPersonaliseQuote}
                color="error"
                sx={{ borderRadius: "20px" }}
                size="large"
                variant="contained"
              >
                Get Quote
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </section>
  );
}
