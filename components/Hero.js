const Hero = () => {
  return (
    <section className=" lg:h-[50rem] lg:max-w-[90rem] mx-auto pb-20 hidden lg:block">
      <div className="w-full mx-auto grid place-items-center BlastroLogo">
        <img className="" src="/assets/BlastroLogo.png" />
      </div>
      <div className="flex flex-col -mt-28 lg:flex-row items-center md:justify-between lg:max-w-[90rem] mx-auto w-full h-full">
        <div className=" z-30 md:w-1/2 lg:w-2/5">
          <h1 className="text-4xl text-white font-bold leading-tight ShowAnimHidden-Left">
            Jetpack into the epic Adventure:
          </h1>
          <h1 className="text-2xl text-white font-bold leading-tight mb-5 ShowAnimHidden-Left">
            Mine, Fly, Profit, Upgrade and Conquer the World!
          </h1>
          <div className="flex text-center mt-14 ">
            <div className="w-full CTA1 ShowAnimHidden-Left">
              <a href="https://store.steampowered.com/app/1392650/BLASTRONAUT/">
                <button className=" text-xl px-8 py-3 xl:py-5 xl:px-10 rounded-xl bg-green-600 hover:bg-green-800 hover:text-white hover:scale-105 transition-all duration-200">
                  Play now on Steam
                </button>
              </a>
            </div>
            <div className="w-full text-white text-start CTA1 ShowAnimHidden-Left grid items-center">
              {/**
              <img className="w-3/4" src="/assets/reviews.png" />
               */}
              <h1>Overall Reviews:</h1>
              <h1>
                <span className="text-blue-400 cursor-pointer">
                  <a href="https://steamcommunity.com/app/1392650/positivereviews/?browsefilter=toprated&snr=1_5_100010_&p=1">
                    Very Positive
                  </a>
                </span>{" "}
                reviews on Steam!
              </h1>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-3/5 h-full w-full">
          <div className="relative w-full h-full grid place-items-center object-contain ShowAnimHidden-Right">
            <video
              className="absolute z-30 w-full h-full object-cover md:object-contain"
              autoPlay
              loop
              muted
            >
              <source src="/assets/BlastroHero-NoAudio.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto text-center -mt-16 text-white">
        <div className="w-full h-full grid place-items-center detailsRow ShowAnimHidden-Left">
          <div className=" border-2 text-center md:w-[12rem] lg:w-[16rem] rounded-lg rounded-tl-3xl rounded-br-3xl">
            <h1 className="text-2xl">Explore</h1>
            <p className="px-10 py-2 h-[6rem] flex place-items-center">
              Explore this vast procedurally generated world with your jetpack
            </p>
          </div>
        </div>
        <div className="w-full h-full grid place-items-center detailsRow ShowAnimHidden-Left">
          <div className=" border-2 text-center md:w-[12rem] lg:w-[16rem] rounded-lg rounded-tl-3xl rounded-br-3xl ">
            <h1 className="text-2xl">Extract</h1>
            <p className="px-10 py-2 h-[6rem] flex place-items-center">
              Extract the minerals with an explosive gel
            </p>
          </div>
        </div>
        <div className="w-full h-full grid place-items-center detailsRow ShowAnimHidden-Left">
          <div className=" border-2 text-center md:w-[12rem] lg:w-[16rem] rounded-lg rounded-tl-3xl rounded-br-3xl ">
            <h1 className="text-2xl">Profit</h1>
            <p className="px-10 py-2 h-[6rem] flex place-items-center">
              Expand your mining platform. But most importantly: stay alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
