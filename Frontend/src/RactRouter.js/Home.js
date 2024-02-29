import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { GiSkills } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Footer from "./Footer";
import axios from "axios";

function Home() {
  const [firstData, setFirstData] = useState(null);
  const token =
    "6KPnAjasx2BzGyQSF2Lnfw51zqpeNjBy5lHN66E8Fgw5s8dxWsDmpr5DQQAOP7uBKhwOeYrBljpGnJKrpaUWEQ6h9JmFScSEHjiYZQ1NZXVIr+OTK6TXB2NWImPfVdzpT5AkvvgEJrRJAjkfgs2eMNt7M6f3lP5mjbPEFZGh1IoG85t4pN6b3Vt88TjwMuK/e1VbhgVy6BJI7IK6tPmHum3FTWeaBl9cVC1qNYVz5jXBM870M28vsh4IInLnInBjIPPx2DXSdYKgjM0ze95AA38eBUpLap/cpP/GdyK2fPtpAqKtxMkOD/vgDrb4Zrhz4GMfq/IIP1IOQ+K0kA+5mUSum/27V9kkVzP8yNS0znewATRATwRtY/mVyN3jdKuqfnx8zAl9TCXaoldfnS/vtK6ojbJihrSVIwco1514a0NJYcnEva0X/WP3y85XbwlZb13lPgoUPClVfaUpn4nkX9U8m1P19hA/XfOtFsu9ztoitfiyOoVH1BhnmUdivKVto8rQgcOeAjOjzQZNe9rqNQ=="; // Replace with your actual Bearer token
  const getData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`, // Set the Bearer token in the Authorization header
      };
      const data = await axios.get(
        "https://cloud.syncloop.com/tenant/Yashsoni/homescreendata",
        { headers }
      );

      setFirstData(data.data?.message);
      console.log({ data });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="h-full w-full text-black/70">
        <div
          className={
            "relative overflow-hidden bg-slate-100 h-screen max-sm:h-fit max-sm:p-[2rem] max-sm:pt-[8rem] max-sm:gap-[6rem] w-full pt-[4rem] px-[4rem] flex max-sm:flex-col items-center justify-between text-white"
          }
        >
          <div className="absolute z-[2] -left-[10rem] -top-[4rem] -rotate-[25deg] h-screen w-[60rem] bg-ButtonColor"></div>
          {/* <div className="absolute z-[1] top-[2rem] left-0 w-full ">
            <img src={"/home_img.png"} className="h-full w-full" />
          </div> */}
          <div className="relative z-20">
            <h3 className="mb-[.4rem] text-[2.6rem] font-bold">
              <span className="text-primaryColor">क</span>RM
            </h3>
            <h1 className="mb-[1.6rem] text-[1.6rem] font-semibold leading-[2.rem] w-[40rem] max-sm:w-full">
              {firstData
                ? firstData
                : "Looking for flexible work opportunities or need reliable workers for quick tasks? You're in the right place! कRM is your one-stop solution for connecting skilled workers and clients for cash jobs."}
            </h1>

            <NavLink to={"/Login"}>
              <div className="w-fit flex justify-center items-center py-[.4rem] px-[1rem] rounded-[.3rem] text-[1.2rem] font-semibold capitalize bg-primaryColor text-white   ">
                get startded
              </div>
            </NavLink>
          </div>
          <div className="h-[34rem] max-sm:h-[30rem]">
            <img src="/homepage1.png" className="h-full w-full" />
          </div>
        </div>

        {/* ------------------ */}
        <div className=" mt-[6rem] relative z-20 max-sm:py-[2rem] max-sm:mt-[5rem] flex max-sm:flex-col mx-[6rem] max-sm:mx-[3rem] max-sm:gap-[2rem] gap-[1rem] rounded-[1.6rem]  ">
          <div className="w-full flex max-sm:rounded-[1.6rem] rounded-tl-[1.6rem] rounded-bl-[1.6rem] flex-col justify-center items-center py-[2rem] px-[3rem] max-sm:px-[2.5rem] max-sm:py-[2rem] text-primaryColor bg-white shadow-[0_4px_7px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_7px] hover:shadow-primaryColor/60 transition-all duration-300">
            <img src="/unemployment.png" className="h-[5rem]" alt="" />
            <h1 className="mt-[.4rem] text-[2rem] font-bold capitalize">
              23.22%
            </h1>
            <p className="text-center text-slate-950">
              Unemployed Youth population of india
            </p>
          </div>

          <div className="w-full flex max-sm:rounded-[1.6rem] flex-col justify-center items-center py-[2rem] px-[3rem] max-sm:px-[2.5rem] max-sm:py-[2rem] text-primaryColor bg-white shadow-[0_4px_7px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_7px] hover:shadow-primaryColor/60 transition-all duration-300">
            <img src="/fear.png" className="h-[5rem]" alt="" />
            <h1 className="mt-[.4rem] text-[2rem] font-bold capitalize">
              1.18L+
            </h1>
            <p className="text-center text-slate-950">
              Deaths because of Unemployment
            </p>
          </div>

          <div className="w-full flex max-sm:rounded-[1.6rem] rounded-tr-[1.6rem] rounded-br-[1.6rem] flex-col justify-center items-center py-[2rem] px-[3rem] max-sm:px-[2.5rem] max-sm:py-[2rem] text-primaryColor bg-white shadow-[0_4px_7px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_7px] hover:shadow-primaryColor/60 transition-all duration-300">
            <img src="/poverty.png" className="h-[5rem]" alt="" />
            <h1 className="mt-[.4rem] text-[2rem] font-bold capitalize">25L</h1>
            <p className="text-center text-slate-950">
              Deaths because of poverty & hunger
            </p>
          </div>
        </div>

        {/* ------------------ */}

        <div className="mt-[4rem] p-[6rem] max-sm:p-[3rem]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[1.2rem] font-semibold text-primaryColor ">
              Ongoing Campaigns
            </h2>
            <h1 className="text-[1.4rem] font-semibold">
              fight adainst poverty to succeed in life
            </h1>
          </div>
          {/* ----card------ */}
          <div className="mt-[5rem] flex max-sm:flex-col justify-center gap-[2.6rem] my-[2rem] text-TextColor2">
            <div className="overflow-hidden relative flex flex-col gap-[1rem] h-[19rem] w-fit p-[2rem]  bg-white shadow-[0_4px_7px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_7px] hover:shadow-primaryColor/40 transition-all duration-300">
              <div className="absolute -right-[1.4rem] -top-[1.4rem] pt-[.4rem] pr-[.4rem] h-[6rem] w-[6rem] flex justify-center items-center text-[1.6rem] font-extrabold text-white rounded-full bg-primaryColor">
                01
              </div>
              <GiSkills className="text-[3rem] text-primaryColor " />
              <h2 className="text-[1.4rem] mt-[1.2rem] leading-[1rem] font-bold text-slate-800">
                Skilled Workers Near You
              </h2>
              <p>
                Discover skilled workers in your area who are ready to tackle
                your tasks. Whether you need help with home repairs, gardening,
                or any other job, find the right professionals just
                around the corner
              </p>
            </div>

            <div className="overflow-hidden relative flex flex-col gap-[1rem] h-[19rem] w-fit p-[2rem]  bg-white shadow-[0_4px_7px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_7px] hover:shadow-primaryColor/40 transition-all duration-300">
              <div className="absolute -right-[1.4rem] -top-[1.4rem] pt-[.4rem] pr-[.4rem] h-[6rem] w-[6rem] flex justify-center items-center text-[1.6rem] font-extrabold text-white rounded-full bg-primaryColor">
                02
              </div>
              <FaBriefcase className="text-[3rem] text-primaryColor " />
              <h2 className="text-[1.4rem] mt-[1.2rem] leading-[1rem] font-bold text-slate-800">
                Post a Job, Find the Perfect Match
              </h2>
              <p>
                Looking for help with a specific task? Post your job listing and
                connect with qualified workers. Describe the job, set your
                budget, and let our platform match you with the best candidates.
              </p>
            </div>

            <div className="overflow-hidden relative flex flex-col gap-[1rem] h-[19rem] w-fit p-[2rem]  bg-white shadow-[0_4px_7px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_7px] hover:shadow-primaryColor/40 transition-all duration-300">
              <div className="absolute -right-[1.4rem] -top-[1.4rem] pt-[.4rem] pr-[.4rem] h-[6rem] w-[6rem] flex justify-center items-center text-[1.6rem] font-extrabold text-white rounded-full bg-primaryColor">
                03
              </div>
              <VscWorkspaceTrusted className="text-[3rem] text-primaryColor " />
              <h2 className="text-[1.4rem] mt-[1.2rem] leading-[1rem] font-bold text-slate-800">
                Verified and Trusted Workers{" "}
              </h2>
              <p>
                Rest easy knowing that all workers on our platform undergo a
                rigorous verification process. We prioritize your safety and
                satisfaction by ensuring that you hire reliable and
                trustworthy professionals.
              </p>
            </div>
          </div>
          {/* ----card------ */}
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Home;
