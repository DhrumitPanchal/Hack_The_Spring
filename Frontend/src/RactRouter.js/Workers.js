import React, { useEffect, useState } from "react";
import { FaSearch, FaAngleRight } from "react-icons/fa";
import Footer from "./Footer";
import axios from "axios";

function Workers() {
  const [workers, setWorkers] = useState([]);
  const [WorkersCategories, setWorkersCategories] = useState([]);

  const catagory = ["Painters", "Mechanics", "Plumbers", "Electricians"];
  const worker = [
    {
      name: "dhrumit",
      Email: "xyz123@gmail.com",
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU",
    },
    {
      name: "vraj",
      Email: "kkkkkkk123@gmail.com",
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU",
    },
    {
      name: "xyz",
      Email: "bnbnbb123@gmail.com",
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU",
    },
    {
      name: "jay",
      Email: "pqr123@gmail.com",
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryIndex) => {
    setActiveCategory(categoryIndex === activeCategory ? null : categoryIndex);
  };

  return (
    <section className="pt-[6rem] h-max w-full bg-slate-100">
      <div className="mx-[2rem]">
        <div className=" flex justify-between w-full max-sm:flex-col max-sm:items-center max-sm:gap-[1.4rem]">
          <div className="flex h-[2.6rem] w-[25rem] rounded-[1.4rem] overflow-hidden bg-red-500">
            <input
              type="text"
              className="pl-[1rem] outline-none w-4/5 text-[1.3rem] bg-slate-200"
              placeholder="search"
            />
            <div className="cursor-pointer flex justify-center items-center w-1/5 h-full text-[1rem] bg-primaryColor">
              <FaSearch className="text-white" />
            </div>
          </div>

          <div className="flex gap-[.5rem]">
            {catagory?.length > 0 ? (
              catagory
                .map((e, index) => {
                  const isActive = index === activeCategory;
                  return (
                    <div
                      key={index}
                      onClick={() => handleCategoryClick(index)}
                      className={`cursor-pointer px-[1.4rem] max-sm:py-[.4rem] rounded-[1.2rem] h-full w-fit text-[1rem] font-medium ${
                        isActive ? "bg-primaryColor text-white" : "bg-slate-200"
                      }  flex justify-center items-center`}
                    >
                      {e?.name}
                    </div>
                  );
                })
                .slice(5)
            ) : (
              <h1>category not found</h1>
            )}
          </div>
        </div>
        <div className="pb-[4rem] mt-[2rem] min-h-[38rem] h-fit ">
          <div className="flex-wrap flex max-sm:flex-col max-sm:justify-start gap-[1.8rem]">
            {worker?.length > 0 ? (
              worker.map((worker, i) => {
                return (
                  <div className="cursor-pointer flex justify-between items-center gap-[1.2rem] h-fit w-[30rem] p-[1.2rem] rounded-[1rem] border-[1px] border-slate-300 bg-white">
                    <div className="flex gap-[1rem]">
                      <img
                        alt=""
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU"
                        }
                        className="h-[3.4rem] w-[3.4rem] rounded-full bg-black"
                      />
                      <div>
                        <h2 className="text-[1.2rem] font-semibold">
                          {worker?.name}
                        </h2>
                        <h2 className="text-[.9rem] font-medium">
                          {worker?.Email}
                        </h2>
                      </div>
                    </div>
                    <div className="flex justify-center items-center rounded-full h-[2rem] w-[2rem] ">
                      <FaAngleRight className="text-[2rem] text-slate-300" />
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No worker here</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Workers;
