import React from "react"
import { Location } from "@reach/router"
import { Layout } from "antd"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import LayoutHeader from "./LayoutHeader/LayoutHeader"
import LayoutFooter from "./LayoutFooter/LayoutFooter"
import "./LayoutWrapper.less"

const LayoutWrapper = ({ children, tabKey }) => {
  return (
    <React.Fragment>
      <Location>
        {({ location }) => {
          console.log("location", location)
          return (
            <Layout className="layout-container">
              <LayoutHeader tabKey={tabKey} location={location} />
              <React.Fragment>{children}</React.Fragment>
              <LayoutFooter />
            </Layout>
          )
        }}
      </Location>
    </React.Fragment>
  )
}

export default LayoutWrapper
