import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import "./index.css"

const Layout = (props) => {
  const { children } = props
  return <div className="layout">{children}</div>
}

export default Layout
