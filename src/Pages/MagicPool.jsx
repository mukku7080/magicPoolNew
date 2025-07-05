import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MagicPool = () => {
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
                                <h1 className="page-title_title">Magic Pool</h1>
                                <ul className="page-title_list">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Magic Pool</li>
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
                                        <img src="/assets/images/resource/service-detail.jpg" alt="Magic Pool" />
                                    </div>
                                    <div className="service-detail_icon">
                                        <i className="flaticon-save-money" style={{color: '#4a7b4c'}}></i>
                                    </div>
                                    <h2 className="service-detail_title">Magic Pool</h2>
                                    <p className="service-detail_text">
                                        Magic Pool is our flagship investment program that combines advanced AI trading, diversified portfolio management, and community-driven growth. This revolutionary system creates a self-sustaining ecosystem where every participant contributes to and benefits from collective success.
                                    </p>
                                    
                                    <div className="service-detail_features">
                                        <h3>Magic Pool Benefits:</h3>
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i> AI-powered trading strategies</li>
                                            <li><i className="fa fa-check-circle"></i> Community-driven growth</li>
                                            <li><i className="fa fa-check-circle"></i> Dynamic profit distribution</li>
                                            <li><i className="fa fa-check-circle"></i> Real-time performance tracking</li>
                                            <li><i className="fa fa-check-circle"></i> Exclusive member benefits</li>
                                        </ul>
                                    </div>

                                    <div className="service-detail_benefits">
                                        <h3>How Magic Pool Works:</h3>
                                        <p>
                                            Magic Pool utilizes cutting-edge artificial intelligence to analyze market trends, execute trades, and optimize returns. The system continuously learns and adapts, creating a truly magical investment experience.
                                        </p>
                                        <div className="row clearfix">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="benefit-item">
                                                    <div className="benefit-item_icon">
                                                        <i className="flaticon-save-money" style={{color: '#4a7b4c'}}></i>
                                                    </div>
                                                    <h4>AI-Powered Trading</h4>
                                                    <p>Our advanced AI algorithms analyze thousands of market indicators to make optimal trading decisions.</p>
                                                </div>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="benefit-item">
                                                    <div className="benefit-item_icon">
                                                        <i className="flaticon-save-money" style={{color: '#4a7b4c'}}></i>
                                                    </div>
                                                    <h4>Smart Distribution</h4>
                                                    <p>Profits are intelligently distributed based on contribution, activity, and pool performance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-detail_stats">
                                        <h3>Pool Performance:</h3>
                                        <div className="row clearfix">
                                            <div className="column col-lg-3 col-md-6 col-sm-12">
                                                <div className="stat-item">
                                                    <div className="stat-number">$2.5M+</div>
                                                    <div className="stat-label">Total Pool Value</div>
                                                </div>
                                            </div>
                                            <div className="column col-lg-3 col-md-6 col-sm-12">
                                                <div className="stat-item">
                                                    <div className="stat-number">15,000+</div>
                                                    <div className="stat-label">Active Members</div>
                                                </div>
                                            </div>
                                            <div className="column col-lg-3 col-md-6 col-sm-12">
                                                <div className="stat-item">
                                                    <div className="stat-number">89.5%</div>
                                                    <div className="stat-label">Success Rate</div>
                                                </div>
                                            </div>
                                            <div className="column col-lg-3 col-md-6 col-sm-12">
                                                <div className="stat-item">
                                                    <div className="stat-number">24/7</div>
                                                    <div className="stat-label">Active Trading</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-detail_levels">
                                        <h3>Magic Pool Levels:</h3>
                                        <div className="level-items">
                                            <div className="level-item">
                                                <div className="level-badge">Level 1</div>
                                                <div className="level-content">
                                                    <h4>Starter Magic ($100 - $999)</h4>
                                                    <p>Entry-level pool participation with basic AI trading features and standard profit distribution.</p>
                                                    <ul>
                                                        <li>Basic AI algorithms</li>
                                                        <li>Standard profit sharing</li>
                                                        <li>Weekly reporting</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="level-item">
                                                <div className="level-badge">Level 2</div>
                                                <div className="level-content">
                                                    <h4>Advanced Magic ($1,000 - $9,999)</h4>
                                                    <p>Enhanced pool benefits with advanced AI strategies and priority profit distribution.</p>
                                                    <ul>
                                                        <li>Advanced AI algorithms</li>
                                                        <li>Priority profit sharing</li>
                                                        <li>Daily reporting</li>
                                                        <li>Exclusive insights</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="level-item">
                                                <div className="level-badge">Level 3</div>
                                                <div className="level-content">
                                                    <h4>Elite Magic ($10,000+)</h4>
                                                    <p>Premium pool membership with cutting-edge AI, maximum profit potential, and VIP benefits.</p>
                                                    <ul>
                                                        <li>Cutting-edge AI algorithms</li>
                                                        <li>Maximum profit sharing</li>
                                                        <li>Real-time reporting</li>
                                                        <li>VIP support</li>
                                                        <li>Exclusive events</li>
                                                    </ul>
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
                                                    What makes Magic Pool different?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Magic Pool combines AI-powered trading with community-driven growth, creating a unique ecosystem where technology and human wisdom work together to maximize returns.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-outer">
                                                        <span className="icon icon-plus fas fa-plus"></span>
                                                        <span className="icon icon-minus fas fa-minus"></span>
                                                    </div>
                                                    How is the AI trained?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Our AI is trained on millions of market data points, historical trading patterns, and real-time market conditions. It continuously learns and adapts to changing market dynamics.</p>
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

export default MagicPool;