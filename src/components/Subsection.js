import React from "react";
/*import styled, {keyframes} from "styled-components";*/
import "./Subsection.css";

import { motion, useTransform, useViewportScroll } from "framer-motion";

import { FiAlertTriangle, FiGift, FiPercent, FiShield, FiStar, FiClock, FiSmartphone, FiCalendar, FiArchive } from "react-icons/fi";

import pokemons from "./assets/pokemons.png"

import Ratings from "./Ratings";

export default function Subsection(){
    const { scrollYProgress } = useViewportScroll()

    const frameOpacity = useTransform(scrollYProgress, [0.300, 0.420], [0, 1] )
    const framseScale = useTransform(scrollYProgress, [0.300, 0.420], [0.85, 1])

    return(
        <div className="container-subsection" id="container-subsection">
            <motion.div style={{opacity: frameOpacity, scale: framseScale}} className="container-subsection-benefits">
                <div className="container-subsection-benefits-title">
                    <h1>Vantagens</h1>
                </div>
                <div className="container-subsection-benefits-content">
                    <div className="container-subsection-benefits-content-left">
                        <div className="container-subsection-benefits-content-left-visible">
                            <h3>Descontos e promoções</h3>
                            <FiPercent />
                        </div>
                        <div className="container-subsection-benefits-content-left-invisible">
                            <FiAlertTriangle />
                        </div>
                        <div className="container-subsection-benefits-content-left-visible">
                            <h3>Pontos acumulados e sorteios</h3>
                            <FiGift />
                        </div>
                        <div className="container-subsection-benefits-content-left-invisible">
                            <FiAlertTriangle />
                        </div>
                        <div className="container-subsection-benefits-content-left-visible">
                            <h3>Benefícios em PokeShops</h3>
                            <FiStar />
                        </div>
                        <div className="container-subsection-benefits-content-left-invisible">
                            <FiAlertTriangle />
                        </div>
                        <div className="container-subsection-benefits-content-left-visible">
                            <h3>Seguro Pokemon gratuito</h3>
                            <FiShield />
                        </div>
                    </div>
                    <div className="container-subsection-benefits-content-right">
                        <div className="container-subsection-benefits-content-right-invisible">
                            <FiAlertTriangle />
                        </div>
                        <div className="container-subsection-benefits-content-right-visible">
                            <FiCalendar />
                            <h3>Sem anuidade e taxa de abertura</h3>
                        </div>
                        <div className="container-subsection-benefits-content-right-invisible">
                            <FiAlertTriangle />
                        </div>
                        <div className="container-subsection-benefits-content-right-visible">
                            <FiSmartphone />
                            <h3>Completamente digital</h3>
                        </div>
                        <div className="container-subsection-benefits-content-right-invisible">
                            <FiAlertTriangle />
                        </div>
                        <div className="container-subsection-benefits-content-right-visible">
                            <FiClock />
                            <h3>Suporte 24 horas</h3>
                        </div>
                        <div className="container-subsection-benefits-content-right-invisible">
                            <FiAlertTriangle />
                        </div>
                        <div className="container-subsection-benefits-content-right-visible">
                            <FiArchive />
                            <h3>Zero burocracia</h3>
                        </div>
                    </div>
                </div>
                <div className="container-subsection-benefits-content-space">
                </div>
                <div className="container-subsection-benefits-pokemons">
                <img src={pokemons} alt="pokemons"/>
                </div>
            </motion.div>
            <div className="container-subsection-rating">
                <div className="container-subsection-rating-content">
                    <Ratings/>
                </div>
            </div>
        </div>
    );
};