import React from 'react'
import "./styles/SideBarRows.css"

function SideBarRows({selected ,Icon,title}) {
  return (
    <div className={`sideBarRow ${selected && "selected"}`}>
        <Icon className="sideIcon"/>
        <h4 className="sideBarTitle">{title}</h4>
    </div>
  )
}

export default SideBarRows