import React, { useState } from 'react'
import dish1 from './DishPics/dish1.jpg'
import dish2 from './DishPics/dish2.jpg'
import dish3 from './DishPics/dish3.jpg'
import dish4 from './DishPics/dish4.jpg'
import dish5 from './DishPics/dish5.jpg'
import dish6 from './DishPics/dish6.jpg'
import dish7 from './DishPics/dish7.jpg'
import dish8 from './DishPics/dish8.jpg'
import dish9 from './DishPics/dish9.jpg'
import dish10 from './DishPics/dish10.jpg'
import dish11 from './DishPics/dish11.jpg'
let x = Math.floor(Math.random() * 10);
let dishes = [dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8, dish9, dish10, dish11];
export default function Body() {
    const [Img, setImg] = useState(dishes[x]);
    const [ImgSRC, setImgSRC] = useState(x);
    window.onload = () => {
        setInterval(() => {
            // console.log(x);
            var y = Math.floor(Math.random() * 10);
            x !== y ? x = y : x = y + 1;
            setImg(dishes[x]);
            setImgSRC(x);
        }, 900)
    }
    return (
        <img id="img1" src={Img} alt={ImgSRC} />
    )
}
