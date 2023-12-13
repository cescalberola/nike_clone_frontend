import React from 'react';
import { Link } from 'react-router-dom';
import Jordan from '../../../assets/logos/Jordan';
import Converse from '../../../assets/logos/Converse';
import { useSelector } from 'react-redux';

const BrandHeader = () => {

    const { user, token } = useSelector(state => state.auth)

    return (
        <div className='sub-navbar'>
            <div className="pre-l-brand-header d-sm-h d-lg-b z3" data-pre="BrandHeader">
                <div className="pre-l-wrapper mauto-sm d-sm-flx flx-dir-sm-r flx-jc-sm-sb flx-wr-sm-nw">
                    <ul className="pre-brand-menu d-sm-h d-md-flx">
                        <li className="pre-brand-item">
                            <a aria-label="Jordan" data-type="click_navBrandBar" data-path="Jordan" href="https://www.nike.com/jordan" className="pre-brand-item d-sm-ib prl3-sm" data-pre="ILink">
                                <Jordan />
                            </a>
                        </li>
                        <li className="pre-brand-item">
                            <a aria-label="Converse" data-type="click_navBrandBar" data-path="Converse" href="https://www.nike.com/w/converse-shoes-akmjxzy7ok" className="pre-brand-item d-sm-ib prl3-sm" data-pre="ILink">
                                <Converse />
                            </a>
                        </li>
                    </ul>
                    <div className="pre-desktop-usermenu d-sm-h d-md-flx flx-dir-md-r" data-pre="DesktopUserMenu">
                        <div className="flx-dir-r flx-ai-md-c d-lg-flx" data-var="storeLocatorContainer">
                            <div className="d-lg-flx d-flx-row flx-ai-lg-c pre-login-btns" data-var="storeLocatorButton" data-pre="StoreLocatorButton">
                                <a data-type="click_navStoreLocator" data-path="store:locator" href="https://www.nike.com/retail" className="body-4 d-lg-flx flx-ai-lg-c u-bold ml2-sm mr2-sm" data-pre="ILink">
                                    <span id="hf_header_find_a_store" className="prl1-sm">Find a Store</span>
                                </a>
                                <span className="mr1-sm body-4" data-var="storeLocatorSeparator">|</span>
                            </div>
                        </div>
                        <div className="flx-dir-r flx-ai-md-c d-lg-flx" data-var="helpDropdown">
                            <div className="pre-help-dropdown" data-pre="DesktopHelpDropdown">
                                <div id="HelpMenuDropdown" className="pre-dropdown-menu" role="menu" data-pre="DropdownMenu">
                                    <a aria-expanded="false" aria-controls="HelpMenuDropdown-Menu" data-var="ctrl" aria-label="Help" role="menuitem" data-type="click_navHelpMenu" data-path="get help" href="https://www.nike.com/help" className="pre-help-button body-4 u-bold" data-pre="ILink">
                                        <span id="hf_header_label_help">Help</span>
                                    </a>
                                    <div id="HelpMenuDropdown-Menu" className="pre-dropdown-menu-box" data-var="content">
                                        <div className="pre-dropdown-menu-content">
                                            <div className="p6-sm pl4-sm" role="menu">
                                                <a role="menuitem" target="_self" tabIndex="-1" data-type="click_navHelpMenu" data-path="get help:help" href="https://www.nike.com/help" className="pre-help-dropdown-menu-header d-sm-b mb3-sm" data-pre="ILink">
                                                    <span id="hf_header_label_help">Help</span>
                                                </a>
                                                <ul className="body-3 z4" role="none">
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:order status" href="https://www.nike.com/orders/details/" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Order Status</a>
                                                    </li>
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:shipping and delivery" href="https://www.nike.com/help/a/shipping-delivery" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Shipping &amp; Delivery</a>
                                                    </li>
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:returns" href="https://www.nike.com/help/a/returns-policy" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Returns</a>
                                                    </li>
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:order cancellation" href="https://www.nike.com/help/a/change-cancel-order" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Order Cancellation</a>
                                                    </li>
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:size chart" href="https://www.nike.com/help/a/size-charts" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Size Charts</a>
                                                    </li>
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:contact us" href="https://www.nike.com/help/#contact" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Contact Us</a>
                                                    </li>
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:membership" href="https://www.nike.com/membership/member-rewards" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Membership</a>
                                                    </li>
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:promotions" href="https://www.nike.com/promo-code" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Promotions &amp; Discounts</a>
                                                    </li>
                                                    <li>
                                                        <a role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:product advice" href="https://www.nike.com/product-advice" className="pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Product Advice</a>
                                                    </li>
                                                    <li>
                                                        <button role="menuitem" target="_self"
                                                            tabIndex="-1"
                                                            data-type="click_navHelpMenu" data-path="get help:feedback" href="#site-feedback" className="nav-btn p0-sm pre-help-dropdown-menu-item body-3 u-bold" data-pre="ILink">Send Us Feedback</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="ml1-sm mr1-sm body-4">|</span>
                        </div>
                        {user && token ? (
                            <div className="d-lg-flx" data-var="accountDropdown">
                                <div className="pre-acct-dropdown d-sm-ib" data-pre="AccountDropdown">
                                    <div id="AccountMenu" className="pre-dropdown-menu" data-pre="DropdownMenu">
                                        <a aria-label="Account" aria-expanded="false" aria-controls="AccountMenu-Menu" data-var="ctrl" data-type="click_navAccount" data-path="myAccount:greeting" href="https://www.nike.com/member/profile/" className="pre-acct-avatar d-sm-h d-lg-ib" data-pre="ILink">
                                            <div className="pre-avatar" data-pre="Avatar">
                                                <div className="d-sm-flx flx-ai-sm-c">
                                                    <p className="pre-avatar-name flx-order-sm-1 flx-order-lg--1 body-4 u-bold" data-var="userName" aria-label="Account">Hi, {user.firstName}</p>
                                                    <div className="icon-btn ripple">
                                                        {user.avatar ? (
                                                            <img alt="Avatar" src="" className="pre-avatar-image va-sm-m"
                                                                style={{ display: 'none' }}
                                                                data-var="img" />
                                                        ) : (
                                                            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph"
                                                                style={{ display: 'inline-block' }}
                                                            >
                                                                <path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z">
                                                                </path>
                                                            </svg>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div id="AccountMenu-Menu" className="pre-dropdown-menu-box" data-var="content">
                                            <div className="pre-dropdown-menu-content">
                                                <nav className="pre-acct-menu pl4-sm pr6-sm pt6-sm pb6-sm">
                                                    <a role="option" aria-selected="false" target="_self"
                                                        tabIndex="-1"
                                                        data-type="click_navAccount" data-path="myAccount:my account" href="https://www.nike.com/member/profile/" className="account-dropdown-menu-header d-sm-b mb3-sm" data-pre="ILink">Account</a>
                                                    <ul>
                                                        <li>
                                                            <a role="option" aria-selected="false" target="_self"
                                                                tabIndex="-1"
                                                                data-type="click_navAccount" data-path="myAccount:profile" href="https://www.nike.com/member/profile/" className="pre-account-dropdown-menu-item body-3 u-bold" data-pre="ILink">Profile</a>
                                                        </li>
                                                        <li>
                                                            <a role="option" aria-selected="false" target="_self"
                                                                tabIndex="-1"
                                                                data-type="click_navAccount" data-path="myAccount:orders" href="https://www.nike.com/orders" className="pre-account-dropdown-menu-item body-3 u-bold" data-pre="ILink">Orders</a>
                                                        </li>
                                                        <li>
                                                            <a role="option" aria-selected="false" target="_self"
                                                                tabIndex="-1"
                                                                data-type="click_navAccount" data-path="myAccount:favorites" href="https://www.nike.com/favorites" className="pre-account-dropdown-menu-item body-3 u-bold" data-pre="ILink">Favorites</a>
                                                        </li>
                                                        <li>
                                                            <a role="option" aria-selected="false" target="_self"
                                                                tabIndex="-1"
                                                                data-type="click_navAccount" data-path="myAccount:inbox" href="https://www.nike.com/member/inbox" className="pre-account-dropdown-menu-item body-3 u-bold" data-pre="ILink">
                                                                <div className="notification-label">Inbox<div className="hf-inbox-notification-dot" data-pre="InboxNotificationDot">
                                                                </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a role="option" aria-selected="false" target="_self"
                                                                tabIndex="-1"
                                                                data-type="click_navAccount" data-path="myAccount:experiences" href="https://www.nike.com/experiences" className="pre-account-dropdown-menu-item body-3 u-bold" data-pre="ILink">Experiences</a>
                                                        </li>
                                                        <li>
                                                            <a role="option" aria-selected="false" target="_self"
                                                                tabIndex="-1"
                                                                data-type="click_navAccount" data-path="myAccount:account settings" href="https://www.nike.com/member/settings" className="pre-account-dropdown-menu-item body-3 u-bold" data-pre="ILink">Account Settings</a>
                                                        </li>
                                                        <li>
                                                            <button role="option" aria-selected="false"
                                                                tabIndex="-1"
                                                                data-type="click_navAccount" data-path="myAccount:log out" className="nav-btn p0-sm pre-account-dropdown-menu-item body-3 u-bold is-static" data-pre="ILink">Log Out</button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="d-lg-flx" data-var="desktopLoginButtons">
                                <div className="pre-login-btns d-lg-flx flx-ai-lg-c" data-pre="DesktopLoginButtons">
                                    <Link to={'/lookup'} className="body-4 d-lg-flx flx-ai-lg-c u-bold ml2-sm mr2-sm">
                                        {/* <a data-type="click_navMembership" data-path="join us" href="https://www.nike.com/membership" className="body-4 d-lg-flx flx-ai-lg-c u-bold ml2-sm mr2-sm" data-pre="ILink"> */}
                                        <span id="hf_title_joinus_membership">Join Us</span>
                                        {/* </a> */}
                                    </Link>
                                    <span className="ml1-sm mr1-sm body-4">|</span>
                                    <Link to={'/lookup'} className="body-4 d-lg-flx flx-ai-lg-c u-bold ml2-sm mr2-sm">
                                        {/* <button data-var="loginBtn" data-type="click_navMembership" data-path="sign in" className="nav-btn p0-sm d-sm-b body-4 u-bold ml2-sm mr2-sm" data-pre="ILink"> */}
                                        <span id="hf_title_signin_membership">Sign In</span>
                                        {/* </button> */}
                                    </Link>
                                </div>
                            </div>
                        )
                        }


                    </div>
                </div>
            </div>
        </div>

    )
}

export default BrandHeader