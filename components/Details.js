import Image from "next/image";
import React, { useEffect, useRef } from "react";

function Details() {
  //style={{ backgroundImage: "url('assets/render_21.png')" }}

  const elementRef = useRef(null);

  const handleScroll = () => {
    if (elementRef.current) {
      const scrollY = window.scrollY;

      elementRef.current.style.transform = `translateY(-${scrollY}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="space-y-5 2xl:pt-52 px-4 bg-cover bg-center lg:max-w-[90rem] mx-auto w-full overflow-hidden">
      {/*First descript */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-20 lg:h-[30rem] lg:space-y-0">
        <div className="col-start-1 w-full relative text-white">
          <div className="top-40 right-20 z-20 lg:absolute space-y-4 ShowAnimHidden-Left">
            <h1 className="text-4xl text-white font-bold leading-tight">
              Locate & Gather
            </h1>
            <p className="text-justify max-w-md text-2xl">
              Navigating through treacherous terrain to discover and mine
              valuable resources. As you progress, you will uncover a variety of
              ores hidden deep within the earth. Be prepared, as each mining
              expedition will present its own set of challenges and obstacles.
            </p>
          </div>
          <div className="animate-slide-drone absolute z-10 w-40 h-40 left-0 bottom-0 lg:block hidden">
            <Image
              className="object-contain fixed"
              src="/assets/renders/drone1.png"
              alt="Drone image"
              object-fit="cover"
              fill
            />
          </div>
        </div>

        <div className="lg:col-start-2 w-full h-full relative text-white pt-10 lg:pt-0">
          <div className="relative lg:top-40 z-20 space-y-4 h-[15rem] w-full lg:w-1/2 mx-auto ShowAnimHidden-Left">
            <Image
              className="object-cover rounded-2xl"
              src="/assets/locateScreen.png"
              alt="Locate image"
              object-fit="cover"
              fill
            />
          </div>
        </div>
      </div>

      {/*Second Descript */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:h-[30rem] space-y-10">
        <div className="col-start-1 order-2 w-full h-full relative text-white pt-10 lg:pt-0">
          <div className="relative z-20 space-y-4 h-[15rem] w-full lg:w-1/2 mx-auto ShowAnimHidden-Right">
            <Image
              className="object-cover rounded-2xl"
              src="/assets/surviveScreen.png"
              alt="Survive image"
              object-fit="cover"
              fill
            />
          </div>
        </div>
        <div className="col-start-1 lg:col-start-2 w-full relative text-white">
          <div className=" left-20 z-20 lg:absolute space-y-4">
            <h1 className="text-4xl text-white font-bold leading-tight ShowAnimHidden-Right">
              Survive
            </h1>
            <p className="text-justify max-w-md text-2xl ShowAnimHidden-Right">
              Adapt your tactics and skillfully employ your arsenal of tools. As
              you strive to endure the perils of this hazardous planet, make the
              most of your resources and overcome all odds to secure your
              survival.
            </p>
          </div>
          <div className="animate-slide-blastro absolute z-10 w-32 h-32 right-0 bottom-0 lg:block hidden">
            <Image
              className="object-contain fixed"
              src="/assets/renders/Blastro2-cropped.png"
              alt="Blastro figure"
              object-fit="cover"
              fill
            />
          </div>
        </div>
      </div>

      {/*Third descript */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-20 lg:h-[30rem]">
        <div className="col-start-1 w-full relative text-white">
          <div className=" right-20 z-20 lg:absolute space-y-4">
            <h1 className="text-4xl text-white font-bold leading-tight ShowAnimHidden-Left">
              Upgrade
            </h1>
            <p className="text-justify max-w-md text-2xl ShowAnimHidden-Left">
              As you mine resources, you will earn profits that can be used to
              upgrade your tools, weapons, and jetpack. Enhancing your gear will
              enable you to mine faster, deal more damage to enemies.
            </p>
          </div>
        </div>

        <div className="lg:col-start-2 w-full h-full relative text-white pt-10 lg:pt-0 pb-20 lg:pb-0">
          <div className="relative z-20 space-y-4 h-[15rem] w-full lg:w-1/2 mx-auto ShowAnimHidden-Left pb-10">
            <Image
              className="object-cover rounded-2xl"
              src="/assets/upgradeScreen.png"
              alt="Upgrade image"
              object-fit="cover"
              fill
            />
          </div>
          <div className="w-full h-full">
            <div className="col-start-1 lg:col-start-2 w-full relative text-white">
              <div
                ref={elementRef}
                className="absolute z-10 w-40 h-40 right-0 lg:left-0 bottom-0 lg:block hidden"
              >
                <Image
                  className="object-contain"
                  src="/assets/renders/drone2.png"
                  alt="drone image"
                  object-fit="cover"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
