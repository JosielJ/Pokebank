import { motion } from "framer-motion";
import React from "react";
import "./Footer.css";

import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer(){

    function openInstagram() {
        window.open("https://www.instagram.com/josieljaschke/?hl=pt-br").focus();
    }
    function openTwitter() {
        window.open("https://twitter.com/josieljaschke").focus();
    }
    function openLinkedin() {
        window.open("https://www.linkedin.com/in/josiel-jaschke-gon%C3%A7alves-dos-santos-5b2b17195/").focus();
    }
    function openGitHub() {
        window.open("https://github.com/JosielJ").focus();
    }

    return(
        <div className="container-footer">
            <div className="container-footer-foot">
                <div className="container-footer-foot-logo">
                    <h1>PokeBank</h1>
                </div>
                <motion.div className="container-footer-foot-socialmedia">
                    <motion.div className="container-footer-foot-socialmedia-instagram" onClick={openInstagram} whileHover={{cursor: "pointer", scale: 1.5}}>
                        <AiOutlineInstagram />
                    </motion.div>
                    <motion.div className="container-footer-foot-socialmedia-twitter" onClick={openTwitter} whileHover={{cursor: "pointer", scale: 1.5}}>
                        <AiOutlineTwitter />
                    </motion.div>
                    <motion.div className="container-footer-foot-socialmedia-linkedin" onClick={openLinkedin} whileHover={{cursor: "pointer", scale: 1.5}}>
                        <AiFillLinkedin />
                    </motion.div>
                    <motion.div className="container-footer-foot-socialmedia-github" onClick={openGitHub} whileHover={{cursor: "pointer", scale: 1.5}}>
                        <AiFillGithub />
                    </motion.div>
                </motion.div>
                <div className="container-footer-cc">
                    <p>Site criado por Josiel Jaschke para estudo</p>
                </div>
            </div>
        </div>
    )
};