
import { useState } from 'react';
import hospitalData from '../data/hospitalData';
import '../styles/hospital.css'
import { mobileCheck } from '../utility/common';

const Movies = () => {
  let [hospital, setHospital] = useState(hospitalData);
  const [search, setSearch] = useState(null)

  return (
    <div id="root">
      <div class="quotes_main_container ">
        <div 
        class={mobileCheck() ?"features_popup_mobile is-hidden-desktop-custom" : "modal is-active is-hidden-mobile is-hidden-tablet-only-custom-custom fullscreen_popup_desktop"}        >
          <div
            class="fullscreen_popup_desktop_wrapper"
            id="feature_desktop_container"
          >
            <div class="fullscreen_popup_desktop_wrapper__featureGrid">
              <div class="main-feature-wrapper">
                <div class="left-feature-wrapper card-wrapper">
                  <div class="fullscreen_popup_right_col">
                    <div class="feature_card" id="featureDesktopModal">
                      <div class="features_popup_table1 hospitalSearchWrapper">
                        <div class="widgetCashlessSelect featurePopup-cashlesshospital">
                          {/* <p>
                            8983 cashless hospitals in India{' '}
                            <span>46 cashless hospitals in </span>
                            <span class="cityListLink"> Kanpur</span>{' '}
                          </p> */}
                          <div class="selectCashlessBox">
                            <div class="mainBoxCity">
                              <div class="features_search_hosp">
                                <input
                                  type="text"
                                  placeholder="Search hospital by name or pincode "
                                  value={search}
                                  onChange={(e)=> setSearch(e.currentTarget.value)}
                                />
                                <p class="searchIcon"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul class="features_hosp_list">
                          {hospital.filter(item=> {
                            return search==null || item.hospitalName.toLowerCase().includes(search.toLowerCase())  ||  item.hospitalPinCode.includes(search)
                        }).map((item) => {
                            return (
                              <li>
                                <span class="hosp_city_name1">
                                  {item.hospitalName}
                                </span>
                                <span class="hosp_city_name">
                                  {item.primaryAddress}
                                </span>
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
        </div>
      </div>
    </div>
  );
};

export default Movies;
