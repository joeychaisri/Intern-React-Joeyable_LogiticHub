import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Service-Dashboard-Paid.css';


class Service_Dashboard_Prepare extends Component {
    render() {
        return (

            <div >

                <div className="row" id="service-dashboard-row">

                    <div className="col-md-11">
                        <div className="page-header">
                            <h1>Prepare Order</h1>
                        </div>

                        <button type="button" className="btn purple-background white glyphicon glyphicon-folder-open " id="service-booking-button-top-1" aria-hidden="true">   CreateOrder</button>
                        <button type="button" className="btn purple-background white glyphicon glyphicon-folder-open " id="service-booking-button-top-2" aria-hidden="true">   ImportOrder</button>





                        <div className="input-group">
                            <center>
                                <input type="text" className="form-control" id="service-booking-search" placeholder="Search for..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" id="service-booking-searchb" type="button"> Search </button>
                                </span>
                            </center>
                        </div>


                        < div id="fourrowbutton">

                            <button type="button" className="btn purple-background white" id="fourbuttonrow-1">   Choose all</button>
                            <button type="button" className="btn btn-default" id="fourbuttonrow-2">   Remove</button>
                            <button type="button" className="btn purple-background white" id="fourbuttonrow-3">   Pay All</button>

                            <nav aria-label="..." id="fourbuttonrow-4">
                                <ul className="pager">
                                    <li><a href="#"> back </a></li>
                                    <li><a href="#"> next </a></li>
                                </ul>
                            </nav>


                        </div>



                        {/*Tracking-detial 1 */}






                        <div id="testnaja">

                            {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}

                            <div className="method">
                                <div className="row margin-0 list-header hidden-sm hidden-xs">
                                    <div className="col-md-1"><div className="header" id="header-prepare">#</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Tracking</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Recipient's Name</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Address</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Postcode</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Date</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Logistic</div></div>
                                    <div className="col-md-2"><div className="header" id="header-prepare">Dropoff</div></div>
                                    <div className="col-md-1"><div className="header" id="header-prepare">Payment</div></div>
                                </div>
                            </div>






                            <div className="method">
                                <div className="row margin-0">

                                    <div className="col-md-1" >
                                        <div className="cell" >

                                            <div className="prepare-checkbox">
                                            <label><input type="checkbox" value="" /></label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-trackingcode">
                                                ET23123131
                                      </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-Recipient">
                                                Joey
                                      </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-address">
                                                525/213 Prachautit 76
                                      </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-postcode">
                                                10140
                                      </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-date">
                                                22-06-2017
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="prepare-logistic">
                                                Fedex
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="cell">
                                            <div className="prepare-dropoff">
                                                Soi Lat Ya1
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="cell">
                                            <div className="isrequired">
                                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>

                        </div>





                        {/*End Tracking-detial 1 */}






                    </div>
                </div>



            </div>


        );
    }
}

export default Service_Dashboard_Prepare;


