import Link from "next/link";
import styled from "styled-components";

const Foot = styled.div`
  height: 125px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  z-index: 100;
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: black;

  pre {
    padding-top: 45px;
    color: grey;
    font-size: 14px;
  }
  a{
      text-align: center;
      width: 25px;
  }
`;

const Text = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
`;


const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer className="w-full flex-wrap p-6 z-10 bottom-0 darkestColor relative">
        <p className="text-white absolute right-4">
          © {date} FIND A CODING BUDDY
        </p>
        
          <Link href='/' >
            <a className="mr-4 text-white ">LEGAL</a>
          </Link>
          <Link href='/'>
            <a className="mr-4 text-white ">POLICY</a>
          </Link>
          <Link href='/contactUs'>
            <a className="text-white">CONTACT US</a>
          </Link>
        
    </footer>
  );
};

export default Footer;