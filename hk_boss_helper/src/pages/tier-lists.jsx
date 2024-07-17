import React from "react";
import "./general.css";
import "./tier-lists.css";
import logo from "../assets/LOGO2.png";
import tl1 from "../assets/Default.png";
import tl2 from "../assets/Radiant.png";


const Tier_List = () => {
    return (
        <div class="whole">
            <div class="panel">
                <a href="/main">
                    <img src={logo} height={150} />
                </a>
                <a href="/boss_list" class="panelURL">Список Боссов</a>
                <a href="/tier_lists" class="panelURL">Тир-листы боссов</a>
                <a href="/nothing_here" class="panelURL">Категории</a>
                <a href="/nothing_here" class="panelURL">Карта боссов</a>
            </div>
            <div class="main">
                <div class="textbox tierList">
                    <img class="TL" src={tl1} alt="" />
                    <p>Тир-Лист боссов из обычной игры</p>
                    <img class="TL" src={tl1} alt="" />
                    <p>Тир-Лист боссов для прохождения на лучезарную сложность<br>
                        </br>(ака без урона)</p>
                </div>
            </div>
        </div>
    )
};
export default Tier_List;