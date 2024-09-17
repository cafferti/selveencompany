import React, { useState, useEffect } from "react";
import sampleimg from "./assets/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import saulltechstar from "./assets/Combined-Shape.svg";
import saulltechlove from "./assets/Secondary green.svg";
import saulltechtrash from "./assets/Icon.svg";
import saulltechsearch from "./assets/ic_round-search.svg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import lightlogo from "./assets/logo1.png"
import closeicon from './assets/Close_MD.svg'
import saulltechmenu from './assets/menu.svg'
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  PacmanLoader,
  PulseLoader,
  RingLoader,
  SyncLoader
} from 'react-spinners';


const direct = 'border-b pb-1 pt-0 my-0 hover:text-gray-500 pb-4'

// Define the structure of a gallery item using an interface
interface GalleryItem {
  _id: string;
  createdAt: string;
  description: string;
  imageUrl: string[];
  name: string;
  price: string;
  updatedAt: string;
  __v: number;
}

const Gallery: React.FC = () => {
  // State to hold the gallery items
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [monitorloader, Setmonitorloader] = useState('block')


  // Fetch gallery items from the API
  useEffect(() => {
    const getGallery = async () => {

      try {
        const response = await fetch('https://saul.onrender.com/api/v1/gallery/');
        if (response.ok) {
          const result = await response.json();
          if (Array.isArray(result.data)) {
            setItems(result.data); // Save the fetched data to the state
            Setmonitorloader('hidden')
    

          } else {
            throw new Error('Unexpected data structure');
            toast.success('hello welcome Admin ~saulltech')

          }
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to load gallery');
        Setmonitorloader('hidden')
      }
    };
    getGallery();
  
    toast.success('hello welcome Admin ~saulltech')

  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`https://saul.onrender.com/api/v1/gallery/${id}`, {
        method: 'DELETE',
      });
      console.log(id);
      if (response.ok) {
        // Filter out the deleted item from the state
        console.log('i am in love')
        setItems(items.filter(item => item._id !== id));
        toast.success('Item deleted successfully');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to delete item');
    }
  };

  const [monitor, setmonitor] = useState('hidden')
  const [burger, setburger] = useState('block')

  const toggle = () => {
    if (monitor === 'hidden') {
      setmonitor('block')
      setburger('hidden')

    } else {
      setmonitor('hidden')
      setburger('block')

    }
  }


  return (
    <div>
      <ToastContainer />
      <div className="grid-for-images bg-[#f9f9f9] min-h-[100%] px-[10%] sm:px-[0px] font-inter">

        <div className="fixed w-[100%] sm:left-[30%] lg:left-[25%] bg-[#f9f9f9] pt-6">

          <div className={` ${monitor} overide absolute w-[100%] text-xl text-black h-[500%]  bg-[rgba(249,249,249,0.8)] mt-[-1.5rem] sm:hidden font-mono `}>
            <nav className=' w-[70%]  bg-[#F2F2F2] h-[100%] ml-[20%] flex flex-col '>
              <div className="flex justify-between px-[5%] mb-[3rem] pt-3">
                <img className="w-[20%] " src={lightlogo} alt="" />
                <button onClick={toggle} className="w-[15%] border-gray-400 border h-[70%]">          <img className="w-[100%]" src={closeicon} alt="" />
                </button>

              </div>
              <NavLink className={direct} to='/Dash/gallery'> Dashboard</NavLink> <br />
              <NavLink className={direct} to='/Dash/upload'> Upload</NavLink> <br />
              <a className="active border-b border-1" href="">Live Site</a> <br />
              <NavLink className={direct} to='/Dash/password'>Manage Password</NavLink> <br />
            </nav>
          </div>
          <button onClick={toggle} className={`${burger} sm:hidden absolute right-[20%]`}>
            <img src={saulltechmenu} alt="" />
          </button>



          <h1 className="font-ubuntu text-3xl text-color">Dashboard</h1>
          <div className="flex py-4">
            <img src={saulltechsearch} alt="" />
            <input
              placeholder="search"
              className="px-4 ml-3 bg-[#F2F2F2] py-2 mb-3 w-[100%] max-w-[60%] rounded-xl"
              type="text"
            />
          </div>
          
        </div>
        
        {/* Dynamically render the gallery items */}
        <div className="sm:ml-[10%] grid gap-4 pt-[10rem] grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        <div className={`spinner-containerabs ${monitorloader} bg-white w-[100%] py-[50%] mx-0 pr-[40%] sm:py-[20%] md:py-[10%] md:pr-[20%]`}>
          <HashLoader className={`ml-[40%]`} color={"#123abc"} loading size={200} />
        </div>

          {items.map((item) => (
            <section key={item._id} className="flex flex-col mx-auto bg-[#ffff] rounded-3xl px-2 pt-2 pb-[0px] max-w-[15rem]">
              {/* Star Icon */}
              <img className="w-[10%] ml-[80%] pb-1" src={saulltechstar} alt="Star" />

              {/* Gallery Image */}
              <img className="rounded-lg pb-3 w-[10rem] mx-[auto]" src={item.imageUrl[0]} alt={item.name} />

              <hr />

              {/* Price and Discount */}
              <div className="flex items-center">
                <p className="text-xl font-bold my-3">
                  <span className="text-[#FFE600] px-1">₦</span>{item.price}<span>+</span>
                </p>
                <div className="text-[#828282] border-[2px] text-[10px] p-1 rounded-xl mx-2">
                  <p>50% off</p>
                </div>
              </div>

              {/* Item Name */}
              <h1 className="font-semibold">{item.name}</h1>

              {/* Item Description */}
              <h2 className="text-[#828282] text-[12px] font-[8px] border-r">
                {item.description}
              </h2>

              <hr />

              {/* Action Buttons */}
              <div className="flex justify-between">
                <button onClick={() => handleDelete(item._id)} className="flex text-center align-middle items-center justify-center bg-[#1859A6] rounded-lg w-[70%] text-white p-1 my-3">
                  <p className="mx-2">Delete</p>
                  <img className="w-[10%] mx-1" src={saulltechtrash} alt="Trash" />
                </button>
                <img src={saulltechlove} alt="Love" />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
