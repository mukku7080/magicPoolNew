import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MonthlyROI = () => {
    useEffect(() => {
        setTimeout(() => {
            if (window.initPageScripts) {
                window.initPageScripts();
            }
        }, 300);
    }, []);

    return (
        <>
            <div className="page-wrapper" style={{ width: '100%' }}>
                {/* Page Title */}
                <section className="page-title">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="column col-lg-12 col-md-12 col-sm-12">
                                <h1 className="page-title_title">Monthly ROI</h1>
                                <ul className="page-title_list">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Monthly ROI</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Page Title */}

                {/* Service Detail */}
                <section className="service-detail">
                    <div className="auto-container">
                        <div className="row clearfix">
                            {/* Content Column */}
                            <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <div className="service-detail_content">
                                    <div className="service-detail_image">
                                        <img src="/assets/images/resource/service-detail.jpg" alt="Monthly ROI" />
                                    </div>
                                    <div className="service-detail_icon">
                                        <i className="flaticon-save-money" style={{ color: '#4a7b4c' }}></i>
                                    </div>
                                    <h2 className="service-detail_title">Monthly ROI (Return on Investment)</h2>
                                    <p className="service-detail_text">
                                        Magic Autopool's Monthly ROI program offers consistent monthly returns on your investment. Our advanced trading algorithms and diversified portfolio management ensure stable and predictable income generation every month.
                                    </p>

                                    <div className="service-detail_features">
                                        <h3>Key Features:</h3>
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i> Guaranteed monthly returns</li>
                                            <li><i className="fa fa-check-circle"></i> Transparent profit calculation</li>
                                            <li><i className="fa fa-check-circle"></i> Compound growth option</li>
                                            <li><i className="fa fa-check-circle"></i> Flexible withdrawal terms</li>
                                            <li><i className="fa fa-check-circle"></i> Professional fund management</li>
                                        </ul>
                                    </div>

                                    <div className="service-detail_benefits">
                                        <h3>Investment Plans:</h3>
                                        <p>
                                            Choose from our range of investment plans designed to suit different risk profiles and investment goals. All plans offer competitive monthly returns with varying terms and conditions.
                                        </p>
                                        <div className="row clearfix">
                                            <div className="column col-lg-4 col-md-6 col-sm-12">
                                                <div className="plan-item">
                                                    <div className="plan-header">
                                                        <h4>Basic Plan</h4>
                                                        <div className="plan-price">8-12%</div>
                                                        <span>Monthly ROI</span>
                                                    </div>
                                                    <ul className="plan-features">
                                                        <li>$500 - $4,999</li>
                                                        <li>Monthly Returns</li>
                                                        <li>Basic Support</li>
                                                        <li>6 Month Term</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="column col-lg-4 col-md-6 col-sm-12">
                                                <div className="plan-item featured">
                                                    <div className="plan-header">
                                                        <h4>Premium Plan</h4>
                                                        <div className="plan-price">12-18%</div>
                                                        <span>Monthly ROI</span>
                                                    </div>
                                                    <ul className="plan-features">
                                                        <li>$5,000 - $19,999</li>
                                                        <li>Monthly Returns</li>
                                                        <li>Priority Support</li>
                                                        <li>12 Month Term</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="column col-lg-4 col-md-6 col-sm-12">
                                                <div className="plan-item">
                                                    <div className="plan-header">
                                                        <h4>Elite Plan</h4>
                                                        <div className="plan-price">18-25%</div>
                                                        <span>Monthly ROI</span>
                                                    </div>
                                                    <ul className="plan-features">
                                                        <li>$20,000+</li>
                                                        <li>Monthly Returns</li>
                                                        <li>VIP Support</li>
                                                        <li>24 Month Term</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-detail_process">
                                        <h3>How It Works:</h3>
                                        <div className="process-steps">
                                            <div className="step-item">
                                                <div className="step-number">1</div>
                                                <div className="step-content">
                                                    <h4>Choose Your Plan</h4>
                                                    <p>Select the investment plan that best fits your financial goals and risk tolerance.</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">2</div>
                                                <div className="step-content">
                                                    <h4>Make Investment</h4>
                                                    <p>Invest your chosen amount through our secure platform using various payment methods.</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">3</div>
                                                <div className="step-content">
                                                    <h4>Receive Monthly Returns</h4>
                                                    <p>Get your monthly ROI directly deposited to your account on the same date each month.</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">4</div>
                                                <div className="step-content">
                                                    <h4>Reinvest or Withdraw</h4>
                                                    <p>Choose to reinvest your returns for compound growth or withdraw them to your wallet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-detail_faq">
                                        <h3>Frequently Asked Questions:</h3>
                                        <div className="accordion-box">
                                            <div className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-outer">
                                                        <span className="icon icon-plus fas fa-plus"></span>
                                                        <span className="icon icon-minus fas fa-minus"></span>
                                                    </div>
                                                    Are the returns guaranteed?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>While we strive to maintain consistent returns, all investments carry some degree of risk. Our experienced team works to minimize risks through diversification and strategic trading.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-outer">
                                                        <span className="icon icon-plus fas fa-plus"></span>
                                                        <span className="icon icon-minus fas fa-minus"></span>
                                                    </div>
                                                    Can I withdraw my principal before term ends?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Early withdrawal may be possible with certain conditions and fees. Please contact our support team for specific terms and conditions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Column */}
                            <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                                <aside className="sidebar">
                                    <div className="sidebar-widget service-widget">
                                        <h3 className="sidebar-title">Our Services</h3>
                                        <ul>
                                            <li><Link to="/auto-pool-income">Auto Pool Income</Link></li>
                                            <li><Link to="/reward-income">Reward Income</Link></li>
                                            <li><Link to="/monthly-roi">Monthly ROI</Link></li>
                                            <li><Link to="/magic-pool">Magic Pool</Link></li>
                                            <li><Link to="/referral-income">Referral Income</Link></li>
                                        </ul>
                                    </div>

                                    <div className="sidebar-widget contact-widget">
                                        <h3 className="sidebar-title">Need Help?</h3>
                                        <div className="contact-info">
                                            <div className="contact-item">
                                                <div className="contact-icon">
                                                    <i className="fas fa-phone"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <span>Call Us</span>
                                                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                                                </div>
                                            </div>
                                            <div className="contact-item">
                                                <div className="contact-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <span>Email Us</span>
                                                    <a href="mailto:support@magicautopool.com">support@magicautopool.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Service Detail */}
            </div>
        </>
    );
};

export default MonthlyROI;