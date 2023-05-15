import { useEffect, useState } from 'react';
import '../styles/quote/style/quote.css';
import '../styles/quote/style/common.css';
import { mobileCheck } from '../utility/common';

export default function Quote({ nextCallback }) {
  const [step, setStep] = useState(1);
  const [member, setMember] = useState({});
  const [city, setCity] = useState(null);
  const [basicInfo, setbasicInfo] = useState({});


  const [option, setOption] = useState(null);

  useEffect(() => {
    let str = JSON.stringify(member);
    sessionStorage.setItem('member', str);
  }, [member]);

  function selectMember(item) {
    if (!member[item]) {
      if (item === 'Son' || item === 'Daughter') {
        member[item] = [{}];
        setOverlayOpen(true);
        setOption(item);
      } else member[item] = {};
    } else delete member[item];

    setMember({ ...member });
  }

  function setMemberCount(item, option) {
    if (option === 'decrease') {
      if (member[item].length > 1) member[item].pop();
    } else {
      member[item].push([{}]);
    }
    selectMember({ ...member });
  }

  function ageOptions(){
    let elem = []
    for(let i=18; i<100;i++)
    {
      elem.push(<option value={i}>{i} Years</option>)
    }
    return elem;
  }

  const [isOverlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      <div
        class="health_v10 healthCj_form"
        id="healthStepCJ"
        data-supplierid="0"
        data-groupid="3"
        data-item-title="Health Insurance Plans for Family"
      >
        <div class="grid">
          <div class="health-insurance-bu withrating">
            <div class="health-insurance-bu-right showForm" id="health_bu">
              <div class="orderChange tag">
                <div class="common_heading graphic">
                  <div class="back-step icons-bu"> Back</div>
                  <div class="text">
                    Find top plans with up to <span>25% discount**</span>
                  </div>
                </div>
                <div class="wizard">
                  <div
                    class="wizard-bar"
                    style={{ width: 0 }}
                    data-wizard-bar=""
                  ></div>
                  <ul class="wizard-list">
                    {[1, 2, 3, 4].map((item) => {
                      return (
                        <li
                          className={`wizard-item  ${
                            step === item ? 'active' : ''
                          } ${step > item ? 'checked' : ''}`}
                          data-wizard-item=""
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div
                class={`health-insurance-step-1 ${step === 1 ? '' : 'hide'}`}
              >
                <p>Who would you like to insure?</p>

                <div class="member-for-insurance">
                  {[
                    'Self',
                    'Spouse',
                    'Son',
                    'Daughter',
                    'Father',
                    'Mother',
                  ].map((item) => {
                    return (
                      <li
                        onClick={() => selectMember(item)}
                        class={`form-group ${member[item] ? 'selected' : ''}`}
                      >
                        <input
                          type="checkbox"
                          id={item}
                          name="profile"
                          value={item}
                          checked={member[item] ? true : false}
                        />
                        <label data-id={item}>
                          <span class="chkbox"></span>
                          {item}
                          {mobileCheck() && <i>{member[item]?.length}</i>}
                        </label>
                        {(item === 'Son' || item === 'Daughter') && (
                          <div class="addmore">
                            <span
                              onClick={(e) => {
                                setMemberCount(item, 'decrease');
                                e.stopPropagation();
                              }}
                              class="minus"
                            ></span>
                            <input
                              type="text"
                              value={member[item]?.length}
                              readonly=""
                            />
                            <span
                              onClick={(e) => {
                                setMemberCount(item, 'increase');
                                e.stopPropagation();
                              }}
                              class="plus"
                            ></span>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </div>
                <div
                  class="errMember"
                  id="errorHighlight"
                  style={{ display: 'none' }}
                ></div>

                <span class="termCondition">
                  By clicking on “Continue”, you agree to our{' '}
                  <a
                    href=""
                    target="_blank"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href=""
                    target="_blank"
                  >
                    Terms of use
                  </a>{' '}
                </span>
              </div>

              <div
                class={`health-insurance-step-2 ${step === 2 ? '' : 'hide'}`}
                id="step_2"
              >
                <ul class="member-info member-age-box">
                  {Object.entries(member).map(item=> {
                    return            item[0]=='Son' || item[0] == 'Daughter' ? item[1].map((sd ,index) => { 
                      return <li class="fieldWrapper">
                    <div id="name_feild" class="formInput">
                      <select
                        class="fullWidht chkFamilyMembers labelshow"
                        data-id="Self"
                        name="member_age"
                      >
                        <option value="" hidden=""></option>
                        {ageOptions()}
                        
                      </select>
                      <label class="feildLable">{item[0] +'-' + (index+1)} age</label>
                    </div>
                  </li>  })  :<li class="fieldWrapper">
                    <div id="name_feild" class="formInput">
                      <select
                        class="fullWidht chkFamilyMembers labelshow"
                        data-id="Self"
                        name="member_age"
                      >
                        <option value="" hidden=""></option>
                        {ageOptions()}
                        
                      </select>
                      <label class="feildLable">{item[0]} age</label>
                    </div>
                  </li>
                  })}
                </ul>{' '}
                <div class="errMemberAge"></div>
              </div>

              <div
                class={`health-insurance-step-3 ${step === 3 ? '' : 'hide'}`}
                id="step_3"
              >
                <ul class="country-selection">
                  <li class="pos-rel fieldWrapper filled">
                    <div class="closeWrap">
                      <div class="field formInput">
                        <input
                          type="text"
                          id="healthCityPincode"
                          class={`input_box healthCityPincode ui-autocomplete-input fullWidht ${city?'labelshow':''}`}
                          data-cityid=""
                          data-pincode="0"
                          autocomplete="off"
                          value={city}
                          onChange={(e)=>{
                            setCity(e.target.value)
                          }}
                        />
                        <label class="feildLable">
                          Enter City Name or Pincode
                        </label>
                        <ul
                          class="popularCity"
                          onclick="fncSelectPopularCity()"
                        ></ul>
                      </div>
                      <span
                        class="cityclose"
                        style={{ display: 'none' }}
                      ></span>
                    </div>

                    <div class="err"></div>
                  </li>
                </ul>
                {/* <p class="label city">Popular Cities</p> */}
                {/* <div class="radio_pills dis_popular_city">
                  <label>
                    <input
                      type="radio"
                      data-cityid="551"
                      data-stateid="35"
                      data-pincode="110001"
                      value="Delhi(Delhi)"
                      name="city"
                      id="city_551"
                    />
                    <span>Delhi</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="207"
                      data-stateid="16"
                      data-pincode="560001"
                      value="Bengaluru(Karnataka)"
                      name="city"
                      id="city_207"
                      checked="checked"
                    />
                    <span>Bengaluru</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="309"
                      data-stateid="20"
                      data-pincode="411019"
                      value="Pune(Maharashtra)"
                      name="city"
                      id="city_309"
                    />
                    <span>Pune</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="302"
                      data-stateid="20"
                      data-pincode="400037"
                      value="Mumbai(Maharashtra)"
                      name="city"
                      id="city_302"
                    />
                    <span>Mumbai</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="837"
                      data-stateid="37"
                      data-pincode="500001"
                      value="Hyderabad(Telangana)"
                      name="city"
                      id="city_837"
                    />
                    <span>Hyderabad</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="555"
                      data-stateid="36"
                      data-pincode="122001"
                      value="Gurgaon(NCR)"
                      name="city"
                      id="city_555"
                    />
                    <span>Gurgaon</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="316"
                      data-stateid="20"
                      data-pincode="421506"
                      value="Thane(Maharashtra)"
                      name="city"
                      id="city_316"
                    />
                    <span>Thane</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="554"
                      data-stateid="36"
                      data-pincode="245101"
                      value="Ghaziabad(NCR)"
                      name="city"
                      id="city_554"
                    />
                    <span>Ghaziabad</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="499"
                      data-stateid="32"
                      data-pincode="226001"
                      value="Lucknow(Uttar Pradesh)"
                      name="city"
                      id="city_499"
                    />
                    <span>Lucknow</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      data-cityid="103"
                      data-stateid="11"
                      data-pincode="380001"
                      value="Ahmedabad(Gujarat)"
                      name="city"
                      id="city_103"
                    />
                    <span>Ahmedabad</span>
                  </label>
                </div> */}
              </div>

              <div
                class={`health-insurance-step-4 ${step === 4 ? '' : 'hide'}`}
                id="step_4"
              >
                <div class="gender-selection">
                  {['male','female'].map((item, index)=>{
                    return                   <div className={`form-gender gender ${basicInfo['gender'] === item ? 'selected':''}`}>
                    <input
                      type="radio"
                      value={index+1}
                      name="radio-group-gender"
                      checked={basicInfo['gender'] === item }
                      class="radio-group-gender"
                      id={item}
                      onClick={()=>{
                        basicInfo['gender'] = item;
                        setbasicInfo({...basicInfo})
                      }}
                    />
                    <label for={item}>
                      <span class={item}></span>{item}
                    </label>
                  </div>
                  })}
                </div>
                <ul class="member-info">
                  <li class="fieldWrapper" id="person_name">
                    <div id="name_feild" class="formInput">
                      <input
                        type="text"
                        className={`fullWidht txtName ${basicInfo['name'] ?"labelshow":''}`}
                        maxlength="90"
                        value={basicInfo['name']}
                        onChange={(e)=>{
                          basicInfo['name'] = e.target.value;
                          setbasicInfo({...basicInfo})
                        }}
                      />

                      <label class="feildLable">Enter full name</label>
                    </div>
                    <div class="err"></div>
                  </li>
                  <li
                    class="registration_check fieldWrapper"
                    id="registration_check"
                  >
                    <div class="formInput round">
                      <div class="countybox">
                        <div class="country-flag" id="country-ddp">
                          +91
                        </div>
                        <ul class="flags">
                          <li
                            class="selected"
                            data-country-code="91"
                            data-country-id="392"
                          >
                            <div class="cname">India (+91)</div>
                          </li>
                          <li data-country-code="971" data-country-id="375">
                            <div class="cname">United Arab Emirates (+971)</div>
                          </li>
                          <li data-country-code="61" data-country-id="24">
                            <div class="cname">Australia (+61)</div>
                          </li>
                          <li data-country-code="973" data-country-id="35">
                            <div class="cname">Bahrain (+973)</div>
                          </li>
                          <li data-country-code="62" data-country-id="164">
                            <div class="cname">Indonesia (+62)</div>
                          </li>
                          <li data-country-code="965" data-country-id="187">
                            <div class="cname">Kuwait (+965)</div>
                          </li>
                          <li data-country-code="60" data-country-id="217">
                            <div class="cname">Malaysia (+60)</div>
                          </li>
                          <li data-country-code="968" data-country-id="271">
                            <div class="cname">Oman (+968)</div>
                          </li>
                          <li data-country-code="974" data-country-id="288">
                            <div class="cname">Qatar (+974)</div>
                          </li>
                          <li data-country-code="966" data-country-id="308">
                            <div class="cname">Saudi Arabia (+966)</div>
                          </li>
                          <li data-country-code="65" data-country-id="313">
                            <div class="cname">Singapore (+65)</div>
                          </li>
                          <li data-country-code="44" data-country-id="376">
                            <div class="cname">United Kingdom (+44)</div>
                          </li>
                          <li data-country-code="1" data-country-id="378">
                            <div class="cname">Usa/canada (+1)</div>
                          </li>
                          <li data-country-code="93" data-country-id="1">
                            <div class="cname">Afghanistan (+93)</div>
                          </li>
                          <li data-country-code="355" data-country-id="5">
                            <div class="cname">Albania (+355)</div>
                          </li>
                          <li data-country-code="213" data-country-id="6">
                            <div class="cname">Algeria (+213)</div>
                          </li>
                          <li data-country-code="1684" data-country-id="8">
                            <div class="cname">American Samoa (+1684)</div>
                          </li>
                          <li data-country-code="376" data-country-id="10">
                            <div class="cname">Andorra (+376)</div>
                          </li>
                          <li data-country-code="244" data-country-id="11">
                            <div class="cname">Angola (+244)</div>
                          </li>
                          <li data-country-code="1264" data-country-id="12">
                            <div class="cname">Anguilla (+1264)</div>
                          </li>
                          <li data-country-code="6721" data-country-id="13">
                            <div class="cname">Antarctica (+6721)</div>
                          </li>
                          <li data-country-code="1268" data-country-id="14">
                            <div class="cname">
                              Antigua &amp; Barbuda (+1268)
                            </div>
                          </li>
                          <li data-country-code="599" data-country-id="15">
                            <div class="cname">Antilles Netherlands (+599)</div>
                          </li>
                          <li data-country-code="54" data-country-id="16">
                            <div class="cname">Argentina (+54)</div>
                          </li>
                          <li data-country-code="374" data-country-id="17">
                            <div class="cname">Armenia (+374)</div>
                          </li>
                          <li data-country-code="297" data-country-id="21">
                            <div class="cname">Aruba (+297)</div>
                          </li>
                          <li data-country-code="247" data-country-id="22">
                            <div class="cname">Ascension Island (+247)</div>
                          </li>
                          <li data-country-code="874" data-country-id="23">
                            <div class="cname">Atlantic West (sat) (+874)</div>
                          </li>
                          <li data-country-code="43" data-country-id="26">
                            <div class="cname">Austria (+43)</div>
                          </li>
                          <li data-country-code="994" data-country-id="33">
                            <div class="cname">Azerbaijan (+994)</div>
                          </li>
                          <li data-country-code="1242" data-country-id="34">
                            <div class="cname">Bahamas (+1242)</div>
                          </li>
                          <li data-country-code="880" data-country-id="36">
                            <div class="cname">Bangladesh (+880)</div>
                          </li>
                          <li data-country-code="1246" data-country-id="37">
                            <div class="cname">Barbados (+1246)</div>
                          </li>
                          <li data-country-code="375" data-country-id="40">
                            <div class="cname">Belarus (+375)</div>
                          </li>
                          <li data-country-code="32" data-country-id="41">
                            <div class="cname">Belgium (+32)</div>
                          </li>
                          <li data-country-code="501" data-country-id="44">
                            <div class="cname">Belize (+501)</div>
                          </li>
                          <li data-country-code="229" data-country-id="45">
                            <div class="cname">Benin (+229)</div>
                          </li>
                          <li data-country-code="1441" data-country-id="46">
                            <div class="cname">Bermuda (+1441)</div>
                          </li>
                          <li data-country-code="975" data-country-id="47">
                            <div class="cname">Bhutan (+975)</div>
                          </li>
                          <li data-country-code="591" data-country-id="48">
                            <div class="cname">Bolivia (+591)</div>
                          </li>
                          <li data-country-code="387" data-country-id="50">
                            <div class="cname">Bosnia (+387)</div>
                          </li>
                          <li data-country-code="267" data-country-id="51">
                            <div class="cname">Botswana (+267)</div>
                          </li>
                          <li data-country-code="55" data-country-id="52">
                            <div class="cname">Brazil (+55)</div>
                          </li>
                          <li data-country-code="1284" data-country-id="54">
                            <div class="cname">
                              British Virgin Island (+1284)
                            </div>
                          </li>
                          <li data-country-code="673" data-country-id="55">
                            <div class="cname">Brunei (+673)</div>
                          </li>
                          <li data-country-code="359" data-country-id="57">
                            <div class="cname">Bulgaria (+359)</div>
                          </li>
                          <li data-country-code="226" data-country-id="59">
                            <div class="cname">Burkina Fasso (+226)</div>
                          </li>
                          <li data-country-code="257" data-country-id="60">
                            <div class="cname">Burundi (+257)</div>
                          </li>
                          <li data-country-code="855" data-country-id="61">
                            <div class="cname">Cambodia (+855)</div>
                          </li>
                          <li data-country-code="237" data-country-id="62">
                            <div class="cname">Cameroon (+237)</div>
                          </li>
                          <li data-country-code="1867" data-country-id="63">
                            <div class="cname">Canada (+1867)</div>
                          </li>
                          <li data-country-code="238" data-country-id="64">
                            <div class="cname">Cape Verde Island (+238)</div>
                          </li>
                          <li data-country-code="1345" data-country-id="65">
                            <div class="cname">Cayman Island (+1345)</div>
                          </li>
                          <li data-country-code="236" data-country-id="66">
                            <div class="cname">Central African Rep (+236)</div>
                          </li>
                          <li data-country-code="235" data-country-id="69">
                            <div class="cname">Chad(republic) (+235)</div>
                          </li>
                          <li data-country-code="56" data-country-id="70">
                            <div class="cname">Chile (+56)</div>
                          </li>
                          <li data-country-code="86" data-country-id="72">
                            <div class="cname">China (+86)</div>
                          </li>
                          <li data-country-code="57" data-country-id="73">
                            <div class="cname">Colombia (+57)</div>
                          </li>
                          <li data-country-code="269" data-country-id="74">
                            <div class="cname">Comoros (+269)</div>
                          </li>
                          <li data-country-code="242" data-country-id="75">
                            <div class="cname">
                              Congo Peoples Repubil (+242)
                            </div>
                          </li>
                          <li data-country-code="682" data-country-id="77">
                            <div class="cname">Cook Island (+682)</div>
                          </li>
                          <li data-country-code="506" data-country-id="78">
                            <div class="cname">Cost Rica (+506)</div>
                          </li>
                          <li data-country-code="385" data-country-id="79">
                            <div class="cname">Croatia (+385)</div>
                          </li>
                          <li data-country-code="53" data-country-id="83">
                            <div class="cname">Cuba (+53)</div>
                          </li>
                          <li data-country-code="357" data-country-id="86">
                            <div class="cname">Cyprus (+357)</div>
                          </li>
                          <li data-country-code="420" data-country-id="89">
                            <div class="cname">Czech (+420)</div>
                          </li>
                          <li data-country-code="243" data-country-id="91">
                            <div class="cname">Dem. Rep. Of Congo (+243)</div>
                          </li>
                          <li data-country-code="45" data-country-id="92">
                            <div class="cname">Denmark (+45)</div>
                          </li>
                          <li data-country-code="246" data-country-id="96">
                            <div class="cname">Diego Garcia (+246)</div>
                          </li>
                          <li data-country-code="253" data-country-id="97">
                            <div class="cname">Djibouti (+253)</div>
                          </li>
                          <li data-country-code="1767" data-country-id="98">
                            <div class="cname">Dominica (+1767)</div>
                          </li>
                          <li data-country-code="1829" data-country-id="99">
                            <div class="cname">Dominica Rep (+1829)</div>
                          </li>
                          <li data-country-code="20" data-country-id="101">
                            <div class="cname">Egypt (+20)</div>
                          </li>
                          <li data-country-code="503" data-country-id="102">
                            <div class="cname">El Salvador Republic (+503)</div>
                          </li>
                          <li data-country-code="593" data-country-id="103">
                            <div class="cname">Equador (+593)</div>
                          </li>
                          <li data-country-code="240" data-country-id="104">
                            <div class="cname">Equatorial Guinea (+240)</div>
                          </li>
                          <li data-country-code="291" data-country-id="105">
                            <div class="cname">Eritrea (+291)</div>
                          </li>
                          <li data-country-code="372" data-country-id="108">
                            <div class="cname">Estonia (+372)</div>
                          </li>
                          <li data-country-code="251" data-country-id="109">
                            <div class="cname">Ethiopia (+251)</div>
                          </li>
                          <li data-country-code="298" data-country-id="110">
                            <div class="cname">Faeroe (+298)</div>
                          </li>
                          <li data-country-code="500" data-country-id="111">
                            <div class="cname">Falkland Island (+500)</div>
                          </li>
                          <li data-country-code="679" data-country-id="112">
                            <div class="cname">Fiji (+679)</div>
                          </li>
                          <li data-country-code="358" data-country-id="113">
                            <div class="cname">Finland (+358)</div>
                          </li>
                          <li data-country-code="33" data-country-id="117">
                            <div class="cname">France (+33)</div>
                          </li>
                          <li data-country-code="594" data-country-id="123">
                            <div class="cname">French Guyana (+594)</div>
                          </li>
                          <li data-country-code="689" data-country-id="124">
                            <div class="cname">French Polynesia (+689)</div>
                          </li>
                          <li data-country-code="241" data-country-id="125">
                            <div class="cname">Gabon (+241)</div>
                          </li>
                          <li data-country-code="220" data-country-id="126">
                            <div class="cname">Gambia (+220)</div>
                          </li>
                          <li data-country-code="995" data-country-id="127">
                            <div class="cname">Georgia (+995)</div>
                          </li>
                          <li data-country-code="49" data-country-id="132">
                            <div class="cname">Germany (+49)</div>
                          </li>
                          <li data-country-code="233" data-country-id="137">
                            <div class="cname">Ghana (+233)</div>
                          </li>
                          <li data-country-code="350" data-country-id="139">
                            <div class="cname">Gibralter (+350)</div>
                          </li>
                          <li data-country-code="30" data-country-id="140">
                            <div class="cname">Greece (+30)</div>
                          </li>
                          <li data-country-code="299" data-country-id="144">
                            <div class="cname">Greenland (+299)</div>
                          </li>
                          <li data-country-code="1473" data-country-id="145">
                            <div class="cname">Grenada (+1473)</div>
                          </li>
                          <li data-country-code="590" data-country-id="146">
                            <div class="cname">Guadeloupe (+590)</div>
                          </li>
                          <li data-country-code="671" data-country-id="147">
                            <div class="cname">Guam (+671)</div>
                          </li>
                          <li data-country-code="502" data-country-id="148">
                            <div class="cname">Guatemala (+502)</div>
                          </li>
                          <li data-country-code="245" data-country-id="149">
                            <div class="cname">
                              Guinea Bissau Repubil (+245)
                            </div>
                          </li>
                          <li data-country-code="224" data-country-id="150">
                            <div class="cname">Guinea Republic (+224)</div>
                          </li>
                          <li data-country-code="592" data-country-id="151">
                            <div class="cname">Guyana Republic (+592)</div>
                          </li>
                          <li data-country-code="509" data-country-id="152">
                            <div class="cname">Haiti Republic (+509)</div>
                          </li>
                          <li data-country-code="504" data-country-id="153">
                            <div class="cname">Honduras Republic (+504)</div>
                          </li>
                          <li data-country-code="852" data-country-id="154">
                            <div class="cname">Hongkong (+852)</div>
                          </li>
                          <li data-country-code="36" data-country-id="155">
                            <div class="cname">Hungary (+36)</div>
                          </li>
                          <li data-country-code="354" data-country-id="161">
                            <div class="cname">Iceland (+354)</div>
                          </li>
                          <li data-country-code="882" data-country-id="162">
                            <div class="cname">Immersat (+882)</div>
                          </li>
                          <li data-country-code="98" data-country-id="165">
                            <div class="cname">Iran (+98)</div>
                          </li>
                          <li data-country-code="964" data-country-id="166">
                            <div class="cname">Iraq (+964)</div>
                          </li>
                          <li data-country-code="353" data-country-id="167">
                            <div class="cname">Ireland (+353)</div>
                          </li>
                          <li data-country-code="972" data-country-id="172">
                            <div class="cname">Israel (+972)</div>
                          </li>
                          <li data-country-code="39" data-country-id="173">
                            <div class="cname">Italy (+39)</div>
                          </li>
                          <li data-country-code="225" data-country-id="177">
                            <div class="cname">Ivory Coast (+225)</div>
                          </li>
                          <li data-country-code="1876" data-country-id="179">
                            <div class="cname">Jamaica (+1876)</div>
                          </li>
                          <li data-country-code="81" data-country-id="180">
                            <div class="cname">Japan (+81)</div>
                          </li>
                          <li data-country-code="962" data-country-id="181">
                            <div class="cname">Jordan (+962)</div>
                          </li>
                          <li data-country-code="77" data-country-id="182">
                            <div class="cname">Kazakhstan (+77)</div>
                          </li>
                          <li data-country-code="254" data-country-id="184">
                            <div class="cname">Kenya Republic (+254)</div>
                          </li>
                          <li data-country-code="686" data-country-id="186">
                            <div class="cname">Kiribati (+686)</div>
                          </li>
                          <li data-country-code="996" data-country-id="189">
                            <div class="cname">Kyrgyzstan (+996)</div>
                          </li>
                          <li data-country-code="856" data-country-id="192">
                            <div class="cname">Laos (+856)</div>
                          </li>
                          <li data-country-code="371" data-country-id="193">
                            <div class="cname">Latvia (+371)</div>
                          </li>
                          <li data-country-code="961" data-country-id="195">
                            <div class="cname">Lebanon (+961)</div>
                          </li>
                          <li data-country-code="266" data-country-id="196">
                            <div class="cname">Lesotho (+266)</div>
                          </li>
                          <li data-country-code="231" data-country-id="198">
                            <div class="cname">Liberia Republic (+231)</div>
                          </li>
                          <li data-country-code="218" data-country-id="199">
                            <div class="cname">Libya (+218)</div>
                          </li>
                          <li data-country-code="423" data-country-id="202">
                            <div class="cname">Liechtenstein (+423)</div>
                          </li>
                          <li data-country-code="370" data-country-id="206">
                            <div class="cname">Lithuania (+370)</div>
                          </li>
                          <li data-country-code="352" data-country-id="209">
                            <div class="cname">Luxembourg (+352)</div>
                          </li>
                          <li data-country-code="853" data-country-id="210">
                            <div class="cname">Macau (+853)</div>
                          </li>
                          <li data-country-code="389" data-country-id="211">
                            <div class="cname">Macedonia (+389)</div>
                          </li>
                          <li data-country-code="261" data-country-id="215">
                            <div class="cname">Madagascar (+261)</div>
                          </li>
                          <li data-country-code="265" data-country-id="216">
                            <div class="cname">Malawi (+265)</div>
                          </li>
                          <li data-country-code="960" data-country-id="218">
                            <div class="cname">Maldives (+960)</div>
                          </li>
                          <li data-country-code="223" data-country-id="219">
                            <div class="cname">Mali Republic (+223)</div>
                          </li>
                          <li data-country-code="356" data-country-id="222">
                            <div class="cname">Malta (+356)</div>
                          </li>
                          <li data-country-code="670" data-country-id="223">
                            <div class="cname">Mariana Island (+670)</div>
                          </li>
                          <li data-country-code="873" data-country-id="224">
                            <div class="cname">Marisat (+873)</div>
                          </li>
                          <li data-country-code="870" data-country-id="225">
                            <div class="cname">Marisat Atlantic (+870)</div>
                          </li>
                          <li data-country-code="872" data-country-id="226">
                            <div class="cname">Marisat Pacific (+872)</div>
                          </li>
                          <li data-country-code="692" data-country-id="227">
                            <div class="cname">Marshal Island (+692)</div>
                          </li>
                          <li data-country-code="596" data-country-id="228">
                            <div class="cname">Martinique (+596)</div>
                          </li>
                          <li data-country-code="222" data-country-id="229">
                            <div class="cname">Mauritania (+222)</div>
                          </li>
                          <li data-country-code="230" data-country-id="230">
                            <div class="cname">Mauritius (+230)</div>
                          </li>
                          <li data-country-code="52" data-country-id="231">
                            <div class="cname">Mexico (+52)</div>
                          </li>
                          <li data-country-code="691" data-country-id="232">
                            <div class="cname">Micronesia (federal) (+691)</div>
                          </li>
                          <li data-country-code="373" data-country-id="234">
                            <div class="cname">Moldova (+373)</div>
                          </li>
                          <li data-country-code="377" data-country-id="237">
                            <div class="cname">Monaco (+377)</div>
                          </li>
                          <li data-country-code="976" data-country-id="238">
                            <div class="cname">Mongolia (+976)</div>
                          </li>
                          <li data-country-code="1664" data-country-id="239">
                            <div class="cname">Montserrat (+1664)</div>
                          </li>
                          <li data-country-code="212" data-country-id="240">
                            <div class="cname">Morocco (+212)</div>
                          </li>
                          <li data-country-code="258" data-country-id="241">
                            <div class="cname">Mozambique (+258)</div>
                          </li>
                          <li data-country-code="95" data-country-id="243">
                            <div class="cname">Myanmar (+95)</div>
                          </li>
                          <li data-country-code="264" data-country-id="244">
                            <div class="cname">Namibia (+264)</div>
                          </li>
                          <li data-country-code="674" data-country-id="245">
                            <div class="cname">Nauru (+674)</div>
                          </li>
                          <li data-country-code="977" data-country-id="246">
                            <div class="cname">Nepal (+977)</div>
                          </li>
                          <li data-country-code="31" data-country-id="247">
                            <div class="cname">Netherlands (+31)</div>
                          </li>
                          <li data-country-code="64" data-country-id="254">
                            <div class="cname">New Zealand (+64)</div>
                          </li>
                          <li data-country-code="505" data-country-id="257">
                            <div class="cname">Nicaragua (+505)</div>
                          </li>
                          <li data-country-code="227" data-country-id="260">
                            <div class="cname">Niger Republic (+227)</div>
                          </li>
                          <li data-country-code="234" data-country-id="262">
                            <div class="cname">Nigeria (+234)</div>
                          </li>
                          <li data-country-code="683" data-country-id="263">
                            <div class="cname">Niue Island (+683)</div>
                          </li>
                          <li data-country-code="672" data-country-id="264">
                            <div class="cname">Norfolk Island (+672)</div>
                          </li>
                          <li data-country-code="850" data-country-id="265">
                            <div class="cname">North Korea (+850)</div>
                          </li>
                          <li data-country-code="47" data-country-id="266">
                            <div class="cname">Norway (+47)</div>
                          </li>
                          <li data-country-code="92" data-country-id="273">
                            <div class="cname">Pakistan (+92)</div>
                          </li>
                          <li data-country-code="680" data-country-id="274">
                            <div class="cname">Palau (+680)</div>
                          </li>
                          <li data-country-code="970" data-country-id="275">
                            <div class="cname">Palestine (+970)</div>
                          </li>
                          <li data-country-code="507" data-country-id="276">
                            <div class="cname">Panama (+507)</div>
                          </li>
                          <li data-country-code="675" data-country-id="277">
                            <div class="cname">Papua- New-guinea (+675)</div>
                          </li>
                          <li data-country-code="595" data-country-id="278">
                            <div class="cname">Paraguay (+595)</div>
                          </li>
                          <li data-country-code="51" data-country-id="279">
                            <div class="cname">Peru (+51)</div>
                          </li>
                          <li data-country-code="63" data-country-id="280">
                            <div class="cname">Philippines (+63)</div>
                          </li>
                          <li data-country-code="48" data-country-id="281">
                            <div class="cname">Poland (+48)</div>
                          </li>
                          <li data-country-code="351" data-country-id="285">
                            <div class="cname">Portugal (+351)</div>
                          </li>
                          <li data-country-code="1787" data-country-id="286">
                            <div class="cname">Puerto Rico (+1787)</div>
                          </li>
                          <li data-country-code="40" data-country-id="289">
                            <div class="cname">Romania (+40)</div>
                          </li>
                          <li data-country-code="262" data-country-id="293">
                            <div class="cname">Runion Island (+262)</div>
                          </li>
                          <li data-country-code="7" data-country-id="294">
                            <div class="cname">Russia (+7)</div>
                          </li>
                          <li data-country-code="250" data-country-id="299">
                            <div class="cname">Rwanda Republic (+250)</div>
                          </li>
                          <li data-country-code="1670" data-country-id="300">
                            <div class="cname">Saipan (+1670)</div>
                          </li>
                          <li data-country-code="684" data-country-id="302">
                            <div class="cname">Samoa American (+684)</div>
                          </li>
                          <li data-country-code="685" data-country-id="303">
                            <div class="cname">Samoa Western (+685)</div>
                          </li>
                          <li data-country-code="378" data-country-id="305">
                            <div class="cname">San Marino (+378)</div>
                          </li>
                          <li data-country-code="239" data-country-id="306">
                            <div class="cname">Saotome Principe Isl (+239)</div>
                          </li>
                          <li data-country-code="883" data-country-id="307">
                            <div class="cname">Satellite (+883)</div>
                          </li>
                          <li data-country-code="221" data-country-id="309">
                            <div class="cname">Senegal (+221)</div>
                          </li>
                          <li data-country-code="248" data-country-id="311">
                            <div class="cname">Seychelles (+248)</div>
                          </li>
                          <li data-country-code="232" data-country-id="312">
                            <div class="cname">Sierra Leone (+232)</div>
                          </li>
                          <li data-country-code="421" data-country-id="315">
                            <div class="cname">Slovakia (+421)</div>
                          </li>
                          <li data-country-code="386" data-country-id="318">
                            <div class="cname">Slovenia (+386)</div>
                          </li>
                          <li data-country-code="677" data-country-id="319">
                            <div class="cname">Solomon Island (+677)</div>
                          </li>
                          <li data-country-code="252" data-country-id="320">
                            <div class="cname">Somalia (+252)</div>
                          </li>
                          <li data-country-code="27" data-country-id="321">
                            <div class="cname">South Africa (+27)</div>
                          </li>
                          <li data-country-code="82" data-country-id="322">
                            <div class="cname">South Korea (+82)</div>
                          </li>
                          <li data-country-code="211" data-country-id="323">
                            <div class="cname">South Sudan (+211)</div>
                          </li>
                          <li data-country-code="34" data-country-id="324">
                            <div class="cname">Spain (+34)</div>
                          </li>
                          <li data-country-code="94" data-country-id="328">
                            <div class="cname">Sri Lanka (+94)</div>
                          </li>
                          <li data-country-code="1721" data-country-id="329">
                            <div class="cname">St Maarten-roc (+1721)</div>
                          </li>
                          <li data-country-code="508" data-country-id="330">
                            <div class="cname">
                              St Pierre &amp; Miquelon (+508)
                            </div>
                          </li>
                          <li data-country-code="282" data-country-id="331">
                            <div class="cname">St. Denis (+282)</div>
                          </li>
                          <li data-country-code="290" data-country-id="332">
                            <div class="cname">St. Helena (+290)</div>
                          </li>
                          <li data-country-code="1869" data-country-id="333">
                            <div class="cname">
                              St. Kitts &amp; Nevis (+1869)
                            </div>
                          </li>
                          <li data-country-code="1758" data-country-id="334">
                            <div class="cname">St. Lucia (+1758)</div>
                          </li>
                          <li data-country-code="1784" data-country-id="335">
                            <div class="cname">
                              St.vincent &amp; Grenadi (+1784)
                            </div>
                          </li>
                          <li data-country-code="249" data-country-id="336">
                            <div class="cname">Sudan Demo. Rep (+249)</div>
                          </li>
                          <li data-country-code="597" data-country-id="338">
                            <div class="cname">Surinam Republic (+597)</div>
                          </li>
                          <li data-country-code="268" data-country-id="339">
                            <div class="cname">Swaziland (+268)</div>
                          </li>
                          <li data-country-code="46" data-country-id="340">
                            <div class="cname">Sweden (+46)</div>
                          </li>
                          <li data-country-code="41" data-country-id="345">
                            <div class="cname">Switzerland (+41)</div>
                          </li>
                          <li data-country-code="963" data-country-id="349">
                            <div class="cname">Syria (+963)</div>
                          </li>
                          <li data-country-code="886" data-country-id="350">
                            <div class="cname">Taiwan (+886)</div>
                          </li>
                          <li data-country-code="992" data-country-id="351">
                            <div class="cname">Tajikistan (+992)</div>
                          </li>
                          <li data-country-code="255" data-country-id="354">
                            <div class="cname">Tanzania (+255)</div>
                          </li>
                          <li data-country-code="66" data-country-id="355">
                            <div class="cname">Thailand (+66)</div>
                          </li>
                          <li data-country-code="228" data-country-id="356">
                            <div class="cname">Togo Lese Rep (+228)</div>
                          </li>
                          <li data-country-code="690" data-country-id="358">
                            <div class="cname">Tokelau (+690)</div>
                          </li>
                          <li data-country-code="676" data-country-id="359">
                            <div class="cname">Tonga (+676)</div>
                          </li>
                          <li data-country-code="1868" data-country-id="360">
                            <div class="cname">
                              Trinidad &amp; Tobago (+1868)
                            </div>
                          </li>
                          <li data-country-code="216" data-country-id="361">
                            <div class="cname">Tunisia (+216)</div>
                          </li>
                          <li data-country-code="90" data-country-id="362">
                            <div class="cname">Turkey (+90)</div>
                          </li>
                          <li data-country-code="993" data-country-id="366">
                            <div class="cname">Turkmenistan (+993)</div>
                          </li>
                          <li data-country-code="1649" data-country-id="367">
                            <div class="cname">Turks &amp; Caucus (+1649)</div>
                          </li>
                          <li data-country-code="688" data-country-id="368">
                            <div class="cname">Tuvalu (+688)</div>
                          </li>
                          <li data-country-code="256" data-country-id="369">
                            <div class="cname">Uganda (+256)</div>
                          </li>
                          <li data-country-code="380" data-country-id="372">
                            <div class="cname">Ukraine (+380)</div>
                          </li>
                          <li data-country-code="598" data-country-id="377">
                            <div class="cname">Uruguay (+598)</div>
                          </li>
                          <li data-country-code="998" data-country-id="379">
                            <div class="cname">Uzbekistan (+998)</div>
                          </li>
                          <li data-country-code="678" data-country-id="382">
                            <div class="cname">Vanuatu New Hebrides (+678)</div>
                          </li>
                          <li data-country-code="58" data-country-id="383">
                            <div class="cname">Venezuela (+58)</div>
                          </li>
                          <li data-country-code="84" data-country-id="384">
                            <div class="cname">Vietnam (+84)</div>
                          </li>
                          <li data-country-code="681" data-country-id="385">
                            <div class="cname">Wallis &amp; Futuna (+681)</div>
                          </li>
                          <li data-country-code="967" data-country-id="386">
                            <div class="cname">Yemen (+967)</div>
                          </li>
                          <li data-country-code="381" data-country-id="387">
                            <div class="cname">Yugoslavia (+381)</div>
                          </li>
                          <li data-country-code="260" data-country-id="389">
                            <div class="cname">Zambia (+260)</div>
                          </li>
                          <li data-country-code="263" data-country-id="390">
                            <div class="cname">Zimbabwe (+263)</div>
                          </li>
                          <li data-country-code="0" data-country-id="999">
                            <div class="cname">Other (+0)</div>
                          </li>
                        </ul>
                        <div
                          class="cCode"
                          id="country-code"
                          data-country-code="+91"
                          style={{ display: 'none' }}
                        >
                          +91
                        </div>
                      </div>
                      <div class="search-flag" id="search-flag">
                        <div class="searchico"></div>
                        <div class="cityClose"></div>
                        <input
                          type="text"
                          max-length="3"
                          placeholder="Search Country or Code"
                        />
                      </div>
                      <input
                        type="tel"
                        autocomplete="off"
                        class="fullWidht input_box mobNumber"
                        id="name5"
                        minlength="10"
                        maxlength="10"
                        data-country-std-code="91"
                        pattern="[0-9]*"
                        className={`fullWidht txtName ${basicInfo['mobile'] ?"labelshow":''}`}
                        value={basicInfo['mobile']}
                        onChange={(e)=>{
                          basicInfo['mobile'] = e.target.value;
                          setbasicInfo({...basicInfo})
                        }}
                        inputmode="numeric"
                      />
                      <label class="feildLable mobN" for="travelmobile">
                        Enter mobile number
                      </label>
                    </div>
                    <div class="err"></div>
                  </li>
                </ul>
              </div>

              <div
                class={`health-insurance-step-5 field_wrapper_ped ${
                  step === 5 ? '' : 'hide'
                }`}
                id="step_5"
              >
                <p class="label_ques">
                  Do you have an existing illness or medical history?
                </p>
                <p class="label">
                  This helps us find plans that cover your condition and avoid
                  claim rejection
                </p>
                <div class="radio_box_wrapper ped_cat">
                  <div class="radio_box_inner ped_step_1">
                    <input
                      type="checkbox"
                      name="ped_cat"
                      id="ped_cat_1"
                      class="input-checkbox"
                      value="1"
                      data-title="Existing illness"
                    />
                    <label for="ped_cat_1">
                      {' '}
                      <div class="chkbox"></div>Existing illness{' '}
                      <span>
                        Blood pressure, Diabetes, Heart conditions, Asthma,
                        Thyroid, Cancer etc.
                      </span>
                    </label>
                  </div>
                  <div class="radio_box_inner ped_step_1">
                    <input
                      type="checkbox"
                      name="ped_cat"
                      id="ped_cat_3"
                      class="input-checkbox"
                      value="3"
                      data-title="Surgical procedure"
                    />
                    <label for="ped_cat_3">
                      {' '}
                      <div class="chkbox"></div>Surgical procedure{' '}
                      <span>Appendix, Gall bladder, C-section etc.</span>
                    </label>
                  </div>
                  <div class="radio_box_inner ped_last_div">
                    <input
                      type="checkbox"
                      name="noneOfThese"
                      id="ped_last"
                      class="input-checkbox"
                    />{' '}
                    <label for="ped_last">
                      <div class="chkbox"></div>None of these
                    </label>
                  </div>
                </div>
                <div class="err err_ped" style={{ display: 'none' }}></div>
                <div class="form-whatsapp">
                  <i class="icon"></i>
                  Get updates on WhatsApp
                  <label class="switch slBtn">
                    <input type="checkbox" value="1" checked="true" />{' '}
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>

              <div class="button-wrapper">
                <span
                  onClick={() => {
                    setStep(step - 1);
                  }}
                  class="back-button"
                >
                  Previous step
                </span>
                <div
                  class="button btnHealthStep4"
                  data-step="4"
                  data-step-button="4"
                  id="btnHealthStep4"
                  onClick={() => {
                    if (step == 4) nextCallback();
                    else setStep(step + 1);
                  }}
                >
                  Continue
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="valid-mobile-number-popup-box">
          <div class="valid-mobile-number-popup-container">
            <div class="valid-mobile-number-popup-heading">
              <div class="heading">
                Advantages of
                <br />
                entering a valid number
              </div>
              <div class="image">
                <img alt=''
                  src="https://static.pbcdn.in/cdn/images/bu/health/valid-mobile-number-popup.png"
                  width="92"
                  height="86"
                />
              </div>
            </div>
            <div class="valid-mobile-number-popup-content">
              <div class="content">
                You save time, money and effort,
                <br />
                Our experts will help you choose the right plan in less than 20
                minutes &amp; save you upto 80% on your premium
              </div>
              <div class="buttons">
                <button class="no-bg continue-with-number">
                  Continue with this number ›
                </button>
                <button class="with-bg reset-mobile-number">
                  Enter correct number
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="popup-slide-mobile"
        className={`overlay ${
          !(isOverlayOpen && mobileCheck()) ? 'hide' : 'show'
        }`}
      >
        <div class="popup-slide-mobile">
          <span class="close close_age_overlay" data-id="son">
            ×
          </span>
          <div class="radio_pills member-select">
            <div class="small">How many {option} do you have?</div>
            {[1, 2, 3, 4].map((item) => {
              return (
                <label>
                  <input
                    type="radio"
                    onClick={() => {
                      member[option] = new Array(item).fill({});
                      setOverlayOpen(false);
                    }}
                    value={item}
                    name="mAgeMobile"
                    id="mAgeMobile_1"
                    data-profile="son"
                  />
                  <span id="spanAgeMobile_1">{item}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
