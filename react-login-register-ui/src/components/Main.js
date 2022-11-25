import React from "react";
import Carouseeel from "./Carouseeel";

import Dashboard from './Dashboard'
import Leaderboard from "./Leaderboard";

function Main() {
  return (
    <div>
      <div class="grid-container">
        <div class="item2"><Leaderboard /></div>
        <div class="item3"><Dashboard/></div>
        {/*<div class="item5"><Dashboard/></div> 
         <div class="item3"><Carouseeel/></div> */}
      </div>
    </div>
  );
}

export default Main;
