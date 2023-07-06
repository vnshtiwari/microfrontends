import '../styles/proposal.css';

import React, {
  useEffect,
  useState,
} from 'react';

export default function Proposal({ nextCallback }) {
  let proposerDetailData = JSON.parse(sessionStorage.getItem('proposerDetail'));
  const [proposerDetail, setProposerDetail] = useState({
    address: {},
    contact: {},
  });
  const [step, setStep] = useState('Proposer');
  const [member, setMember] = useState({});
  useEffect(() => {
    let member = sessionStorage.getItem('member');
    let proposerDetailData = JSON.parse(
      sessionStorage.getItem('proposerDetail')
    );
    setMember(JSON.parse(member));
    if(proposerDetailData)
    setProposerDetail({ ...proposerDetailData });
  }, []);

  useEffect(() => {
    let member = sessionStorage.getItem('member');
    setMember(JSON.parse(member));
  }, []);
  return (
    <div id="root">
      <div class="proposalWrapper">
        <div class="wrapperMainSection">
          <div class="wrapperLeftProposal">
            <div class="stepper">
              <ul>
                {['Proposer', 'Member'].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${item === step ? 'current' : ''} `}
                    >
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <section
              className={`${step === 'Proposer' ? '' : 'hide'} proposalSection`}
            >
              <article id="propserDetails">
                <h6 class="sectionHead">Proposer's details</h6>
                <div class="formBoxMain">
                  <div class="nameFieldProposal">
                    <div class="fieldBlockProposal">
                      <div class="field ">
                        <input
                          type="text"
                          name="name"
                          errormessage=""
                          maxlength="50"
                          id="fullName"
                          for="fullName"
                          label="Full Name as per your ID Card"
                          blockclassname="fieldBlockProposal"
                          elementclassname="field"
                          modifierclassname=""
                          class=""
                          autocomplete="off"
                          onChange={(e) => {
                            proposerDetail['name'] = e.target.value;
                            setProposerDetail({ ...proposerDetail });
                            sessionStorage.setItem(
                              'proposerDetail',
                              JSON.stringify(proposerDetail)
                            );
                          }}
                          value={proposerDetail['name']}
                        />
                        <label
                          for="fullName"
                          className={`${
                            !proposerDetail['name'] ? 'nonHoverClass' : ''
                          }`}
                        >
                          <span>Full Name as per your ID Card</span>
                        </label>
                      </div>
                    </div>
                    {/* <div class="declare_box">
                      <div class="">
                        <input
                          type="checkbox"
                          id="fullName_checkbox"
                          class="checkbox_filter"
                          disabled=""
                        />
                        <label for="fullName_checkbox">
                          <div class=" InputLabelBox">
                            Don't have a last name
                          </div>
                        </label>
                      </div>
                    </div> */}
                  </div>
                  <div class="fieldBlockProposal select_proposal">
                    <div class="field">
                      <select id="gender" class="">
                        <option value="0" disabled="" hidden=""></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                      <label class="" for="gender">
                        <span>Select Gender</span>
                      </label>
                    </div>
                  </div>
                  <div class="fieldBlockProposal nameFieldProposal">
                    <div class="fieldBlockProposal">
                      <div class="field ">
                        <input
                          type="text"
                          name="pan"
                          errormessage=""
                          maxlength="10"
                          id="pan"
                          for="pan"
                          label="PAN Card"
                          blockclassname="fieldBlockProposal"
                          elementclassname="field"
                          modifierclassname=""
                          class=""
                          autocomplete="off"
                          onChange={(e) => {
                            proposerDetail['pan'] = e.target.value;
                            setProposerDetail({ ...proposerDetail });
                            sessionStorage.setItem(
                              'proposerDetail',
                              JSON.stringify(proposerDetail)
                            );
                          }}
                          value={proposerDetail['pan']}
                        />
                        <label
                          for="pan"
                          className={`${
                            !proposerDetail['pan'] ? 'nonHoverClass' : ''
                          }`}
                        >
                          <span>PAN Card</span>
                        </label>
                      </div>
                    </div>
                    {/* <div class="declare_box panDeclareWrap">
                      <div class="">
                        <input
                          type="checkbox"
                          id="isPanCardNotAvailable_checkbox"
                          class="checkbox_filter"
                        />
                        <label for="isPanCardNotAvailable_checkbox">
                          <div class=" InputLabelBox">
                            I don't have a PAN card
                          </div>
                        </label>
                      </div>
                    </div> */}
                  </div>
                </div>
              </article>
              <article id="address">
                <h6 class="sectionHead">Address</h6>
                <p class="sectionSubhead">
                  It will be used to send physical copy of your policy
                </p>
                <div class="addressOptionsWrapper">
                  <div class="addressOptionsWrapper__option radios">
                    <div class="formBoxMain">
                      <div class="fieldBlockProposal">
                        <div class="field ">
                          <input
                            type="text"
                            name="addressline1"
                            errormessage=""
                            maxlength="60"
                            id="addressLine1"
                            for="addressLine1"
                            label="Flat/House number, Apartment "
                            blockclassname="fieldBlockProposal"
                            elementclassname="field"
                            modifierclassname=""
                            class=""
                            autocomplete="off"
                            onChange={(e) => {
                              proposerDetail['address']['number'] =
                                e.target.value;
                              setProposerDetail({ ...proposerDetail });
                              sessionStorage.setItem(
                                'proposerDetail',
                                JSON.stringify(proposerDetail)
                              );
                            }}
                            value={proposerDetail['address']['number']}
                          />
                          <label
                            for="addressLine1"
                            className={`${
                              !proposerDetail['address']['number']
                                ? 'nonHoverClass'
                                : ''
                            }`}
                          >
                            <span>Flat/House number, Apartment </span>
                          </label>
                        </div>
                      </div>
                      <div class="fieldBlockProposal">
                        <div class="field ">
                          <input
                            type="text"
                            name="addressline2"
                            errormessage=""
                            maxlength="60"
                            id="addressLine2"
                            for="addressLine2"
                            label="Colony, Street, Sector"
                            blockclassname="fieldBlockProposal"
                            elementclassname="field"
                            modifierclassname=""
                            class=""
                            autocomplete="off"
                            onChange={(e) => {
                              proposerDetail['address']['street'] =
                                e.target.value;
                              setProposerDetail({ ...proposerDetail });
                              sessionStorage.setItem(
                                'proposerDetail',
                                JSON.stringify(proposerDetail)
                              );
                            }}
                            value={proposerDetail['address']['street']}
                          />
                          <label
                            for="addressLine2"
                            className={`${
                              !proposerDetail['address']['street']
                                ? 'nonHoverClass'
                                : ''
                            }`}
                          >
                            <span>Colony, Street, Sector</span>
                          </label>
                        </div>
                      </div>
                      <div class="fieldBlockProposal">
                        <div class="field ">
                          <input
                            type="text"
                            name="landmark"
                            errormessage=""
                            maxlength="29"
                            id="landmark"
                            for="landmark"
                            label="Landmark"
                            blockclassname="fieldBlockProposal"
                            elementclassname="field"
                            modifierclassname=""
                            class=""
                            autocomplete="off"
                            onChange={(e) => {
                              proposerDetail['address']['landmark'] =
                                e.target.value;
                              setProposerDetail({ ...proposerDetail });
                              sessionStorage.setItem(
                                'proposerDetail',
                                JSON.stringify(proposerDetail)
                              );
                            }}
                            value={proposerDetail['address']['landmark']}
                          />
                          <label
                            for="landmark"
                            className={`${
                              !proposerDetail['address']['landmark']
                                ? 'nonHoverClass'
                                : ''
                            }`}
                          >
                            <span>Landmark</span>
                          </label>
                        </div>
                      </div>
                      <div class="fieldBlockProposal">
                        <div class="field disabled">
                          <input
                            type="text"
                            name="city"
                            errormessage=""
                            id="city"
                            for="city"
                            label="City"
                            disabled=""
                            blockclassname="fieldBlockProposal"
                            elementclassname="field"
                            modifierclassname=""
                            class=""
                            autocomplete="off"
                            onChange={(e) => {
                              proposerDetail['address']['city'] =
                                e.target.value;
                              setProposerDetail({ ...proposerDetail });
                              sessionStorage.setItem(
                                'proposerDetail',
                                JSON.stringify(proposerDetail)
                              );
                            }}
                            value={proposerDetail['address']['city']}
                          />
                          <label
                            for="city"
                            className={`${
                              !proposerDetail['address']['city']
                                ? 'nonHoverClass'
                                : ''
                            }`}
                          >
                            <span>City</span>
                          </label>
                        </div>
                      </div>
                      <div class="fieldBlockProposal">
                        <div class="field disabled">
                          <input
                            type="text"
                            name="state"
                            errormessage=""
                            id="state"
                            for="state"
                            label="State"
                            disabled=""
                            blockclassname="fieldBlockProposal"
                            elementclassname="field"
                            modifierclassname=""
                            class=""
                            autocomplete="off"
                            onChange={(e) => {
                              proposerDetail['address']['state'] =
                                e.target.value;
                              setProposerDetail({ ...proposerDetail });
                              sessionStorage.setItem(
                                'proposerDetail',
                                JSON.stringify(proposerDetail)
                              );
                            }}
                            value={proposerDetail['address']['state']}
                          />
                          <label
                            for="state"
                            className={`${
                              !proposerDetail['address']['state']
                                ? 'nonHoverClass'
                                : ''
                            }`}
                          >
                            <span>State</span>
                          </label>
                        </div>
                      </div>
                      <div class="fieldBlockProposal select_proposal">
                        <div class="field disabled">
                          <input
                            type="text"
                            name="pincode"
                            errormessage=""
                            id="pincode"
                            for="pincode"
                            label="pincode"
                            disabled=""
                            blockclassname="fieldBlockProposal"
                            elementclassname="field"
                            modifierclassname=""
                            class=""
                            autocomplete="off"
                            onChange={(e) => {
                              proposerDetail['address']['pincode'] =
                                e.target.value;
                              setProposerDetail({ ...proposerDetail });
                              sessionStorage.setItem(
                                'proposerDetail',
                                JSON.stringify(proposerDetail)
                              );
                            }}
                            value={proposerDetail['address']['pincode']}
                          />
                          <label
                            for="state"
                            className={`${
                              !proposerDetail['address']['pincode']
                                ? 'nonHoverClass'
                                : ''
                            }`}
                          >
                            <span>Pincode</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article id="contactDetails">
                <h4 class="sectionHead">Contact Details</h4>
                <p class="sectionSubhead">
                  It will be used to send digital copy of your policy
                </p>
                <div class="formBoxMain">
                  <div class="fieldBlockProposal">
                    <div class="field ">
                      <input
                        type="text"
                        name="email"
                        errormessage=""
                        maxlength="50"
                        id="email"
                        for="email"
                        label="Email Address"
                        blockclassname="fieldBlockProposal"
                        elementclassname="field"
                        modifierclassname=""
                        class=""
                        autocomplete="off"
                        onChange={(e) => {
                          proposerDetail['contact']['email'] = e.target.value;
                          setProposerDetail({ ...proposerDetail });
                          sessionStorage.setItem(
                            'proposerDetail',
                            JSON.stringify(proposerDetail)
                          );
                        }}
                        value={proposerDetail['contact']['email']}
                      />
                      <label
                        for="email"
                        className={`${
                          !proposerDetail['contact']['email']
                            ? 'nonHoverClass'
                            : ''
                        }`}
                      >
                        <span>Email Address</span>
                      </label>
                    </div>
                  </div>
                  <div class="fieldBlockProposal ">
                    <div class="field disabled">
                      <input
                        type="text"
                        name="mobileNo"
                        errormessage=""
                        maxlength="10"
                        minlength="10"
                        id="mobileNo"
                        for="mobileNo"
                        label="Mobile"
                        disabled=""
                        inputmode="numeric"
                        blockclassname="fieldBlockProposal "
                        elementclassname="field"
                        modifierclassname=""
                        class=""
                        autocomplete="off"
                        onChange={(e) => {
                          proposerDetail['contact']['mobile'] = e.target.value;
                          setProposerDetail({ ...proposerDetail });
                          sessionStorage.setItem(
                            'proposerDetail',
                            JSON.stringify(proposerDetail)
                          );
                        }}
                        value={proposerDetail['contact']['mobile']}
                      />
                      <label
                        for="mobileNo"
                        className={`${
                          !proposerDetail['contact']['mobile']
                            ? 'nonHoverClass'
                            : ''
                        }`}
                      >
                        <span>Mobile</span>
                      </label>
                    </div>
                  </div>
                  <div class="fldInfoColWrap">
                    <div class="fieldBlockProposal ">
                      <div class="field ">
                        <input
                          type="text"
                          name="emergencyMobile"
                          errormessage=""
                          maxlength="10"
                          id="emergencyMobile"
                          for="emergencyMobile"
                          label="Emergency Mobile No."
                          inputmode="numeric"
                          blockclassname="fieldBlockProposal "
                          elementclassname="field"
                          modifierclassname=""
                          class=""
                          autocomplete="off"
                          onChange={(e) => {
                            proposerDetail['contact']['em_mobile'] =
                              e.target.value;
                            setProposerDetail({ ...proposerDetail });
                            sessionStorage.setItem(
                              'proposerDetail',
                              JSON.stringify(proposerDetail)
                            );
                          }}
                          value={proposerDetail['contact']['em_mobile']}
                        />
                        <label
                          for="emergencyMobile"
                          className={`${
                            !proposerDetail['contact']['em_mobile']
                              ? 'nonHoverClass'
                              : ''
                          }`}
                        >
                          <span>Emergency Mobile No.</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <div class="buttonStickyMobile">
                <button
                  onClick={() => setStep('Member')}
                  class="primaryButtonStyle btn"
                >
                  Continue
                </button>
              </div>
            </section>
            <section
              className={`${step === 'Member' ? '' : 'hide'} proposalSection`}
            >
              {Object.entries(member).map((item) => {
                return item[0] == 'Son' || item[0] == 'Daughter' ? (
                  item[1].map((sd, index) => {
                    return (
                      <article id="member1" key={item[0] + '-' + (index + 1)}>
                        <h4 class="sectionHead text-capitalize">
                          {item[0] + '-' + (index + 1)}
                        </h4>
                        <p class="sectionSubhead">
                          Give us the details for your{' '}
                          {item[0] + '-' + (index + 1)}
                        </p>
                        <div class="formBoxMain">
                          <div class="nameFieldProposal">
                            <div class="fieldBlockProposal">
                              <div class="field ">
                                <input
                                  type="text"
                                  name="name"
                                  errormessage=""
                                  maxlength="50"
                                  id="fullName_156067179"
                                  for="fullName_156067179"
                                  label={`Enter ${item[0]}-${
                                    index + 1
                                  }'s Full Name`}
                                  blockclassname="fieldBlockProposal"
                                  elementclassname="field"
                                  modifierclassname=""
                                  class=""
                                  autocomplete="off"
                                  onChange={(e) => {
                                    member[item[0]][index]['name'] =
                                      e.target.value;
                                    setMember({ ...member });
                                  }}
                                  value={member[item[0]][index]['name']}
                                />
                                <label
                                  for="fullName_156067179"
                                  className={`${
                                    !member[item[0]][index]['name']
                                      ? 'nonHoverClass'
                                      : ''
                                  }`}
                                >
                                  <span>
                                    Enter {item[0] + '-' + (index + 1)}'s Full
                                    Name
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="fieldBlockProposal">
                            <div class="field ">
                              <input
                                type="text"
                                name="dob"
                                id="dob_156067179"
                                for="dob_156067179"
                                maxlength="10"
                                minlength="10"
                                label="D.O.B (DD-MM-YYYY)"
                                errormessage=""
                                inputmode="numeric"
                                blockclassname="fieldBlockProposal"
                                elementclassname="field"
                                modifierclassname=""
                                class=""
                                autocomplete="off"
                                onChange={(e) => {
                                  member[item[0]][index]['dob'] =
                                    e.target.value;
                                  setMember({ ...member });
                                }}
                                value={member[item[0]][index]['dob']}
                              />
                              <label
                                for="dob_156067179"
                                className={`${
                                  !member[item[0]][index]['dob']
                                    ? 'nonHoverClass'
                                    : ''
                                }`}
                              >
                                <span>D.O.B (DD-MM-YYYY)</span>
                              </label>
                            </div>
                          </div>
                          <div class="fieldBlockProposal fieldBlockHeight">
                            <div class="flexRow">
                              <div class="fieldBlockProposal select_proposal">
                                <div class="field">
                                  <select
                                    onChange={(e) => {
                                      member[item[0]][index]['heightF'] =
                                        e.target.value;
                                      setMember({ ...member });
                                    }}
                                    id="feet_156067179"
                                    class=""
                                  >
                                    <option
                                      value="0"
                                      disabled=""
                                      hidden=""
                                    ></option>
                                    <option value="12">1 feet</option>
                                    <option value="24">2 feet</option>
                                    <option value="36">3 feet</option>
                                    <option value="48">4 feet</option>
                                    <option value="60">5 feet</option>
                                    <option value="72">6 feet</option>
                                    <option value="84">7 feet</option>
                                    <option value="96">8 feet</option>
                                  </select>
                                  <label
                                    className={`${
                                      !member[item[0]][index]['heightF']
                                        ? 'nonHoverClass'
                                        : ''
                                    }`}
                                    for="feet_156067179"
                                  >
                                    <span>Height (Feet)</span>
                                  </label>
                                </div>
                              </div>
                              <div class="fieldBlockProposal select_proposal">
                                <div class="field">
                                  <select
                                    id="inch_156067179"
                                    onChange={(e) => {
                                      member[item[0]][index]['heightI'] =
                                        e.target.value;
                                      setMember({ ...member });
                                    }}
                                    class=""
                                  >
                                    <option
                                      value="-1"
                                      disabled=""
                                      hidden=""
                                    ></option>
                                    <option value="0">0 inch</option>
                                    <option value="1">1 inch</option>
                                    <option value="2">2 inch</option>
                                    <option value="3">3 inch</option>
                                    <option value="4">4 inch</option>
                                    <option value="5">5 inch</option>
                                    <option value="6">6 inch</option>
                                    <option value="7">7 inch</option>
                                    <option value="8">8 inch</option>
                                    <option value="9">9 inch</option>
                                    <option value="10">10 inch</option>
                                    <option value="11">11 inch</option>
                                  </select>
                                  <label
                                    className={`${
                                      !member[item[0]][index]['heightI']
                                        ? 'nonHoverClass'
                                        : ''
                                    }`}
                                    for="inch_156067179"
                                  >
                                    <span>Height (Inches)</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="fieldBlockProposal">
                            <div class="field ">
                              <input
                                type="text"
                                name="weight"
                                id="weight_156067179"
                                for="weight_156067179"
                                maxlength="3"
                                label="Weight (KG)"
                                errormessage=""
                                inputmode="numeric"
                                blockclassname="fieldBlockProposal"
                                elementclassname="field"
                                modifierclassname=""
                                class=""
                                autocomplete="off"
                                onChange={(e) => {
                                  member[item[0]][index]['weight'] =
                                    e.target.value;
                                  setMember({ ...member });
                                }}
                                value={member[item[0]][index]['weight']}
                              />
                              <label
                                for="weight_156067179"
                                class="nonHoverClass"
                              >
                                <span>Weight (KG)</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <article id="member1" key={item[0]}>
                    <h4 class="sectionHead text-capitalize">{item[0]}</h4>
                    <p class="sectionSubhead">
                      Give us the details for your {item[0]}
                    </p>
                    <div class="formBoxMain">
                      <div class="nameFieldProposal">
                        <div class="fieldBlockProposal">
                          <div class="field ">
                            <input
                              type="text"
                              name="name"
                              errormessage=""
                              maxlength="50"
                              id="fullName_156067179"
                              for="fullName_156067179"
                              label={`Enter ${item[0]}'s Full Name`}
                              blockclassname="fieldBlockProposal"
                              elementclassname="field"
                              modifierclassname=""
                              class=""
                              autocomplete="off"
                              onChange={(e) => {
                                member[item[0]]['name'] = e.target.value;
                                setMember({ ...member });
                              }}
                              value={member[item[0]]['name']}
                            />
                            <label
                              for="fullName_156067179"
                              className={`${
                                !member[item[0]]['name'] ? 'nonHoverClass' : ''
                              }`}
                            >
                              <span>Enter {item[0]}'s Full Name</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="fieldBlockProposal">
                        <div class="field ">
                          <input
                            type="text"
                            name="dob"
                            id="dob_156067179"
                            for="dob_156067179"
                            maxlength="10"
                            minlength="10"
                            label="D.O.B (DD-MM-YYYY)"
                            errormessage=""
                            inputmode="numeric"
                            blockclassname="fieldBlockProposal"
                            elementclassname="field"
                            modifierclassname=""
                            class=""
                            autocomplete="off"
                            onChange={(e) => {
                              member[item[0]]['dob'] = e.target.value;
                              setMember({ ...member });
                            }}
                            value={member[item[0]]['dob']}
                          />
                          <label
                            for="dob_156067179"
                            className={`${
                              !member[item[0]]['dob'] ? 'nonHoverClass' : ''
                            }`}
                          >
                            <span>D.O.B (DD-MM-YYYY)</span>
                          </label>
                        </div>
                      </div>
                      <div class="fieldBlockProposal fieldBlockHeight">
                        <div class="flexRow">
                          <div class="fieldBlockProposal select_proposal">
                            <div class="field">
                              <select
                                onChange={(e) => {
                                  member[item[0]]['heightF'] = e.target.value;
                                  setMember({ ...member });
                                }}
                                id="feet_156067179"
                                class=""
                              >
                                <option
                                  value="0"
                                  disabled=""
                                  hidden=""
                                ></option>
                                <option value="12">1 feet</option>
                                <option value="24">2 feet</option>
                                <option value="36">3 feet</option>
                                <option value="48">4 feet</option>
                                <option value="60">5 feet</option>
                                <option value="72">6 feet</option>
                                <option value="84">7 feet</option>
                                <option value="96">8 feet</option>
                              </select>
                              <label
                                className={`${
                                  !member[item[0]]['heightF']
                                    ? 'nonHoverClass'
                                    : ''
                                }`}
                                for="feet_156067179"
                              >
                                <span>Height (Feet)</span>
                              </label>
                            </div>
                          </div>
                          <div class="fieldBlockProposal select_proposal">
                            <div class="field">
                              <select
                                onChange={(e) => {
                                  member[item[0]]['heightI'] = e.target.value;
                                  setMember({ ...member });
                                }}
                                id="inch_156067179"
                                class=""
                              >
                                <option
                                  value="-1"
                                  disabled=""
                                  hidden=""
                                ></option>
                                <option value="0">0 inch</option>
                                <option value="1">1 inch</option>
                                <option value="2">2 inch</option>
                                <option value="3">3 inch</option>
                                <option value="4">4 inch</option>
                                <option value="5">5 inch</option>
                                <option value="6">6 inch</option>
                                <option value="7">7 inch</option>
                                <option value="8">8 inch</option>
                                <option value="9">9 inch</option>
                                <option value="10">10 inch</option>
                                <option value="11">11 inch</option>
                              </select>
                              <label
                                className={`${
                                  !member[item[0]]['heightI']
                                    ? 'nonHoverClass'
                                    : ''
                                }`}
                                for="inch_156067179"
                              >
                                <span>Height (Inches)</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="fieldBlockProposal">
                        <div class="field ">
                          <input
                            type="text"
                            name="weight"
                            id="weight_156067179"
                            for="weight_156067179"
                            maxlength="3"
                            label="Weight (KG)"
                            errormessage=""
                            inputmode="numeric"
                            blockclassname="fieldBlockProposal"
                            elementclassname="field"
                            modifierclassname=""
                            class=""
                            autocomplete="off"
                            onChange={(e) => {
                              member[item[0]]['weight'] = e.target.value;
                              setMember({ ...member });
                            }}
                            value={member[item[0]]['weight']}
                          />
                          <label
                            for="weight_156067179"
                            className={`${
                              !member[item[0]]['weight'] ? 'nonHoverClass' : ''
                            }`}
                          >
                            <span>Weight (KG)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
              <div class="buttonStickyMobile">
                <button
                  onClick={() => nextCallback()}
                  class="primaryButtonStyle btn"
                >
                  Proceed
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
