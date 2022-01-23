import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={`${classes.footer} text-center p-5`}>
            {/* ToDo: Added the Logo Image with width: 45px */}
            <small className="fs-8">
                Copyright &copy; Lorem ipsum doloar sit amet. All rights
                reserved.
            </small>
        </footer>
    );
};

export default Footer;
