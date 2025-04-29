import React from "react"

import BackgroundVideo from "next-video/background-video"
import doctors from "/videos/doctors.mp4"

export default function VideoBackground() {
  return (
    <BackgroundVideo src={doctors} loop controls={false} autoPlay muted>
      <div className="w-full h-full flex flex-col justify-center bg-transparent">
        <div className="w-2/5  pl-[8.5%]">
          <p className="font-bold text-white text-6xl">
            Providing Care Can Be Simpler
          </p>
        </div>
        <div className="w-[45%]  mt-10 pl-[8.5%]">
          <p className="font-light text-white text-xl">
            Make achieving your best possible outcomes easier with athenaOne®,
            our AI-powered, all-in-one healthcare solution that enables clinical
            and operational efficiency.
          </p>
        </div>
      </div>
    </BackgroundVideo>
  )
}
