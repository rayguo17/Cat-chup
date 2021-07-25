// import { useState } from "react";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

//dummy data
var dummydate = new Date(
  "Wed Jul 01 2021 19:00:00 GMT+0800 (Hong Kong Standard Time)"
);
var getD = dummydate.getDate();
function dummydatechange(date1, n) {
  return date1.setDate(getD + n);
}

function dummydateIs(date2) {
  return new Date(date2);
}

function getDayOfWeek(date) {
  var week;
  if (date.getDay() == 0) week = "Sun";
  if (date.getDay() == 1) week = "Mon";
  if (date.getDay() == 2) week = "Tue";
  if (date.getDay() == 3) week = "Wed";
  if (date.getDay() == 4) week = "Thu";
  if (date.getDay() == 5) week = "Fri";
  if (date.getDay() == 6) week = "Sat";
  return week;
}

const postInfo = [
  {
    id: 1,
    type: "post",
    userInfo: {
      userName: "Username1",
      userIcon_url: "https://image.flaticon.com/icons/png/512/146/146005.png",
    },
    content: {
      caption: "Nice to create a post",

      pictures: [
        {
          name: "pic1",
          data_url:
            "https://img.huffingtonpost.com/asset/5e0f68ec2500003b1998fb2e.jpeg?cache=YqiWjN9UVt&ops=crop_34_446_5966_3406%2Cscalefit_720_noupscale",
        },
        //   {
        //     name: "pic2",
        //     data_url:
        //       "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/1036780592-1280x720.jpg?itok=k4u7CDBb",
        //   },
      ],
      comments: [
        {
          commentUserName: "Justin Ho",
          commentUserIcon:
            "https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png",
          commentContent: "Hi",
          commentTime: `${dummydateIs(dummydatechange(dummydate, 0))}`,
        },
        {
          commentUserName: "Harry",
          commentUserIcon:
            "https://i.pinimg.com/474x/25/9d/a7/259da7bd747275c13bea70d01e6f5883.jpg",
          commentContent: "Fine",
          commentTime: `${dummydateIs(dummydatechange(dummydate, 1))}`,
        },
        {
          commentUserName: "Ray",
          commentUserIcon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU",
          commentContent: "Hi",
          commentTime: `${dummydateIs(dummydatechange(dummydate, 2))}`,
        },
        {
          commentUserName: "Justin Chueng",
          commentUserIcon:
            "https://t3.ftcdn.net/jpg/02/45/28/14/360_F_245281469_8BxP6VT7st0gj6qNfLUVVq1UJt0NfFEd.jpg",
          commentContent: "Fine",
          commentTime: `${dummydateIs(dummydatechange(dummydate, 3))}`,
        },
        {
          commentUserName: "Karl",
          commentUserIcon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGq5Oq67C0aA4ppNbXuaOzw-38WfscDpI4Q&usqp=CAU",
          commentContent: "Hi",
          commentTime: `${dummydateIs(dummydatechange(dummydate, 3))}`,
        },
        {
          commentUserName: "Bibek",
          commentUserIcon:
            "https://t4.ftcdn.net/jpg/02/45/28/11/360_F_245281118_AGF0PxMrx83Gvd2oe9vfPCdkzcABXSRY.jpg",
          commentContent: "Fine",
          commentTime: `${dummydateIs(dummydatechange(dummydate, 3))}`,
        },
      ],
      likes: [
        { userName: "MR ", userIcon: "", time: "2020-07-01 15:00:00" },
        { userName: "Ms", userIcon: "", time: "2020-07-02 20:00:00" },
      ],
      postTime: `${dummydateIs(dummydatechange(dummydate, 3))}`,
    },
  },

  {
    id: 2,
    type: "event",
    userInfo: {
      userName: "Username2",
      userIcon_url:
        "https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png",
    },
    content: {
      caption: "Running together",
      text:
        "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?",
      mood: "happy",
      pictures: [
        {
          name: "pic2",
          data_url:
            "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/1036780592-1280x720.jpg?itok=k4u7CDBb",
        },
      ],
      comments: [
        {
          commentUserName: "Comment1",
          commentContent: "Hi",
          commentTime: "",
        },
        {
          commentUserName: "Comment2",
          commentContent: "Fine",
          commentTime: "",
        },
      ],
      likes: [
        { userName: "MR ", userIcon: "", time: "2020-07-01 15:00:00" },
        { userName: "Ms", userIcon: "", time: "2020-07-02 20:00:00" },
      ],
      eventDate: "2021-07-21",
      startTime: "05:00",
      endTime: "07:00",
      tags: ["running", "morning", "stronger"],
      postTime: "2020-07-01 15:00:00",
    },
  },
  {
    id: 3,
    type: "event",
    userInfo: {
      userName: "Username3",
      userIcon_url:
        "https://i.pinimg.com/474x/25/9d/a7/259da7bd747275c13bea70d01e6f5883.jpg",
    },
    content: {
      caption: "Running together3",
      text:
        "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?",
      mood: "sad",
      pictures: [
        {
          name: "pic3",
          data_url:
            "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/t9ur9cc1khkup1dmcbzd/IMG%E5%86%92%E9%9A%AA%E6%A8%82%E5%9C%92.jpg",
        },
      ],
      comments: [
        {
          commentUserName: "Comment1",
          commentContent: "Hi",
          commentTime: "",
        },
        {
          commentUserName: "Comment2",
          commentContent: "Fine",
          commentTime: "",
        },
      ],
      likes: [
        { userName: "MR ", userIcon: "", time: "2020-07-01 15:00:00" },
        { userName: "Ms", userIcon: "", time: "2020-07-02 20:00:00" },
      ],
      eventDate: "2021-07-21",
      startTime: "05:00",
      endTime: "07:00",
      tags: ["running", "morning", "stronger"],
      postTime: "2020-07-01 15:00:00",
    },
  },
  {
    id: 4,
    type: "event",
    userInfo: {
      userName: "Username4",
      userIcon_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU",
    },
    content: {
      caption: "Running together4",
      text:
        "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?",
      mood: "angry",
      pictures: [
        {
          name: "pic4",
          data_url:
            "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ys5jqwvg6pgtpacb5kqb/IMG%20Worlds%20of%20Adventure.jpg",
        },
      ],
      comments: [
        {
          commentUserName: "Comment1",
          commentContent: "Hi",
          commentTime: "",
        },
        {
          commentUserName: "Comment2",
          commentContent: "Fine",
          commentTime: "",
        },
      ],
      likes: [
        { userName: "MR ", userIcon: "", time: "2020-07-01 15:00:00" },
        { userName: "Ms", userIcon: "", time: "2020-07-02 20:00:00" },
      ],
      eventDate: "2021-07-22",
      startTime: "05:00",
      endTime: "07:00",
      tags: ["running", "morning", "stronger"],
      postTime: "2020-07-01 15:00:00",
    },
  },
  {
    id: 5,
    type: "event",
    userInfo: {
      userName: "Username5",
      userIcon_url:
        "https://t3.ftcdn.net/jpg/02/45/28/14/360_F_245281469_8BxP6VT7st0gj6qNfLUVVq1UJt0NfFEd.jpg",
    },
    content: {
      caption: "Running together5",
      text:
        "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?",
      mood: "fear",
      pictures: [
        {
          name: "pic5",
          data_url:
            "https://www.interfacemedia.com/media/2350/img-vr-tilt-brush-website-hero-shot.jpg",
        },
      ],
      comments: [
        {
          commentUserName: "Comment1",
          commentContent: "Hi",
          commentTime: "",
        },
        {
          commentUserName: "Comment2",
          commentContent: "Fine",
          commentTime: "",
        },
      ],
      likes: [
        { userName: "MR ", userIcon: "", time: "2020-07-01 15:00:00" },
        { userName: "Ms", userIcon: "", time: "2020-07-02 20:00:00" },
      ],
      eventDate: "2021-07-22",
      startTime: "05:00",
      endTime: "07:00",
      tags: ["running", "morning", "stronger"],
      postTime: "2020-07-01 15:00:00",
    },
  },
  {
    id: 6,
    type: "event",
    userInfo: {
      userName: "Username6",
      userIcon_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGq5Oq67C0aA4ppNbXuaOzw-38WfscDpI4Q&usqp=CAU",
    },
    content: {
      caption: "Running together6",
      text:
        "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?",
      mood: "disgust",
      pictures: [
        {
          name: "pic6",
          data_url:
            "https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12137d2fd93d247e043378058064fc000D3A162A40.jpeg?itok=NWxmiYtZ",
        },
      ],
      comments: [
        {
          commentUserName: "Comment1",
          commentContent: "Hi",
          commentTime: "",
        },
        {
          commentUserName: "Comment2",
          commentContent: "Fine",
          commentTime: "",
        },
      ],
      likes: [
        { userName: "MR ", userIcon: "", time: "2020-07-01 15:00:00" },
        { userName: "Ms", userIcon: "", time: "2020-07-02 20:00:00" },
      ],
      eventDate: "2021-07-22",
      startTime: "05:00",
      endTime: "07:00",
      tags: ["running", "morning", "stronger"],
      postTime: "2020-07-01 15:00:00",
    },
  },
  {
    id: 7,
    type: "Schedule",
    userInfo: {
      userName: "harry",
      userIcon_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGq5Oq67C0aA4ppNbXuaOzw-38WfscDpI4Q&usqp=CAU",
    },
    content: {
      caption: "Running together6",
      text:
        "Running in humans is associated with improved health and life expectancy.I plan to run every morning.Would you join me?",
      mood: "joy",
      pictures: [
        {
          name: "pic6",
          data_url:
            "https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12137d2fd93d247e043378058064fc000D3A162A40.jpeg?itok=NWxmiYtZ",
        },
      ],
      // eventDateWeek: "Thu",
      eventDate: "2021-07-22",
      startTime: "05:00",
      endTime: "07:00",
      tags: ["running", "morning", "stronger"],
      postTime: "2020-07-01 15:00:00",
    },
  },
];

const PassEventData = () => {
  postInfo.map((Info, index) => {
    if (Info.type == "event") {
      INITIAL_EVENTS.push({
        id: Info.id,
        title: Info.content.caption,
        start: Info.content.eventDate + `T${Info.content.startTime}`,
        end: Info.content.eventDate + `T${Info.content.endTime}`,
      });
    }
  });
};

export const INITIAL_EVENTS = [
  // {
  //   id: createEventId(),
  //   title: "All-day event",
  //   start: todayStr,
  // },
  // {
  //   id: createEventId(),
  //   title: "Timed event",
  //   start: todayStr + "T12:00:00",
  // },
  // {
  //   id: createEventId(),
  //   title: "Timed event",
  //   start: todayStr + "T12:00:00",
  // },
];

PassEventData();

export function createEventId() {
  return String(eventGuid++);
}
