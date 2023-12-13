import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="l-footer bg-black u-full-width nde1b" data-version="4.64.3">
      <div className ="ncss-container nav-fixed-fluid prl5-md pt5-sm pt10-md pb0-md prl10-lg">
        <div className ="l-footer-body ncss-row mb4-sm">
          <div
            className="ncss-col-sm-12 ncss-col-md-9 va-sm-t"
            data-pre="FooterMenu"
            >
            <div className ="hf-accordion-group ncss-row" data-pre="AccordionGroup">
              <div
                className="hf-accordion footer-accordion ncss-col-sm-12 ncss-col-md-4 ncss-col-lg-3 va-sm-t is-open-md"
                data-index="0"
                data-maxheight="400"
                data-pre="Accordion"
                >
                <p className ="hf-accordion-header">
                  <button
                    data-var="toggleBtn"
                    className="hf-accordion-button bg-transparent nav-uppercase nav-brand p4-sm"
                    >
                    <span></span>
                    <i className ="hf-accordion-icon g72-plus" data-var="icon"></i>
                  </button>
                </p>
                <div className ="hf-accordion-body" data-var="body">
                  <ul>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="gift cards"
                        href="https://www.nike.com/gift-cards"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        GIFT CARDS
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="find a store"
                        href="https://www.nike.com/retail"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        FIND A STORE
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="become a member"
                        href="https://www.nike.com/register"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        BECOME A MEMBER
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        data-type="click_navFooter"
                        data-path="nike x nba"
                        href="https://www.nike.com/nikexnba"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        NIKE X NBA
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="nike journal"
                        href="https://www.nike.com/stories"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        NIKE JOURNAL
                      </a>
                    </li>
                    <li className="footer-link">
                      <button
                        target="_self"
                        data-type="click_navFooter"
                        data-path="site feedback"
                        href="#site-feedback"
                        className="nav-btn p0-sm feed-back-button"
                        data-pre="ILink"
                      >
                        SEND US FEEDBACK
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="hf-accordion footer-accordion ncss-col-sm-12 ncss-col-md-4 ncss-col-lg-3 va-sm-t is-open-md"
                data-index="1"
                data-maxheight="400"
                data-pre="Accordion"
              >
                <p className ="hf-accordion-header">
                  <button
                    data-var="toggleBtn"
                    className="hf-accordion-button bg-transparent nav-uppercase nav-brand p4-sm"
                  >
                    <span>Get Help</span>
                    <i className ="hf-accordion-icon g72-plus" data-var="icon"></i>
                  </button>
                </p>
                <div className ="hf-accordion-body" data-var="body">
                  <ul>
                    <li className="footer-link footer-link-header d-sm-h d-md-b">
                      <a
                        language="en"
                        aria-label="main-footer, main-footer, Get Help"
                        data-type="click_navFooter"
                        data-path="get help"
                        href="https://www.nike.com/help"
                        className="nav-uppercase nav-brand"
                        data-pre="ILink"
                      >
                        Get Help
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="get help:order status"
                        href="https://www.nike.com/orders/details/"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Order Status
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="get help:shipping and delivery"
                        href="https://www.nike.com/help/a/shipping-delivery"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Shipping and Delivery
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="get help:returns"
                        href="https://www.nike.com/help/a/returns-policy"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Returns
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="get help:order cancellation"
                        href="https://www.nike.com/help/a/change-cancel-order"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Order Cancellation
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="get help:payment options"
                        href="https://www.nike.com/help/a/payment-options"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Payment Options
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="get help:gift card balance"
                        href="https://www.nike.com/orders/gift-card-lookup"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Gift Card Balance
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="get help:contact us"
                        href="https://www.nike.com/help/#contact"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="hf-accordion footer-accordion ncss-col-sm-12 ncss-col-md-4 ncss-col-lg-3 va-sm-t is-open-md"
                data-index="2"
                data-maxheight="400"
                data-pre="Accordion"
              >
                <p className ="hf-accordion-header">
                  <button
                    data-var="toggleBtn"
                    className="hf-accordion-button bg-transparent nav-uppercase nav-brand p4-sm"
                  >
                    <span>About Nike</span>
                    <i className ="hf-accordion-icon g72-plus" data-var="icon"></i>
                  </button>
                </p>
                <div className ="hf-accordion-body" data-var="body">
                  <ul>
                    <li className="footer-link footer-link-header d-sm-h d-md-b">
                      <a
                        language="en"
                        aria-label="main-footer, About Nike"
                        data-type="click_navFooter"
                        data-path="about nike"
                        href="http://about.nike.com/"
                        className="nav-uppercase nav-brand"
                        data-pre="ILink"
                      >
                        About Nike
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="about nike:news"
                        href="http://news.nike.com/"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        News
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="about nike:careers"
                        href="https://jobs.nike.com/"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="about nike:investors"
                        href="http://investors.nike.com/"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Investors
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="about nike:purpose"
                        href="https://purpose.nike.com/"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Purpose
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="about nike:sustainability"
                        href="https://www.nike.com/sustainability"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Sustainability
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="hf-accordion footer-accordion ncss-col-sm-12 ncss-col-md-4 ncss-col-lg-3 va-sm-t is-open-md"
                data-index="3"
                data-maxheight="400"
                data-pre="Accordion"
              >
                <p className ="hf-accordion-header">
                  <button
                    data-var="toggleBtn"
                    className="hf-accordion-button bg-transparent nav-uppercase nav-brand p4-sm"
                  >
                    <span>Promotions &amp; Discounts</span>
                    <i className ="hf-accordion-icon g72-plus" data-var="icon"></i>
                  </button>
                </p>
                <div className ="hf-accordion-body" data-var="body">
                  <ul>
                    <li className="footer-link footer-link-header d-sm-h d-md-b">
                      <a
                        language="en"
                        aria-label="main-footer, Promotions &amp; Discounts"
                        data-type="click_navFooter"
                        data-path="promotions discounts"
                        href="https://www.nike.com/promo-code"
                        className="nav-uppercase nav-brand"
                        data-pre="ILink"
                      >
                        Promotions &amp; Discounts
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="promotions discounts:student"
                        href="https://www.nike.com/help/a/student-discount"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Student
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="promotions discounts:military"
                        href="https://www.nike.com/help/a/military-discount"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Military
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="promotions discounts:teacher"
                        href="https://www.nike.com/help/a/teacher-discount"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Teacher
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="promotions discounts:first responders medical professionals"
                        href="https://www.nike.com/help/a/first-responder-discount"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        First Responders &amp; Medical Professionals
                      </a>
                    </li>
                    <li className="footer-link">
                      <a
                        target="_self"
                        data-type="click_navFooter"
                        data-path="promotions discounts:birthday"
                        href="https://www.nike.com/help/a/birthday-terms-promo"
                        className="fs12-nav-sm"
                        data-pre="ILink"
                      >
                        Birthday
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="l-social-menu ncss-col-sm-12 ncss-col-md-3 va-sm-t mt4-sm mt0-md pl6-sm pl0-md"
            data-pre="SocialMediaMenu"
          >
            <ul className="social-links pl3-sm">
              <li className="d-sm-ib fs28-nav-sm lh28-nav-sm ml0-sm mr4-sm ml4-md mr0-md">
                <a
                  target="_blank"
                  aria-label="Twitter"
                  title="Twitter"
                  data-type="click_navFooter"
                  data-path="social:twitter"
                  href="https://twitter.com/Nike"
                  className="social-link footer-link"
                  data-pre="ILink"
                >
                  <svg
                    className="social-link-icon"
                    width="30px"
                    fill="#111"
                    height="30px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z"></path>
                  </svg>
                </a>
              </li>
              <li className="d-sm-ib fs28-nav-sm lh28-nav-sm ml0-sm mr4-sm ml4-md mr0-md">
                <a
                  target="_blank"
                  aria-label="Facebook"
                  title="Facebook"
                  data-type="click_navFooter"
                  data-path="social:facebook"
                  href="https://www.facebook.com/nike"
                  className="social-link footer-link"
                  data-pre="ILink"
                >
                  <svg
                    className="social-link-icon"
                    width="30px"
                    fill="#111"
                    height="30px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path>
                  </svg>
                </a>
              </li>
              <li className="d-sm-ib fs28-nav-sm lh28-nav-sm ml0-sm mr4-sm ml4-md mr0-md">
                <a
                  target="_blank"
                  aria-label="Youtube"
                  title="Youtube"
                  data-type="click_navFooter"
                  data-path="social:youtube"
                  href="https://www.youtube.com/user/nike"
                  className="social-link footer-link"
                  data-pre="ILink"
                >
                  <svg
                    className="social-link-icon"
                    width="30px"
                    fill="#111"
                    height="30px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z"></path>
                  </svg>
                </a>
              </li>
              <li className="d-sm-ib fs28-nav-sm lh28-nav-sm ml0-sm mr4-sm ml4-md mr0-md">
                <a
                  target="_blank"
                  aria-label="Instagram "
                  title="Instagram "
                  data-type="click_navFooter"
                  data-path="social:instagram"
                  href="https://instagram.com/nike"
                  className="social-link footer-link"
                  data-pre="ILink"
                >
                  <svg
                    className="social-link-icon"
                    width="30px"
                    fill="#111"
                    height="30px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className ="l-sub-footer ncss-row" data-pre="SubFooter">
          <div className ="ncss-col-sm-12 ncss-col-md-6 pt3-sm pl5-sm pl2-md">
            <div className ="d-md-flx flx-dir-r flx-ai-md-fe">
              <a
                aria-label="Selected Location: United States"
                title="Selected Location: United States"
                data-pre="ILink"
                href="//www.nike.com/language_tunnel"
                className="fs12-nav-sm nav-color-white country-pin"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="18px"
                  height="15px"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="country-pin-label">United States</span>
              </a>
              <div className ="fs12-nav-sm d-sm-b d-md-ib pb6-sm pt5-sm pb0-md ml4-md sub-footer-copyright">
                <span id="hf_header_label_copyright">
                  © 2023 Nike, Inc. All Rights Reserved
                </span>
              </div>
            </div>
          </div>
          <div className ="ncss-col-sm-12 ncss-col-md-6 pb3-sm pb0-md pl5-sm pl0-md">
            <ul className="sub-footer-menu">
              <li className="ml3-md mr0-md d-sm-b d-md-ib fs12-nav-sm fs10-nav-md">
                <div
                  id="SubFooterDropdown-0"
                  className="pre-dropdown-menu sub-footer-menu-dropdown"
                  data-pre="DropdownMenu"
                >
                  <button
                    aria-expanded="false"
                    aria-controls="SubFooterDropdown-0-Menu"
                    data-var="ctrl"
                    aria-label="Guides"
                    data-type="click_navFooter"
                    data-path="guides"
                    className="nav-btn p0-sm sub-footer-menu-link nav-sm-b footer-link pt2-sm pb2-sm prl2-md d-sm-b fs12-nav-sm"
                    data-pre="ILink"
                  >
                    Guides
                  </button>
                  <div
                    id="SubFooterDropdown-0-Menu"
                    className="hf-dropdown-menu-box-container"
                    data-var="content"
                  >
                    <div className ="hf-dropdown-menu-box">
                      <ul className="ncss-row">
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Adapt"
                            data-type="click_navFooter"
                            data-path="guides:nike adapt"
                            href="https://www.nike.com/adapt"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Adapt
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Air"
                            data-type="click_navFooter"
                            data-path="guides:nike air"
                            href="https://www.nike.com/air"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Air
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Air Force 1"
                            data-type="click_navFooter"
                            data-path="guides:nike air force 1"
                            href="https://www.nike.com/air-force-1"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Air Force 1
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Air Max"
                            data-type="click_navFooter"
                            data-path="guides:nike air max"
                            href="https://www.nike.com/air-max"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Air Max
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike FlyEase"
                            data-type="click_navFooter"
                            data-path="guides:nike flyease"
                            href="https://www.nike.com/flyease"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike FlyEase
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Flyknit"
                            data-type="click_navFooter"
                            data-path="guides:nike flyknit"
                            href="https://www.nike.com/flyknit"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Flyknit
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Flyleather"
                            data-type="click_navFooter"
                            data-path="guides:nike flyleather"
                            href="https://www.nike.com/flyleather"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Flyleather
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Free"
                            data-type="click_navFooter"
                            data-path="guides:nike free"
                            href="https://www.nike.com/free"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Free
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Joyride"
                            data-type="click_navFooter"
                            data-path="guides:nike joyride"
                            href="https://www.nike.com/joyride"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Joyride
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike React"
                            data-type="click_navFooter"
                            data-path="guides:nike react"
                            href="https://www.nike.com/react"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike React
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike Vaporfly"
                            data-type="click_navFooter"
                            data-path="guides:nike vaporfly"
                            href="https://www.nike.com/running/vaporfly"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike Vaporfly
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Nike ZoomX"
                            data-type="click_navFooter"
                            data-path="guides:nike zoomx"
                            href="https://www.nike.com/zoomx"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Nike ZoomX
                          </a>
                        </li>
                        <li className="ncss-col-sm-4 va-sm-m lh12-nav-sm">
                          <a
                            aria-label="bottom-footer, Guides, Space Hippie"
                            data-type="click_navFooter"
                            data-path="guides:space hippie"
                            href="https://www.nike.com/space-hippie"
                            className="sub-footer-submenu-link footer-link fs12-nav-sm"
                            data-pre="ILink"
                          >
                            Space Hippie
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="ml3-md mr0-md d-sm-b d-md-ib fs12-nav-sm fs10-nav-md">
                <a
                  target="_blank"
                  aria-label="Terms of Sale"
                  data-type="click_navFooter"
                  data-path="terms of sale"
                  href="https://agreementservice.svs.nike.com/us/en_us/rest/agreement?agreementType=termsOfSale&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect"
                  className="sub-footer-menu-link nav-sm-b footer-link pt2-sm pb2-sm prl2-md d-sm-b fs12-nav-sm"
                  data-pre="ILink"
                >
                  Terms of Sale
                </a>
              </li>
              <li className="ml3-md mr0-md d-sm-b d-md-ib fs12-nav-sm fs10-nav-md">
                <a
                  target="_blank"
                  aria-label="Terms of Use"
                  data-type="click_navFooter"
                  data-path="terms of use"
                  href="https://agreementservice.svs.nike.com/us/en_us/rest/agreement?agreementType=termsOfUse&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect"
                  className="sub-footer-menu-link nav-sm-b footer-link pt2-sm pb2-sm prl2-md d-sm-b fs12-nav-sm"
                  data-pre="ILink"
                >
                  Terms of Use
                </a>
              </li>
              <li className="ml3-md mr0-md d-sm-b d-md-ib fs12-nav-sm fs10-nav-md">
                <a
                  target="_blank"
                  aria-label="Nike Privacy Policy"
                  data-type="click_navFooter"
                  data-path="nike privacy policy"
                  href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect"
                  className="sub-footer-menu-link nav-sm-b footer-link pt2-sm pb2-sm prl2-md d-sm-b fs12-nav-sm"
                  data-pre="ILink"
                >
                  Nike Privacy Policy
                </a>
              </li>
              <li className="ml3-md mr0-md d-sm-b d-md-ib fs12-nav-sm fs10-nav-md">
                <a
                  target="_self"
                  aria-label="Your Privacy Choices"
                  data-type="click_navFooter"
                  data-path="your privacy choices"
                  href="https://www.nike.com/guest/settings/do-not-share-my-data"
                  className="sub-footer-menu-link nav-sm-b footer-link pt2-sm pb2-sm prl2-md d-sm-b fs12-nav-sm"
                  data-pre="ILink"
                >
                  <img
                    alt="Your Privacy Choices"
                    className="d-sm-ib mr1-sm"
                    src="https://static.nike.com/a/images/w_960,c_limit/81a78fa9-0756-42ac-adb0-33c0245bf27a/image.png"
                  />
                  Your Privacy Choices
                </a>
              </li>
              <li className="ml3-md mr0-md d-sm-b d-md-ib fs12-nav-sm fs10-nav-md">
                <a
                  target="_self"
                  aria-label="CA Supply Chains Act"
                  data-type="click_navFooter"
                  data-path="ca supply chains act"
                  href="https://purpose.nike.com/nike-statement-on-forced-labor"
                  className="sub-footer-menu-link nav-sm-b footer-link pt2-sm pb2-sm prl2-md d-sm-b fs12-nav-sm"
                  data-pre="ILink"
                >
                  CA Supply Chains Act
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
