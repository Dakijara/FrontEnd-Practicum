// import libs:
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Main from '../src/pages/main.jsx';
import Bosses from "../src/pages/boss_list.jsx"
import Tier_List from "../src/pages/tier-lists.jsx";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/tier_lists" element={<Tier_List />}/>
        <Route path="/boss_list" element={<Bosses />}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
    </Fragment>
  )
}

export default App;
