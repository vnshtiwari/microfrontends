import './ekyc.scss';
import './home.css';

import { React, useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

export default function Payment({
  nextCallback,
  // ekycData,
}) {
  function loadPayment() {
    addPaytmScript(onScriptLoad);
  }

  function onScriptLoad() {
    // document.querySelector(".order-details").style.display = "none";
    var config = {
      root: '#checkout',
      flow: 'DEFAULT',
      data: {
        orderId: 'sahi-' + sessionStorage.getItem('orderId'),
        token: sessionStorage.getItem('txnToken') /* update token value */,
        tokenType: 'TXN_TOKEN',
        amount: parseInt(sessionStorage.getItem('amount')) /* update amount */,
      },
      merchant: {
        redirect: false,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log('notifyMerchant handler function called');
          console.log('eventName => ', eventName);
          console.log('data => ', data);
        },
        transactionStatus: function (paymentStatus) {
          sessionStorage.setItem(
            'paymentStatus',
            JSON.stringify(paymentStatus)
          );
          const messageEl = document.querySelector('.message');
          const messageNode = document.createTextNode(paymentStatus.RESPMSG);
          if (paymentStatus.STATUS == 'TXN_SUCCESS') {
            //messageEl.style.display = "none";
            //paytmScript.parentNode.removeChild(paytmScript);
            //gtag("event", "payment_done");
            nextCallback();
          } else {
            //setErrMsg(paymentStatus);
          }
          //messageEl.appendChild(messageNode);
          //messageEl.style.display = "block";
        },
      },
    };
    if (window.Paytm && window.Paytm.CheckoutJS) {
      window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
        // initialze configuration using init method
        window.Paytm.CheckoutJS.init(config)
          .then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            window.Paytm.CheckoutJS.invoke();
            setLoader(false);
          })
          .catch(function onError(error) {
            console.log('error => ', error);
          });
      });
    }
  }

  function addPaytmScript(callback) {
    var s = document.createElement('script');
    s.setAttribute(
      'src',
      'https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/NaSqWx02851401972121.js'
    );
    s.onload = callback;
    document.body.appendChild(s);
    setPaytmScript(s);
  }

  function initiateTransaction() {
    setLoader(true);
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `PYTM_SAHI_${randNum}`;
    const textNode = document.createTextNode(orderId);
    // document.getElementById("orderId").appendChild(textNode);
    sessionStorage.setItem('orderId', orderId);

    fetch(
      'https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/payment/initiate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: 'sahi-' + sessionStorage.getItem('orderId'),
          customerId: 441,
          amount: parseInt(sessionStorage.getItem('amount')),
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem('txnToken', data.result.body.txnToken);
        handleClickOpen();
        loadPayment();
      })
      .catch((err) => {
        console.log(err);
        //setErrMsg(err);
      });
  }

  //const navigate = useNavigate();

  useEffect(() => {
    initiateTransaction();
    //gtag("event", "payment_init");
  }, []);

  const [open, setOpen] = useState(false);
  const [paytmScript, setPaytmScript] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isLoader, setLoader] = useState(false);
  return (
    <section class="chat-container">
      <CircularProgress
        sx={{ display: isLoader ? 'block' : 'none' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          color: '#ed1b2e',
        }}
      />
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">Pay for your insurance</h3>

            <div id="checkout"></div>

            {/* <Dialog open={open} onClose={handleClose}>
              <DialogContent id="checkout"></DialogContent>
            </Dialog> */}
          </div>
        </div>
      </span>
    </section>
  );
}
