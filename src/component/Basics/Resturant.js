
import React from 'react'
import './Style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import { useState } from "react";
import { Navbar } from './Navbar';


const uniqueList = [...new Set(Menu.map((item) => {
  return item.category
})), "All"]


const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuItem] = useState(uniqueList)

  const filterItem = (category) => {

    if(category==='All')
      {
        setMenuData(Menu)
        return;
      }

    const updatedList = Menu.filter((result) => {
  
      return result.category === category
    })
    setMenuData(updatedList)

  }


  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant