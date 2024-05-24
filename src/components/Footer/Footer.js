import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export function Footer() {
   return (
      <div className="Footer_content">
         <Link to={"https://valentinballesteros2023.vercel.app/"} target="_blank">
            © Valentín Ballesteros (TheNasky) | Fullstack Developer
         </Link>
      </div>
   );
}
