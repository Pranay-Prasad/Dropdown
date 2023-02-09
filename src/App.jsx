import './App.css'
import {useState} from 'react';
import data from './data.json';
function App() {
  //Array for dropdown menu
  const CityList = ["Bangalore","Nagpur","Mumbai"];
  const [CategoryList,setCategoryList] = useState([]);
  const [BrandList,setBrandList] = useState([]);
  const [ModelList,setModelList] = useState([]);

  //Handeling current state
  const [City, setCity] = useState("");
  const [Category, setCategory] = useState("");
  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");

  const setcategoryArray = (CityName) =>{
    const arr = Object.keys(data[CityName].Category);
    arr.unshift("None");
    setCategoryList(arr);
  }
  return (
    <div className="App">
      <div className="wrapper">
        <div className="drop_container">
          <div className="holder">
            <label htmlFor="City">Choose City</label>
            <select id='City' placeholder='Select' onChange={(e) => {setCity(e.target.value);setcategoryArray(e.target.value)}} className='dropdown' >
              {CityList.map((cityname,idx)=>(
                <option key={idx} value={cityname}>{cityname} </option>
              ))}
            </select>
          </div>
          <div className="holder">
            <label htmlFor="Category">Choose Category</label>
            <select id='Category' placeholder='Select' className='dropdown' onChange={(e) => {setCategory(e.target.value);setBrandList(data[City].Category[e.target.value])}}>
              {CategoryList.map((cat,idx)=>(
                <option key={idx} value={cat}>{cat} </option>
                ))}
            </select>
          </div>
          <div className="holder">
            <label htmlFor="Brand">Choose Brand</label>
            <select id='Brand' placeholder='Select' className='dropdown' onChange={(e) => {setBrand(e.target.value);(e.target.value === "None"?"":setModelList(data[Category][e.target.value]))}}>
              {BrandList.map((brand,idx)=>(
                <option key={idx} value={brand}>{brand} </option>
              ))}
            </select>
          </div>
          <div className="holder">
            <label htmlFor="Model">Choose Model</label>
            <select id='Model' placeholder='Select' className='dropdown' onChange={(e)=> setModel((e.target.value === 'None'?'':e.target.value))} >
              {ModelList.map((model,idx)=>(
                <option key={idx} value={model}>{model} </option>
              ))}
            </select>
          </div>
        </div>
        <div className="passage">
          <p>Lorem <span>{Brand} {Model} {Category}</span> repair in <span>{City}</span> ipsum dolor sit amet consectetur, adipisicing elit. Ipsam id reiciendis autem consequuntur, saepe maiores eveniet laboriosam,<span>{Brand} {Model} {Category}</span> repair in <span>{City}</span>  modi adipisci quis reprehenderit, earum deleniti beatae molestias aliquam quas minima repudiandae voluptatum.</p>
        </div>
      </div>
    </div>
  )
}

export default App
