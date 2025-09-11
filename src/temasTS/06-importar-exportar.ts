import {type Producto, calcularISV2 } from "./05-desestructura-funciones";

const carrito:Producto[]=[
    {nombre: 'Iphone 16', precio:1500},
    {nombre: 'Ipod Air', precio:1200},
];

const[total,isv]= calcularISV2(carrito);
console.log('Total:', total);
console.log('ISV',isv);

