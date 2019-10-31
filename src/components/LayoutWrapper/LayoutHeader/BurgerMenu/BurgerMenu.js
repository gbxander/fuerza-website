import { Menu, Icon, Button, Drawer } from "antd"
import React, { useState } from "react"
import { Link } from "@reach/router"
import "./BurgerMenu.less"

const { SubMenu } = Menu

const BurgerMenu = () => {
  const [toggleCollapsed, setToggle] = useState(false)
  const handleSetToggle = () => {
    setToggle(!toggleCollapsed)
  }
  return (
    <React.Fragment>
      <div className="burger-menu-container">
        <Button type="primary" onClick={handleSetToggle}>
          <Icon type={"menu"} />
        </Button>
        <Drawer
          title={
            <span>
              Fuerza Academy <Icon type="dribbble" />
            </span>
          }
          placement="right"
          closable={false}
          onClose={handleSetToggle}
          visible={toggleCollapsed}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="dark"
            onClick={handleSetToggle}
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
        </Drawer>
      </div>
    </React.Fragment>
  )
}

export default BurgerMenu
