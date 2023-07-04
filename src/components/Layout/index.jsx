import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import "./index.css"

deckDeckGoHighlightElement()
const Layout = (props) => {
  const { children } = props
  return <div className="layout">{children}</div>
}

export default Layout
