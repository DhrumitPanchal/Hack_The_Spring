import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <section className="w-full text-black">
      <div className="h-fit max-sm:h-fit w-full flex justify-between max-sm:justify-center max-sm:flex-col gap-[5rem] px-[1rem]">
        <div className="w-[45%] pt-[14rem] ml-[6rem] max-sm:w-full max-sm:ml-0 max-sm:pt-[8rem] max-sm:px-[2rem]">
          <h2 className=" text-[2.6rem] text-primaryColor font-bold  capitalize">
            about us
          </h2>
          <p className="mt-[1rem] text-[1.6rem] font-medium">
            Welcome to कRM where we bridge the gap between wage workers and
            clients. Our platform is your go-to destination for quick and
            convenient cash work opportunities. Whether you're a skilled worker
            looking for gigs or a client in need of reliable help, we've
            got you covered.
          </p>
          <a href="#readMore">
            <div className="cursor-pointer mt-[1.6rem] flex justify-center items-center h-[2.4rem] w-[10rem] text-[1.2rem] rounded-[.4rem] font-medium bg-primaryColor text-white ">
              Read More
            </div>
          </a>
        </div>
        <div className=" mr-[6rem] max-sm:left-[4rem] max-sm:mr-0 mt-[9rem] relative h-[28rem] w-[24rem]   max-sm:mt-0">
          <div className="absolute -bottom-[3rem] -left-[3rem] z-[3] h-[10rem] w-[18rem] rounded-tl-[3rem] rounded-br-[3rem] bg-primaryColor"></div>
          <div className="overflow-hidden absolute z-[4]  h-[28rem] w-[24rem] rounded-tl-[4rem] rounded-br-[4rem] shadow-[0px_10px_30px] shadow-primaryColor/60">
            <img
              src="./worker.jpg"
              alt=""
              className="h-full w-full hover:scale-[1.03] transition-all duration-300 shadow-[0px_10px_30px] shadow-primaryColor/60"
            />
          </div>
        </div>
      </div>

      {/* ------------ */}
      <div id="readMore" className="m-[3rem] mt-[12rem] max-sm:mt-0 mb-[6rem]">
        <p className="mx-[20rem] my-[4rem] max-sm:mx-[2rem] max-sm:mt-[8rem] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          molestiae incidunt earum delectus, minus debitis atque? Quibusdam
          rerum eligendi ducimus.
        </p>
        <div className="px-[6rem] max-sm:px-[1rem] w-full flex flex-col items-center gap-[4rem]">
          <div className="w-full flex max-sm:flex-col justify-between items-center gap-[4rem]">
            <div className="relative flex justify-center items-center h-[30rem] max-sm:h-[26.4rem] w-[29rem] max-sm:w-full">
              <div className="overflow-hidden absolute top-0 right-0 h-[14rem] w-[16rem] max-sm:h-[12rem] max-sm:w-[14rem] rounded-tl-[4rem] rounded-br-[4rem] shadow-[0px_10px_30px] shadow-primaryColor/60">
                <img
                  src="/Indian Construction Workers.jpeg"
                  alt=""
                  className="h-full opacity-80 w-full hover:scale-[1.1] transition-all duration-300"
                />
              </div>
              <div className="overflow-hidden absolute bottom-0 left-0 h-[14rem] w-[16rem] max-sm:h-[12rem] max-sm:w-[14rem]  rounded-br-[4rem] rounded-tl-[4rem] shadow-[0px_10px_30px] shadow-primaryColor/60">
                <img
                  src="./img3.jpg"
                  alt=""
                  className="h-full opacity-80 w-full hover:scale-[1.1] transition-all duration-300"
                />
              </div>
              <div className=" absolute -mb-[8rem] -mr-[15rem] h-[6rem] w-[8rem] rounded-bl-[2rem] rounded-tr-[2rem] bg-primaryColor"></div>
              <div className=" absolute -mt-[3rem] -ml-[9rem]  h-[1.6rem] w-[1.6rem] rounded-full bg-primaryColor"></div>
            </div>
            <div className=" w-[40rem] max-w-full">
              <h2 className="text-[2.2rem] text-primaryColor font-medium mb-[2rem]">
                Mission
              </h2>
              <p className="text-[1.4rem]">
                "At कRM , our mission is to empower wage workers by providing
                them with easy access to cash work opportunities. We aim to
                simplify the process of finding short-term jobs while connecting
                clients with skilled workers swiftly and securely. Our platform
                is dedicated to enhancing flexibility and convenience in the job
                market, making employment accessible to all."
              </p>
            </div>
          </div>

          <div className="w-full flex justify-between max-sm:flex-col-reverse items-center gap-[4rem]">
            <div className=" w-[40rem] max-sm:w-full">
              <h2 className="text-[2.2rem] text-primaryColor font-medium mb-[2rem]">
                Vision
              </h2>
              <p className="text-[1.4rem]">
                "Our vision at कRM is to revolutionize the way wage workers and
                clients connect, fostering a vibrant community of professionals
                and employers. We aspire to become the go-to platform for cash
                work, known for our innovative solutions and unwavering
                commitment to user satisfaction. We envision a future where
                individuals can easily access the work they desire and where
                employers can swiftly find the talent they need, all through our
                trusted and efficient platform."
              </p>
            </div>

            <div className="relative flex justify-center items-center h-[30rem] w-[29rem] max-sm:h-[26.4rem] max-sm:w-full">
              <div className="overflow-hidden absolute top-0 right-0 h-[14rem] w-[16rem] max-sm:h-[12rem] max-sm:w-[14rem]  rounded-tl-[4rem] rounded-br-[4rem] shadow-[0px_10px_30px] shadow-primaryColor/60">
                <img
                  src="./img2.jpg"
                  alt=""
                  className="h-full opacity-80 w-full hover:scale-[1.1] transition-all duration-300"
                />
              </div>
              <div className="overflow-hidden absolute bottom-0 left-0 h-[14rem] w-[16rem] max-sm:h-[12rem] max-sm:w-[14rem]  rounded-br-[4rem] rounded-tl-[4rem] shadow-[0px_10px_30px] shadow-primaryColor/60">
                <img
                  src="./woodwork.jpeg"
                  alt=""
                  className="h-full opacity-80 w-full hover:scale-[1.1] transition-all duration-300"
                />
              </div>
              <div className=" absolute -mb-[8rem] -mr-[15rem] h-[6rem] w-[8rem] rounded-bl-[2rem] rounded-tr-[2rem] bg-primaryColor"></div>
              <div className=" absolute -mt-[3rem] -ml-[9rem]  h-[1.6rem] w-[1.6rem] rounded-full bg-primaryColor"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default About;
