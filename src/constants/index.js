import vodafone from "../assets/image/vodafone.svg";
import kyivstar from "../assets/image/kyivstar.png";
import lifecell from "../assets/image/lifecell.png";
import {BsGithub} from "react-icons/bs";
import {BsTelegram} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";

 export const categories = [
    {id: "М'ясні", img: "https://php.ninjapizza.com.ua/images/meatFilter.png", title: "М'ясні"},
    {id: "Гострі", img: "https://php.ninjapizza.com.ua/images/spicyFilter.png", title: "Гострі"},
    {id: "Вегетаріанські", img: "https://php.ninjapizza.com.ua/images/withoutMeatFilter.png", title: "Вегетаріанські"},
    {id: "Морепродукти", img: "https://php.ninjapizza.com.ua/images/fishFilter.png", title: "Морепродукти"},
]

export const sortList = [
    {name: "популярністю", sortProperty: "-rating"},
    {name: "алфавітом", sortProperty: "title"},
    {name: "ціною  ↑", sortProperty: "price"},
    {name: "ціною  ↓", sortProperty: "-price"},
]

export const typeNames = ["Традиційна", "Сирні борти"]

export const numbers = [
    {img: vodafone, phone: "+38 (066) 151 62 98" },
    {img: kyivstar, phone: "+38 (097) 791 55 98" },
    {img: lifecell, phone: "+38 (093) 351 91 98"},
]

export const socials = [
    {title: "telegram", link: "https://t.me/hrechanyktolia", img: <BsTelegram size={27} style={{color: "black", opacity: 0.5}}/> },
    {title: "git hub", link: "https://github.com/hrechanyktolia", img: <BsGithub size={27} style={{color: "black", opacity: 0.5}}/>},
    {title: "linkedin", link: "https://www.linkedin.com/in/anatolii-hrechanyk-7167b7247/", img: <FaLinkedin size={27} style={{color: "black", opacity: 0.5}}/> },
]

export const required = "Це поле є обов'язковим"

export const options = [
    {value: '', city: " Місто*"},
    {value: 'Київ', city: "Київ"},
    {value: 'Харків', city: "Харків"},
    {value: 'Львів', city: "Львів"},
    {value: 'Одеса', city: "Одеса"},
    {value: 'Зелене', city: "с.Зелене"},
]