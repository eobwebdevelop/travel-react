import React from "react";

const travels = [
    {
        id:1,
        city:"Barcelona",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/92_Caixa_de_Barcelona%2C_pl._Sant_Jaume.JPG/700px-92_Caixa_de_Barcelona%2C_pl._Sant_Jaume.JPG",
        lema:"Visit Sagrada Familia"
    },
    {
        id:2,
        city:"Madrid",
        image:"https://www.worldlifetimejourneys.com/wp-content/uploads/2019/07/City-Breaks-in-Madrid-Spain-700px.jpg",
        lema:"Visit Prado Museum"
    },
    {
        id:3,
        city:"Cordoba",
        image:"https://s04.s3c.es/imag/_v0/800x534/c/f/b/700x420_cordoba-rio-andalucia-dreamstime.jpg",
        lema:"Visit La Mezquita"
    },
    {
        id:4,
        city:"Segovia",
        image:"https://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/castilla-leon/acueducto-segovia-s114598990.jpg_369272544.jpg",
        lema:"Visit El Alcazar"
    },
    {
        id:5,
        city:"Granada",
        image:"https://cdn.atrapalo.com/common/photo/dh/159/0/si_560_460.jpg",
        lema:"Visit La Alhambra"
    },
]


const Travels = () => (
    <div>
      {travels.map(travel => (
        <ul key={travel.id}>
            <li>
                <h1>{travel.city}</h1>
            </li>
            <li>
                <img alt="" src={travel.image}/>
            </li>
            <li>
                {travel.lema}
            </li>
        </ul>
    
      ))}


    </div>

);

export default Travels;