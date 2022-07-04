import React , { useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import NavBar from './NavBar';
//her i use new set for stoping the repeation of data and then change it to an array with spread operator
const uniqueList = [ ...new Set(Menu.map((curElem) => { 
      return curElem.category;
     
})),
"All",];
console.log(uniqueList);
//console.log(uniqueList);

const Resturant = () => {
  const [menuData , setMenuData] = useState(Menu);
  const [menuList , setMenuList] = useState(uniqueList);
  
  const filterItem = (category) => {
    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    })
    setMenuData(updatedList);
  };
  return (
    <>
      <NavBar filterItem = { filterItem } menuList = { menuList }/>
       <MenuCard menuData = { menuData }/> 
    </>
  )
}

export default Resturant
