import React, { useState, useEffect } from "react"
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import { Link as ReachLink } from "@reach/router"
import { Link } from "react-scroll"
import { Menu, Layout, Anchor, Row } from "antd"
import "./LayoutHeader.less"

const { Header } = Layout

const LayoutHeader = ({ tabKey, location }) => {
  const [sticky, setSticky] = useState(false)
  const homePageNav = sticky
    ? "primary-sticky-nav"
    : "primary-sticky-nav transparent-nav"
  const navClass = tabKey === "1" ? homePageNav : "primary-sticky-nav"

  useEffect(() => {
    const nav = document.getElementById("nav")
    const topOfNav = nav.offsetTop

    const handleScroll = () => {
      if (window.scrollY > topOfNav) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sticky])

  return (
    <Header id="nav" className={navClass}>
      <BurgerMenu tabKey={tabKey} />
      <Anchor affix={false} className="navbar_full_scr">
        <Row type="flex" justify="center">
          <Anchor.Link href="#home" title="Home" />
          <Anchor.Link href="#about" title="About" />
          <Anchor.Link href="#teams" title="Teams" />
          <Anchor.Link href="#events" title="Events" />
          <Anchor.Link href="#contact" title="Contact" />
          <Anchor.Link href="#donate" title="Donate" />
        </Row>
      </Anchor>
    </Header>
  )
}

export default LayoutHeader
