import { useEffect, useState } from 'react';
import '../styles/products.css';
import data from './data';
import { mobileCheck } from '../utility/common';

export default function Product({ nextCallback, setPlanList }) {
  const products = data;

  let [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    let arr = products.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.PlanId === value.PlanId)
    );
    setFilterProduct([...arr]);
  }, []);

  return (
    <div
      class={
        !mobileCheck()
          ? 'main_quotes_div is-hidden-mobile is-hidden-tablet-only-custom null'
          : 'main_quotes_mobile_div is-hidden-desktop-custom'
      }
    >
      <div
        class={
          !mobileCheck()
            ? 'main_quotes_container'
            : 'main_quotes_mobile_container'
        }
      >
        {filterProduct.map((item) => {
          return (
            <div
              key={item.PlanId}
              class={
                !mobileCheck()
                  ? 'quotes_stack_content_container is-hidden-mobile is-hidden-tablet-only-custom property_stack'
                  : 'quotes_stack_content_mobile_container is-hidden-desktop-custom'
              }
              id="quoteStack0"
            >
              <div class="main-container-quotesV2">
                <div class="quotes_rvmp_card">
                  <div class="quotes_rvmp_card__upper_div hospCountOrder">
                    <div class="quotes_rvmp_card__content__plan_header">
                      <div>
                        <span class="quotes_rvmp_card__content__plan_header__name">
                          {item.PlanName}
                        </span>
                        {/* <span class="quotes_rvmp_card__content__plan_header__discount">5% Direct discount*</span> */}
                      </div>
                    </div>
                    <ul class="quotes_rvmp_card__content__features">
                      {item.TopFeatures.map((fet, index) => {
                        return fet.FeatureCrispShortText ? (
                          <li key={index}>
                            <span>{fet.FeatureCrispShortText}</span>
                          </li>
                        ) : (
                          ''
                        );
                      })}
                      <li>View all features</li>
                    </ul>
                  </div>
                  <div class="quotes_rvmp_card__content__bottom_buttons">
                    <div class="quotes_rvmp_card__content__plan_amounts">
                      <div>
                        <span>Cover amount</span>
                        <div class=" ">{'₹ ' + item.SumInsured}</div>
                      </div>
                      <div
                        onClick={() => (window.location.href = `./hospital`)}
                        class="hospCountWrap"
                      >
                        <span>Cashless hospitals</span>
                        <em class="rightArrow">8000</em>
                      </div>
                    </div>
                    <div class="quotesRevampCtaWrap">
                      <button
                        onClick={() =>
                          (window.location.href = `./plan?PlanId=${item.PlanId}`)
                        }
                        class="primaryMainCta"
                      >{`₹ ${parseInt(item.FinalPremium / 12)}/month`}</button>

                      <p class="premiumAnnual">
                        {`₹ ${item.FinalPremium}`} annually
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div class="lazyload-placeholder" style={{ height: '100px' }}></div>
        <div class="lazyload-placeholder" style={{ height: '100px' }}></div>
        <div class="lazyload-placeholder" style={{ height: '100px' }}></div>
        <div class="lazyload-placeholder" style={{ height: '100px' }}></div>
        <div class="lazyload-placeholder" style={{ height: '100px' }}></div>
      </div>
    </div>
  );
}
