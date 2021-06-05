import React, { useEffect } from 'react'
import "jquery-ui-dist/jquery-ui.min.css";
import "jquery-ui-dist/jquery-ui.min.js";
import * as $ from 'jquery';
import GOOGLE from '../../assets/GOOGL.png'
import AMZN from '../../assets/AMZN.svg'
import FB from '../../assets/FB.png'
import './style.css'


const Header = () => {

    useEffect(() => {
         $( "#sortable" ).sortable({
            connectWith: ".connectedSortable"
           }).disableSelection(); 
        
    }, [])

    return (
            <div className="container-md">

                <div className="">
                {/* <!-- Draggable default card start --> */}
                <div className="card ">
                    
                    <div className="card-block ">
                        <div className="row connectedSortable justify-content-around align-items-center " id="sortable">
                            
                            <div className="col-md-3 " >
                                <div className="card-sub"> 
                                    <div className="card card_body ">
                                        <div className="d-flex d-inline-flex justify-content-around align-items-center">
                                            <h4 className="card-text">GOOGL</h4>
                                            <div className="card_logo">
                                                <img className="card-img-top " src={GOOGLE} alt="Google cap" />
                                            </div>
                                       
                                        </div>
                                        <div className="align-items-center">
                                            <h3 className="card-text card_text">1515 USD</h3>
                                        </div>                                          
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3" >
                                <div className="card-sub"> 
                                    <div className="card card_body ">
                                        <div className="d-flex d-inline-flex justify-content-around align-items-center">
                                            <h4 className="card-text">FB</h4>
                                            <div className="card_logo">
                                                <img className="card-img-top " src={FB} alt="FB cap" />
                                            </div>
                                       
                                        </div>
                                        <div className="align-items-center">
                                            <h3 className="card-text  card_text">266 USD</h3>
                                        </div>                                          
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3" >
                                <div className="card-sub"> 
                                    <div className="card card_body ">
                                        <div className="d-flex d-inline-flex justify-content-around align-items-center">
                                            <h4 className="card-text">AMZN</h4>
                                            <div className="card_logo">
                                                <img className="card-img-top " src={AMZN} alt="AMZN cap" />
                                            </div>
                                       
                                        </div>
                                        <div className="align-items-center">
                                            <h3 className="card-text card_text">3116 USD</h3>
                                        </div>                                          
                                    </div>
                                </div>
                            </div>

                            
                           
                        </div>
                    </div>
                </div> {/* <!-- Draggable default card start --> */}
                </div>
            </div>
    )
}

export default Header
