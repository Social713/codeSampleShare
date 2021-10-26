import { useState, useEffect } from 'react';
import { AiOutlineSend, AiOutlineClose } from 'react-icons/ai';
import Moment from 'moment';

const Floater = () => {

  const [room, setRoom] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [nickname, setNickname] = useState('');

  const initMessage = {
    timeSent: new Date(),
    message:'',
    sender:'',
    receiver:'',
    type:'',
  }
  const [floatOpen, setFloatOpen] = useState(false);
  const [message, setMessage] = useState(initMessage);

  const popUp = () => {
    setFloatOpen(!floatOpen);
    console.log('working');
  };

  useEffect(() => {
    // const fetchData = async () => {
    //     setNickname(localStorage.getItem('nickname'));
    //     firebase.database().ref('rooms/').on('value', resp => {
    //         setRoom([]);
    //         setRoom(snapshotToArray(resp));
    //         setShowLoading(false);
    //     });
    // };
  
    // fetchData();
}, []);


  const onClickHandler = () => {

  }

  return (
    <>
      <div
        className={`${
          floatOpen ? 'hidden' : ''
        } px-16 py-2 darkColor justify-center items-center rounded-tl-md rounded-tr-md fixed bottom-0 right-0 mr-20`}
      >
        <button className="cursor-pointer" onClick={popUp}>
          <p className="text-white text-center hover:underline hover:cursor-pointer">
            Messages
          </p>
        </button>
      </div>

      <div
        className={`${
          floatOpen ? '' : 'hidden'
        } container z-20 h-3/6 mr-20 chatWidth shadow-2xl flex flex-cols fixed bottom-0 right-0 darkColor rounded-tl-md rounded-tr-md pl-5 pt-2 `}
      >
        <div className="w-7/12 border-r-2">
          <div className="flex flex-row mb-3">
            <p className="text-white text-2xl">Chat</p>
          </div>
          <div className="flex flex-row">
            <img
              className="w-10 h-10 rounded-full float-left"
              src="/teacher.jpeg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="ml-4 float-right mb-4 mr-4">
              <p className="text-white font-bold text-lg leading-3">Buddy's name</p>
              <p className="text-white leading-3 text-sm">
                Message description
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col ">
          <p className="text-white font-bold text-lg mt-1 ml-6">Buddy's name</p>
          <div
            className="absolute top-4 right-6 cursor-pointer"
            onClick={popUp}
          >
            <AiOutlineClose className="right-0 text-white text-lg" />
          </div>
          <div className="fixed bottom-3 ml-10">
            <input
              type="text"
              placeholder="Message"
              className="bg-gray-600 h-12 w-80 px-5 pr-10 rounded-full text-sm focus:outline-none mr-1"
            />
            <AiOutlineSend className="float-right text-white h-6 w-6 mt-3 ml-2 mr-2" />
          </div>

          <div class=" px-5 flex flex-col justify-between">
            <div class="flex flex-col mt-5">
              <div className="flex justify-end mb-4">
                <div className="mr-2 py-3 px-4 bg-orange rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Welcome to group everyone !
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div class="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat at praesentium, aut ullam delectus odio error sit rem.
                  Architecto nulla doloribus laborum illo rem enim dolor odio
                  saepe, consequatur quas?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Floater;
