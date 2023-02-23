import React, { useEffect, useState } from "react"
import { getFetch } from "./prod"
import ItemList from "./ItemList"

const ItemListContainer = () =>{
    const [Productos, setProductos] = useState([])
    const[loading,setLoading]= useState(true)

    useEffect(()=>{
        getFetch
        .then((resolve)=> setProductos(resolve))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return(
        <div>
            {
                loading
                ?
             <h3 className="cargando">Cargando Productos...</h3>   
             :
             <div>
                <h4 className="titulo-prods">Nuestros Productos</h4>
                <div className="lista">
                    <ItemList Prod = {Productos}/>

                </div>
             </div>
            }
        </div>
    )
}

export default ItemListContainer