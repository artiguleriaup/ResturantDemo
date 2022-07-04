import React from 'react'

function MenuCard({menuData}) {
    //console.log(menuData);
  return (
      
    <>
    <section className='main-card--cointainer'>
        {menuData.map( (curElem) => {
          //destructuring of array elememnts
          const {id,category,name,image,description} =  curElem;
          return(
            <>
            <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className='card-author subtle'>{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">{description} </span>
                    <div className="card-read">Read</div>
                </div>
                <img src={image} alt="" className="card-media" />
                <span className="card-tag subtile">Order Now</span>
            </div> 
            </div>
            </>
          )   
      })}
      </section>
    </> 
  )
}

export default MenuCard
