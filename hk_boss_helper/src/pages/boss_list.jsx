import React from "react";
import "./general.css";
import "./boss_list.css";
import logo from "../assets/LOGO2.png";
import cinzel from "../assets/fonts/Cinzel-VariableFont_wght.ttf";

const Bosses = () => {
    return (
        <div class="main">
            <div class="panel">
                <a href="/main">
                    <img src={logo} height={150} />
                </a>
                <a href="/boss_list" class="panelURL">Список Боссов</a>
                <a href="/tier_lists" class="panelURL">Тир-листы боссов</a>
                <a href="" class="panelURL">Категории</a>
                <a href="" class="panelURL">Карта боссов</a>
            </div>
            <div class="textbox">
                <h1>
                    Список всех боссов HK:
                </h1>
                <div class="bslist">
                    <div class="bosslink">
                        <a href=""></a>
                    </div>
                    <div class="bosslink"></div>
                </div>
            </div>

        </div>
    )
};
export default Bosses;