import React from "react";
import { Link } from "react-router-dom";
import { UserCircle, ShoppingCart, Question } from "phosphor-react"
import "./Header.css";

export const Header = () => {
    return (
      <header>
        <a href="home.html" className="logo">
            <span>DragonShare</span>
        </a>
        <ul className="nav-left">
          <li>
              <Link to="/">Home</Link>
              <Link to="/colleges">Colleges</Link>
              <Link to="/subjects">Subjects</Link>
              <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="nav-right">
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
          <Link to="/auth">
            <UserCircle size={32} />
          </Link>
          <Link to="/userGuide">
            <Question size={32} />
          </Link>
        </div>
      </header>
    );
  };

