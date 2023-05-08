const M_Hero = () => {
  const rVideo = document.getElementById("videoElement");
  if (rVideo) {
    rVideo.pause();
    rVideo
      .play()
      .then((res) => {
        console.log("playing start", res);
      })
      .catch((err) => {
        console.log("error playing", err);
      });
  }
  return (
    <section className="relative bg-gray-800 h-screen overflow-hidden lg:hidden">
      <video
        id="videoElement"
        className="absolute z-10 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/BlastroHero-NoAudio.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center">
          <img className="" src="/assets/BlastroLogo.png" />
          <h1 className="text-3xl text-white font-bold leading-tight shadow-2xl">
            Embark on an Epic Journey
          </h1>
          <h1 className="text-xl text-white font-bold leading-tight">
            Mine, Fly, Profit, Upgrade and Conquer the World!
          </h1>
          <a href="https://store.steampowered.com/app/1392650/BLASTRONAUT/">
            <button className="mt-4 pb-5 pt-5 pl-10 pr-10 rounded-xl bg-green-600 hover:bg-green-800 hover:text-white hover:scale-105 transition-all duration-200">
              Play now on Steam
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto text-center -mt-16 text-white">
        <div className="w-full h-full grid place-items-center">
          <div className=" border-2 text-center md:w-[12rem] lg:w-[16rem] rounded-lg rounded-tl-3xl rounded-br-3xl">
            <h1 className="text-2xl">Explore</h1>
            <p>Procedural...</p>
          </div>
        </div>
        <div className="w-full h-full grid place-items-center">
          <div className=" border-2 text-center md:w-[12rem] lg:w-[16rem] rounded-lg rounded-tl-3xl rounded-br-3xl ">
            <h1 className="text-2xl">Extract</h1>
            <p>Mine, fly...</p>
          </div>
        </div>
        <div className="w-full h-full grid place-items-center">
          <div className=" border-2 text-center md:w-[12rem] lg:w-[16rem] rounded-lg rounded-tl-3xl rounded-br-3xl ">
            <h1 className="text-2xl">Profit</h1>
            <p>Upgrade...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default M_Hero;
