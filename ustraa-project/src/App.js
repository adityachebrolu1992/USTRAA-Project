import './App.css';
import ComponentList from './ComponentList';
import React,{useState} from "react"
import Sections from './Sections';


// Product image
// ● Product name
// ● Product weight (gm/ml)
// ● Product MRP
// ● Product special price
// ● Product rating

const data=[
  {name:"USTRAA HAIR Product",
  img:"https://shop.trell.co/media/catalog/product/U/S/USTRAA8904223818706-1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Growth",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR Product",
img:"https://shop.trell.co/media/catalog/product/U/S/USTRAA8904223818706-1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Growth",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR Product",
img:"https://shop.trell.co/media/catalog/product/U/S/USTRAA8904223818706-1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Growth",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR Product",
img:"https://shop.trell.co/media/catalog/product/U/S/USTRAA8904223818706-1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Growth",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR Product",
img:"https://shop.trell.co/media/catalog/product/U/S/USTRAA8904223818706-1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Growth",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA COLOGEN Product",
img:"https://shop.trell.co/media/catalog/product/b/a/base_camp_copy.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Cologen",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA COLOGEN Product",
img:"https://shop.trell.co/media/catalog/product/b/a/base_camp_copy.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Cologen",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA COLOGEN Product",
img:"https://shop.trell.co/media/catalog/product/b/a/base_camp_copy.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Cologen",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA COLOGEN Product",
img:"https://shop.trell.co/media/catalog/product/b/a/base_camp_copy.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Cologen",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA COLOGEN Product",
img:"https://shop.trell.co/media/catalog/product/b/a/base_camp_copy.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Cologen",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR OIL Product",
img:"https://shop.trell.co/media/catalog/product/0/2/021_20072021_1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Oil",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR OIL Product",
img:"https://shop.trell.co/media/catalog/product/0/2/021_20072021_1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Oil",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR OIL Product",
img:"https://shop.trell.co/media/catalog/product/0/2/021_20072021_1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Oil",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR OIL Product",
img:"https://shop.trell.co/media/catalog/product/0/2/021_20072021_1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Oil",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA HAIR OIL Product",
img:"https://shop.trell.co/media/catalog/product/0/2/021_20072021_1_1.jpg?auto=webp&format=pjpg&width=700&quality=85",
weight:"20",
volType:"gm",
type:"Hair Oil",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA Face Wash Product",
img:"https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg",
weight:"20",
volType:"gm",
type:"Face Wash",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA Face Wash Product",
img:"https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg",
weight:"20",
volType:"gm",
type:"Face Wash",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA Face Wash Product",
img:"https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg",
weight:"20",
volType:"gm",
type:"Face Wash",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA Face Wash Product",
img:"https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg",
weight:"20",
volType:"gm",
type:"Face Wash",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA Face Wash Product",
img:"https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg",
weight:"20",
volType:"gm",
type:"Face Wash",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA Face Wash Product",
img:"https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg",
weight:"20",
volType:"gm",
type:"Face Wash",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA Face Wash Product",
img:"https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg",
weight:"20",
volType:"gm",
type:"Face Wash",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},
{name:"USTRAA Face Wash Product",
img:"https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg",
weight:"20",
volType:"gm",
type:"Face Wash",
mrp:"30 Rs",
specialPrice:"40 Rs",
rating:"4.5",
},



]

function App() {

  const [count,setCount]=useState([]);
  const [sec, setSec]=useState("Hair Oil")

  return (
    <div className="App">
      <header><h1><p>USTRAA-Project</p></h1></header>
      <Sections setSec={setSec} />
      <ComponentList sec={sec} data={data} />
    </div>
  );
}

export default App;