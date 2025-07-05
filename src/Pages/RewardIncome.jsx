import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RewardIncome = () => {
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
                                <h1 className="page-title_title">Reward Income</h1>
                                <ul className="page-title_list">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Reward Income</li>
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
                                        <img src="/assets/images/resource/service-detail.jpg" alt="Reward Income" />
                                    </div>
                                    <div className="service-detail_icon">
                                        <i className="flaticon-currencies" style={{ color: '#4a7b4c' }}></i>
                                    </div>
                                    <h2 className="service-detail_title">Reward Income</h2>
                                    <p className="service-detail_text">
                                        Magic Autopool's Reward Income system provides additional earnings through various achievement-based rewards. This incentive program recognizes and rewards active participation, milestones, and loyalty within our ecosystem.
                                    </p>

                                    <div className="service-detail_features">
                                        <h3>Reward Categories:</h3>
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i> Achievement Rewards</li>
                                            <li><i className="fa fa-check-circle"></i> Milestone Bonuses</li>
                                            <li><i className="fa fa-check-circle"></i> Loyalty Rewards</li>
                                            <li><i className="fa fa-check-circle"></i> Performance Bonuses</li>
                                            <li><i className="fa fa-check-circle"></i> Special Event Rewards</li>
                                        </ul>
                                    </div>

                                    <div className="service-detail_benefits">
                                        <h3>How to Earn Rewards:</h3>
                                        <p>
                                            Rewards are earned through various activities and achievements within the Magic Autopool ecosystem. The more active and engaged you are, the more rewards you can earn.
                                        </p>
                                        <div className="row clearfix">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="benefit-item">
                                                    <div className="benefit-item_icon">
                                                        <i className="flaticon-currencies" style={{ color: '#4a7b4c' }}></i>
                                                    </div>
                                                    <h4>Activity-Based</h4>
                                                    <p>Earn rewards for daily logins, investments, and platform engagement.</p>
                                                </div>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="benefit-item">
                                                    <div className="benefit-item_icon">
                                                        <i className="flaticon-currencies" style={{ color: '#4a7b4c' }}></i>
                                                    </div>
                                                    <h4>Milestone Rewards</h4>
                                                    <p>Unlock special bonuses when you reach investment milestones.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-detail_table">
                                        <h3>Reward Tiers:</h3>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Tier</th>
                                                        <th>Investment Required</th>
                                                        <th>Reward Percentage</th>
                                                        <th>Special Benefits</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Bronze</td>
                                                        <td>$500 - $1,999</td>
                                                        <td>0.5%</td>
                                                        <td>Basic Rewards</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Silver</td>
                                                        <td>$2,000 - $4,999</td>
                                                        <td>1.0%</td>
                                                        <td>Enhanced Rewards</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gold</td>
                                                        <td>$5,000 - $9,999</td>
                                                        <td>1.5%</td>
                                                        <td>Premium Rewards</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Platinum</td>
                                                        <td>$10,000+</td>
                                                        <td>2.0%</td>
                                                        <td>VIP Rewards</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                                    How are rewards calculated?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Rewards are calculated based on your tier level, activity score, and achievement completion. The system automatically tracks your progress and awards rewards accordingly.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-outer">
                                                        <span className="icon icon-plus fas fa-plus"></span>
                                                        <span className="icon icon-minus fas fa-minus"></span>
                                                    </div>
                                                    When are rewards distributed?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Rewards are distributed weekly on Sundays at 12:00 AM UTC. You can track your pending rewards in your dashboard.</p>
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

export default RewardIncome;