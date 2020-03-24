import React from "react"
import { Location } from "@reach/router"
import { Layout } from "antd"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import LayoutHeader from "./LayoutHeader/LayoutHeader"
import LayoutFooter from "./LayoutFooter/LayoutFooter"
import "./LayoutWrapper.less"

const LayoutWrapper = ({ children, tabKey, header = true }) => {
  const layoutContentClass = tabKey !== "1" ? "layout-content" : ""
  return (
    <React.Fragment>
      <Location>
        {({ location }) => {
          return (
            <Layout className="layout-container">
              {header ? (
                <LayoutHeader tabKey={tabKey} location={location} />
              ) : null}
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
