import React from "react";
import "./general.css";
import "./boss_list.css";
import logo from "../assets/LOGO2.png";
import cinzel from "../assets/fonts/Cinzel-VariableFont_wght.ttf";

const Bosses = () => {
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
                <h1>
                    Список всех боссов HK:
                </h1>
                <div class="bslist">
                    <div class="bosslink">
                        <a class="toBoss" href="/mantis_lords">
                            <img class="bossICO" src="https://cdn.wikimg.net/en/hkwiki/images/2/2d/B_Mantis_Lords-2.png" alt="" />
                            <p>Лорды богомолов</p>
                        </a>
                    </div>
                    <div class="bosslink">
                        <a class="toBoss" href="/soul_tyrant">
                        <img class="bossICO" src="https://i.pinimg.com/originals/45/5b/ae/455bae87429a8197a1710b481d18dc51.png" alt="" />
                        <p>Душегуб</p>
                        </a>
                    </div>
                </div>
            </div></div>
            

        </div>
    )
};
export default Bosses;