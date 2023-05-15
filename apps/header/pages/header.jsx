import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import navbar from '../styles/navbar.module.css';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar({ user }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { name: 'Home', url: '/home' },
          { name: 'Products', url: '/products' },
          { name: 'About Us', url: '/aboutUs' },
          { name: 'Careers', url: '/career' },
          { name: 'Join the WaitList', url: '/joinWaitList' },
          { name: 'Support Prudentiul', url: '/about' },
          { name: 'Search', url: '/about' },
          { name: 'Sign Up', url: '/about' },
          { name: 'Login', url: '/about' },
        ].map((item, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <ListItemButton component="a" href={item.url}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            <Divider></Divider>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div class="policywarp">
      <div class="pb-overlay"></div>
      <nav itemscope="" itemtype="http://schema.org/SiteNavigationElement">
        <div class="pb-navbar-wrapper ">
          <div class="pb-quick-connect">
            <div class="pb-container">
              <ul class="smallheader_nav">
                <li>
                  <a href="https://www.policybazaar.com/claim/">Claim</a>
                </li>

                <li>
                  <a
                    href="https://www.policybazaar.com/insurance-app/"
                    class="download"
                  >
                    Get The App
                  </a>
                </li>
                <li class="lang" p9ignore="true">
                  <div class="langTrans">
                    <select onchange="if(this.value) window.location.href=this.value">
                      <option value="" class="black">
                        Language
                      </option>
                      <option
                        value="https://www.policybazaar.com/health-insurance/health-insurance-india/"
                        class="black"
                      >
                        English
                      </option>
                      <option
                        value="https://www.policybazaar.com/hi-in/health-insurance/health-insurance-india/"
                        class="black"
                      >
                        हिन्दी
                      </option>
                      <option value="https://www.policybazaar.com/ta-in/health-insurance/health-insurance-india/">
                        தமிழ்
                      </option>
                      <option value="https://www.policybazaar.com/te-in/health-insurance/health-insurance-india/">
                        తెలుగు
                      </option>
                      <option value="https://www.policybazaar.com/mr-in/health-insurance/health-insurance-india/">
                        मराठी
                      </option>
                    </select>
                  </div>
                </li>

                <li class="pbsales sales">
                  <a href="tel:1800-208-8787" class="tollFreeNo">
                    Sales: 1800-208-8787
                  </a>
                </li>

                <li>
                  <a href="tel:1800-258-5970" class="tollFreeNo">
                    Service: 1800-258-5970
                  </a>
                </li>
                <li>
                  <a href="https://www.policybazaar.com/contact-us/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pb-navbar">
            <div class="pb-container flexgrid ">
              <div class="policybazaar-logo">
                <span class="btn-toggle"></span>

                <span class="pb-logo" title="poliybazaar logo"></span>
              </div>
              <div class="langTrans">
                <select onchange="if(this.value) window.location.href=this.value">
                  <option value="" class="black">
                    Language
                  </option>
                  <option
                    value="https://www.policybazaar.com/health-insurance/health-insurance-india/"
                    class="black"
                  >
                    English
                  </option>
                  <option
                    value="https://www.policybazaar.com/hi-in/health-insurance/health-insurance-india/"
                    class="black"
                  >
                    हिन्दी
                  </option>
                  <option value="https://www.policybazaar.com/ta-in/health-insurance/health-insurance-india/">
                    தமிழ்
                  </option>
                  <option value="https://www.policybazaar.com/te-in/health-insurance/health-insurance-india/">
                    తెలుగు
                  </option>
                  <option value="https://www.policybazaar.com/mr-in/health-insurance/health-insurance-india/">
                    मराठी
                  </option>
                </select>
              </div>
              <div class="user_signin ">
                <span rel="nofollow" class="mobsignin">
                  Sign In
                </span>
                <span rel="nofollow" class="closebox hide"></span>
              </div>
              <div class="pb-nav">
                <div class="policybazaar-logo mobile">
                  <a
                    href="https://www.policybazaar.com/"
                    class="pb-logo"
                    title="poliybazaar logo"
                  ></a>

                  <span class="btn-close"></span>
                </div>

                <ul class="nav">
                  <li class="">
                    <label for="lifeInsurance">Term Insurance </label>
                    <input
                      type="checkbox"
                      id="lifeInsurance"
                      name="menu-item"
                    />
                    <div class="hide-nav" style="display: none;">
                      <a
                        itemprop="url"
                        class="ml-0"
                        href="https://www.policybazaar.com/life-insurance/term-insurance/"
                      >
                        <span itemprop="name">Term Insurance</span>
                      </a>
                    </div>
                    <ul class="dropdown-menu min">
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/term-insurance/zero-cost-term-insurance/"
                          class="ml-7"
                        >
                          <span itemprop="name">No Cost Term Insurance</span>
                          <i class="ribbonmenu new"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/term-insurance/term-insurance-for-nri-in-india/"
                          class="ml-7"
                        >
                          <span itemprop="name">Term Insurance for NRIs</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/term-insurance/term-insurance-for-housewife/"
                          class="ml-7"
                        >
                          <span itemprop="name">
                            Term Insurance for Housewife
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/term-insurance/best-term-insurance-plans-in-india/"
                          class="ml-7"
                        >
                          <span itemprop="name">Best Term Insurance Plans</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/"
                          class="ml-7"
                        >
                          <span itemprop="name">Life Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/term-insurance/1-crore-term-insurance/"
                        >
                          <span itemprop="name">1 Crore Term Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/term-insurance-calculator/"
                        >
                          <span itemprop="name">Term Insurance Calculator</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/term-insurance-return-of-premium/"
                        >
                          <span itemprop="name">
                            Term Insurance Return of Premium
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/term-insurance/saral-jeevan-bima/"
                          class="ml-7"
                        >
                          <span itemprop="name">Saral Jeevan Bima</span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://termclaim.policybazaar.com/"
                        >
                          <span itemprop="name">
                            Dedicated Claim Assistance
                          </span>
                          <i class="ribbonmenu new"></i>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <label for="investmentPlans">Investment Plans </label>
                    <input
                      type="checkbox"
                      id="investmentPlans"
                      name="menu-item"
                    />
                    <ul class="dropdown-menu min">
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/investment-plans/"
                        >
                          <span itemprop="name">
                            Investment Plans with High Returns
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/ulip-plans/"
                        >
                          <span itemprop="name">
                            Market Linked Investment Plans (ULIP)
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/capital-guarantee-plans/"
                        >
                          <span itemprop="name">Capital Guarantee Plans</span>
                          <i class="ribbonmenu new"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/investment-plans/articles/nri-investment-plans-in-india/"
                        >
                          <span itemprop="name">Investment Plans for NRIs</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/child-plans/"
                        >
                          <span itemprop="name">Child Plans</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/pension-plans/"
                        >
                          <span itemprop="name">Pension Plans</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/traditional-plan-india/"
                        >
                          <span itemprop="name">Guaranteed Return Plans</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/income-tax/tax-saving-investments/"
                        >
                          <span itemprop="name">Tax Saving Investments</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/sip/"
                        >
                          <span itemprop="name">
                            SIP (Systematic Investment Plan)
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/endowment-policy/"
                        >
                          <span itemprop="name">Endowment Policy</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/insurance-companies/lic-of-india/"
                        >
                          <span itemprop="name">LIC</span>
                          <i class="ribbonmenu new"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/money-back-policy/"
                        >
                          <span itemprop="name">Money Back Policy</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/life-insurance/annuity/"
                        >
                          <span itemprop="name">Annuity Plans</span>
                          <i class="ribbonmenu new"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <label for="healthInsurance">Health Insurance </label>
                    <input
                      type="checkbox"
                      id="healthInsurance"
                      name="menu-item"
                    />
                    <div
                      class="hide-nav hide-mobile-link onlydesktop"
                      style="display: none;"
                    >
                      <a
                        itemprop="url"
                        href="https://www.policybazaar.com/health-insurance/health-insurance-india/"
                      >
                        <span itemprop="name">Health Insurance</span>
                      </a>
                    </div>
                    <ul class="dropdown-menu min">
                      <li class="hide-mobile-link onlymobile">
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/health-insurance-india/"
                        >
                          <span itemprop="name">Health Insurance Plans</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/family-health-insurance-plan/"
                        >
                          <span itemprop="name">Family Health Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/senior-citizen-health-insurance/"
                        >
                          <span itemprop="name">
                            Senior Citizen Health Insurance
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/parents/"
                        >
                          <span itemprop="name">
                            Health Insurance for Parents
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/individual-health-insurance/articles/best-health-insurance-plans-in-india/"
                        >
                          <span itemprop="name">
                            Best Health Insurance Plans
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/maternity/"
                        >
                          <span itemprop="name">Maternity Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/portability/"
                        >
                          <span itemprop="name">
                            Health Insurance Portability
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/mediclaim-insurance/"
                        >
                          <span itemprop="name">Mediclaim Policy</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/critical-illness-insurance/"
                        >
                          <span itemprop="name">
                            Critical Illness Insurance
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/health-insurance-premium-calculator/"
                        >
                          <span itemprop="name">
                            Health Insurance Calculator
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/companies/"
                        >
                          <span itemprop="name">
                            Health Insurance Companies
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/nri/"
                        >
                          <span itemprop="name">Health Insurance for NRIs</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/claim/"
                        >
                          <span itemprop="name">Health Insurance Claim</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <label for="motorInsurance">Motor Insurance</label>
                    <input
                      type="checkbox"
                      id="motorInsurance"
                      name="menu-item"
                    />
                    <div class="hide-nav" style="display: none;">
                      <a
                        itemprop="url"
                        href="https://www.policybazaar.com/motor-insurance/"
                      >
                        <span itemprop="name">Motor Insurance</span>
                      </a>
                    </div>
                    <ul class="dropdown-menu min">
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/car-insurance/"
                        >
                          <span itemprop="name">Car Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/two-wheeler-insurance/"
                        >
                          <span itemprop="name">Two Wheeler Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/car-insurance/add-on-covers/zero-depreciation/"
                        >
                          <span itemprop="name">Zero Dep Car Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/third-party-insurance/"
                        >
                          <span itemprop="name">Third Party Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/third-party-two-wheeler-insurance/"
                        >
                          <span itemprop="name">
                            Third Party Bike Insurance
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/car-insurance-calculator/"
                        >
                          <span itemprop="name">Car Insurance Calculator</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/bike-insurance-calculator/"
                        >
                          <span itemprop="name">
                            Two Wheeler Insurance Calculator
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/car-insurance/companies/"
                        >
                          <span itemprop="name">
                            Best Car Insurance Companies
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/car-insurance/pay-as-you-drive-insurance/"
                        >
                          <span itemprop="name">
                            Pay As You Drive Insurance
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/car-insurance/electric/"
                        >
                          <span itemprop="name">Electric Car Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/two-wheeler-insurance/e-bike/"
                        >
                          <span itemprop="name">e-bike Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/used-car-insurance/"
                        >
                          <span itemprop="name">Used Car Insurance</span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/car-insurance-claim/"
                        >
                          <span itemprop="name">Car Insurance Claim</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/motor-insurance/car-insurance/floater-policy/"
                        >
                          <span itemprop="name">Motor Floater Insurance</span>
                          <i class="ribbonmenu new"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <label for="otherInsurance">Other Insurance </label>
                    <input
                      type="checkbox"
                      id="otherInsurance"
                      name="menu-item"
                    />
                    <div
                      class="hide-nav hide-mobile-link"
                      style="display: none;"
                    >
                      <a
                        itemprop="url"
                        href="https://www.policybazaar.com/other-insurance/"
                      >
                        <span itemprop="name">Other Insurance</span>
                      </a>
                    </div>
                    <ul class="dropdown-menu min">
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/general-insurance/"
                        >
                          <span itemprop="name">General Insurance</span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/group-insurance/"
                        >
                          <span itemprop="name">Group Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/cyber-insurance/"
                        >
                          <span itemprop="name">Cyber Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/directors-and-officers-liability-insurance/"
                        >
                          <span itemprop="name">D&amp;O Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/workmen-compensation-policy/"
                        >
                          <span itemprop="name">Workers Compensation</span>
                        </a>
                      </li>
                      <li>
                        <a itemprop="url" href="https://sme.policybazaar.com/">
                          <span itemprop="name">Business Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/travel-insurance/"
                        >
                          <span itemprop="name">Travel Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/home-insurance/"
                        >
                          <span itemprop="name">Home Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/health-insurance/cancer-insurance/"
                        >
                          <span itemprop="name">Cancer Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/defence-personnel-insurance/"
                        >
                          <span itemprop="name">
                            Defence Personnel Insurance
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/pet-insurance/"
                        >
                          <span itemprop="name">Pet Insurance</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <label for="businessinsurance">Business Insurance </label>
                    <input
                      type="checkbox"
                      id="businessinsurance"
                      name="menu-item"
                    />
                    <div
                      class="hide-nav hide-mobile-link"
                      style="display: none;"
                    >
                      <a
                        itemprop="url"
                        href="https://www.policybazaar.com/commercial-insurance/business-insurance/"
                      >
                        <span itemprop="name">Business Insurance</span>
                      </a>
                    </div>
                    <ul class="dropdown-menu min">
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/group-health-insurance/"
                        >
                          <span itemprop="name">Group Health Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/fire-insurance/"
                        >
                          <span itemprop="name">
                            Fire and Burglary Insurance
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/marine-insurance/"
                        >
                          <span itemprop="name">Marine Insurance</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/workmen-compensation-policy/"
                        >
                          <span itemprop="name">Workers Compensation</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/professional-indemnity-insurance/"
                        >
                          <span itemprop="name">
                            Professional Indemnity Insurance
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/comprehensive-liability-insurance/"
                        >
                          <span itemprop="name">
                            Comprehensive General Liability Insurance
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://www.policybazaar.com/commercial-insurance/cyber-insurance/"
                        >
                          <span itemprop="name">Cyber Insurance</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <label for="renewal">Renewal</label>
                    <input type="checkbox" id="renewal" name="menu-item" />
                    <div
                      class="hide-nav hide-mobile-link"
                      style="display: none;"
                    >
                      <span itemprop="url">Renewal</span>
                    </div>
                    <ul class="dropdown-menu min">
                      <li>
                        <a
                          itemprop="url"
                          href="https://liferenewal.policybazaar.com/"
                          rel="nofollow"
                        >
                          <span itemprop="name">Life Renewal</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://healthrenewal.policybazaar.com?utm_source=pb_home&amp;utm_medium=topnavigation"
                          rel="nofollow"
                        >
                          <span itemprop="name">Health Renewal</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://ci.policybazaar.com/?pb_campaign=hm_renewal"
                          rel="nofollow"
                        >
                          <span itemprop="name">Motor Renewal</span>
                        </a>
                      </li>
                      <li>
                        <a
                          itemprop="url"
                          href="https://twowheeler.policybazaar.com/?pb_campaign=hm_renewal"
                          rel="nofollow"
                        >
                          <span itemprop="name">Two Wheeler Renewal</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="myacc">
                    <span
                      id="usersign_click_myacc"
                      class="mobile_hide_myacc"
                      rel="nofollow"
                    >
                      My Account
                    </span>
                  </li>

                  <li class="mobile-only">
                    <a
                      href="https://www.policybazaar.com/contact-us/"
                      rel="nofollow"
                    >
                      Register a Complaint
                    </a>
                  </li>
                  <li class="mobile-only">
                    <a href="tel:1800-208-8787" class="single tollFreeNo">
                      <img
                        src="https://static.pbcdn.in/cdn/images/navigation-call-icon.png"
                        alt="tollfree no"
                      />
                      <span itemprop="name">Sales</span>1800-208-8787
                    </a>
                  </li>
                  <li class="mobile-only">
                    <a href="tel:1800-258-5970" class="single tollFreeNo">
                      <img
                        src="https://static.pbcdn.in/cdn/images/navigation-call-icon.png"
                        alt="tollfree no"
                      />
                      <span itemprop="name">Service</span>1800-258-5970
                    </a>
                  </li>
                  <li class="mobileAppmenu mobile-only">
                    <p>Download Mobile App</p>
                    <div class="appitem">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.policybazaar&amp;hl=en"
                        style="font-size: 0px"
                        class="googleplay"
                      >
                        googleplay
                      </a>
                      <a
                        href="https://itunes.apple.com/us/app/policybazaar/id956740142?ls=1&amp;mt=8"
                        style="font-size: 0px"
                        class="ios"
                      >
                        ios
                      </a>
                    </div>
                  </li>
                  <li class="user_signin">
                    <span
                      id="usersign_click"
                      class="mobile_hide_sign"
                      rel="nofollow"
                      href="javascript:void(0)"
                    >
                      Sign In
                    </span>

                    <ul class="signin-dropdown hide">
                      <li>
                        <div
                          rel="nofollow"
                          onclick="topNavLoginGa('Your Account');redirectToMyAcc('/dashboard');"
                          class="link-block"
                          href="javascript:void(0)"
                        >
                          <div class="linkitme">My Account</div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="link-block ico-2"
                          rel="nofollow"
                          onclick="topNavLoginGa('Your Policies');redirectToMyAcc('/policies/all');"
                          href="javascript:void(0)"
                        >
                          <div class="linkitme">My Policies</div>
                        </div>
                      </li>

                      <li>
                        <div
                          class="link-block ico-4"
                          rel="nofollow"
                          onclick="topNavLoginGa('Claims Assistance');redirectToMyAcc('/claimAwareness');"
                          href="javascript:void(0)"
                        >
                          <div class="linkitme">Claims Assistance</div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="link-block ico-5"
                          rel="nofollow"
                          onclick="topNavLoginGa('Calling Preference');redirectToMyAcc('/settings');"
                          href="javascript:void(0)"
                        >
                          <div class="linkitme">Calling Preference</div>
                        </div>
                      </li>
                      <li>
                        <span
                          rel="nofollow"
                          class="ico-6"
                          href="javascript:void(0)"
                        >
                          <div class="linkitme centrallogout">Logout</div>
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
