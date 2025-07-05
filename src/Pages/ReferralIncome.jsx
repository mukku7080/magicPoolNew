import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReferralIncome = () => {
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
                                <h1 className="page-title_title">Referral Income</h1>
                                <ul className="page-title_list">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Referral Income</li>
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
                                        <img src="/assets/images/resource/service-detail.jpg" alt="Referral Income" />
                                    </div>
                                    <div className="service-detail_icon">
                                        <i className="flaticon-save-money" style={{ color: '#4a7b4c' }}></i>
                                    </div>
                                    <h2 className="service-detail_title">Referral Income</h2>
                                    <p className="service-detail_text">
                                        Magic Autopool's Referral Income program allows you to earn substantial commissions by introducing new members to our platform. With our multi-level referral system, you can build a network and earn from multiple levels of referrals.
                                    </p>

                                    <div className="service-detail_features">
                                        <h3>Referral Program Benefits:</h3>
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i> Multi-level commission structure</li>
                                            <li><i className="fa fa-check-circle"></i> Instant commission payments</li>
                                            <li><i className="fa fa-check-circle"></i> Lifetime referral tracking</li>
                                            <li><i className="fa fa-check-circle"></i> Bonus rewards for top performers</li>
                                            <li><i className="fa fa-check-circle"></i> Advanced referral tools</li>
                                        </ul>
                                    </div>

                                    <div className="service-detail_benefits">
                                        <h3>Commission Structure:</h3>
                                        <p>
                                            Our referral program offers competitive commission rates across multiple levels, ensuring you earn from both direct referrals and their subsequent referrals.
                                        </p>
                                        <div className="commission-table">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Level</th>
                                                            <th>Commission Rate</th>
                                                            <th>Description</th>
                                                            <th>Bonus</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Level 1</td>
                                                            <td>10%</td>
                                                            <td>Direct referrals</td>
                                                            <td>$50 bonus for first referral</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Level 2</td>
                                                            <td>5%</td>
                                                            <td>Referrals of your referrals</td>
                                                            <td>$25 bonus for active Level 2</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Level 3</td>
                                                            <td>3%</td>
                                                            <td>Third level referrals</td>
                                                            <td>$15 bonus for active Level 3</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Level 4</td>
                                                            <td>2%</td>
                                                            <td>Fourth level referrals</td>
                                                            <td>$10 bonus for active Level 4</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Level 5</td>
                                                            <td>1%</td>
                                                            <td>Fifth level referrals</td>
                                                            <td>$5 bonus for active Level 5</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-detail_process">
                                        <h3>How to Start Earning:</h3>
                                        <div className="process-steps">
                                            <div className="step-item">
                                                <div className="step-number">1</div>
                                                <div className="step-content">
                                                    <h4>Get Your Referral Link</h4>
                                                    <p>Access your unique referral link from your dashboard to start sharing with others.</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">2</div>
                                                <div className="step-content">
                                                    <h4>Share & Promote</h4>
                                                    <p>Share your referral link through social media, email, or direct communication.</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">3</div>
                                                <div className="step-content">
                                                    <h4>Track Your Referrals</h4>
                                                    <p>Monitor your referral network and earnings in real-time through your dashboard.</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">4</div>
                                                <div className="step-content">
                                                    <h4>Earn Commissions</h4>
                                                    <p>Receive instant commissions when your referrals make investments or participate in programs.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-detail_rewards">
                                        <h3>Special Rewards & Bonuses:</h3>
                                        <div className="row clearfix">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="reward-item">
                                                    <div className="reward-icon">
                                                        <i className="fas fa-trophy"></i>
                                                    </div>
                                                    <h4>Top Performer Bonus</h4>
                                                    <p>Monthly bonuses for top referrers with additional cash rewards and exclusive perks.</p>
                                                </div>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="reward-item">
                                                    <div className="reward-icon">
                                                        <i className="fas fa-gift"></i>
                                                    </div>
                                                    <h4>Milestone Rewards</h4>
                                                    <p>Unlock special rewards when you reach referral milestones like 10, 50, or 100 referrals.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-detail_tools">
                                        <h3>Referral Tools:</h3>
                                        <ul className="tools-list">
                                            <li><i className="fa fa-check"></i> Customizable referral links</li>
                                            <li><i className="fa fa-check"></i> Social media sharing tools</li>
                                            <li><i className="fa fa-check"></i> Email templates</li>
                                            <li><i className="fa fa-check"></i> Banner ads and graphics</li>
                                            <li><i className="fa fa-check"></i> Real-time analytics</li>
                                            <li><i className="fa fa-check"></i> Mobile referral app</li>
                                        </ul>
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
                                                    How soon do I get paid?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Referral commissions are paid instantly when your referrals make investments. You can withdraw your earnings immediately or reinvest them for compound growth.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-outer">
                                                        <span className="icon icon-plus fas fa-plus"></span>
                                                        <span className="icon icon-minus fas fa-minus"></span>
                                                    </div>
                                                    Is there a limit to how much I can earn?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>There's no limit to your referral earnings. The more active referrals you have, the more you can earn. Top performers earn thousands of dollars monthly.</p>
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

export default ReferralIncome;