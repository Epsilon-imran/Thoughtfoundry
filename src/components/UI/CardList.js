import React from "react";
import avatar from "../../assets/avatar4.jpg";
import "./Card.scss";
import Cards from "./Cards";

const CardList = () => {
    return (
        <li>
            <a href="#">
                <div className="d-flex">
                    <img className="media-object" src={avatar} alt="" />
                    <div className="media-body flex-fill">
                        <span className="name">Chris Fox</span>
                        <span className="message ">Designer, Blogger</span>
                    </div>
                    <div className="media-points">1,500 pts</div>
                </div>
            </a>
        </li>
    );
};

export default CardList;
