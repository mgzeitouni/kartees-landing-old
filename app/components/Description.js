var React=require('react');


export default class Description extends React.Component {

   render() {
    return  (<section className="content-10">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>The AI powered ticket broker for your season ticket package</h3>
                            <p>
                                Kartees will manage your tickets while providing real time insights.
                            </p>
                            <div className="features">
                                <div className="box">
                                    <img src="img/retina@2x.png" width="100" height="100" alt=""/>
                                    <h6>Easy to get Started</h6>
                                    <p>
                                        To get started, simply tell us where your seats are. Kartees will upload and list them on trusted marketplaces such as Stubhub.
                                    </p>
                                </div>
                                <div className="box">
                                    <img src="img/gift@2x.png" width="100" height="100" alt=""/>
                                    <h6>Monitor your Analytics Dashboard</h6>
                                    <p>
                                       Track your sales progress with ROI and profitability reports for the season. Learn your sales numbers across various opponents, weather conditions, and days of the week.
                                    </p>
                                </div>
                                <div className="box">
                                    <img src="img/time@2x.png" width="100" height="100" alt="" />
                                    <h6>Optimize Profitibaility</h6>
                                    <p>
                                        Our AI learns how ticket pricing moves. Using your team's performance past pricing movement, Kartees will auto-adjust pricing every few minutes to ensure optimal profits.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-sm-offset-2 text-center">
                            <div id="c-10_myCarousel" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <img src="img/iphone@2x.png" width="302" height="635" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="img/iphone@2x.png" width="302" height="635" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="img/iphone@2x.png" width="302" height="635" alt="" />
                                    </div>
                                </div>
                                <ol className="carousel-indicators">
                                    <li data-target="#c-10_myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#c-10_myCarousel" data-slide-to="1"></li>
                                    <li data-target="#c-10_myCarousel" data-slide-to="2"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>);
  }
}
