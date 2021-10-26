import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import * as dates from "../utils/dates";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Layout from "../components/layout/Layout";
import BigCalendar from "react-big-calendar";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import firebase from "firebase/app";
import useAuth from "../components/auth/AuthHook";
import { toast } from "react-toastify";
import { SatelliteSharp } from "@material-ui/icons";
// let allViews = Object.keys(Views).map((k) => Views[k]);

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// months are counted from 0 (Jan) - 11 (Dec)
// const freeTime = {
//     title: "Leeson with Josh",
//     start: new Date(2021, 9, 5, 13, 24),
//     end: new Date(2021, 9, 5, 20, 30)
// };
const events = [
  {
    title: "Big Meeting",
    start: new Date(2021, 10, 5, 13, 24),
    end: new Date(2021, 10, 5, 20, 30),
  },
  {
    title: "Medium Meeting",
    start: new Date(2021, 10, 3),
    end: new Date(2021, 10, 3),
  },
  {
    title: "Small Meeting",
    start: new Date(2021, 9, 2),
    end: new Date(2021, 9, 3),
  },
];

export default function schedule() {
  const { user } = useAuth();

  const fbScheduleData = firebase
    .firestore()
    .collection(`classSchedule_${user?.uid}`)
    .doc(user?.uid);

  const [newEvent, setNewEvent] = useState({
    title: "Available",
    start: "",
    end: "",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection(`classSchedule_${user?.uid}`)
      .doc(user?.uid)
      .onSnapshot((doc) => {
        setData(doc.data());
      });

  }, []);
  // console.log('this is the newEvent: ', newEvent)
  const {end, start} = data;
//   console.log(data.getDate())
  // console.log(end, start, data)
  // data.toDate()
  const updateCalendar = async (e) => {
    try {
      await fbScheduleData.set(newEvent).then(
        toast.success("Calendar successfully update!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handeAddEvent = (e) => {
    setData(newEvent);
    updateCalendar();
  };

  return (
    <Layout>
      <div className="flex-col">
        <div>
          <p className="text-white text-4xl text-center">Schedule</p>
          <p className="text-white text-2xl">Schedule your availability</p>
          <div>
            <DatePicker
              placeholderText="Start Date"
              className="bg-gray-600"
              showTimeSelect
              name="startTime"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <DatePicker
              placeholderText="End Date"
              selected={newEvent.end}
              className="bg-gray-600"
              showTimeSelect
              name="endTime"
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
            <button
              className=" text-center w-40 rounded-full shadow-2xl text-white bg-blue-400 py-1"
              onClick={handeAddEvent}
            >
              Add Event
            </button>
          </div>
        </div>
        <div className="darkestColor h-screen flex-col">
          <div className="h-4/5 bg-gray-300 rounded-xl">
            <Calendar
              events={data}
              step={60}
              showMultiDayTimes
              localizer={localizer}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
