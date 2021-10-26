import Image from "next/image";
import Footer from "../components/Footer";
import ReasonSection from "../components/ReasonSection";
import { reasonsData } from "../data/reasonsData";
import SignInInput from "../components/SignInInput";
import { withPublic } from "../components/auth/routes";
import Carousel from "../components/Carousel";



function Home() {

  return (
    <div>
      {/* ********************** Title/Sign Up Section ******************************** */}
      {/* Sign up Section */}

      <div className="flex flex-col justify-center items-center py-10 gap-10 darkestColor pb-20">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-28 mt-2">
        <div>
            <p className="text-white text-center text-5xl sm:pr-10 mb-10">CodeBuds</p>
            </div>
          <div className="pl-2 sm:pl-10">
          <SignInInput />
          </div>
        </div>
      </div>

      {/* ********************** Reason Section ******************************** */}
      <ReasonSection reasonsData={reasonsData} />
      {/* *********************** Carousel Section ************************/}
      <Carousel />
      {/*********************  HOW IT WORKS SECTION BEGINNING *******************/}
      <div className="w-full darkColor pb-60">
        <div className="">
          <p className="text-center text-white text-5xl py-10 head">HOW IT WORKS</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-5/6 grid-cols-1 lg:flex md:flex justify-center items-center gap-4 md:w-4/5 lg:w-1/2 py-10">
            <div className="">
              <p className="text-white text-3xl text-center md:text-left title">
                SIGN UP
              </p>
              <br></br>
              <p className="text-white">
                When you sign up, you earn your white belt. The white belt
                symbolizes a birth or beginning of a person's will to acquire
                the necessary skills.
              </p>
              <br></br>
              <p className="text-white">
                If you are a tutor, after signing up you can apply for tutor
                status and upload your credentials.
              </p>
            </div>
            <div className="sm:ml-6 pt-6 md:pt-0">
              <Image src="/index_JOIN_US.png" width="349" height="310.51" />
            </div>
          </div>
        </div>
        {/* Blue Belt Section */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-5/6 grid-cols-1 lg:flex md:flex justify-center items-center gap-4 md:w-4/5 lg:w-1/2 py-10">
            <div className="title">
              <Image src="/index_BELT.png" width="560.3" height="522.55"/>
            </div>
            <div className="ml-6 title">
              <p className="text-white text-center md:text-left text-3xl ">
                EARN YOUR BLUE BELT
              </p>
              <br></br>
              <p className="text-white">
                When you sign up, you earn your white belt. The white belt
                symbolizes a birth or beginning of a person's will to acquire
                the necessary skills.
              </p>
              <br></br>
              <p className="text-white">
                If you are a tutor, after signing up you can apply for tutor
                status and upload your credentials.
              </p>
            </div>
          </div>
        </div>
        {/* Stuck Section */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-5/6 grid-cols-1 lg:flex md:flex justify-center items-center gap-4 md:w-4/5 lg:w-1/2 py-10">
            <div className="">
              <p className="text-white text-center md:text-left text-3xl title">
                WHEN YOU GET STUCK
              </p>
              <br></br>
              <p className="text-white">
                When you sign up, you earn your white belt. The white belt
                symbolizes a birth or beginning of a person's will to acquire
                the necessary skills.
              </p>
              <br></br>
              <p className="text-white">
                If you are a tutor, after signing up you can apply for tutor
                status and upload your credentials.
              </p>
            </div>
            <div className="title">
              <img src="/index_FUNCTION.png" height="463" width="579" />
            </div>
          </div>
        </div>
      </div>
      {/*********************  HOW IT WORKS SECTION BEGINNING *******************/}
      <Footer />
    </div>
  );
  
  
}

export default withPublic(Home);