import React from "react";

const Item = ({prod}) =>{
return(
    <div className="card col-md-4 col-12 ">
        
   <div><img src={prod.img} className="imgProd"/></div> 
   <div className="title">
    <h4 className="nombreProducto">{prod.title}</h4>
    </div>
   <div className="containerDescription">
    <p className="precioProd">{prod.price}</p>

    <button type="button" class="btn btn-secondary btn-sm col-6 mx-5">Ver Más</button>
   </div>
    </div>
)

}
export default Item