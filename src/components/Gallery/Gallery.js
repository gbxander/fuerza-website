import React from "react"
import { Layout } from "antd"
import { IoIosConstruct } from "react-icons/io"
import "./Gallery.less"
import { Element } from "react-scroll"

const Gallery = () => {
  return (
    <Element className="gallery-section">
      <div className="gallery-container">
        <div className="coming-soon">
          <IoIosConstruct className="build-icon" />
          <h1>Our Gallery Is Under Construction</h1>
          <h1>Coming Soon!</h1>
        </div>
      </div>
    </Element>
  )
}

export default Gallery
