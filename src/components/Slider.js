import React, { useState } from "react";
import "./Slider.css"

import images from "./ImagesSlide";

import { motion } from "framer-motion";

import { CgPokemon } from "react-icons/cg";

export default function Slider(){

    const [sendEmail, setSendEmail] = useState(0);

    function sendEmailOpacity(){
        console.log(sendEmail)
        setSendEmail(sendEmail+1)
        setTimeout(function(){
            setSendEmail(sendEmail-1)
        }, 7000);
    };

    return(
        <div className="container-base">
            <div className="container-title">
                <h1>Nossos Cartões</h1>
            </div>
            <div className="container-slider">
                <motion.div className="container-slider-slides" whileTap={{cursor: "grabbing"}}>
                    <motion.div drag="x" dragConstraints={{right:0, left: -612 }} className="container-slider-slides-inner">
                        {images.map (image => {
                            return(
                                <motion.div className="slide-item" key={image}>
                                    <img src={image} alt="ccslide"/>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
            <div className="container-slider-send">
                <h3 className="container-slider-send-text">Faça parte agora, inscreva-se!</h3>
                <div className="container-slider-send-submit">
                    <input className="container-slider-send-input" type="email" placeholder="e-mail" />
                    <motion.button onClick={sendEmailOpacity} whileTap={{scale: 0.95}} className="container-slider-send-button">Enviar <CgPokemon /> </motion.button>
                </div>
                <motion.p animate={{ opacity: sendEmail }} className="container-slider-send-confirm">Um email foi enviado</motion.p>
            </div>
        </div>
    )
}