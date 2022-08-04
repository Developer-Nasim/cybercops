import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom"; 
import UserService from "../../../services/UserService"; 
import Header from "../../helper/header/index";
import Footer from "../../helper/footer/index"
import Users from "../../helper/users"
import Pagination from "../../helper/pagination/index"
import IssueLists from "../../../modules/issueList";

import CongratulationMessage from "../../helper/messages/success";  

// icons
import Eye from "../../../assets/imgs/eye.svg"
import ArrowDown from "../../../assets/imgs/down-arrow.svg"
import Link from "../../../assets/imgs/link.svg"
import Star from "../../../assets/imgs/star.svg"
import BkMrk from "../../../assets/imgs/bookmark.svg"
import QrIcon from "../../../assets/imgs/qr.svg"
import IssueIcon from "../../../assets/imgs/idea.svg"
import ReqIcon from "../../../assets/imgs/request.svg" 
import KnifIcon from "../../../assets/imgs/knife.svg"  
import FilterIcon from "../../../assets/imgs/filter.svg"
import LabelIcon from "../../../assets/imgs/label.svg"
import MilstoneIcon from "../../../assets/imgs/milstone.svg" 
import Msg from "../../../assets/imgs/msgs.svg"
import Tick from "../../../assets/imgs/tick.svg"
import ProTip from "../../../assets/imgs/tips.svg"

import "./style.css"


// Small action -- TOP
function SmAct({Icon,label,num}) {
    return(
        <div className="smAct">
            <img src={Icon} alt="" />
            {label} <span>{num}</span>
            <img src={ArrowDown} alt="" />
        </div>
    )
}
 


function IssuePage() {
    const sessid = useRef("");
    const [issueList, setissueList] = useState([]);
    let { title } = useParams();
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response1 = await fetch(
            "https://backend-cybercops.herokuapp.com/session/getAll",
            {
              method: "GET",
              mode: "cors",
              headers: {
                //put the keycloak access token in the Authorization header
                Authorization: `Bearer ${UserService.getToken()}`,
                "Access-Control-Allow-Origin":
                  "https://cybercops-frontend-2.herokuapp.com/",
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          );
          const json1 = await response1.json();
  
          setissueList(json1);
          console.log(json1);
  
          json1.map((item) => {
            if (item.challenge.key === title) {
              sessid.current = item.id;
              console.log(sessid);
            }
          });
        } catch (error) {
          console.log("error", error);
        }
   
      };
  
      fetchData();
    }, []);


    return(
        <div className="issuePage"> 
                <div className="container"> 
                    <div className="topWrps">
                        <div className="top-headings">
                            <div> 
                                <img src={BkMrk} alt="" />
                                <h4>hasicorp / <a href="#">vault</a></h4>
                                <span>Public</span>
                            </div>
                            <div>
                                <SmAct Icon={Eye} label={"Watch"} num={"858"} />
                                <SmAct Icon={Link} label={"Fork"} num={"5.5k"} />
                                <SmAct Icon={Star} label={"Star"} num={"4.5k"} />
                            </div>
                        </div>
                        <div className="tabMenus">
                            <a href="#"><span><img src={QrIcon} alt="" /> Code</span></a>
                            <a href="#" className="active"><span><img src={IssueIcon} alt="" /> Issues</span></a>
                            <a href="#"><span><img src={ReqIcon} alt="" /> Pull Requests</span></a> 
                            <a href="#"><span><img src={KnifIcon} alt="" /> Security</span></a> 
                        </div>
                        <div className="filterWrps">
                            <div className="searchBox">
                                <input type="text" name="" id="searchhere" placeholder="Search is.issues  is.open" />
                                <span><img src={FilterIcon} alt="" /><img src={ArrowDown} className="arrow" alt="" /></span>
                            </div>
                            <div className="lbl_mltn">
                                <button><img src={LabelIcon} alt="" /> Labels</button> 
                            </div> 
                        </div>
                    </div>
                    <div className="bottomWrps">
                        <div className="allIssues">
                            <div className="allIssues_heading">
                                <div className="allIssues_heading-left">
                                    <b><img src={IssueIcon} alt="" /> {issueList.length} Open</b>
                                    <span><b><img src={Tick} alt="" /> 7,150 issued closed</b></span>
                                </div>
                                <div className="allIssues_heading-right">
                                    <ul>
                                        <li><a href="#">Author <img src={ArrowDown} alt="" /></a></li>
                                        <li><a href="#">Lebel <img src={ArrowDown} alt="" /></a></li> 
                                        <li><a href="#">sort <img src={ArrowDown} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>

                            
                            {/* Showing issue lists with pagination */}
                            <IssueLists data={issueList}/>

                            {/* Showing Congratulation while no more issue */}
                            { issueList.length < 0 ? <CongratulationMessage />  : ""}
 
                        </div> 
                        <h5 className="proTip"><img src={ProTip} alt="" /> <span>ProTip!</span>  Adding <span>no:label</span> will show everything without a label.</h5>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default IssuePage;