import React from "react"
import { Location } from "@reach/router"
import { Layout } from "antd"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import LayoutHeader from "./LayoutHeader/LayoutHeader"
import LayoutFooter from "./LayoutFooter/LayoutFooter"
import "./LayoutWrapper.less"

const LayoutWrapper = ({ children, tabKey }) => {
  const layoutContentClass = tabKey !== "1" ? "layout-content" : ""
  return (
    <React.Fragment>
      <Location>
        {({ location }) => {
          return (
            <Layout className="layout-container">
              <LayoutHeader tabKey={tabKey} location={location} />
              <div className={layoutContentClass}>{children}</div>
              <LayoutFooter />
            </Layout>
          )
        }}
      </Location>
    </React.Fragment>
  )
}

export default LayoutWrapper
