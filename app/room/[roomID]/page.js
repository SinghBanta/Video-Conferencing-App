"use client";
import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

const RoomPage = ({ params }) => {
  const roomID = React.use(params).roomID;

  const myMeeting = async (element) => {
    setTimeout(() => {
      const appID = +process.env.NEXT_PUBLIC_APPID;
    const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Host"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {  
          name: "Share this link to connect with others",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });

    },3000);
  };

  return (
    <>
      <div
        ref={myMeeting}
        className="w-full h-screen flex items-center justify-center "
      >
        <Loader />
      </div>
    </>
  );
};

export default RoomPage;
