const Hero = () => {
  return (
    <section className=" lg:h-[50rem] lg:max-w-[80rem] xl:max-w-[90] 2xl:max-w-[150rem] mx-auto pb-40 px-5 hidden lg:block">
      <div className="w-full mx-auto grid place-items-center BlastroLogo xl:pb-10">
        <img className="" src="/assets/BlastroLogo.png" />
      </div>
      <div className="grid grid-cols-3 lg:gap-2 lg:flex-row items-center md:justify-between mx-auto w-full h-[30rem] 2xl:h-[40rem]">
        <div className="col-span-1 gap-10 place-items-center z-30">
          <h1 className="text-4xl 2xl:text-center text-white font-bold leading-tight ShowAnimHidden-Left">
            Jetpack into the epic Adventure:
          </h1>
          <h1 className="text-2xl 2xl:text-center text-white font-bold leading-tight mb-5 ShowAnimHidden-Left">
            Mine, Fly, Profit, Upgrade
          </h1>
          <div className="flex gap-4 text-center mt-14 ">
            <div className="w-full CTA1 ShowAnimHidden-Left">
              <a href="https://store.steampowered.com/app/1392650/BLASTRONAUT/">
                <button className="font-bold text-xl px-7 py-4 xl:py-5 2xl:px-16 xl:px-10 rounded-xl blastroButton shadow-xl">
                  Play now!
                </button>
              </a>
            </div>
            <div className="w-full text-white text-start CTA1 ShowAnimHidden-Left grid items-center">
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
        <div className="col-span-2 h-full w-full">
          <div className="relative w-full h-full grid place-items-center object-contain ShowAnimHidden-Right">
            <video
              className="absolute z-30 w-full h-full object-cover md:object-contain"
              autoPlay
              loop
              muted
            >
              <source src="/assets/Blastro-Hero-Small.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto text-center pt-5 2xl:pt-20 text-white">
        <div className="w-full h-full grid place-items-center detailsRow ShowAnimHidden-Left">
          <div className=" border-2 py-8 text-center lg:w-[20rem] 2xl:w-[24rem] h-[13rem] rounded-3xl grid place-items-center">
            <h1 className="text-3xl -mt-1/2 font-bold">Explore</h1>
            <p className="px-10 flex place-items-center text-2xl">
              Vast procedurally generated world with your jetpack
            </p>
          </div>
        </div>
        <div className="w-full h-full grid place-items-center detailsRow ShowAnimHidden-Left">
          <div className=" border-2 py-4 text-center lg:w-[20rem] 2xl:w-[24rem] h-[13rem] rounded-3xl grid place-items-center">
            <h1 className="text-3xl -mt-1/2 font-bold">Extract</h1>
            <p className="px-10 flex place-items-center text-2xl">
              Extract the minerals with an explosive gel
            </p>
          </div>
        </div>
        <div className="w-full h-full grid place-items-center detailsRow ShowAnimHidden-Left">
          <div className=" border-2 py-4 text-center lg:w-[20rem] 2xl:w-[24rem] h-[13rem] rounded-3xl grid place-items-center">
            <h1 className="text-3xl -mt-1/2 font-bold">Profit</h1>
            <p className="px-10 flex place-items-center text-2xl">
              Expand your mining platform. But most importantly: stay alive
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
