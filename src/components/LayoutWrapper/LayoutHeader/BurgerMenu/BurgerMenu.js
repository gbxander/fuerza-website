import { Menu, Icon, Button, Drawer } from "antd"
import React, { useState } from "react"
import { Link } from "@reach/router"
import "./BurgerMenu.less"

const { SubMenu } = Menu

const BurgerMenu = ({ tabKey }) => {
  const [toggleCollapsed, setToggle] = useState(false)
  const handleSetToggle = () => {
    setToggle(!toggleCollapsed)
  }
  console.log("tabKey", tabKey)
  return (
    <React.Fragment>
      <div className="burger-menu-container">
        <Button type="primary" onClick={handleSetToggle}>
          <Icon type={"menu"} />
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={handleSetToggle}
          visible={toggleCollapsed}
        >
          <Menu
            defaultSelectedKeys={[tabKey]}
            mode="inline"
            theme="dark"
            defaultOpenKeys={["sub1"]}
            onClick={handleSetToggle}
          >
            <Menu.Item key="1">
              <Link to="/#home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/#about">About</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/#teams">Teams</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/#events">Events</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/#donate">Donate</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </React.Fragment>
  )
}

export default BurgerMenu
