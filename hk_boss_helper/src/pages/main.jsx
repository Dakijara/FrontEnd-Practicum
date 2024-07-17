import React from "react";
import classes from "./main.css"
import logo from "../assets/LOGO2.png"
import cinzel from "../assets/fonts/Cinzel-VariableFont_wght.ttf"
const Main = () => {
    return (
        <div class="whole">
            <div class="panel">
                <a href="/main">
                    <img src={logo} height={150} />
                </a>
                <a href="/boss_list" class="panelURL">Список Боссов</a>
                <a href="/tier_lists" class="panelURL">Тир-листы боссов</a>
                <a href="" class="panelURL">Категории</a>
                <a href="" class="panelURL">Карта боссов</a>
            </div>

            <div class="main">
                <div class="textbox">   
                    <h1>О сайте</h1>
                    <p>Привет! Рад приветствовать на помощнике по тренировке боссов в Hollow Knight, этот сайт предназначен как для новичков, у которых возникли трудности с прохождением того или иного босса на любом этапе игры, так и для игроков, стремящихся пройти более поздний контент, как например, пятый пантеон. <br></br>
                    Здесь собранна информация о каждом(почти) боссе, об удобных сборках и оптимальных стратегиях для борьбы с ними</p>  
                </div>
                <div class="textbox">   
                    <h1>Что вас интерисует?</h1>
                    <ul>
                        <a class="lnk" href="/tier_lists">Тир-Листы боссов</a>
                        <a class="lnk" href="/boss_list">Полный список всех боссов</a>
                        <a class="lnk" href="">Карта расположения всех боссов</a>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Main;