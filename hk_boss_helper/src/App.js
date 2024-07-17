// import libs:
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Main from '../src/pages/main.jsx';
import boss_list from '../src/pages/boss_list.jsx';
import tier_lists from "../src/pages/tier-lists.jsx";
import Bosses from "../src/pages/boss_list.jsx"

const App = () => {
  return (
    <Fragment>
    <Bosses/>
      <Routes>
        <Route path="/tier-lists" element={<tier_lists />}/>
        <Route path="/boss_list" element={<boss_list />}/>
      </Routes>
    </Fragment>
  )
}

export default App;
