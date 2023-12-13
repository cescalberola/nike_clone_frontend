import React, { useEffect } from 'react'
import './Navbar.scss'
import Nike from '../../../assets/logos/Nike'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="pre-l-header top-stack-context" data-pre="Header">
            <div className="pre-l-wrapper mauto-sm d-sm-flx">
                <div className="pre-l-logo prl0-sm top-stack-context" data-var="swooshLogo">
                    <a aria-label="Nike Home Page" data-brand="nike" data-type="click_headerLogo" data-path="home" href="/" className="d-sm-b pre-logo-link" data-pre="ILink">
                        <span className="d-sm-h">Nike Home Page</span>
                        <Nike className={"pre-logo-svg"} />
                    </a>
                </div>
                <div className="pre-l-nav-box flx-gro-sm-1">
                    <nav className="pre-l-nav">
                        <div className="pre-mobilemenu pre-hide d-sm-ib d-lg-h z2" data-pre="MobileMenu">
                            <div data-panel-id="0" className="pre-panel pre-panel-root" data-pre="MobileMenuPanel">
                                <button data-var="closeNavBtn" id="closeNavBtn" aria-label="Close Menu" className="pre-btn-icon ripple d-sm-ib d-lg-h close-nav-btn">
                                    <svg aria-hidden="true" className="pre-close-icon" focusable="false" viewBox="0 0 24 24" role="img" width="18px" height="18px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945">
                                        </path>
                                    </svg>
                                </button>
                                <button data-nextpanel-id="1" data-var="accountMenu"
                                    style={{ display: 'none' }}
                                    className="nav-btn p0-sm pre-link pre-account-link" data-pre="ILink">
                                    <div className="pre-avatar" data-pre="Avatar">
                                        <div className="d-sm-flx flx-ai-sm-c">
                                            <p className="pre-avatar-name flx-order-sm-1 flx-order-lg--1 body-4 u-bold" data-var="userName" aria-label="Account">Account</p>
                                            <div className="icon-btn ripple">
                                                <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph"
                                                    style={{ display: 'inline-block' }}
                                                >
                                                    <path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z">
                                                    </path>
                                                </svg>
                                                <img alt="Avatar" src="" className="pre-avatar-image va-sm-m"
                                                    style={{ display: 'none' }}
                                                    data-var="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M8.474 18.966L15.44 12 8.474 5.033">
                                        </path>
                                    </svg>
                                </button>
                                <button data-nextpanel-id="0,0" classification="new arrivals" data-path="new arrivals" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
                                    <div className="pre-link-label headline-3">New &amp; Featured</div>
                                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M8.474 18.966L15.44 12 8.474 5.033">
                                        </path>
                                    </svg>
                                </button>
                                <button data-nextpanel-id="0,1" classification="men" data-path="men" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
                                    <div className="pre-link-label headline-3">Men</div>
                                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M8.474 18.966L15.44 12 8.474 5.033">
                                        </path>
                                    </svg>
                                </button>
                                <button data-nextpanel-id="0,2" classification="women" data-path="women" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
                                    <div className="pre-link-label headline-3">Women</div>
                                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M8.474 18.966L15.44 12 8.474 5.033">
                                        </path>
                                    </svg>
                                </button>
                                <button data-nextpanel-id="0,3" classification="kids mobile" data-path="kids mobile" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
                                    <div className="pre-link-label headline-3">Kids</div>
                                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M8.474 18.966L15.44 12 8.474 5.033">
                                        </path>
                                    </svg>
                                </button>
                                <button data-nextpanel-id="0,4" classification="accessories" data-path="accessories" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
                                    <div className="pre-link-label headline-3">Accessories</div>
                                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M8.474 18.966L15.44 12 8.474 5.033">
                                        </path>
                                    </svg>
                                </button>
                                <button data-nextpanel-id="0,5" classification="sale" data-path="sale" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
                                    <div className="pre-link-label headline-3">All Sale</div>
                                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M8.474 18.966L15.44 12 8.474 5.033">
                                        </path>
                                    </svg>
                                </button>
                                <button data-nextpanel-id="0,6" classification="extra 25 off select styles" data-path="extra 25 off select styles" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
                                    <div className="pre-link-label headline-3">Extra 25% Off Select Styles</div>
                                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M8.474 18.966L15.44 12 8.474 5.033">
                                        </path>
                                    </svg>
                                </button>
                                <div className="pt4-sm">
                                    <div className="pre-brand-menu" data-pre="BrandMenu">
                                        <ul className="pt3-sm">
                                            <li className="d-sm-b d-lg-h va-sm-m">
                                                <a aria-label="Jordan" data-type="click_navBrandBar" data-path="Jordan" href="https://www.nike.com/jordan" className="pre-brand-item pt1-sm pb2-sm" data-pre="ILink">
                                                    <span className="pre-icon-column ta-sm-c">
                                                        <svg height="30px" width="30px" fill="#111" viewBox="0 0 26 32">
                                                            <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <p className="headline-5 d-sm-ib pl3-sm">Jordan</p>
                                                </a>
                                            </li>
                                            <li className="d-sm-b d-lg-h va-sm-m">
                                                <a aria-label="Converse" data-type="click_navBrandBar" data-path="Converse" href="https://www.nike.com/w/converse-shoes-akmjxzy7ok" className="pre-brand-item pt1-sm pb2-sm" data-pre="ILink">
                                                    <span className="pre-icon-column ta-sm-c">
                                                        <svg height="30px" width="30px" fill="#111" viewBox="0 0 39 33">
                                                            <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <p className="headline-5 d-sm-ib pl3-sm">Converse</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pre-mobile-btn-group pre-login-light mr3-sm pt12-sm" data-pre="MobileLoginButtons"
                                        style={{ display: "block" }}
                                    >
                                        <span className="headline-4 text-color-secondary d-sm-b pb4-sm" id="hf_message_join_membership">Become a Nike Member for the best products, inspiration and stories in sport. <a aria-labelledby="hf_message_join_membership hf_title_learnmore_membership" data-type="click_navMembership" data-path="membership:enhanced cta" href="https://www.nike.com/membership" className="text-color-primary-dark" data-pre="ILink">
                                            <span id="hf_title_learnmore_membership">Learn more</span>
                                        </a>
                                        </span>
                                        <div className="d-sm-flx flx-wr-sm-w mt2-sm">
                                            <a data-type="click_navMembership" data-path="join us" href="https://www.nike.com/membership" className="ncss-btn-primary-dark pt2-sm pb2-sm pl6-sm pr6-sm mt2-sm mr2-sm" data-pre="ILink">
                                                <span id="hf_title_joinus_membership">Join Us</span>
                                            </a>
                                            <button data-var="loginBtn" data-type="click_navMembership" data-path="sign in" className="nav-btn p0-sm ncss-btn-secondary-dark pt2-sm pb2-sm pl6-sm pr6-sm mt2-sm" data-pre="ILink">
                                                <span id="hf_title_signin_membership">Sign In</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="pre-mobile-btn-group" data-pre="MobileSupportButtons">
                                        <ul>
                                            <li className="d-sm-b d-lg-h va-sm-m pt3-sm" data-var="favoritesMenuItem"
                                                style={{ display: 'none' }}
                                            >
                                                <a data-var="favoritesLink" aria-label="Favorites" data-type="click_navMobileShortcut" data-path="favorites" href="https://www.nike.com/favorites" className="pre-mobile-btn" data-pre="ILink">
                                                    <span className="pre-mobile-column ta-sm-c">
                                                        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                            <path stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <p className="headline-5 pl3-sm">Favorites</p>
                                                </a>
                                            </li>
                                            <li className="d-sm-b d-lg-h va-sm-m pt3-sm">
                                                <div id="nav-mobileMenuCart" className="pre-acct-cart mr2-sm mr0-lg d-sm-ib" data-pre="Cart">
                                                    <a data-var="anchor" title="Bag Items: 1" aria-label="Bag Items: 1" rel="nofollow" data-type="click_navCart" data-path="cart" href="https://www.nike.com/cart" className="pre-mobile-btn flx-dir-sm-r" data-pre="ILink">
                                                        <div className="pre-mobile-menu-cart">
                                                            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                                <path stroke="currentColor"
                                                                    strokeWidth="1.5"
                                                                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                                                </path>
                                                            </svg>
                                                            <span className="pre-jewel pre-mobileMenuCart-jewel text-color-primary-dark"
                                                                style={{ visibility: "visible" }}
                                                                data-var="jewel">1</span>
                                                        </div>
                                                        <p className="headline-5 pl3-sm">Bag</p>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="d-sm-b d-lg-h va-sm-m pt3-sm">
                                                <a aria-label="Orders" data-type="click_navMobileShortcut" data-path="orders" href="https://www.nike.com/orders" className="pre-mobile-btn" data-pre="ILink">
                                                    <span className="pre-mobile-column ta-sm-c">
                                                        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                            <path stroke="currentColor"
                                                                strokeMiterlimit="10" strokeWidth="1.5"
                                                                d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75">
                                                            </path>
                                                            <path stroke="currentColor"
                                                                strokeMiterlimit="10" strokeWidth="1.5"
                                                                d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <p className="headline-5 pl3-sm">Orders</p>
                                                </a>
                                            </li>
                                            <li data-var="storeLocatorButton" data-pre="StoreLocatorButton">
                                                <span className="d-sm-b va-sm-m pt3-sm" data-var="storeLocatorLink">
                                                    <a data-type="click_navStoreLocator" data-path="store:locator" href="https://www.nike.com/retail" className="pre-mobile-btn" data-pre="ILink">
                                                        <span className="pre-mobile-column ta-sm-c" data-var="storeLocatorGlyph">
                                                            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                                <path stroke="currentColor"
                                                                    strokeMiterlimit="10" strokeWidth="1.5"
                                                                    d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25">
                                                                </path>
                                                                <path stroke="currentColor"
                                                                    strokeMiterlimit="10" strokeWidth="1.5"
                                                                    d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        <span id="hf_header_find_a_store" className="headline-5 pl3-sm">Find a Store</span>
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="d-sm-b d-lg-h va-sm-m pt3-sm">
                                                <a aria-label="Help" data-type="click_navMobileHelpMenu" data-path="help" href="https://www.nike.com/help" className="pre-mobile-btn" data-pre="ILink">
                                                    <span className="pre-mobile-column ta-sm-c">
                                                        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                            <path stroke="currentColor"
                                                                strokeMiterlimit="10" strokeWidth="1.5"
                                                                d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5">
                                                            </path>
                                                            <path stroke="currentColor"
                                                                strokeMiterlimit="10" strokeWidth="1.5"
                                                                d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <p className="headline-5 pl3-sm">Help</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div data-panel-id="1" className="pre-panel pre-hide-right pre-my-account-panel" data-pre="MobileMenuPanel"
                                style={{ display: 'none' }}
                            >
                                <button className="pre-btn-back pre-link headline-5 p0-sm mb6-sm va-sm-m" data-backpanel-id="0" data-var="backPanelBtn">
                                    <svg aria-hidden="true" className="pre-chevron pre-chevron-back d-sm-b" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor"
                                            strokeWidth="1.5"
                                            d="M15.525 18.966L8.558 12l6.967-6.967">
                                        </path>
                                    </svg>
                                    <span className="pre-link-label headline-5 pl4-sm">
                                        <span id="hf_title_all_menuitem">All</span>
                                    </span>
                                </button>
                                <div className="pre-avatar mb4-sm" data-pre="Avatar">
                                    <div className="d-sm-flx flx-ai-sm-c">
                                        <p className="pre-avatar-name flx-order-sm-1 flx-order-lg--1 body-4 u-bold" data-var="userName" aria-label="Account">Account</p>
                                    </div>
                                </div>
                                <a classification="profile" data-type="click_navAccount" data-path="my account:profile" href="https://www.nike.com/member/profile/" className="pre-link" data-pre="ILink">
                                    <div className="pre-link-label headline-5 pre-text-color-secondary">Profile</div>
                                </a>
                                <a classification="orders" data-type="click_navAccount" data-path="my account:orders" href="https://www.nike.com/orders" className="pre-link" data-pre="ILink">
                                    <div className="pre-link-label headline-5 pre-text-color-secondary">Orders</div>
                                </a>
                                <a classification="favorites" data-type="click_navAccount" data-path="my account:favorites" href="https://www.nike.com/favorites" className="pre-link" data-pre="ILink">
                                    <div className="pre-link-label headline-5 pre-text-color-secondary">Favorites</div>
                                </a>
                                <a classification="inbox" data-type="click_navAccount" data-path="my account:inbox" href="https://www.nike.com/member/inbox" className="pre-link" data-pre="ILink">
                                    <div className="pre-link-label headline-5 pre-text-color-secondary">
                                        <div className="notification-label">Inbox<div className="hf-inbox-notification-dot" data-pre="InboxNotificationDot">
                                        </div>
                                        </div>
                                    </div>
                                </a>
                                <a classification="experiences" data-type="click_navAccount" data-path="my account:experiences" href="https://www.nike.com/experiences" className="pre-link" data-pre="ILink">
                                    <div className="pre-link-label headline-5 pre-text-color-secondary">Experiences</div>
                                </a>
                                <a classification="account settings" data-type="click_navAccount" data-path="my account:account settings" href="https://www.nike.com/member/settings" className="pre-link" data-pre="ILink">
                                    <div className="pre-link-label headline-5 pre-text-color-secondary">Account Settings</div>
                                </a>
                                <button classification="log out" data-type="click_navAccount" data-path="my account:log out" className="nav-btn p0-sm pre-link is-static" data-pre="ILink">
                                    <div className="pre-link-label headline-5 pre-text-color-secondary">Log Out</div>
                                </button>
                            </div>
                            <template id="PreChevronNext">
                                <svg aria-hidden="true" className="pre-chevron pre-chevron-next d-sm-b" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                    <path stroke="currentColor"
                                        strokeWidth="1.5"
                                        d="M8.474 18.966L15.44 12 8.474 5.033">
                                    </path>
                                </svg>
                            </template>
                            <template id="PreChevronBack">
                                <svg aria-hidden="true" className="pre-chevron pre-chevron-back d-sm-b" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                    <path stroke="currentColor"
                                        strokeWidth="1.5"
                                        d="M15.525 18.966L8.558 12l6.967-6.967">
                                    </path>
                                </svg>
                            </template>
                        </div>
                        <div className="pre-l-desktop-menu d-sm-h d-lg-b ta-sm-l ta-lg-c">
                            <div className="pt1-lg">
                                <ul className="pre-desktop-menu" role="menubar" data-pre="DesktopMenu">
                                    <li className="pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header" role="none">
                                        <a aria-label="New &amp; Featured" data-nav="0,0,-1" role="menuitem" aria-expanded="false" aria-controls="DesktopMenu-0-0-0" aria-haspopup="true" data-type="click_navShoppingMenu" data-path="new featured" href="https://www.nike.com/w/new-3n82y" className="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline" data-pre="ILink">New &amp; Featured</a>
                                        <div id="DesktopMenu-0-0-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
                                            <div className="pre-columns-container ncss-row">
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Limited Time"
                                                        tabIndex="-1"
                                                        data-nav="0,0,0" data-type="click_navShoppingMenu" data-path="new featured:limited time" href="https://www.nike.com/w/member-sale-9t7gt" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Limited Time</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Limited Time, Shop All: Extra 25% Off"
                                                        tabIndex="-1"
                                                        data-nav="0,0,1" data-type="click_navShoppingMenu" data-path="new featured:limited time:shop all up to 50 off" href="https://www.nike.com/w/member-sale-9t7gt" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All: Extra 25% Off</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Limited Time, Cold Weather: Ends 12.9 ❄️"
                                                        tabIndex="-1"
                                                        data-nav="0,0,2" data-type="click_navShoppingMenu" data-path="new featured:limited time:cold weather gear ends 129" href="https://www.nike.com/w/daily-deals-5ks9w" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cold Weather: Ends 12.9 ❄️</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Limited Time, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="0,0,3" data-type="click_navShoppingMenu" data-path="new featured:limited time:best sellers" href="https://www.nike.com/w/promotion-best-sellers-cmvh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Gifts"
                                                        tabIndex="-1"
                                                        data-nav="0,0,4" data-type="click_navShoppingMenu" data-path="new featured:gifts" href="https://www.nike.com/w/gifts-3b0uf" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Gifts</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Gifts, The Most Iconic Gifts 🎁"
                                                        tabIndex="-1"
                                                        data-nav="0,0,5" data-type="click_navShoppingMenu" data-path="new featured:gifts:gifts for hoopers" href="https://www.nike.com/w/gifts-3b0uf" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">The Most Iconic Gifts 🎁</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Gifts, Gift Cards"
                                                        tabIndex="-1"
                                                        data-nav="0,0,6" data-type="click_navShoppingMenu" data-path="new featured:gifts:gift cards" href="https://www.nike.com/w/gift-cards-2xcct" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Gift Cards</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Gifts, Stocking Stuffers"
                                                        tabIndex="-1"
                                                        data-nav="0,0,7" data-type="click_navShoppingMenu" data-path="new featured:gifts:stocking stuffers" href="https://www.nike.com/w/stocking-stuffers-7dlt3" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Stocking Stuffers</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New &amp; Featured"
                                                        tabIndex="-1"
                                                        data-nav="0,1,0" data-type="click_navShoppingMenu" data-path="new featured:featured" href="https://www.nike.com/w/new-3n82y" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">New &amp; Featured</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New &amp; Featured, New Arrivals"
                                                        tabIndex="-1"
                                                        data-nav="0,1,1" data-type="click_navShoppingMenu" data-path="new featured:featured:new arrivals" href="https://www.nike.com/w/new-3n82y" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">New Arrivals</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New &amp; Featured, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="0,1,2" data-type="click_navShoppingMenu" data-path="new featured:featured:best sellers" href="https://www.nike.com/w/best-76m50" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New &amp; Featured, Only at Nike"
                                                        tabIndex="-1"
                                                        data-nav="0,1,3" data-type="click_navShoppingMenu" data-path="new featured:featured:only at nike" href="https://www.nike.com/w/member-access-4lbty" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Only at Nike</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New &amp; Featured, New &amp; Upcoming Drops"
                                                        tabIndex="-1"
                                                        data-nav="0,1,4" data-type="click_navShoppingMenu" data-path="new featured:featured:new upcoming drops" href="https://www.nike.com/w/new-upcoming-drops-k0gk" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">New &amp; Upcoming Drops</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New &amp; Featured, SNKRS Launch Calendar"
                                                        tabIndex="-1"
                                                        data-nav="0,1,5" target="_self" data-type="click_navShoppingMenu" data-path="new featured:featured:snkrs launch calendar" href="https://www.nike.com/launch" className="pre-menu-item d-sm-h body-3 u-bold pre-text-color-secondary" data-pre="ILink">SNKRS Launch Calendar</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New &amp; Featured, Dunk the Halls"
                                                        tabIndex="-1"
                                                        data-nav="0,1,6" data-type="click_navShoppingMenu" data-path="new featured:featured:dunk the halls" href="https://www.nike.com/w/dunk-the-halls-2k2lf" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Dunk the Halls</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons"
                                                        tabIndex="-1"
                                                        data-nav="0,2,0" data-type="click_navShoppingMenu" data-path="new featured:shop icons" href="https://www.nike.com/w/classics-collection-aj8oq" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Shop Icons</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons, Air Jordan 1"
                                                        tabIndex="-1"
                                                        data-nav="0,2,1" data-type="click_navShoppingMenu" data-path="new featured:shop icons:air jordan 1" href="https://www.nike.com/w/jordan-1-4foky" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Jordan 1</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons, Air Force"
                                                        tabIndex="-1"
                                                        data-nav="0,2,2" data-type="click_navShoppingMenu" data-path="new featured:shop icons:air force" href="https://www.nike.com/w/air-force-1-shoes-5sj3yzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Force</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons, Dunk"
                                                        tabIndex="-1"
                                                        data-nav="0,2,3" data-type="click_navShoppingMenu" data-path="new featured:shop icons:dunk" href="https://www.nike.com/w/dunk-90aoh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Dunk</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons, Air Max"
                                                        tabIndex="-1"
                                                        data-nav="0,2,4" data-type="click_navShoppingMenu" data-path="new featured:shop icons:air max" href="https://www.nike.com/w/air-max-shoes-a6d8hzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Max</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons, Blazer"
                                                        tabIndex="-1"
                                                        data-nav="0,2,5" data-type="click_navShoppingMenu" data-path="new featured:shop icons:blazer" href="https://www.nike.com/w/blazer-shoes-9gw3azy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Blazer</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons, Pegasus"
                                                        tabIndex="-1"
                                                        data-nav="0,2,6" data-type="click_navShoppingMenu" data-path="new featured:shop icons:pegasus" href="https://www.nike.com/w/pegasus-running-shoes-37v7jz8nexhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Pegasus</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons, Metcon"
                                                        tabIndex="-1"
                                                        data-nav="0,2,7" data-type="click_navShoppingMenu" data-path="new featured:shop icons:metcon" href="https://www.nike.com/w/metcon-training-gym-shoes-3yxqsz58jtozy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Metcon</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Shop Icons, LeBron"
                                                        tabIndex="-1"
                                                        data-nav="0,2,8" data-type="click_navShoppingMenu" data-path="new featured:shop icons:lebron" href="https://www.nike.com/w/lebron-basketball-shoes-3glsmz7y57xzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">LeBron</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Men"
                                                        tabIndex="-1"
                                                        data-nav="0,3,0" data-type="click_navShoppingMenu" data-path="new featured:new for men" href="https://www.nike.com/w/new-mens-3n82yznik1" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">New For Men</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Men, Shoes"
                                                        tabIndex="-1"
                                                        data-nav="0,3,1" data-type="click_navShoppingMenu" data-path="new featured:new for men:shoes" href="https://www.nike.com/w/new-mens-shoes-3n82yznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Men, Clothing "
                                                        tabIndex="-1"
                                                        data-nav="0,3,2" data-type="click_navShoppingMenu" data-path="new featured:new for men:clothing" href="https://www.nike.com/w/new-mens-clothing-3n82yz6ymx6znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing </a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Women"
                                                        tabIndex="-1"
                                                        data-nav="0,3,3" data-type="click_navShoppingMenu" data-path="new featured:new for women" href="https://www.nike.com/w/new-womens-3n82yz5e1x6" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">New For Women</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Women, Shoes"
                                                        tabIndex="-1"
                                                        data-nav="0,3,4" data-type="click_navShoppingMenu" data-path="new featured:new for women:shoes" href="https://www.nike.com/w/new-womens-shoes-3n82yz5e1x6zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Women, Clothing "
                                                        tabIndex="-1"
                                                        data-nav="0,3,5" data-type="click_navShoppingMenu" data-path="new featured:new for women:clothing" href="https://www.nike.com/w/new-womens-clothing-3n82yz5e1x6z6ymx6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing </a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Kids"
                                                        tabIndex="-1"
                                                        data-nav="0,3,6" data-type="click_navShoppingMenu" data-path="new featured:new for kids" href="https://www.nike.com/w/new-kids-3n82yzv4dh" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">New For Kids</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Kids, Shoes"
                                                        tabIndex="-1"
                                                        data-nav="0,3,7" data-type="click_navShoppingMenu" data-path="new featured:new for kids:shoes" href="https://www.nike.com/w/new-kids-shoes-3n82yzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, New For Kids, Clothing "
                                                        tabIndex="-1"
                                                        data-nav="0,3,8" data-type="click_navShoppingMenu" data-path="new featured:new for kids:clothing" href="https://www.nike.com/w/new-kids-clothing-3n82yz6ymx6zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing </a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan"
                                                        tabIndex="-1"
                                                        data-nav="0,4,0" data-type="click_navShoppingMenu" data-path="new featured:jordan" href="https://www.nike.com/w/jordan-37eef" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan, Shop All"
                                                        tabIndex="-1"
                                                        data-nav="0,4,1" data-type="click_navShoppingMenu" data-path="new featured:jordan:shop all" href="https://www.nike.com/w/jordan-37eef" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan, Latest in Jordan"
                                                        tabIndex="-1"
                                                        data-nav="0,4,2" data-type="click_navShoppingMenu" data-path="new featured:jordan:latest in jordan" href="https://www.nike.com/w/new-jordan-37eefz3n82y" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Latest in Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan, Jordan 11s and More"
                                                        tabIndex="-1"
                                                        data-nav="0,4,3" data-type="click_navShoppingMenu" data-path="new featured:jordan:jordan 11s and more" href="https://www.nike.com/w/jordan-11-5btpj" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Jordan 11s and More</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan, Complete the Fit with Jordan"
                                                        tabIndex="-1"
                                                        data-nav="0,4,4" data-type="click_navShoppingMenu" data-path="new featured:jordan:complete the fit with jordan" href="https://www.nike.com/w/complete-the-fit-with-jordan-dcyu" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Complete the Fit with Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan, Men"
                                                        tabIndex="-1"
                                                        data-nav="0,4,5" data-type="click_navShoppingMenu" data-path="new featured:jordan:men" href="https://www.nike.com/w/mens-jordan-37eefznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Men</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan, Women"
                                                        tabIndex="-1"
                                                        data-nav="0,4,6" data-type="click_navShoppingMenu" data-path="new featured:jordan:women" href="https://www.nike.com/w/womens-jordan-37eefz5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Women</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan, Kids"
                                                        tabIndex="-1"
                                                        data-nav="0,4,7" data-type="click_navShoppingMenu" data-path="new featured:jordan:kids" href="https://www.nike.com/w/kids-jordan-37eefzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Kids</a>
                                                    <a role="menuitem" aria-label="main-menu, New &amp; Featured, Jordan, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="0,4,8" data-type="click_navShoppingMenu" data-path="new featured:jordan:basketball" href="https://www.nike.com/w/jordan-basketball-37eefz3glsm" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header" role="none">
                                        <a aria-label="Men" data-nav="1,0,-1" role="menuitem" aria-expanded="false" aria-controls="DesktopMenu-0-1-0" aria-haspopup="true" data-type="click_navShoppingMenu" data-path="men" href="https://www.nike.com/men" className="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline" data-pre="ILink">Men</a>
                                        <div id="DesktopMenu-0-1-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
                                            <div className="pre-columns-container ncss-row">
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Men, Limited Time "
                                                        tabIndex="-1"
                                                        data-nav="1,0,0" data-type="click_navShoppingMenu" data-path="men:limited time" href="https://www.nike.com/w/mens-member-sale-9t7gtznik1" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Limited Time </a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Limited Time , Shop All: Extra 25% Off"
                                                        tabIndex="-1"
                                                        data-nav="1,0,1" data-type="click_navShoppingMenu" data-path="men:limited time:shop all extra 25 off" href="https://www.nike.com/w/mens-member-sale-9t7gtznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All: Extra 25% Off</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Limited Time , Cold Weather: Ends 12.9 ❄️"
                                                        tabIndex="-1"
                                                        data-nav="1,0,2" data-type="click_navShoppingMenu" data-path="men:limited time:cold weather gear ends 129" href="https://www.nike.com/w/daily-deals-5ks9w" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cold Weather: Ends 12.9 ❄️</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Limited Time , Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="1,0,3" data-type="click_navShoppingMenu" data-path="men:limited time:best sellers" href="https://www.nike.com/w/mens-promotion-best-sellers-cmvhznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Gifts"
                                                        tabIndex="-1"
                                                        data-nav="1,0,4" data-type="click_navShoppingMenu" data-path="men:all gifts" href="https://www.nike.com/w/mens-gifts-3b0ufznik1" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Gifts</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Gifts, The Most Iconic Gifts 🎁"
                                                        tabIndex="-1"
                                                        data-nav="1,0,5" data-type="click_navShoppingMenu" data-path="men:all gifts:gifts for hoopers" href="https://www.nike.com/w/mens-gifts-3b0ufznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">The Most Iconic Gifts 🎁</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Gifts, Gift Cards"
                                                        tabIndex="-1"
                                                        data-nav="1,0,6" data-type="click_navShoppingMenu" data-path="men:all gifts:sale" href="https://www.nike.com/w/gift-cards-2xcct" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Gift Cards</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Gifts, Stocking Stuffers"
                                                        tabIndex="-1"
                                                        data-nav="1,0,7" data-type="click_navShoppingMenu" data-path="men:all gifts:sale" href="https://www.nike.com/w/mens-stocking-stuffers-7dlt3znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Stocking Stuffers</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Men, New &amp; Featured"
                                                        tabIndex="-1"
                                                        data-nav="1,1,0" data-type="click_navShoppingMenu" data-path="men:new featured" href="https://www.nike.com/w/new-mens-3n82yznik1" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">New &amp; Featured</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, New &amp; Featured, New Arrivals"
                                                        tabIndex="-1"
                                                        data-nav="1,1,1" data-type="click_navShoppingMenu" data-path="men:new featured:new arrivals" href="https://www.nike.com/w/new-mens-3n82yznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">New Arrivals</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, New &amp; Featured, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="1,1,2" data-type="click_navShoppingMenu" data-path="men:new featured:best sellers" href="https://www.nike.com/w/mens-best-76m50znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, New &amp; Featured, Customize with Nike by You"
                                                        tabIndex="-1"
                                                        data-nav="1,1,3" data-type="click_navShoppingMenu" data-path="men:new featured:customize with nike by you" href="https://www.nike.com/w/mens-nike-by-you-shoes-6ealhznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Customize with Nike by You</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, New &amp; Featured, Best of Fleece"
                                                        tabIndex="-1"
                                                        data-nav="1,1,4" data-type="click_navShoppingMenu" data-path="men:new featured:running x lifestyle" href="https://www.nike.com/w/mens-fleece-clothing-4xh6qz6ymx6znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best of Fleece</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes"
                                                        tabIndex="-1"
                                                        data-nav="1,2,0" data-type="click_navShoppingMenu" data-path="men:all shoes" href="https://www.nike.com/w/mens-shoes-nik1zy7ok" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">All Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Lifestyle"
                                                        tabIndex="-1"
                                                        data-nav="1,2,1" data-type="click_navShoppingMenu" data-path="men:all shoes:lifestyle" href="https://www.nike.com/w/mens-lifestyle-shoes-13jrmznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Lifestyle</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Jordan"
                                                        tabIndex="-1"
                                                        data-nav="1,2,2" data-type="click_navShoppingMenu" data-path="men:all shoes:jordan" href="https://www.nike.com/w/mens-jordan-shoes-37eefznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Air Max"
                                                        tabIndex="-1"
                                                        data-nav="1,2,3" data-type="click_navShoppingMenu" data-path="men:all shoes:air max" href="https://www.nike.com/w/mens-air-max-shoes-a6d8hznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Max</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Air Force 1"
                                                        tabIndex="-1"
                                                        data-nav="1,2,4" data-type="click_navShoppingMenu" data-path="men:all shoes:air force 1" href="https://www.nike.com/w/mens-air-force-1-shoes-5sj3yznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Force 1</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Dunks &amp; Blazers"
                                                        tabIndex="-1"
                                                        data-nav="1,2,5" data-type="click_navShoppingMenu" data-path="men:all shoes:dunks and blazers" href="https://www.nike.com/w/mens-shoes-90aohz9gw3aznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Dunks &amp; Blazers</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Training &amp; Gym"
                                                        tabIndex="-1"
                                                        data-nav="1,2,6" data-type="click_navShoppingMenu" data-path="men:all shoes:training and gym" href="https://www.nike.com/w/mens-training-gym-shoes-58jtoznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Training &amp; Gym</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="1,2,7" data-type="click_navShoppingMenu" data-path="men:all shoes:basketball" href="https://www.nike.com/w/mens-basketball-shoes-3glsmznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Running"
                                                        tabIndex="-1"
                                                        data-nav="1,2,8" data-type="click_navShoppingMenu" data-path="men:all shoes:running" href="https://www.nike.com/w/mens-running-shoes-37v7jznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Running</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Nike SB"
                                                        tabIndex="-1"
                                                        data-nav="1,2,9" data-type="click_navShoppingMenu" data-path="men:all shoes:skateboarding" href="https://www.nike.com/w/mens-skateboarding-shoes-8mfrfznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Nike SB</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Sandals &amp; Slides"
                                                        tabIndex="-1"
                                                        data-nav="1,2,10" data-type="click_navShoppingMenu" data-path="men:all shoes:sandals slides" href="https://www.nike.com/w/mens-sandals-slides-fl76znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Sandals &amp; Slides</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Shoes, Shoes $100 &amp; Under"
                                                        tabIndex="-1"
                                                        data-nav="1,2,11" data-type="click_navShoppingMenu" data-path="men:all shoes:shoes 100  under" href="https://www.nike.com/w/mens-under-100-shoes-av8b2znik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes $100 &amp; Under</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing"
                                                        tabIndex="-1"
                                                        data-nav="1,3,0" data-type="click_navShoppingMenu" data-path="men:all clothing" href="https://www.nike.com/w/mens-clothing-6ymx6znik1" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">All Clothing</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Jordan"
                                                        tabIndex="-1"
                                                        data-nav="1,3,1" data-type="click_navShoppingMenu" data-path="men:all clothing:jordan" href="https://www.nike.com/w/mens-jordan-clothing-37eefz6ymx6znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Matching Sets"
                                                        tabIndex="-1"
                                                        data-nav="1,3,2" data-type="click_navShoppingMenu" data-path="men:all clothing:matching sets" href="https://www.nike.com/w/mens-matching-sets-2lukpznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Matching Sets</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Big &amp; Tall "
                                                        tabIndex="-1"
                                                        data-nav="1,3,3" data-type="click_navShoppingMenu" data-path="men:all clothing:big tall" href="https://www.nike.com/w/mens-big-tall-clothing-6ymx6zau499znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Big &amp; Tall </a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Tech Fleece"
                                                        tabIndex="-1"
                                                        data-nav="1,3,4" data-type="click_navShoppingMenu" data-path="men:all clothing:tech fleece" href="https://www.nike.com/w/mens-tech-fleece-clothing-6sipkz6ymx6znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Tech Fleece</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="1,3,5" data-type="click_navShoppingMenu" data-path="men:all clothing:basketball" href="https://www.nike.com/w/mens-basketball-clothing-3glsmz6ymx6znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Hoodies &amp; Sweatshirts "
                                                        tabIndex="-1"
                                                        data-nav="1,3,6" data-type="click_navShoppingMenu" data-path="men:all clothing:hoodies sweatshirts" href="https://www.nike.com/w/mens-hoodies-pullovers-6riveznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Hoodies &amp; Sweatshirts </a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Pants &amp; Tights"
                                                        tabIndex="-1"
                                                        data-nav="1,3,7" data-type="click_navShoppingMenu" data-path="men:all clothing:pants tights" href="https://www.nike.com/w/mens-pants-tights-2kq19znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Pants &amp; Tights</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Outerwear &amp; Jackets"
                                                        tabIndex="-1"
                                                        data-nav="1,3,8" data-type="click_navShoppingMenu" data-path="men:all clothing:jackets and vests" href="https://www.nike.com/w/mens-jackets-vests-50r7yznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Outerwear &amp; Jackets</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Tops &amp; T-Shirts"
                                                        tabIndex="-1"
                                                        data-nav="1,3,9" data-type="click_navShoppingMenu" data-path="men:all clothing:tops tshirts" href="https://www.nike.com/w/mens-tops-t-shirts-9om13znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Tops &amp; T-Shirts</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Shorts"
                                                        tabIndex="-1"
                                                        data-nav="1,3,10" data-type="click_navShoppingMenu" data-path="men:all clothing:shorts" href="https://www.nike.com/w/mens-shorts-38fphznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shorts</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Underwear"
                                                        tabIndex="-1"
                                                        data-nav="1,3,11" data-type="click_navShoppingMenu" data-path="men:all clothing:underwear" href="https://www.nike.com/w/mens-underwear-9yhm6znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Underwear</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Socks"
                                                        tabIndex="-1"
                                                        data-nav="1,3,12" data-type="click_navShoppingMenu" data-path="men:all clothing:socks" href="https://www.nike.com/w/mens-socks-7ny3qznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Socks</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, All Clothing, Clothing $50 &amp; Under"
                                                        tabIndex="-1"
                                                        data-nav="1,3,13" data-type="click_navShoppingMenu" data-path="men:all clothing:clothing 50  under" href="https://www.nike.com/w/mens-under-50-clothing-6ymx6znik1zrse" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing $50 &amp; Under</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport"
                                                        tabIndex="-1"
                                                        data-nav="1,4,0" data-type="click_navShoppingMenu" data-path="men:shop by sport" href="https://www.nike.com/gear-up" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Shop by Sport</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="1,4,1" target="_self" data-type="click_navShoppingMenu" data-path="men:shop by sport:basketball" href="https://www.nike.com/basketball" className="pre-menu-item d-sm-h body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Golf"
                                                        tabIndex="-1"
                                                        data-nav="1,4,2" data-type="click_navShoppingMenu" data-path="men:shop by sport:golf" href="https://www.nike.com/golf" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Golf</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Soccer"
                                                        tabIndex="-1"
                                                        data-nav="1,4,3" data-type="click_navShoppingMenu" data-path="men:shop by sport:soccer football" href="https://www.nike.com/soccer" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Soccer</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Running"
                                                        tabIndex="-1"
                                                        data-nav="1,4,4" data-type="click_navShoppingMenu" data-path="men:shop by sport:running" href="https://www.nike.com/running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Running</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Tennis"
                                                        tabIndex="-1"
                                                        data-nav="1,4,5" data-type="click_navShoppingMenu" data-path="men:shop by sport:tennis" href="https://www.nike.com/tennis" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Tennis</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Baseball"
                                                        tabIndex="-1"
                                                        data-nav="1,4,6" data-type="click_navShoppingMenu" data-path="men:shop by sport:baseball" href="https://www.nike.com/baseball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Baseball</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Football"
                                                        tabIndex="-1"
                                                        data-nav="1,4,7" data-type="click_navShoppingMenu" data-path="men:shop by sport:football" href="https://www.nike.com/us-football" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Football</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Training &amp; Gym"
                                                        tabIndex="-1"
                                                        data-nav="1,4,8" data-type="click_navShoppingMenu" data-path="men:shop by sport:fitness" href="https://www.nike.com/w/mens-training-gym-58jtoznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Training &amp; Gym</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Wrestling"
                                                        tabIndex="-1"
                                                        data-nav="1,4,9" data-type="click_navShoppingMenu" data-path="men:shop by sport:wrestling" href="https://www.nike.com/w/wrestling-52dy6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Wrestling</a>
                                                    <a role="menuitem" aria-label="main-menu, Men, Shop by Sport, Yoga"
                                                        tabIndex="-1"
                                                        data-nav="1,4,10" data-type="click_navShoppingMenu" data-path="men:shop by sport:yoga" href="https://www.nike.com/w/mens-yoga-anrljznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Yoga</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header" role="none">
                                        <a aria-label="Women" data-nav="2,0,-1" role="menuitem" aria-expanded="false" aria-controls="DesktopMenu-0-2-0" aria-haspopup="true" data-type="click_navShoppingMenu" data-path="women" href="https://www.nike.com/women" className="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline" data-pre="ILink">Women</a>
                                        <div id="DesktopMenu-0-2-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
                                            <div className="pre-columns-container ncss-row">
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Women, Limited Time"
                                                        tabIndex="-1"
                                                        data-nav="2,0,0" data-type="click_navShoppingMenu" data-path="women:limited time" href="https://www.nike.com/w/womens-member-sale-5e1x6z9t7gt" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Limited Time</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Limited Time, Shop All: Extra 25% Off"
                                                        tabIndex="-1"
                                                        data-nav="2,0,1" data-type="click_navShoppingMenu" data-path="women:limited time:shop all extra 25 off" href="https://www.nike.com/w/womens-member-sale-5e1x6z9t7gt" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All: Extra 25% Off</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Limited Time, Cold Weather: Ends 12.9 ❄️"
                                                        tabIndex="-1"
                                                        data-nav="2,0,2" data-type="click_navShoppingMenu" data-path="women:limited time:cold weather gear ends 129" href="https://www.nike.com/w/daily-deals-5ks9w" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cold Weather: Ends 12.9 ❄️</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Limited Time, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="2,0,3" data-type="click_navShoppingMenu" data-path="women:limited time:best sellers" href="https://www.nike.com/w/womens-promotion-best-sellers-5e1x6zcmvh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Gifts"
                                                        tabIndex="-1"
                                                        data-nav="2,0,4" data-type="click_navShoppingMenu" data-path="women:all gifts" href="https://www.nike.com/w/womens-gifts-3b0ufz5e1x6" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Gifts</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Gifts, The Most Iconic Gifts 🎁"
                                                        tabIndex="-1"
                                                        data-nav="2,0,5" data-type="click_navShoppingMenu" data-path="women:all gifts:gifts for hoopers" href="https://www.nike.com/w/womens-gifts-3b0ufz5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">The Most Iconic Gifts 🎁</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Gifts, Gift Cards"
                                                        tabIndex="-1"
                                                        data-nav="2,0,6" data-type="click_navShoppingMenu" data-path="women:all gifts:fall color shop" href="https://www.nike.com/w/gift-cards-2xcct" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Gift Cards</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Gifts, Stocking Stuffers"
                                                        tabIndex="-1"
                                                        data-nav="2,0,7" data-type="click_navShoppingMenu" data-path="women:all gifts:fall color shop" href="https://www.nike.com/w/womens-stocking-stuffers-5e1x6z7dlt3" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Stocking Stuffers</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Women, New &amp; Featured"
                                                        tabIndex="-1"
                                                        data-nav="2,1,0" data-type="click_navShoppingMenu" data-path="women:new and featured" href="https://www.nike.com/w/new-womens-3n82yz5e1x6" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">New &amp; Featured</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, New &amp; Featured, New Arrivals"
                                                        tabIndex="-1"
                                                        data-nav="2,1,1" data-type="click_navShoppingMenu" data-path="women:new and featured:new arrivals" href="https://www.nike.com/w/new-womens-3n82yz5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">New Arrivals</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, New &amp; Featured, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="2,1,2" data-type="click_navShoppingMenu" data-path="women:new and featured:best sellers" href="https://www.nike.com/w/womens-best-5e1x6z76m50" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, New &amp; Featured, Customize with Nike by You"
                                                        tabIndex="-1"
                                                        data-nav="2,1,3" data-type="click_navShoppingMenu" data-path="women:new and featured:customize with nike by you" href="https://www.nike.com/w/womens-nike-by-you-shoes-5e1x6z6ealhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Customize with Nike by You</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, New &amp; Featured, Best of Joggers &amp; Sweatpants"
                                                        tabIndex="-1"
                                                        data-nav="2,1,4" data-type="click_navShoppingMenu" data-path="women:new and featured:best of joggers  sweatpants" href="https://www.nike.com/w/womens-pants-tights-2kq19z5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best of Joggers &amp; Sweatpants</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, New &amp; Featured, Cool Winter Blues"
                                                        tabIndex="-1"
                                                        data-nav="2,1,5" data-type="click_navShoppingMenu" data-path="women:new and featured:cool winter blues" href="https://www.nike.com/w/womens-trending-colors-5e1x6z7wyb2" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cool Winter Blues</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes"
                                                        tabIndex="-1"
                                                        data-nav="2,2,0" data-type="click_navShoppingMenu" data-path="women:shoes" href="https://www.nike.com/w/womens-shoes-5e1x6zy7ok" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">All Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Lifestyle"
                                                        tabIndex="-1"
                                                        data-nav="2,2,1" data-type="click_navShoppingMenu" data-path="women:shoes:lifestyle" href="https://www.nike.com/w/womens-lifestyle-shoes-13jrmz5e1x6zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Lifestyle</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Jordan"
                                                        tabIndex="-1"
                                                        data-nav="2,2,2" data-type="click_navShoppingMenu" data-path="women:shoes:jordan" href="https://www.nike.com/w/womens-jordan-shoes-37eefz5e1x6zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Air Max"
                                                        tabIndex="-1"
                                                        data-nav="2,2,3" data-type="click_navShoppingMenu" data-path="women:shoes:air max" href="https://www.nike.com/w/womens-air-max-shoes-5e1x6za6d8hzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Max</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Air Force 1"
                                                        tabIndex="-1"
                                                        data-nav="2,2,4" data-type="click_navShoppingMenu" data-path="women:shoes:air force 1" href="https://www.nike.com/w/womens-air-force-1-shoes-5e1x6z5sj3yzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Force 1</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Dunks &amp; Blazers "
                                                        tabIndex="-1"
                                                        data-nav="2,2,5" data-type="click_navShoppingMenu" data-path="women:shoes:dunks and blazers" href="https://www.nike.com/w/womens-shoes-5e1x6z90aohz9gw3azy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Dunks &amp; Blazers </a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Training &amp; Gym"
                                                        tabIndex="-1"
                                                        data-nav="2,2,6" data-type="click_navShoppingMenu" data-path="women:shoes:training and gym" href="https://www.nike.com/w/womens-training-gym-shoes-58jtoz5e1x6zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Training &amp; Gym</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="2,2,7" data-type="click_navShoppingMenu" data-path="women:shoes:basketball" href="https://www.nike.com/w/womens-basketball-shoes-3glsmz5e1x6zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Running"
                                                        tabIndex="-1"
                                                        data-nav="2,2,8" data-type="click_navShoppingMenu" data-path="women:shoes:running" href="https://www.nike.com/w/womens-running-shoes-37v7jz5e1x6zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Running</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Sandals &amp; Slides"
                                                        tabIndex="-1"
                                                        data-nav="2,2,9" data-type="click_navShoppingMenu" data-path="women:shoes:sandals slides" href="https://www.nike.com/w/sandals-slides-3rauvz5e1x6zfl76" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Sandals &amp; Slides</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Shoes, Shoes $100 &amp; Under "
                                                        tabIndex="-1"
                                                        data-nav="2,2,10" data-type="click_navShoppingMenu" data-path="women:shoes:shoes 100 under" href="https://www.nike.com/w/womens-100-and-under-shoes-3s37kz5e1x6zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes $100 &amp; Under </a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing"
                                                        tabIndex="-1"
                                                        data-nav="2,3,0" data-type="click_navShoppingMenu" data-path="women:all clothing" href="https://www.nike.com/w/womens-clothing-5e1x6z6ymx6" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">All Clothing</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Jordan"
                                                        tabIndex="-1"
                                                        data-nav="2,3,1" data-type="click_navShoppingMenu" data-path="women:all clothing:jordan" href="https://www.nike.com/w/womens-jordan-clothing-37eefz5e1x6z6ymx6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Matching Sets"
                                                        tabIndex="-1"
                                                        data-nav="2,3,2" data-type="click_navShoppingMenu" data-path="women:all clothing:matching sets" href="https://www.nike.com/w/womens-matching-sets-clothing-2lukpz5e1x6z6ymx6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Matching Sets</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Plus Size"
                                                        tabIndex="-1"
                                                        data-nav="2,3,3" data-type="click_navShoppingMenu" data-path="women:all clothing:plus size" href="https://www.nike.com/w/womens-plus-size-clothing-5e1x6z6ymx6z8mjm2" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Plus Size</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Hoodies &amp; Sweatshirts"
                                                        tabIndex="-1"
                                                        data-nav="2,3,4" data-type="click_navShoppingMenu" data-path="women:all clothing:hoodies and sweatshirts" href="https://www.nike.com/w/womens-hoodies-pullovers-5e1x6z6rive" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Hoodies &amp; Sweatshirts</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Pants"
                                                        tabIndex="-1"
                                                        data-nav="2,3,5" data-type="click_navShoppingMenu" data-path="women:all clothing:pants" href="https://www.nike.com/w/womens-pants-tights-2kq19z5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Pants</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Leggings"
                                                        tabIndex="-1"
                                                        data-nav="2,3,6" data-type="click_navShoppingMenu" data-path="women:all clothing:leggings" href="https://www.nike.com/w/womens-tights-leggings-29sh2z5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Leggings</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Bras"
                                                        tabIndex="-1"
                                                        data-nav="2,3,7" data-type="click_navShoppingMenu" data-path="women:all clothing:bras" href="https://www.nike.com/w/womens-sports-bras-40qgmz5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Bras</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Outerwear &amp; Jackets"
                                                        tabIndex="-1"
                                                        data-nav="2,3,8" data-type="click_navShoppingMenu" data-path="women:all clothing:jackets vests" href="https://www.nike.com/w/womens-jackets-vests-50r7yz5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Outerwear &amp; Jackets</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Tops &amp; T-Shirts"
                                                        tabIndex="-1"
                                                        data-nav="2,3,9" data-type="click_navShoppingMenu" data-path="women:all clothing:tops and tshirts" href="https://www.nike.com/w/womens-tops-t-shirts-5e1x6z9om13" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Tops &amp; T-Shirts</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Shorts"
                                                        tabIndex="-1"
                                                        data-nav="2,3,10" data-type="click_navShoppingMenu" data-path="women:all clothing:shorts" href="https://www.nike.com/w/womens-shorts-38fphz5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shorts</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Socks"
                                                        tabIndex="-1"
                                                        data-nav="2,3,11" data-type="click_navShoppingMenu" data-path="women:all clothing:socks" href="https://www.nike.com/w/womens-socks-5e1x6z7ny3q" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Socks</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, All Clothing, Clothing $50 &amp; Under"
                                                        tabIndex="-1"
                                                        data-nav="2,3,12" data-type="click_navShoppingMenu" data-path="women:all clothing:clothing 50  under" href="https://www.nike.com/w/womens-under-50-clothing-5e1x6z6ymx6zrse" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing $50 &amp; Under</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport"
                                                        tabIndex="-1"
                                                        data-nav="2,4,0" data-type="click_navShoppingMenu" data-path="women:shop by sport" href="https://www.nike.com/gear-up" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Shop by Sport</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="2,4,1" data-type="click_navShoppingMenu" data-path="women:shop by sport:basketall" href="https://www.nike.com/basketball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Golf"
                                                        tabIndex="-1"
                                                        data-nav="2,4,2" data-type="click_navShoppingMenu" data-path="women:shop by sport:golf" href="https://www.nike.com/golf" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Golf</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Soccer"
                                                        tabIndex="-1"
                                                        data-nav="2,4,3" data-type="click_navShoppingMenu" data-path="women:shop by sport:soccer" href="https://www.nike.com/soccer" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Soccer</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Running"
                                                        tabIndex="-1"
                                                        data-nav="2,4,4" data-type="click_navShoppingMenu" data-path="women:shop by sport:running" href="https://www.nike.com/running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Running</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Fitness"
                                                        tabIndex="-1"
                                                        data-nav="2,4,5" target="_self" data-type="click_navShoppingMenu" data-path="women:shop by sport:fitness" href="https://www.nike.com/nikewellcollective" className="pre-menu-item d-sm-h body-3 u-bold pre-text-color-secondary" data-pre="ILink">Fitness</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Tennis"
                                                        tabIndex="-1"
                                                        data-nav="2,4,6" data-type="click_navShoppingMenu" data-path="women:shop by sport:tennis" href="https://www.nike.com/tennis" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Tennis</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Volleyball"
                                                        tabIndex="-1"
                                                        data-nav="2,4,7" data-type="click_navShoppingMenu" data-path="women:shop by sport:volleyball" href="https://www.nike.com/w/womens-volleyball-5e1x6ztc2u" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Volleyball</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Cross Country"
                                                        tabIndex="-1"
                                                        data-nav="2,4,8" data-type="click_navShoppingMenu" data-path="women:shop by sport:cross country" href="https://www.nike.com/w/womens-cross-country-5e1x6z7pvlm" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cross Country</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Cheerleading"
                                                        tabIndex="-1"
                                                        data-nav="2,4,9" data-type="click_navShoppingMenu" data-path="women:shop by sport:cheerleading" href="https://www.nike.com/w/womens-cheerleading-1cyjkz5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cheerleading</a>
                                                    <a role="menuitem" aria-label="main-menu, Women, Shop by Sport, Yoga"
                                                        tabIndex="-1"
                                                        data-nav="2,4,10" data-type="click_navShoppingMenu" data-path="women:shop by sport:yoga" href="https://www.nike.com/w/womens-yoga-5e1x6zanrlj" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Yoga</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header" role="none">
                                        <a aria-label="Kids" data-nav="3,0,-1" role="menuitem" aria-expanded="false" aria-controls="DesktopMenu-0-3-0" aria-haspopup="true" data-type="click_navShoppingMenu" data-path="kids" href="https://www.nike.com/kids" className="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline" data-pre="ILink">Kids</a>
                                        <div id="DesktopMenu-0-3-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
                                            <div className="pre-columns-container ncss-row">
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Kids, Limited Time"
                                                        tabIndex="-1"
                                                        data-nav="3,0,0" data-type="click_navShoppingMenu" data-path="kids:limited time" href="https://www.nike.com/w/kids-member-sale-9t7gtzv4dh" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Limited Time</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Limited Time, Shop All: Extra 25% Off"
                                                        tabIndex="-1"
                                                        data-nav="3,0,1" data-type="click_navShoppingMenu" data-path="kids:limited time:the most iconic gifts" href="https://www.nike.com/w/kids-member-sale-9t7gtzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All: Extra 25% Off</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Limited Time, Cold Weather: Ends 12.9 ❄️"
                                                        tabIndex="-1"
                                                        data-nav="3,0,2" data-type="click_navShoppingMenu" data-path="kids:limited time:cold weather gear ends 129" href="https://www.nike.com/w/daily-deals-5ks9w" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cold Weather: Ends 12.9 ❄️</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Limited Time, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="3,0,3" data-type="click_navShoppingMenu" data-path="kids:limited time:best sellers" href="https://www.nike.com/w/kids-promotion-best-sellers-cmvhzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Gifts"
                                                        tabIndex="-1"
                                                        data-nav="3,0,4" data-type="click_navShoppingMenu" data-path="kids:all gifts" href="https://www.nike.com/w/kids-gifts-3b0ufzv4dh" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Gifts</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Gifts, The Most Iconic Gifts 🎁"
                                                        tabIndex="-1"
                                                        data-nav="3,0,5" data-type="click_navShoppingMenu" data-path="kids:all gifts:gifts for hoopers" href="https://www.nike.com/w/kids-gifts-3b0ufzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">The Most Iconic Gifts 🎁</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Gifts, Gift Cards"
                                                        tabIndex="-1"
                                                        data-nav="3,0,6" data-type="click_navShoppingMenu" data-path="kids:all gifts:gift cards" href="https://www.nike.com/w/gift-cards-2xcct" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Gift Cards</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Gifts, Stocking Stuffers"
                                                        tabIndex="-1"
                                                        data-nav="3,0,7" data-type="click_navShoppingMenu" data-path="kids:all gifts:stocking stuffers" href="https://www.nike.com/w/kids-stocking-stuffers-7dlt3zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Stocking Stuffers</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Kids, New &amp; Featured"
                                                        tabIndex="-1"
                                                        data-nav="3,1,0" data-type="click_navShoppingMenu" data-path="kids:new  featured" href="https://www.nike.com/w/new-kids-3n82yzv4dh" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">New &amp; Featured</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, New &amp; Featured, New Arrivals"
                                                        tabIndex="-1"
                                                        data-nav="3,1,1" data-type="click_navShoppingMenu" data-path="kids:new  featured:new arrivals" href="https://www.nike.com/w/new-kids-3n82yzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">New Arrivals</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, New &amp; Featured, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="3,1,2" data-type="click_navShoppingMenu" data-path="kids:new  featured:best sellers" href="https://www.nike.com/w/kids-best-76m50zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, New &amp; Featured, Teen Girl Essentials"
                                                        tabIndex="-1"
                                                        data-nav="3,1,3" data-type="click_navShoppingMenu" data-path="kids:new  featured:teen girl essentials" href="https://www.nike.com/w/teen-collection-6hgue" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Teen Girl Essentials</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, New &amp; Featured, Cold Weather Essentials"
                                                        tabIndex="-1"
                                                        data-nav="3,1,4" data-type="click_navShoppingMenu" data-path="kids:new  featured:basketball x lifestyle" href="https://www.nike.com/w/kids-cold-weather-7t42qzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cold Weather Essentials</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, New &amp; Featured, Best of Kids Fleece"
                                                        tabIndex="-1"
                                                        data-nav="3,1,5" data-type="click_navShoppingMenu" data-path="kids:new  featured:best of kids fleece" href="https://www.nike.com/w/kids-fleece-clothing-4xh6qz6ymx6zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best of Kids Fleece</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shoes by Size"
                                                        tabIndex="-1"
                                                        data-nav="3,2,0" data-type="click_navShoppingMenu" data-path="kids:all shoes" href="https://www.nike.com/w/kids-shoes-v4dhzy7ok" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Shoes by Size</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shoes by Size, Big Kids (1Y - 7Y)"
                                                        tabIndex="-1"
                                                        data-nav="3,2,1" data-type="click_navShoppingMenu" data-path="kids:all shoes:big kids 1y  7y" href="https://www.nike.com/w/big-kids-shoes-agibjzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Big Kids (1Y - 7Y)</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shoes by Size, Little Kids (8C - 3Y)"
                                                        tabIndex="-1"
                                                        data-nav="3,2,2" data-type="click_navShoppingMenu" data-path="kids:all shoes:little kids 8c  3y" href="https://www.nike.com/w/kids-little-kids-8c-3y-shoes-3ql65zv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Little Kids (8C - 3Y)</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shoes by Size, Baby &amp; Toddler (1C - 10C)"
                                                        tabIndex="-1"
                                                        data-nav="3,2,3" data-type="click_navShoppingMenu" data-path="kids:all shoes:baby toddler 1c 10c" href="https://www.nike.com/w/kids-babies-toddlers-1c-10c-shoes-30w47zv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Baby &amp; Toddler (1C - 10C)</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes"
                                                        tabIndex="-1"
                                                        data-nav="3,2,4" data-type="click_navShoppingMenu" data-path="kids:all shoes" href="https://www.nike.com/w/kids-shoes-v4dhzy7ok" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">All Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Lifestyle"
                                                        tabIndex="-1"
                                                        data-nav="3,2,5" data-type="click_navShoppingMenu" data-path="kids:all shoes:lifestyle" href="https://www.nike.com/w/kids-lifestyle-shoes-13jrmzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Lifestyle</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Jordan"
                                                        tabIndex="-1"
                                                        data-nav="3,2,6" data-type="click_navShoppingMenu" data-path="kids:all shoes:jordan" href="https://www.nike.com/w/kids-jordan-shoes-37eefzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Air Max"
                                                        tabIndex="-1"
                                                        data-nav="3,2,7" data-type="click_navShoppingMenu" data-path="kids:all shoes:air max" href="https://www.nike.com/w/kids-air-max-shoes-a6d8hzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Max</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Air Force 1"
                                                        tabIndex="-1"
                                                        data-nav="3,2,8" data-type="click_navShoppingMenu" data-path="kids:all shoes:air force" href="https://www.nike.com/w/kids-air-force-1-lifestyle-shoes-13jrmz5sj3yzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Air Force 1</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Dunks &amp; Blazers "
                                                        tabIndex="-1"
                                                        data-nav="3,2,9" data-type="click_navShoppingMenu" data-path="kids:all shoes:dunks  blazers" href="https://www.nike.com/w/1onraz3aqegz90aohz9gw3a" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Dunks &amp; Blazers </a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="3,2,10" data-type="click_navShoppingMenu" data-path="kids:all shoes:basketball" href="https://www.nike.com/w/kids-basketball-shoes-3glsmzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Running"
                                                        tabIndex="-1"
                                                        data-nav="3,2,11" data-type="click_navShoppingMenu" data-path="kids:all shoes:running" href="https://www.nike.com/w/kids-running-shoes-37v7jzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Running</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Sandals &amp; Slides"
                                                        tabIndex="-1"
                                                        data-nav="3,2,12" data-type="click_navShoppingMenu" data-path="kids:all shoes:sandals slides" href="https://www.nike.com/w/kids-sandals-slides-fl76zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Sandals &amp; Slides</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Shoes, Shoes $70 &amp; Under"
                                                        tabIndex="-1"
                                                        data-nav="3,2,13" data-type="click_navShoppingMenu" data-path="kids:all shoes:shoes 70 under" href="https://www.nike.com/w/kids-under-70-shoes-abelozv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes $70 &amp; Under</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Kids, Clothing by Size"
                                                        tabIndex="-1"
                                                        data-nav="3,3,0" data-type="click_navShoppingMenu" data-path="kids:all clothing" href="https://www.nike.com/w/kids-clothing-6ymx6zv4dh" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Clothing by Size</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Clothing by Size, Big Kids (XS - XL)"
                                                        tabIndex="-1"
                                                        data-nav="3,3,1" data-type="click_navShoppingMenu" data-path="kids:all clothing:big kids xs xl" href="https://www.nike.com/w/big-kids-clothing-6ymx6zagibjzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Big Kids (XS - XL)</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Clothing by Size, Little Kids (4 - 7)"
                                                        tabIndex="-1"
                                                        data-nav="3,3,2" data-type="click_navShoppingMenu" data-path="kids:all clothing:little kids 4 7" href="https://www.nike.com/w/little-kids-clothing-6dacez6ymx6zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Little Kids (4 - 7)</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Clothing by Size, Baby &amp; Toddler (0M - 4T)"
                                                        tabIndex="-1"
                                                        data-nav="3,3,3" data-type="click_navShoppingMenu" data-path="kids:all clothing:baby toddler 0m 4t" href="https://www.nike.com/w/baby-toddler-kids-clothing-2j488z6ymx6zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Baby &amp; Toddler (0M - 4T)</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Clothing by Size, Extended Sizing"
                                                        tabIndex="-1"
                                                        data-nav="3,3,4" data-type="click_navShoppingMenu" data-path="kids:all clothing:extended sizing" href="https://www.nike.com/w/kids-extended-sizes-clothing-6ymx6z82dulzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Extended Sizing</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing"
                                                        tabIndex="-1"
                                                        data-nav="3,3,5" data-type="click_navShoppingMenu" data-path="kids:all clothing" href="https://www.nike.com/w/kids-clothing-6ymx6zv4dh" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">All Clothing</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Jordan"
                                                        tabIndex="-1"
                                                        data-nav="3,3,6" data-type="click_navShoppingMenu" data-path="kids:all clothing:jordan" href="https://www.nike.com/w/kids-jordan-clothing-37eefz6ymx6zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Jordan</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Matching Sets"
                                                        tabIndex="-1"
                                                        data-nav="3,3,7" data-type="click_navShoppingMenu" data-path="kids:all clothing:jordan" href="https://www.nike.com/w/kids-matching-sets-2lukpzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Matching Sets</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Tops &amp; T-Shirts"
                                                        tabIndex="-1"
                                                        data-nav="3,3,8" data-type="click_navShoppingMenu" data-path="kids:all clothing:tops tshirts" href="https://www.nike.com/w/kids-tops-t-shirts-9om13zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Tops &amp; T-Shirts</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Shorts"
                                                        tabIndex="-1"
                                                        data-nav="3,3,9" data-type="click_navShoppingMenu" data-path="kids:all clothing:shorts" href="https://www.nike.com/w/kids-shorts-38fphzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shorts</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Hoodies &amp; Sweatshirts"
                                                        tabIndex="-1"
                                                        data-nav="3,3,10" data-type="click_navShoppingMenu" data-path="kids:all clothing:hoodies sweatshirts" href="https://www.nike.com/w/kids-hoodies-pullovers-6rivezv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Hoodies &amp; Sweatshirts</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Outerwear &amp; Jackets"
                                                        tabIndex="-1"
                                                        data-nav="3,3,11" data-type="click_navShoppingMenu" data-path="kids:all clothing:outerwear jackets" href="https://www.nike.com/w/kids-jackets-vests-50r7yzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Outerwear &amp; Jackets</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Pants &amp; Tights"
                                                        tabIndex="-1"
                                                        data-nav="3,3,12" data-type="click_navShoppingMenu" data-path="kids:all clothing:pants tights" href="https://www.nike.com/w/kids-clothing-pants-tights-2kq19z6ymx6zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Pants &amp; Tights</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Bras"
                                                        tabIndex="-1"
                                                        data-nav="3,3,13" data-type="click_navShoppingMenu" data-path="kids:all clothing:bras" href="https://www.nike.com/w/kids-sports-bras-40qgmzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Bras</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Underwear"
                                                        tabIndex="-1"
                                                        data-nav="3,3,14" data-type="click_navShoppingMenu" data-path="kids:all clothing:underwear" href="https://www.nike.com/w/kids-underwear-9plcizv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Underwear</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Socks"
                                                        tabIndex="-1"
                                                        data-nav="3,3,15" data-type="click_navShoppingMenu" data-path="kids:all clothing:socks" href="https://www.nike.com/w/kids-socks-7ny3qzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Socks</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, All Clothing, Clothing $50 &amp; Under"
                                                        tabIndex="-1"
                                                        data-nav="3,3,16" data-type="click_navShoppingMenu" data-path="kids:all clothing:clothing 50  under" href="https://www.nike.com/w/kids-under-50-clothing-6ymx6zrsezv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing $50 &amp; Under</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport"
                                                        tabIndex="-1"
                                                        data-nav="3,4,0" data-type="click_navShoppingMenu" data-path="kids:shop by sport" href="https://www.nike.com/gear-up" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Shop by Sport</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="3,4,1" data-type="click_navShoppingMenu" data-path="kids:shop by sport:basketball" href="https://www.nike.com/w/kids-basketball-3glsmzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Golf"
                                                        tabIndex="-1"
                                                        data-nav="3,4,2" data-type="click_navShoppingMenu" data-path="kids:shop by sport:golf" href="https://www.nike.com/w/kids-golf-23q9wzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Golf</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Soccer"
                                                        tabIndex="-1"
                                                        data-nav="3,4,3" data-type="click_navShoppingMenu" data-path="kids:shop by sport:soccer" href="https://www.nike.com/w/kids-soccer-1gdj0zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Soccer</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Running"
                                                        tabIndex="-1"
                                                        data-nav="3,4,4" data-type="click_navShoppingMenu" data-path="kids:shop by sport:running" href="https://www.nike.com/w/kids-running-37v7jzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Running</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Cheerleading"
                                                        tabIndex="-1"
                                                        data-nav="3,4,5" data-type="click_navShoppingMenu" data-path="kids:shop by sport:cheerleading" href="https://www.nike.com/w/kids-cheerleading-1cyjkzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cheerleading</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Baseball"
                                                        tabIndex="-1"
                                                        data-nav="3,4,6" data-type="click_navShoppingMenu" data-path="kids:shop by sport:baseball" href="https://www.nike.com/w/kids-baseball-99fchzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Baseball</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Football"
                                                        tabIndex="-1"
                                                        data-nav="3,4,7" data-type="click_navShoppingMenu" data-path="kids:shop by sport:football" href="https://www.nike.com/w/kids-football-3hj8mzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Football</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Softball"
                                                        tabIndex="-1"
                                                        data-nav="3,4,8" data-type="click_navShoppingMenu" data-path="kids:shop by sport:softball" href="https://www.nike.com/w/kids-softball-2dlpvzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Softball</a>
                                                    <a role="menuitem" aria-label="main-menu, Kids, Shop by Sport, Tennis"
                                                        tabIndex="-1"
                                                        data-nav="3,4,9" data-type="click_navShoppingMenu" data-path="kids:shop by sport:tennis" href="https://www.nike.com/w/kids-tennis-ed1qzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Tennis</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header" role="none">
                                        <a aria-label="Accessories" data-nav="4,0,-1" role="menuitem" aria-expanded="false" aria-controls="DesktopMenu-0-4-0" aria-haspopup="true" data-type="click_navShoppingMenu" data-path="accessories" href="https://www.nike.com/w/accessories-equipment-awwpw" className="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline" data-pre="ILink">Accessories</a>
                                        <div id="DesktopMenu-0-4-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
                                            <div className="pre-columns-container ncss-row">
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Limited Time"
                                                        tabIndex="-1"
                                                        data-nav="4,0,0" data-type="click_navShoppingMenu" data-path="accessories:limited time" href="https://www.nike.com/w/member-sale-9t7gt" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Limited Time</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Limited Time, Shop All: Extra 25% Off"
                                                        tabIndex="-1"
                                                        data-nav="4,0,1" data-type="click_navShoppingMenu" data-path="accessories:limited time:shop all extra 25 off" href="https://www.nike.com/w/member-sale-9t7gt" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All: Extra 25% Off</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Limited Time, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="4,0,2" data-type="click_navShoppingMenu" data-path="accessories:limited time:best sellers" href="https://www.nike.com/w/promotion-best-sellers-accessories-equipment-awwpwzcmvh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Gifts"
                                                        tabIndex="-1"
                                                        data-nav="4,0,3" data-type="click_navShoppingMenu" data-path="accessories:all gifts" href="https://www.nike.com/w/stocking-stuffers-7dlt3" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Gifts</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Gifts, The Most Iconic Gifts 🎁"
                                                        tabIndex="-1"
                                                        data-nav="4,0,4" data-type="click_navShoppingMenu" data-path="accessories:all gifts:gifts for hoopers" href="https://www.nike.com/w/gifts-accessories-equipment-3b0ufzawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">The Most Iconic Gifts 🎁</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Gifts, Gift Cards"
                                                        tabIndex="-1"
                                                        data-nav="4,0,5" data-type="click_navShoppingMenu" data-path="accessories:all gifts:new for fall" href="https://www.nike.com/w/gift-cards-2xcct" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Gift Cards</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Gifts, Stocking Stuffers"
                                                        tabIndex="-1"
                                                        data-nav="4,0,6" data-type="click_navShoppingMenu" data-path="accessories:all gifts:new for fall" href="https://www.nike.com/w/stocking-stuffers-7dlt3" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Stocking Stuffers</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Featured"
                                                        tabIndex="-1"
                                                        data-nav="4,1,0" data-type="click_navShoppingMenu" data-path="accessories:featured" href="https://www.nike.com/w/accessories-equipment-awwpw" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Featured</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Featured, Best of Nike Baseball"
                                                        tabIndex="-1"
                                                        data-nav="4,1,1" data-type="click_navShoppingMenu" data-path="accessories:featured:best of nike baseball" href="https://www.nike.com/w/baseball-gear-6bvfkz99fch" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best of Nike Baseball</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories "
                                                        tabIndex="-1"
                                                        data-nav="4,2,0" data-type="click_navShoppingMenu" data-path="accessories:all accessories" href="https://www.nike.com/w/accessories-equipment-awwpw" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">All Accessories </a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories , Socks"
                                                        tabIndex="-1"
                                                        data-nav="4,2,1" data-type="click_navShoppingMenu" data-path="accessories:all accessories:socks" href="https://www.nike.com/w/socks-7ny3q" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Socks</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories , Bags &amp; Backpacks "
                                                        tabIndex="-1"
                                                        data-nav="4,2,2" data-type="click_navShoppingMenu" data-path="accessories:all accessories:bags backpacks" href="https://www.nike.com/w/bags-and-backpacks-9xy71" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Bags &amp; Backpacks </a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories , Hats &amp; Headwear"
                                                        tabIndex="-1"
                                                        data-nav="4,2,3" data-type="click_navShoppingMenu" data-path="accessories:all accessories:hats headwear" href="https://www.nike.com/w/hats-visors-headbands-52r49" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Hats &amp; Headwear</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories , Sunglasses &amp; Eyewear"
                                                        tabIndex="-1"
                                                        data-nav="4,2,4" data-type="click_navShoppingMenu" data-path="accessories:all accessories:sunglasses eyewear" href="https://www.nike.com/w/sunglasses-arlyp" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Sunglasses &amp; Eyewear</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories , Water Bottles &amp; Hydration"
                                                        tabIndex="-1"
                                                        data-nav="4,2,5" data-type="click_navShoppingMenu" data-path="accessories:all accessories:water bottles hydration" href="https://www.nike.com/w/water-bottles-hydration-8yveu" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Water Bottles &amp; Hydration</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories , Watches"
                                                        tabIndex="-1"
                                                        data-nav="4,2,6" data-type="click_navShoppingMenu" data-path="accessories:all accessories:watches" href="https://www.nike.com/w/watches-2axv8" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Watches</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories , Gloves"
                                                        tabIndex="-1"
                                                        data-nav="4,2,7" data-type="click_navShoppingMenu" data-path="accessories:all accessories:gloves" href="https://www.nike.com/w/gloves-mitts-74gmr" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Gloves</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, All Accessories , Jordan"
                                                        tabIndex="-1"
                                                        data-nav="4,2,8" data-type="click_navShoppingMenu" data-path="accessories:all accessories:jordan" href="https://www.nike.com/w/jordan-accessories-equipment-37eefzawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Jordan</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <button role="menuitem" aria-label="main-menu, Accessories, Shop by Gender"
                                                        tabIndex="-1"
                                                        data-nav="4,3,0" data-type="click_navShoppingMenu" data-path="accessories:shop by gender" className="nav-btn p0-sm pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Shop by Gender</button>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Gender, Men"
                                                        tabIndex="-1"
                                                        data-nav="4,3,1" data-type="click_navShoppingMenu" data-path="accessories:shop by gender:men" href="https://www.nike.com/w/mens-accessories-equipment-awwpwznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Men</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Gender, Women"
                                                        tabIndex="-1"
                                                        data-nav="4,3,2" data-type="click_navShoppingMenu" data-path="accessories:shop by gender:women" href="https://www.nike.com/w/womens-accessories-equipment-5e1x6zawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Women</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Gender, Kids"
                                                        tabIndex="-1"
                                                        data-nav="4,3,3" data-type="click_navShoppingMenu" data-path="accessories:shop by gender:kids" href="https://www.nike.com/w/kids-accessories-equipment-awwpwzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Kids</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport"
                                                        tabIndex="-1"
                                                        data-nav="4,4,0" data-type="click_navShoppingMenu" data-path="accessories:shop by sport" href="https://www.nike.com/gear-up" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Shop by Sport</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Basketball"
                                                        tabIndex="-1"
                                                        data-nav="4,4,1" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:basketball" href="https://www.nike.com/w/basketball-accessories-equipment-3glsmzawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Basketball</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Golf"
                                                        tabIndex="-1"
                                                        data-nav="4,4,2" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:golf" href="https://www.nike.com/w/golf-accessories-equipment-23q9wzawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Golf</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Soccer"
                                                        tabIndex="-1"
                                                        data-nav="4,4,3" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:soccer" href="https://www.nike.com/w/soccer-accessories-equipment-1gdj0zawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Soccer</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Running"
                                                        tabIndex="-1"
                                                        data-nav="4,4,4" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:running" href="https://www.nike.com/w/running-accessories-equipment-37v7jzawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Running</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Tennis"
                                                        tabIndex="-1"
                                                        data-nav="4,4,5" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:tennis" href="https://www.nike.com/w/tennis-accessories-equipment-awwpwzed1q" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Tennis</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Baseball"
                                                        tabIndex="-1"
                                                        data-nav="4,4,6" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:baseball" href="https://www.nike.com/w/baseball-accessories-equipment-99fchzawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Baseball</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Football"
                                                        tabIndex="-1"
                                                        data-nav="4,4,7" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:football" href="https://www.nike.com/w/football-accessories-equipment-3hj8mzawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Football</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Volleyball"
                                                        tabIndex="-1"
                                                        data-nav="4,4,8" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:volleyball" href="https://www.nike.com/w/volleyball-accessories-equipment-awwpwztc2u" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Volleyball</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Cheerleading"
                                                        tabIndex="-1"
                                                        data-nav="4,4,9" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:cheerleading" href="https://www.nike.com/w/cheerleading-accessories-equipment-1cyjkzawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cheerleading</a>
                                                    <a role="menuitem" aria-label="main-menu, Accessories, Shop by Sport, Training &amp; Gym"
                                                        tabIndex="-1"
                                                        data-nav="4,4,10" data-type="click_navShoppingMenu" data-path="accessories:shop by sport:training  gym" href="https://www.nike.com/w/training-gym-accessories-equipment-58jtozawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Training &amp; Gym</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header" role="none">
                                        <a aria-label="Sale" data-nav="5,0,-1" role="menuitem" aria-expanded="false" aria-controls="DesktopMenu-0-5-0" aria-haspopup="true" data-type="click_navShoppingMenu" data-path="clearance" href="https://www.nike.com/w/sale-3yaep" className="pre-desktop-menu-link headline-5 p3-lg pt4-sm d-sm-b no-outline" data-pre="ILink">Sale</a>
                                        <div id="DesktopMenu-0-5-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
                                            <div className="pre-columns-container ncss-row">
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Sale, Limited Time"
                                                        tabIndex="-1"
                                                        data-nav="5,0,0" data-type="click_navShoppingMenu" data-path="clearance:limited time" href="https://www.nike.com/w/member-sale-9t7gt" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Limited Time</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Limited Time, Shop All: Extra 25% Off"
                                                        tabIndex="-1"
                                                        data-nav="5,0,1" data-type="click_navShoppingMenu" data-path="clearance:limited time:shop all extra 25 off" href="https://www.nike.com/w/member-sale-9t7gt" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All: Extra 25% Off</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Limited Time, Cold Weather: Ends 12.9 ❄️"
                                                        tabIndex="-1"
                                                        data-nav="5,0,2" data-type="click_navShoppingMenu" data-path="clearance:limited time:cold weather gear ends 129" href="https://www.nike.com/w/daily-deals-5ks9w" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Cold Weather: Ends 12.9 ❄️</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Limited Time, Best Sellers"
                                                        tabIndex="-1"
                                                        data-nav="5,0,3" data-type="click_navShoppingMenu" data-path="clearance:limited time:best sellers" href="https://www.nike.com/w/promotion-best-sellers-cmvh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Best Sellers</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Sale, All Sale"
                                                        tabIndex="-1"
                                                        data-nav="5,1,0" data-type="click_navShoppingMenu" data-path="clearance:all sale" href="https://www.nike.com/w/sale-3yaep" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">All Sale</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, All Sale, Gifts on Sale 🎁"
                                                        tabIndex="-1"
                                                        data-nav="5,1,1" data-type="click_navShoppingMenu" data-path="clearance:all sale:gifts on sale" href="https://www.nike.com/w/sale-gifts-3b0ufz3yaep" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Gifts on Sale 🎁</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, All Sale, Sale Shoes"
                                                        tabIndex="-1"
                                                        data-nav="5,1,2" data-type="click_navShoppingMenu" data-path="clearance:all sale:sale shoes" href="https://www.nike.com/w/sale-shoes-3yaepzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Sale Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, All Sale, Sale Clothing"
                                                        tabIndex="-1"
                                                        data-nav="5,1,3" data-type="click_navShoppingMenu" data-path="clearance:all sale:sale clothing" href="https://www.nike.com/w/sale-clothing-3yaepz6ymx6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Sale Clothing</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, All Sale, Sale Accessories"
                                                        tabIndex="-1"
                                                        data-nav="5,1,4" data-type="click_navShoppingMenu" data-path="clearance:all sale:sale accessories" href="https://www.nike.com/w/sale-gear-3yaepz6bvfk" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Sale Accessories</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Sale, Men"
                                                        tabIndex="-1"
                                                        data-nav="5,2,0" data-type="click_navShoppingMenu" data-path="clearance:mens sale" href="https://www.nike.com/w/mens-sale-3yaepznik1" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Men</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Men, Shoes"
                                                        tabIndex="-1"
                                                        data-nav="5,2,1" data-type="click_navShoppingMenu" data-path="clearance:mens sale:shoes" href="https://www.nike.com/w/mens-sale-shoes-3yaepznik1zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Men, Clothing"
                                                        tabIndex="-1"
                                                        data-nav="5,2,2" data-type="click_navShoppingMenu" data-path="clearance:mens sale:clothing" href="https://www.nike.com/w/mens-sale-clothing-3yaepz6ymx6znik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Men, Accessories"
                                                        tabIndex="-1"
                                                        data-nav="5,2,3" data-type="click_navShoppingMenu" data-path="clearance:mens sale:accessories" href="https://www.nike.com/w/mens-sale-accessories-equipment-3yaepzawwpwznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Accessories</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Men, Shop All"
                                                        tabIndex="-1"
                                                        data-nav="5,2,4" data-type="click_navShoppingMenu" data-path="clearance:mens sale:shop all" href="https://www.nike.com/w/mens-sale-3yaepznik1" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Sale, Women"
                                                        tabIndex="-1"
                                                        data-nav="5,3,0" data-type="click_navShoppingMenu" data-path="clearance:womens sale" href="https://www.nike.com/w/womens-sale-3yaepz5e1x6" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Women</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Women, Shoes"
                                                        tabIndex="-1"
                                                        data-nav="5,3,1" data-type="click_navShoppingMenu" data-path="clearance:womens sale:shoes" href="https://www.nike.com/w/womens-sale-shoes-3yaepz5e1x6zy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Women, Clothing"
                                                        tabIndex="-1"
                                                        data-nav="5,3,2" data-type="click_navShoppingMenu" data-path="clearance:womens sale:clothing" href="https://www.nike.com/w/womens-sale-clothing-3yaepz5e1x6z6ymx6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Women, Accessories"
                                                        tabIndex="-1"
                                                        data-nav="5,3,3" data-type="click_navShoppingMenu" data-path="clearance:womens sale:accessories" href="https://www.nike.com/w/womens-sale-accessories-equipment-3yaepz5e1x6zawwpw" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Accessories</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Women, Shop All"
                                                        tabIndex="-1"
                                                        data-nav="5,3,4" data-type="click_navShoppingMenu" data-path="clearance:womens sale:shop all" href="https://www.nike.com/w/womens-sale-3yaepz5e1x6" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All</a>
                                                </div>
                                                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                                                    <a role="menuitem" aria-label="main-menu, Sale, Kids "
                                                        tabIndex="-1"
                                                        data-nav="5,4,0" data-type="click_navShoppingMenu" data-path="clearance:kids sale" href="https://www.nike.com/w/kids-sale-3yaepzv4dh" className="pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">Kids </a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Kids , Shoes"
                                                        tabIndex="-1"
                                                        data-nav="5,4,1" data-type="click_navShoppingMenu" data-path="clearance:kids sale:shoes" href="https://www.nike.com/w/kids-sale-shoes-3yaepzv4dhzy7ok" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shoes</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Kids , Clothing"
                                                        tabIndex="-1"
                                                        data-nav="5,4,2" data-type="click_navShoppingMenu" data-path="clearance:kids sale:clothing" href="https://www.nike.com/w/kids-sale-clothing-3yaepz6ymx6zv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Clothing</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Kids , Accessories"
                                                        tabIndex="-1"
                                                        data-nav="5,4,3" data-type="click_navShoppingMenu" data-path="clearance:kids sale:accessories" href="https://www.nike.com/w/kids-sale-accessories-equipment-3yaepzawwpwzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Accessories</a>
                                                    <a role="menuitem" aria-label="main-menu, Sale, Kids , Shop All"
                                                        tabIndex="-1"
                                                        data-nav="5,4,4" data-type="click_navShoppingMenu" data-path="clearance:kids sale:shop all" href="https://www.nike.com/w/kids-sale-3yaepzv4dh" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" data-pre="ILink">Shop All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="pre-l-search" data-pre="VisualSearch">
                        <div className="pre-l-search-box">
                            <div className="d-sm-flx flx-jc-lg-fe u-position-rel">
                                <div className="pre-search-contain">
                                    <div className="pre-search-input-box d-sm-b flx-dir-lg-c flx-ai-lg-fe d-lg-flx flx-gro-sm-1 flx-gro-lg-0" type="search">
                                        <input type="text" id="VisualSearchInput" className="pre-search-input headline-5" name="search" autoComplete="off" tabIndex="0" data-var="vsInput" placeholder="Search" aria-label="Search Products" role="combobox" aria-controls="VisualSearchSuggestionsList" aria-owns="VisualSearchSuggestionsList" aria-expanded="false" />
                                        <button className="pre-clear-search ncss-btn pr0-sm z2 d-sm-h" data-var="vsClearSearch" aria-label="Reset Search" type="click_searchClear">
                                            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                <path stroke="currentColor" strokeWidth="1.5" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
                                            </svg>
                                        </button>
                                        <button className="pre-search-btn ripple" data-var="vsButton" aria-label="Open Search Modal" data-search-closed-label="Search" data-search-open-label="Open Search Modal">
                                            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                <path stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    <button type="submit" className="pre-close-search ncss-cta-primary-dark btn-lg" data-var="vsCloseSearch" aria-label="Cancel">Cancel</button>
                                </div>
                            </div>
                            <div className="pre-l-vs-box ta-sm-l" data-var="vsContainer">
                                <div className="pre-l-vs-popular pl9-sm pr5-sm prl0-lg mauto-sm" data-var="vsPopularTerms" data-pre="VisualSearchPopularTerms">
                                    <p className="headline-5 text-color-secondary pb4-sm">
                                        <span id="hf_header_label_popular_search_terms">Popular Search Terms</span>
                                    </p>
                                    <ul>
                                        <li>
                                            <a rel="nofollow" data-type="click_popularSearchSelection" tabIndex="0" data-path="Air Force 1" href="https://www.nike.com/w/air-force-1-shoes-5sj3yzy7ok?vst=Air%20Force%201" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" data-pre="ILink">Air Force 1</a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" data-type="click_popularSearchSelection" tabIndex="0" data-path="Jordan" href="https://www.nike.com/w/jordan-37eef?vst=Jordan" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" data-pre="ILink">Jordan</a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" data-type="click_popularSearchSelection" tabIndex="0" data-path="Air Max" href="https://www.nike.com/w/air-max-shoes-a6d8hzy7ok?vst=Air%20Max" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" data-pre="ILink">Air Max</a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" data-type="click_popularSearchSelection" tabIndex="0" data-path="Blazer" href="https://www.nike.com/w/blazer-shoes-9gw3azy7ok?vst=Blazer" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" data-pre="ILink">Blazer</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pre-l-vs-overlay bg-white u-full-width flx-dir-lg-r z1 pre-visually-hidden" data-var="VisualSearchOverlay" data-pre="VisualSearchOverlay">
                                    <div className="pre-l-vs-suggestions va-sm-t pl9-sm pr5-sm pl0-lg flx-dir-sm-c">
                                        <p className="headline-5 text-color-secondary pb4-sm">
                                            <span id="hf_header_label_search_topSuggestions">Top Suggestions</span>
                                        </p>
                                        <ul id="VisualSearchSuggestionsList" data-var="vsSuggestionList" role="listbox" data-pre="VisualSearchSuggestionList">
                                        </ul>
                                    </div>
                                    <div className="pre-vs-spinner">
                                        <div className="pre-spinner" data-var="vsSpinner">
                                        </div>
                                    </div>
                                    <ul className="pre-l-vs-results bg-white pt12-sm pt0-lg mb12-sm d-sm-flx flx-dir-sm-r flx-wr-sm-w flx-wr-lg-nw" data-var="VisualSearchResults" aria-live="assertive" data-pre="VisualSearchResults">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pre-acct-btn-group pt2-sm pt3-lg d-sm-ib ta-sm-r flx-gro-sm-1 flx-gro-lg-0" data-pre="HeaderButtonGroup">
                    <a aria-label="Favorites" title="Favorites" data-var="favoritesLink" data-type="click_navShortcut" data-path="favorites" href="https://www.nike.com/favorites" className="pre-btn-header ripple mr3-sm d-sm-h d-lg-ib" data-pre="ILink">
                        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor"
                                strokeWidth="1.5"
                                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                            </path>
                        </svg>
                    </a>
                    <div id="nav-cart" className="pre-acct-cart mr2-sm mr0-lg d-sm-ib" data-pre="Cart">
                        <a data-var="anchor" title="Bag Items: 1" aria-label="Bag Items: 1" rel="nofollow" data-type="click_navCart" data-path="cart" href="http://localhost:5173/cart" className="icon-btn ripple d-sm-b" data-pre="ILink">
                            <div className="">
                                <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                    <path stroke="currentColor"
                                        strokeWidth="1.5"
                                        d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                    </path>
                                </svg>
                                <span className="pre-jewel pre-cart-jewel text-color-primary-dark"
                                    style={{ visibility: "visible" }}
                                    data-var="jewel"></span>
                            </div>
                        </a>
                    </div>
                    <a aria-label="Sign In" data-var="mobileProfileIcon" data-type="click_navMembership" data-path="sign in" href="#" className="pre-btn-icon mr2-sm" data-pre="ILink" role="button">
                        <div className="pre-avatar" data-pre="Avatar">
                            <div className="d-sm-flx flx-ai-sm-c">
                                <div className="icon-btn ripple">
                                    <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph"
                                        style={{ display: "inline-block" }}
                                    >
                                        <path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z">
                                        </path>
                                    </svg>
                                    <img alt="Avatar" src="" className="pre-avatar-image va-sm-m"
                                        style={{ display: 'none' }}
                                        data-var="img" />
                                </div>
                            </div>
                        </div>
                    </a>
                    <button data-var="mobileButton" id="MobileMenuButton" aria-haspopup="true" aria-expanded="false" aria-label="menu" className="pre-btn-icon ripple d-sm-ib d-lg-h">
                        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor"
                                strokeWidth="1.5"
                                d="M21 5.25H3M21 12H3m18 6.75H3">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="pre-mobile-exposed-search-box" data-var="mobileHeaderSearchInput" data-pre="MobileHeaderSearchInput">
                <button className="pre-mobile-exposed-search-button headline-5" type="text" name="search" autoComplete="off" data-var="vsMobileHeaderInput" aria-label="Search Products">Search</button>
                <svg aria-hidden="true" className="pre-mobile-exposed-search-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor"
                        strokeWidth="1.5"
                        d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                    </path>
                </svg>
            </div>
            <div id="HeaderInsertionPointBottom" data-var="insertionPointBottom">
            </div>
        </header>
    )
}

export default Navbar