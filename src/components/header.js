import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="outer-container">
      <div className="inner-header">
        <div className="left">
          <Link to="/">CJH</Link>
        </div>
        <div className="right">
          <nav>
            <Link to="https://drive.google.com/file/d/1dADC-HJVvNQp12M5MQ33DxnkTefJhVgJ/view">
              Resumé
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default Header
