import React, { Suspense } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "./Main.css"

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Cc from "./Cc";

import Header from "./Header.js"

export default function Main(){
    return(
        <div className="container">
            <Header />
            <div className="content">
                <div className="content-text">
                    <h1>Cartão perfeito para sua aventura como treinador. Conta digital prática e sem custos.</h1>
                    <Link className="content-text-knowmore" to="container-subsection" smooth={true} duration={850} >Saiba mais!</Link>
                </div>
                <Wrapper className="content-card">
                    <Canvas clasName="canvas">
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.7} />
                        <spotLight position={[10, 20, 50]} intensity={0.03} angle={[Math.PI / 1.0]} penumbra={0.5} />
                        <Suspense fallback={null}>
                            <Cc />
                        </Suspense>
                    </Canvas>
                </Wrapper>
            </div>
        </div>
    );
}

const Wrapper = styled.div`
position: relative;

canvas {
height: 500px;
z-index: 1000;
}
`;
