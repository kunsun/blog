import React from "react"
import Logo from "./image/self.png"
import "./index.css"

const Header = () => {
  return (
    <header className="page-header">
      <img src={Logo} alt="kunsun" />
      <div className="title">Kunsun</div>
      <div className="sub-title">
        前端工程师，webpack学习者，写作爱好者，时间管理尝试者。
      </div>
      <div className="social">
        <a href="https://github.com/kunsun" className="icon github"></a>
        <a href="/resume" className="icon resume"></a>
      </div>
    </header>
  )
}

export default Header
