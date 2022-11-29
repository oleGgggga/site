import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Select from "react-select";



export const CountPrice=()=>{
const options=[
    {value: 0, label: "simple web site"},
    {value: 1, label: "web site"},
    {value: 2, label: "super web site"}
];
const handleChange= (selectedOption)=>{
    setQuality(selectedOption.value);
}
let price=0;
let quality=null;
let number=0;
const [numbers, setNumber]=useState(number);
const [qualityes, setQuality]=useState(quality);
const [prices, setPrice]=useState(price);
const getPrice=(quality, number)=>{
    let result
    if (qualityes!==null){result=(0===(+qualityes))? numbers*50:(1===(+qualityes))?numbers*100: numbers*150;}else {result=0}
    setPrice(result)    
}
useEffect(()=>{
    getPrice(qualityes, numbers);
}, [qualityes, numbers]);
    return(
        <div className="priceWraper">
            <div className="flexPrice">
            <h1 className="priceHeader">calculate price</h1>
            <form className="mainForm">
                <label className="mainLabel">choose your option:</label>
                <label className="firstLabel">quantity of the pages:<input type="number" value={numbers} onChange={(e)=>setNumber(parseInt(e.target.value)|| 0)} onFocus={(e)=>{e.target.value=""}} /></label>
                <label className="firstLabel">select quality:
                {/* <select value={qualityes} onChange={(e)=>setQuality(e.target.value)}>
                    <option value="0">simple web site</option>
                    <option value="1">web site</option>
                    <option value="2">super web site</option>
                </select> */}
                <Select onChange={handleChange} options={options}/>
                </label>
                
            </form>
            </div>
            <div className="priceWriter">
            <p className="priceWriterDescr">approximate value: ${prices}</p>
            </div>
            <div className="goAbout">
                    <p className="goAboutDescr">If you have any questions folow the link bellow to know more: </p>
                <Link to ="/about">About</Link>
            </div>
        </div>
    )
}