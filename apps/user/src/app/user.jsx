import { useEffect, useState } from 'react';
import '../styles/user.css';
import pruLogo from '../assets/prudential-png.png'

export default function User() {

  const [menu ,setMenu] = useState(['Help','Claim support','Payments','Profile', 'Settings'])
  return (
    <div id="root">
      <div class="Toastify"></div>
      <div></div>
      <div>
        <div class="desktop_main " id="maincontainer">
          <input type="checkbox" id="toggle-sidebar-menu" />
          <input type="checkbox" id="rmDetailsTrigger" />
          <div class="sidebar-bar">
            <div class="s_d">
              <div class="navbar-ctrl">
                <div class="cross-btn">
                  <img alt='' src="https://static.pbcdn.in/myaccount-cdn/images/assets/new-cross.svg" />
                </div>
                <div class="navbar-content">
                  <div class="logo-wrapper-mobile-menu">
                    <img
                      src="https://static.pbcdn.in/cdn/images/new-home/logopb.svg?v=2"
                      alt="logo"
                    />
                  </div>
                  <div class="inner-div">
                    <div class="sub-heading">
                      <div class="divide">
                        <div class="child ">
                          <a activeclassname="active" href="/policies/all">
                            <div class="col-1">
                              <p>
                                <img
                                alt=''
                                  src="https://static.pbcdn.in/myaccount-cdn/images/assets/hoverPolicy.png"
                                  style={{ width: '40px', height: '40px' }}
                                />
                                Policies
                              </p>
                            </div>
                          </a>
                        </div>
                        <div class="child ">
                          <a
                            activeclassname="active"
                            href="/getCustomerSupport/YWxs"
                          >
                            <div class="col-1">
                              <p>
                                <img
                                  src="https://static.pbcdn.in/myaccount-cdn/images/assets/hoverHelp.png"
                                  style={{ width: '40px', height: '40px' }}
                                />
                                Help
                              </p>
                            </div>
                          </a>
                        </div>
                        <div class="child bold">
                          <a activeclassname="active" href="/claimSupports/all">
                            <div class="col-1">
                              <p>
                                <img
                                alt=''
                                  src="https://static.pbcdn.in/myaccount-cdn/images/assets/claims-selected.png"
                                  style={{ width: '40px', height: '40px' }}
                                />
                                Claim support
                              </p>
                            </div>
                          </a>
                        </div>
                        <div class="child ">
                          <a activeclassname="active" href="/transactions">
                            <div class="col-1">
                              <p>
                                <img
                                  src="https://static.pbcdn.in/myaccount-cdn/images/assets/paymentHistory.png"
                                  style={{ width: '40px', height: '40px' }}
                                />
                                Payments
                              </p>
                            </div>
                          </a>
                        </div>
                        <div class="child ">
                          <a activeclassname="active" href="/profile">
                            <div class="col-1">
                              <p>
                                <img
                                  src="https://static.pbcdn.in/myaccount-cdn/images/assets/hoverProfile.png"
                                  style={{ width: '40px', height: '40px' }}
                                />
                                Profile
                              </p>
                            </div>
                          </a>
                        </div>
                        <div class="child ">
                          <a activeclassname="active" href="/settings">
                            <div class="col-1">
                              <p>
                                <img
                                  src="https://static.pbcdn.in/myaccount-cdn/images/assets/hoverSettings.png"
                                  style={{ width: '40px', height: '40px' }}
                                />
                                Settings
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="social-link">
                        <p>Download our app</p>
                        <div class="btn">
                          <a
                            href="https://itunes.apple.com/app/apple-store/id956740142?pt=117733554&amp;ct=MyAccountDesktop&amp;mt=8"
                            target="_blank"
                          >
                            <img src="https://static.pbcdn.in/myaccount-cdn/images/assets/Download_on_the_App_Store_Bad.png" />
                          </a>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.policybazaar&amp;referrer=utm_source%3DMyAccountDesktop"
                            target="_blank"
                          >
                            <img src="https://static.pbcdn.in/myaccount-cdn/images/assets/google-play-badge.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="disclaimerLink">
                  <a
                    href="#"
                    target="_blank"
                    class="btnLink"
                  >
                    <span>Disclaimer</span> Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="left-panel">
            <div class="header-desktop">
              <div class="container">
                <div class="logo">
                  <div class="pull-left">
                    <img alt='' src={pruLogo} style={{width:"100px"}}/>
                  </div>
                  <div class="pull-right">
                    <div>
                      <div>
                        <div class="bellIcon" id="">
                          {' '}
                          <img src="https://static.pbcdn.in/myaccount-cdn/images/assets/notification.svg" />
                        </div>
                        <div class="notification_block">
                          <div>
                            <span class="arrow_box"></span>
                            <span class="notification_heading">
                              Notifications
                            </span>
                            <div class="notification_list">
                              <ul class="notification_data">
                                <div style={{padding: "34px"}}>
                                  You do not have any new notification
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="h_l" title="Logout">
                        <img src="https://static.pbcdn.in/myaccount-cdn/images/assets/logout.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p class="text-center full-width"> </p>
                <div class="claimRaiseContainer">
                  <div class="claimRaiseContainerInner">
                    <div class="policyDetailOpenTicketScreen">
                      <div class="technicalIssueScreen">
                        <div class="technicalIssueScreenInner">
                          <img
                            src="https://static.pbcdn.in/myaccount-cdn/images/assets/yourPolicy.svg"
                            alt="tech issue"
                          />
                          <div class="contentInfo">
                            <strong>
                              You have no policies to file a Claim for.
                            </strong>
                            <p>Let us take you back home.</p>
                            <a class="btn">Go to your policies</a>
                          </div>
                        </div>
                      </div>
                      <div class="twoColumnLayout">
                        <div class="leftContainer">
                          <div class="leftContainerInner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label for="rmDetailsTrigger" class="rmDetailsBackdrop"></label>
        </div>
      </div>
    </div>
  );
}
