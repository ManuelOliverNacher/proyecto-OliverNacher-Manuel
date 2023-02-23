import und1 from '../assets/und1.png'
import und2 from '../assets/und2.png'
import und3 from '../assets/und3.png'

const productos = [
{
    id:0,
    img:und1,
    title: 'Trap$tar R',
    price:'$29.000'
},
{
    id:1,
    img:und2,
    title: 'Trap$tar F',
    price:'$29.000'
},
{
    id:2,
    img:und3,
    title: 'Trap$tar P',
    price:'$29.000',
}

]

export const getFetch = new Promise((resolve,rejected) =>{
let url= 'undefined.com'
if (url=='undefined.com'){
    setTimeout(()=>{
        resolve(productos);
    },3000);
}else{
    rejected('Error')
}
})