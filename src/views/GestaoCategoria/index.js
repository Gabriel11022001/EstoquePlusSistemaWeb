import React, { useEffect } from "react";
import MenuLateral from "../../components/MenuLateral";
import TopoMenuLateralAreaRestrita from "../../components/TopoMenuLateralAreaRestrita";
import './style.css';

export default function GestaoCategoria() {

    return (
        <main>
            <MenuLateral />
            <TopoMenuLateralAreaRestrita />
        </main>
    );
}