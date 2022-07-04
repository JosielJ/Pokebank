import React from "react";
import "./Ratings.css";

import { motion, useTransform, useViewportScroll } from "framer-motion";

import lucasPhoto from "./assets/LucasRFC.png";
import laisPhoto from "./assets/Lais.png";
import josielPhoto from "./assets/JosielJaschke.png";

import { BsStarFill, BsStar } from "react-icons/bs"

export default function Ratings(){
    const { scrollYProgress } = useViewportScroll()

    const frameOpacity = useTransform(scrollYProgress, [0.300, 0.420], [0, 1] )
    const framePosition = useTransform(scrollYProgress, [0.300, 0.420], [-25, 0] )
    const framePositionReverse = useTransform(scrollYProgress, [0.300, 0.420], [25, 0] )

    return(
        <motion.div style={{opacity: frameOpacity}} className="container-rating">
            <div className=".container-rating-cards">
                <motion.div style={{x: framePosition}} className="container-rating-cards-l">
                    <img src={lucasPhoto} alt="userphoto" className="container-rating-cards-card-user"/>
                    <h3>Lucas RFC</h3>
                    <p>
                        "Melhor banco da atualidade, me ajuda muito na minha carreira de treinador Pokémon!"
                    </p>
                    <div className="container-rating-cards-card-stars">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>
                </motion.div>
                <motion.div style={{x: framePositionReverse}} className="container-rating-cards-r">
                    <img src={laisPhoto} alt="userphoto" className="container-rating-cards-card-user"/>
                    <h3>Lais Alves</h3>
                    <p>
                        "Melhor banco da atualidade, me ajuda muito na minha carreira de treinador Pokémon!"
                    </p>
                    <div className="container-rating-cards-card-stars">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStar />
                    </div>
                </motion.div>
                <motion.div style={{x: framePosition}} className="container-rating-cards-l">
                    <img src={josielPhoto} alt="userphoto" className="container-rating-cards-card-user"/>
                    <h3>Josiel Jaschke</h3>
                    <p>
                        "Melhor banco da atualidade, me ajuda muito na minha carreira de treinador Pokémon!"
                    </p>
                    <div className="container-rating-cards-card-stars">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};