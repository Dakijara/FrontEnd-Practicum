import React from "react";
import classes from "./main.css"
import logo from "../assets/LOGO2.png"
import cinzel from "../assets/fonts/Cinzel-VariableFont_wght.ttf"
const Main = () => {
    return (
        <div>
            <div class="panel">
                <a href={Main}>
                    <img src={logo} height={150} />
                </a>
                <a href="" class="panelURL">Список Боссов</a>
                <a href="" class="panelURL">Тир-листы боссов</a>
                <a href="" class="panelURL">Категории</a>
                <a href="" class="panelURL">Карта боссов</a>
            </div>
            <div class="bot">

                <div class="textbox">
                    Привет! Рад приветствовать на помощнике по тренировке боссов в Hollow Knight, этот сайт предназначен как для новичков, у которых возникли трудности с прохождением того или иного босса на любом этапе игры, так и для игроков, стремящихся пройти более поздний контент, как например, пятый пантеон. <br></br>
                    Здесь собранна информация о каждом боссе, об удобных сборках и оптимальных стратегиях борьбы с ними
                </div>
            </div>
        </div>
    )
};
export default Main;