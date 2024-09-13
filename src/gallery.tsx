import React, { useState, useEffect } from "react";
import sampleimg from "./assets/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import saulltechstar from "./assets/Combined-Shape.svg";
import saulltechlove from "./assets/Secondary green.svg";
import saulltechtrash from "./assets/Icon.svg";
import saulltechsearch from "./assets/ic_round-search.svg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // Fetch gallery items from the API
  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await fetch('https://saul.onrender.com/api/v1/gallery/');
        if (response.ok) {
          const result = await response.json();
          if (Array.isArray(result.data)) {
            setItems(result.data); // Save the fetched data to the state
            
          } else {
            throw new Error('Unexpected data structure');
          }
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to load gallery');
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


  return (
    <div>
      <ToastContainer />
      <div className="grid-for-images bg-[#f9f9f9] min-h-[100%] px-[10%] sm:px-[0px] font-inter">

        <div className="fixed w-[100%] sm:ml-[8%] bg-[#f9f9f9] pt-6">
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
                <button   onClick={() => handleDelete(item._id)} className="flex text-center align-middle items-center justify-center bg-[#1859A6] rounded-lg w-[70%] text-white p-1 my-3">
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
