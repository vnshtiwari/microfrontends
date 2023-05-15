import { useEffect, useState } from 'react';
import '../styles/plan.css';
import data from './data';

export default function Plan({nextCallback}) {
  const [planData, setPlanData] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [selectProduct, setSelectProduct] = useState(null);
  const [isOverlayOpen, setOverlayOpen] = useState(null);
  const [year, setYear] = useState(1);
  const [selectedRider, setSelectedRider] = useState([]);
  const [riderAmount, setRiderAmount] = useState(0);

  const riders = [
    {
      AddOnID: 18218,
      AddOnPlanID: 18218,
      AddOnPlanName: 'Instant Cover',
      AddOnRateID: 16496565,
      AddOnTermPremiums: [
        {
          AddOnID: 18218,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 1241,
          SumInsured: 0,
          Term: 1,
          UDFP: '8j2qj5dKdGIBLk3eC0t3YA==',
          UDFT: 'kAUglbjvA0MhvRl2Nh//BA==',
        },
        {
          AddOnID: 18218,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 2390,
          SumInsured: 0,
          Term: 2,
          UDFP: '6oLvFxjlogM08woeJvYI5w==',
          UDFT: 'G/PMhAGMhJtbbIo2om3C+w==',
        },
        {
          AddOnID: 18218,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 3507,
          SumInsured: 0,
          Term: 3,
          UDFP: 'CDoZKgSk+CSzztiIl2P4yw==',
          UDFT: '45R4Mzgy1UHdgMPAkge+Hw==',
        },
      ],
      Children: 0,
      ControlType: 0,
      Default: false,
      Details:
        'Claim can be made for hospitalization related to Diabetes, Hypertension, Hyperlipidemia & Asthma after initial wait period of 30 days',
      DropdownValue: null,
      FinalPremium: 3507,
      GroupId: 0,
      HospiCashCoveragePerDay: 0,
      IsActive: true,
      IsOpted: false,
      IsPreferred: 0,
      IsPremiumImpacted: false,
      IsZoneOpted: false,
      MaxAgeOfEldest: 33,
      MinAgeOfEldest: 18,
      Name: null,
      NoOfAdults: 1,
      NoOfChildren: 0,
      Parent: 0,
      Premium: 3507,
      RiderMembers: null,
      RiderType: 1,
      RidersFeature: null,
      Self: 0,
      ServiceTax: 0,
      Spouse: 0,
      SubLimitValue: 0,
      SumInsured: 500000,
      SupplierId: 44,
      SupplierName: 'Care Health',
      Term: 3,
      ToolTipText: null,
      UDFFP: 'CDoZKgSk+CSzztiIl2P4yw==',
      UDFP: 'CDoZKgSk+CSzztiIl2P4yw==',
      UDFT: '45R4Mzgy1UHdgMPAkge+Hw==',
      UrlToBrochure: null,
      Zone: null,
      ZoneLabel: null,
      ZoneMessage: null,
      ZonePremium: 0,
    },
    {
      AddOnID: 39027,
      AddOnPlanID: 39027,
      AddOnPlanName: 'Annual Health Check-up',
      AddOnRateID: 17163383,
      AddOnTermPremiums: [
        {
          AddOnID: 39027,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 453,
          SumInsured: 0,
          Term: 1,
          UDFP: 'Zv/aDbOoHMA8KGqbh0ZGig==',
          UDFT: 'kAUglbjvA0MhvRl2Nh//BA==',
        },
        {
          AddOnID: 39027,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 872,
          SumInsured: 0,
          Term: 2,
          UDFP: 'dpISNCqsAsnj7sDKJGLPPw==',
          UDFT: 'G/PMhAGMhJtbbIo2om3C+w==',
        },
        {
          AddOnID: 39027,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 1279,
          SumInsured: 0,
          Term: 3,
          UDFP: 'PQtR5udIj/XYpQAa7PZ3jg==',
          UDFT: '45R4Mzgy1UHdgMPAkge+Hw==',
        },
      ],
      Children: 0,
      ControlType: 0,
      Default: false,
      Details: 'Once for all insured every policy year',
      DropdownValue: null,
      FinalPremium: 1279,
      GroupId: 0,
      HospiCashCoveragePerDay: 0,
      IsActive: true,
      IsOpted: false,
      IsPreferred: 0,
      IsPremiumImpacted: false,
      IsZoneOpted: false,
      MaxAgeOfEldest: 33,
      MinAgeOfEldest: 18,
      Name: null,
      NoOfAdults: 1,
      NoOfChildren: 0,
      Parent: 0,
      Premium: 1279,
      RiderMembers: null,
      RiderType: 1,
      RidersFeature: null,
      Self: 0,
      ServiceTax: 0,
      Spouse: 0,
      SubLimitValue: 0,
      SumInsured: 500000,
      SupplierId: 44,
      SupplierName: 'Care Health',
      Term: 3,
      ToolTipText: null,
      UDFFP: 'PQtR5udIj/XYpQAa7PZ3jg==',
      UDFP: 'PQtR5udIj/XYpQAa7PZ3jg==',
      UDFT: '45R4Mzgy1UHdgMPAkge+Hw==',
      UrlToBrochure: null,
      Zone: null,
      ZoneLabel: null,
      ZoneMessage: null,
      ZonePremium: 0,
    },
    {
      AddOnID: 39028,
      AddOnPlanID: 39028,
      AddOnPlanName: 'Cumulative Bonus Super',
      AddOnRateID: 16504783,
      AddOnTermPremiums: [
        {
          AddOnID: 39028,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 623,
          SumInsured: 0,
          Term: 1,
          UDFP: 'jLVmQP+bRwNNpRgLAyAfBQ==',
          UDFT: 'kAUglbjvA0MhvRl2Nh//BA==',
        },
        {
          AddOnID: 39028,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 1200,
          SumInsured: 0,
          Term: 2,
          UDFP: 'Gx+4P9SitBtyQN9UzkqD7Q==',
          UDFT: 'G/PMhAGMhJtbbIo2om3C+w==',
        },
        {
          AddOnID: 39028,
          CoPayText: null,
          IsOpted: false,
          MemberId: 0,
          Premium: 1761,
          SumInsured: 0,
          Term: 3,
          UDFP: 'yLXuw38Z1yXXQqA2CVXRXQ==',
          UDFT: '45R4Mzgy1UHdgMPAkge+Hw==',
        },
      ],
      Children: 0,
      ControlType: 0,
      Default: false,
      Details:
        'Up to 100% of cover amount per year, max up to 500% of sum insured;shall not reduce in case of claim',
      DropdownValue: null,
      FinalPremium: 1761,
      GroupId: 0,
      HospiCashCoveragePerDay: 0,
      IsActive: true,
      IsOpted: false,
      IsPreferred: 0,
      IsPremiumImpacted: true,
      IsZoneOpted: false,
      MaxAgeOfEldest: 33,
      MinAgeOfEldest: 18,
      Name: null,
      NoOfAdults: 1,
      NoOfChildren: 0,
      Parent: 0,
      Premium: 1761,
      RiderMembers: null,
      RiderType: 1,
      RidersFeature: null,
      Self: 0,
      ServiceTax: 0,
      Spouse: 0,
      SubLimitValue: 0,
      SumInsured: 500000,
      SupplierId: 44,
      SupplierName: 'Care Health',
      Term: 3,
      ToolTipText: null,
      UDFFP: 'yLXuw38Z1yXXQqA2CVXRXQ==',
      UDFP: 'yLXuw38Z1yXXQqA2CVXRXQ==',
      UDFT: '45R4Mzgy1UHdgMPAkge+Hw==',
      UrlToBrochure: null,
      Zone: null,
      ZoneLabel: null,
      ZoneMessage: null,
      ZonePremium: 0,
    },
  ];
  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    console.log(search.get('PlanId'))

    let arr = data.filter((item) => {
      return item.PlanId == search.get('PlanId');
    });
    setPlanData([...arr]);
    setSelectProduct(0);
  }, []);

  function selectRider(rider) {
    let index = selectedRider.indexOf(rider.AddOnPlanName);
    if (index > -1) {
      selectedRider.splice(index, 1);
      setRiderAmount(riderAmount - rider.AddOnTermPremiums[year - 1].Premium);
    } else {
      selectedRider.push(rider.AddOnPlanName);
      setSelectedRider([...selectedRider]);
      setRiderAmount(riderAmount + rider.AddOnTermPremiums[year - 1].Premium);
    }
  }

  return selectProduct != null ? (
    <div class="wrapper-product" id="wrapper-product">
      <div class="rowWrapper wrapper-max" id="rowWrapper">
        <div class="wrapper_left_product">
          <div class="wrapper-inner alignCenter flex-wrap">
            <div class="logo-detais"></div>
            <div class="plan-name">
              <h2> {planData[selectProduct].PlanName}</h2>
              <p> </p>
            </div>
          </div>
          <div class="wrapper-inner cover_web pos-rel">
            <div class="heading_section">
              <h3>
                Cover Amount{' '}
                <span>
                  Medical treatments are getting costlier every year. Higher the
                  cover better it is.
                </span>
              </h3>
              <div class="pos-rel">
                <div
                  class="cover_si_select "
                  onClick={() => {
                    setDropdownOpen(!isDropdownOpen);
                  }}
                  id="divarrow"
                >
                  <div class="sp-right">{`₹${planData[selectProduct].SumInsured}`}</div>
                </div>
                <div style={{ visibility: isDropdownOpen ? '' : 'hidden' }}>
                  <div class="premium-box">
                    <div class="headbar-break titlewrapUp">
                      <h2>Select Cover Amount</h2>
                      <div>
                        <div
                          onClick={() => {
                            setDropdownOpen(false);
                          }}
                          class="close-box"
                        ></div>
                      </div>
                    </div>
                    <div class="modal_wrap" id="container">
                      <div class="term_wrapper term_web">
                        <ul class="term_listing">
                          {planData.map((item, index) => {
                            return (
                              <li
                                id={`sum${planData[selectProduct].SumInsured}`}
                                onClick={(e) => {
                                  console.log(index);
                                  setSelectProduct(index);
                                  setDropdownOpen(false);
                                }}
                              >
                                <label class="">
                                  <input type="radio" />
                                  <span></span>
                                  <strong>{`₹${item.SumInsured}`}</strong>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper-inner">
            <div class="heading_section">
              <h3>
                Policy Period
                <span>
                  Choosing a multi-year plan saves your money and the trouble of
                  remembering yearly renewals.
                </span>
              </h3>
              <div class="policy-period">
                {planData[selectProduct].PlanDetail.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setYear(index + 1);
                      }}
                      class={`policy_period_inner  ${
                        year - 1 === index ? 'selected_term' : ''
                      }`}
                    >
                      <div>
                        <div class="label-radiobox-term">
                          <label>
                            <input
                              type="radio"
                              name="tt"
                              class="input-radio"
                              value="1"
                              checked={year - 1 === index}
                            />
                            {item.Year + ' Year'} @
                            <strong> ₹{item.FinalPremium} </strong>
                          </label>
                        </div>
                      </div>
                      <div class="text_right"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="wrapper-inner" id="rider">
            <div class="heading_section">
              <h3>
                Riders
                <span>
                  You should get these additional benefits to enhance your
                  current plan
                </span>
              </h3>
              {riders.map((item) => {
                return (
                  <div class="rider-box ">
                    <div class="flexRow row sp-rider dailyAllowanceRider">
                      <div>
                        <h3>
                          {item.AddOnPlanName}
                          <span>{item.Details}</span>
                        </h3>
                      </div>
                      <div
                        onClick={() => {
                          selectRider(item);
                        }}
                        class=""
                      >
                        <div class="addon-box1">
                          <div class="si_add"></div>
                        </div>
                        <button class={selectedRider.includes(item.AddOnPlanName) ? "active-button":""}>
                          ₹{item.AddOnTermPremiums[year - 1].Premium}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="wrapper_right_product hideSmall">
          <div class="inner_right_section">
            <h3>Summary</h3>
            <div class="scroll_space">
              <div class="flexRow section_right">
                <div>Base Premium - {year} year</div>
                <div>
                  {' '}
                  <span>
                    ₹ {planData[selectProduct].PlanDetail[year - 1].Premium}
                  </span>
                </div>
              </div>
              <div class="rider_head">
                <h4>Selected Rider(s)</h4>
                <div>
                  {selectedRider.length === 0 && (
                    <div class="flexRow  select_benefits">
                      <div>Missing out on benefits</div>
                      <div>
                        <span class="link_select">View riders</span>
                      </div>
                    </div>
                  )}

                  {selectedRider.map((item) => {
                    return (
                      <div class="flexRow section_right">
                        <div>{item}</div>
                        <div>
                          <span></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div class="premium_right">
              <div class="flexRow section_premium discountSectionPremium">
                <div>Total premium</div>
                <div>
                  {' '}
                  <span>₹                 {planData[selectProduct].PlanDetail[year - 1].Premium +
                  riderAmount}</span>
                </div>
              </div>
              <button type="button" onClick={()=> nextCallback()} class="primaryMainCta">
                Proceed
              </button>
            </div>
          </div>
        </div>

        <div class="feature_popup_bottom price-effect-bottom hideBig ">
          {/* <div class="price-effective-wrapper ">
            <div>
              <span>Effectively costs just ₹4,155.</span>
              <a href="/" class="linkText">
                See how
              </a>
            </div>
          </div> */}
          <div class="feature_popup_button">
            <div class="total_product_amount">
              <span>Total Premium</span>
              <div class="break_modal_icon">
                <div>
                  {' '}
                  <strong>₹                 {planData[selectProduct].PlanDetail[year - 1].Premium +
                  riderAmount}/-</strong>
                </div>
                <div
                  onClick={() => {
                    setOverlayOpen(true);
                  }}
                  class="arrow_premiumbreakup"
                ></div>
              </div>
            </div>
            <button class="primaryMainCta" onClick={()=> nextCallback()}>Proceed</button>
          </div>
        </div>
        {isOverlayOpen && (
          <div class="premium-box modal_mobile">
            <div class="headbar-break">
              <div>Premium Breakup</div>
              <div>
                <div
                  onClick={() => setOverlayOpen(false)}
                  class="close-box"
                ></div>
              </div>
            </div>
            <div class="amount-breakup-card">
              <div class="breakup_inner_product">
                <div class="logo_name_box">
                  {/* <div class="logo_pr_box">
                  <picture>
                    <source
                      type="image/webp"
                      srcset="https://static.pbcdn.in/health-cdn/images/insurer-logo/Care_Health@2x.webp"
                    />
                    <source
                      type="image/png"
                      srcset="https://static.pbcdn.in/health-cdn/images/insurer-logo/Care_Health@2x.png"
                    />
                    <img
                      src="https://static.pbcdn.in/health-cdn/images/insurer-logo/Care_Health@2x.png"
                      alt="Care Health"
                      width="100"
                    />
                  </picture>
                </div> */}
                  <div class="plan_pr_box">Care Supreme Direct</div>
                </div>
                <div class="riders_pr">
                  <div class="riders_box_pr">
                    <div>Base Premium - {year} year</div>
                    <div class="bold">₹                ₹
                {planData[selectProduct].PlanDetail[year - 1].Premium +
                  riderAmount}</div>
                  </div>
                </div>
                <div class="riders_pr"></div>
              </div>
            </div>
            <div class="flexRow row align-center total-row">
              <div>
                {' '}
                <span>Total premium</span>
              </div>
              <div>
                ₹
                {planData[selectProduct].PlanDetail[year - 1].Premium +
                  riderAmount}
                /-
              </div>
            </div>
            <div>
              <button class="primaryMainCta" onClick={()=> nextCallback()}>Proceed</button>
            </div>
          </div>
        )}
      </div>
      <div class="rowWrapper wrapper-max"></div>
    </div>
  ) : null;
}
