const M_Hero = () => {
  return (
    <section className="relative bg-gray-800 h-screen overflow-hidden lg:hidden">
      <video
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
            <button className="mt-4 pb-5 pt-5 pl-10 pr-10 rounded-xl bg-red-600 hover:bg-slate-500 hover:text-white">
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
