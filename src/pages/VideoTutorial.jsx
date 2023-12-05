function VideoTutorial() {
  return (
    <>
      <div className="p-5 text-center bg-[#D9D9D9]">
        <h1 className="text-2xl font-medium">Video Tutorial</h1>
        <p className="mt-2 text-base">
          Akses video tutorial untuk mengembangkan keahlian dalam pengelolaan
          limbah yang efisien
        </p>
      </div>
      <div className="p-5 lg:grid lg:grid-cols-2">
        <div className="hero-video my-5 lg:mx-5">
          <iframe
            className="rounded-2xl w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wsfE9ab8lg4"
            title="How Recycling Works"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <h3 className="text-lg mt-2 md:text-xl font-medium mb-2">
              How Recycling Works
            </h3>
            <p className="text-sm md:text-base">1 years ago</p>
          </div>
        </div>
        <div className="list-video">
          <div className="card-list-video p-2 md:flex md:gap-x-5">
            <iframe
              className="rounded-2xl w-full md:w-fit lg:w-1/2"
              width="250"
              height="180"
              src="https://www.youtube.com/embed/jsp7mgYv3aI"
              title="Recycling 101: How to Properly Recycle at Home"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="my-auto">
              <h3 className="text-lg mt-2 md:text-xl font-medium">
                Recycling 101: How to Properly Recycle at Home
              </h3>
              <p className="text-sm md:text-base">5 years ago</p>
            </div>
          </div>
          <div className="card-list-video p-2 md:flex md:gap-x-5">
            <iframe
              className="rounded-2xl w-full md:w-fit lg:w-1/2"
              width="250"
              height="180"
              src="https://www.youtube.com/embed/x-h1GyFalEA"
              title="How to: Organize your Recycling | Recycle Often. Recycle Right."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="my-auto">
              <h3 className="text-lg mt-2 md:text-xl font-medium">
                Recycling 101: How to Properly Recycle at Home
              </h3>
              <p className="text-sm md:text-base">5 years ago</p>
            </div>
          </div>
          <div className="card-list-video p-2 md:flex md:gap-x-5">
            <iframe
              className="rounded-2xl w-full md:w-fit lg:w-1/2"
              width="250"
              height="180"
              src="https://www.youtube.com/embed/20iOk-YYuB4"
              title="Recycling 101: How to Dispose of Plastic Bags"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="my-auto">
              <h3 className="text-lg mt-2 md:text-xl font-medium">
                Recycling 101: How to Properly Recycle at Home
              </h3>
              <p className="text-sm md:text-base">5 years ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoTutorial;
