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
            <Link to="https://drive.google.com/file/d/18ZLIgtTnTXA2P2dEYxLamGF_WffrghF-/view">
              Resumé
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default Header
