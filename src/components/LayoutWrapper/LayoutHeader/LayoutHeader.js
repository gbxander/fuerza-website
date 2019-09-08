import React, { useState, useEffect } from "react"
import { Menu, Layout } from "antd"
import { Link } from "@reach/router"
import "./LayoutHeader.less"

const { Header } = Layout
const { SubMenu } = Menu

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

    return () => window.addEventListener("scroll", handleScroll)
  }, [sticky])

  return (
    <Header id="nav" className={navClass}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={tabKey}
        style={{
          lineHeight: "55px",
          fontSize: "18px",
          background: "rgba(0, 0, 0, 0)",
        }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>

        <SubMenu key="sub1" title="Program">
          <Menu.Item key="3">
            <Link to="teams">Teams</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="tuition">Program Tuition</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="5">
          <Link to="contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="donate">Donate</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default LayoutHeader
