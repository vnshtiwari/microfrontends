import { useEffect, useState, Suspense } from "react";
import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SendIcon from "@mui/icons-material/Send";
import style from "./basic-info.module.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";

import "./ekyc.scss";
import "./home.css";

export default function Ekyc({
  basicData,
  setBasicData,
  nextCallback
}) {


let [ekycData , setEkycData] = useState({})

  function next() {
    nextCallback()
  }
  const [open, setOpen] = useState(false);

  function fileUpload(type, e) {
    //setLoader(true);
    var data = new FormData();

    data.append("front_part", e.target.files[0]);

    fetch(
      `https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/verify/kyc?customerId=${sessionStorage.getItem(
        "customerId"
      )}`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        ekycData[type] = res.result.data.id_no;

        //setLoader(false);
        setEkycData({ ...ekycData });
        if (res.result.data.id_type == "AADHAAR") {
          let name = res.result.data.name;
          basicData["firstName"] = name.substring(0, name.indexOf(" "));
          basicData["lastName"] = name.substring(
            name.indexOf(" ") + 1,
            name.length
          );
          basicData["dob"] = res.result.data.dob;
          basicData["address"] = res.result.data.address;
          setBasicData({ ...basicData });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleClose = () => {
    setOpen(false);
  };

  const [isLoader, setLoader] = useState(false);
  return (
    <section class="chat-container">
      <CircularProgress
        sx={{ display: isLoader ? "block" : "none" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          color: "#ed1b2e",
        }}
      />
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Provide your identity so that we can know you better
            </h3>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent id="checkout"></DialogContent>
            </Dialog>

            <div className={style.basicDetailContainer}>
              <div class="input-container  text">
                <TextField
                  label="Aadhar Number"
                  variant="outlined"
                  required
                  disabled
                  fullWidth
                  type="number"
                  value={ekycData["aadharEkyc"]}
                  // onBlur={(e) => {
                  //   validate(2, "aadharEkyc");
                  // }}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  onChange={(e) => {
                    ekycData["aadharEkyc"] = e.target.value.slice(0, 12);
                    setEkycData({ ...ekycData });
                  }}
                  // error={error["aadharEkyc"] != null}
                  // helperText={
                  //   error["aadharEkyc"]
                  //     ? error["aadharEkyc"]
                  //     : ekycData["aadharUpload"]
                  //     ? `${ekycData["aadharUpload"]} uploaded successfully`
                  //     : ""
                  // }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FingerprintIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden
                          onChange={(e) => {
                            fileUpload("aadharEkyc", e);
                            // setEkycData({ ...ekycData });
                          }}
                          accept="image/*,pdf;capture=camera"
                          type="file"
                        />
                        <PhotoCamera />
                      </IconButton>
                    ),
                  }}
                />
              </div>
              {/* <div class="input-container  mt30 text">
                <TextField
                  label="PAN Number"
                  variant="outlined"
                  disabled
                  fullWidth
                  value={ekycData["pan"]}
                  spellCheck={false}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  onChange={(e) => {
                    ekycData["pan"] = e.target.value.slice(0, 10).toUpperCase();
                    setEkycData({ ...ekycData });
                  }}
                  onBlur={(e) => {
                    validate(2, "pan");
                  }}
                  error={error["pan"] != null}
                  helperText={
                    error["pan"]
                      ? error["pan"]
                      : ekycData["panUpload"]
                      ? `${ekycData["panUpload"]} uploaded successfully`
                      : ""
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentityIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden
                          onChange={(e) => {
                            fileUpload("pan", e);

                            setEkycData({ ...ekycData });
                          }}
                          accept="image/*, pdf;capture=camera"
                          type="file"
                        />
                        <PhotoCamera />
                      </IconButton>
                    ),
                  }}
                />
              </div> */}
            </div>
          </div>

          <div class="submit-wrap align-center">
            <Button
              disabled={!(ekycData["aadharEkyc"] != "")}
              onClick={next}
              variant="contained"
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
