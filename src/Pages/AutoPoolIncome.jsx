import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AutoPoolIncome = () => {
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
                                <h1 className="page-title_title">Auto Pool Income</h1>
                                <ul className="page-title_list">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Auto Pool Income</li>
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
                                        <img src="/assets/images/resource/service-detail.jpg" alt="Auto Pool Income" />
                                    </div>
                                    <div className="service-detail_icon">
                                        <i className="flaticon-bitcoin" style={{ color: '#4a7b4c' }}></i>
                                    </div>
                                    <h2 className="service-detail_title">Auto Pool Income</h2>
                                    <p className="service-detail_text">
                                        Magic Autopool's Auto Pool Income is a revolutionary passive income system that automatically distributes earnings among all participants. This sophisticated algorithm ensures fair and transparent distribution of profits generated from our trading activities.
                                    </p>

                                    <div className="service-detail_features">
                                        <h3>Key Features:</h3>
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i> Automatic profit distribution</li>
                                            <li><i className="fa fa-check-circle"></i> No manual intervention required</li>
                                            <li><i className="fa fa-check-circle"></i> Transparent algorithm</li>
                                            <li><i className="fa fa-check-circle"></i> Daily income generation</li>
                                            <li><i className="fa fa-check-circle"></i> Scalable returns based on pool size</li>
                                        </ul>
                                    </div>

                                    <div className="service-detail_benefits">
                                        <h3>How It Works:</h3>
                                        <p>
                                            Our Auto Pool system works by pooling all investments together and using advanced trading algorithms to generate consistent returns. The profits are then automatically distributed to all pool members based on their contribution percentage.
                                        </p>
                                        <div className="row clearfix">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="benefit-item">
                                                    <div className="benefit-item_icon">
                                                        <i className="flaticon-bitcoin" style={{ color: '#4a7b4c' }}></i>
                                                    </div>
                                                    <h4>Automated System</h4>
                                                    <p>No manual trading required. Our AI handles everything automatically.</p>
                                                </div>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="benefit-item">
                                                    <div className="benefit-item_icon">
                                                        <i className="flaticon-bitcoin" style={{ color: '#4a7b4c' }}></i>
                                                    </div>
                                                    <h4>Fair Distribution</h4>
                                                    <p>Profits are distributed fairly based on your pool contribution.</p>
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
                                                    How often are profits distributed?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Profits are distributed daily at 12:00 AM UTC. You can track your earnings in real-time through your dashboard.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-outer">
                                                        <span className="icon icon-plus fas fa-plus"></span>
                                                        <span className="icon icon-minus fas fa-minus"></span>
                                                    </div>
                                                    What's the minimum investment?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>The minimum investment for Auto Pool Income is $100. This ensures optimal pool performance and fair distribution.</p>
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

export default AutoPoolIncome;