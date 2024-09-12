import React from "react";
import sampleimg from "./assets/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import saulltechstar from "./assets/Combined-Shape.svg";
import saulltechlove from "./assets/Secondary green.svg";
import saulltechtrash from "./assets/Icon.svg";
import saulltechsearch from "./assets/ic_round-search.svg"

function gallery() {
  return (
    <div>
      <div className=" grid-for-images bg-[#f9f9f9] min h-[100%] px-[10%] sm:px-[0px] font-inter">

        <div className="fixed w-[100%] sm:ml-[8%] bg-[#f9f9f9] pt-6">
          <h1 className=" font-ubuntu text-3xl text-color">Dashboard</h1>
          <div className=" flex py-4">
            <img src={saulltechsearch} alt="" />
            <input placeholder="search" className=" px-4  ml-3 bg-[#F2F2F2] py-2 mb-3 w-[100%] max-w-[60%] rounded-xl " type="text" />

          </div>

        </div>


        <div className="sm:mx-[10%] grid gap-4 pt-[10rem]  grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">



          <section className="flex flex-col  bg-[#ffff] rounded-3xl  px-2 pt-2  pb-[0px] max-w-[12rem]">
            <img className="w-[10%] ml-[80%] pb-1" src={saulltechstar} alt="" />
            <img className=" rounded-lg pb-3 w-[10rem] mx-[auto] " src={sampleimg} alt="" />
            <hr />
            <div className="flex items-center">
              <p className="text-xl font-bold my-3">
                <span className="text-[#FFE600] px-1">₦</span>600<span>+</span>{" "}
              </p>
              <div className="text-[#828282] border-[2px] text-[10px] p-1 rounded-xl mx-2">
                <p className="">50% off</p>
              </div>
            </div>
            <h1 className="font-semibold ">England House jardin</h1>
            <h2 className="text-[#828282] my-1 font- border-r">
              Description this omnis repudiandae! Accusantium excepturi odit
              unde ut.
            </h2>
            <hr />
            <div className="flex justify-between">
              <button className="flex text-center align-middle items-center justify-center bg-[#1859A6] rounded-lg w-[70%] text-white  p-1 my-3">
                <p className="mx-2">Delete</p>
                <img className="w-[10%] mx-1" src={saulltechtrash} alt="" />
              </button>
              <img src={saulltechlove} alt="" />
            </div>
          </section>

          
          <section className="flex flex-col  bg-[#ffff] rounded-3xl  px-2 pt-2  pb-[0px] max-w-[12rem]">
            <img className="w-[10%] ml-[80%] pb-1" src={saulltechstar} alt="" />
            <img className=" rounded-lg pb-3 w-[10rem] mx-[auto] " src={sampleimg} alt="" />
            <hr />
            <div className="flex items-center">
              <p className="text-xl font-bold my-3">
                <span className="text-[#FFE600] px-1">₦</span>600<span>+</span>{" "}
              </p>
              <div className="text-[#828282] border-[2px] text-[10px] p-1 rounded-xl mx-2">
                <p className="">50% off</p>
              </div>
            </div>
            <h1 className="font-semibold ">England House jardin</h1>
            <h2 className="text-[#828282] my-1 font- border-r">
              Description this omnis repudiandae! Accusantium excepturi odit
              unde ut.
            </h2>
            <hr />
            <div className="flex justify-between">
              <button className="flex text-center align-middle items-center justify-center bg-[#1859A6] rounded-lg w-[70%] text-white  p-1 my-3">
                <p className="mx-2">Delete</p>
                <img className="w-[10%] mx-1" src={saulltechtrash} alt="" />
              </button>
              <img src={saulltechlove} alt="" />
            </div>
          </section>



          <section className="flex flex-col  bg-[#ffff] rounded-3xl  px-2 pt-2  pb-[0px] max-w-[12rem]">
            <img className="w-[10%] ml-[80%] pb-1" src={saulltechstar} alt="" />
            <img className=" rounded-lg pb-3 w-[10rem] mx-[auto] " src={sampleimg} alt="" />
            <hr />
            <div className="flex items-center">
              <p className="text-xl font-bold my-3">
                <span className="text-[#FFE600] px-1">₦</span>600<span>+</span>{" "}
              </p>
              <div className="text-[#828282] border-[2px] text-[10px] p-1 rounded-xl mx-2">
                <p className="">50% off</p>
              </div>
            </div>
            <h1 className="font-semibold ">England House jardin</h1>
            <h2 className="text-[#828282] my-1 font- border-r">
              Description this omnis repudiandae! Accusantium excepturi odit
              unde ut.
            </h2>
            <hr />
            <div className="flex justify-between">
              <button className="flex text-center align-middle items-center justify-center bg-[#1859A6] rounded-lg w-[70%] text-white  p-1 my-3">
                <p className="mx-2">Delete</p>
                <img className="w-[10%] mx-1" src={saulltechtrash} alt="" />
              </button>
              <img src={saulltechlove} alt="" />
            </div>
          </section>



          <section className="flex flex-col  bg-[#ffff] rounded-3xl  px-2 pt-2  pb-[0px] max-w-[12rem]">
            <img className="w-[10%] ml-[80%] pb-1" src={saulltechstar} alt="" />
            <img className=" rounded-lg pb-3 w-[10rem] mx-[auto] " src={sampleimg} alt="" />
            <hr />
            <div className="flex items-center">
              <p className="text-xl font-bold my-3">
                <span className="text-[#FFE600] px-1">₦</span>600<span>+</span>{" "}
              </p>
              <div className="text-[#828282] border-[2px] text-[10px] p-1 rounded-xl mx-2">
                <p className="">50% off</p>
              </div>
            </div>
            <h1 className="font-semibold ">England House jardin</h1>
            <h2 className="text-[#828282] my-1 font- border-r">
              Description this omnis repudiandae! Accusantium excepturi odit
              unde ut.
            </h2>
            <hr />
            <div className="flex justify-between">
              <button className="flex text-center align-middle items-center justify-center bg-[#1859A6] rounded-lg w-[70%] text-white  p-1 my-3">
                <p className="mx-2">Delete</p>
                <img className="w-[10%] mx-1" src={saulltechtrash} alt="" />
              </button>
              <img src={saulltechlove} alt="" />
            </div>
          </section>



          <section className="flex flex-col  bg-[#ffff] rounded-3xl  px-2 pt-2  pb-[0px] max-w-[12rem]">
            <img className="w-[10%] ml-[80%] pb-1" src={saulltechstar} alt="" />
            <img className=" rounded-lg pb-3 w-[10rem] mx-[auto] " src={sampleimg} alt="" />
            <hr />
            <div className="flex items-center">
              <p className="text-xl font-bold my-3">
                <span className="text-[#FFE600] px-1">₦</span>600<span>+</span>{" "}
              </p>
              <div className="text-[#828282] border-[2px] text-[10px] p-1 rounded-xl mx-2">
                <p className="">50% off</p>
              </div>
            </div>
            <h1 className="font-semibold ">England House jardin</h1>
            <h2 className="text-[#828282] my-1 font- border-r">
              Description this omnis repudiandae! Accusantium excepturi odit
              unde ut.
            </h2>
            <hr />
            <div className="flex justify-between">
              <button className="flex text-center align-middle items-center justify-center bg-[#1859A6] rounded-lg w-[70%] text-white  p-1 my-3">
                <p className="mx-2">Delete</p>
                <img className="w-[10%] mx-1" src={saulltechtrash} alt="" />
              </button>
              <img src={saulltechlove} alt="" />
            </div>
          </section>


          
        </div>
      </div>
    </div>
  );
}

export default gallery;
