import React from "react";
import Carouseeel from "./Carouseeel";

import Dashboard from './Dashboard'
import Leaderboard from "./Leaderboard";
import User from "./User";

function Main() {
  return (
    <div>
      <div class="grid-container">
        <div class="item2"><Leaderboard /></div>
        <div class="item3"><User /></div>
        <div class="item5" style={{width:'850px'}}><Dashboard/></div>
      </div>
    </div>
  );
}

export default Main;
