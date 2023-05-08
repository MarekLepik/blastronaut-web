const M_Hero = () => {
  return (
    <section className="relative bg-gray-800 h-screen overflow-hidden lg:hidden">
      <video
        id="videoElement"
        className="absolute z-10 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/Blastro-Hero-Small.mp4" type="video/mp4" />
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
    </section>
  );
};

export default M_Hero;
