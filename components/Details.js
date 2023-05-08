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
    <div className="space-y-5 px-4 bg-cover bg-center lg:max-w-[90rem] mx-auto w-full overflow-hidden">
      {/*First descript */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-20 h-[50rem]">
        <div className="col-start-1 w-full relative text-white">
          <div className="top-40 right-20 z-20 absolute space-y-4">
            <h1 className="text-4xl text-white font-bold leading-tight ShowAnimHidden-Left">
              Locate & Gather
            </h1>
            <p className="text-justify max-w-md text-2xl ShowAnimHidden-Left">
              Navigating through treacherous terrain to discover and mine
              valuable resources. As you progress, you will uncover a variety of
              ores hidden deep within the earth. Be prepared, as each mining
              expedition will present its own set of challenges and obstacles.
            </p>
          </div>

          <div className="animate-slide-drone absolute z-10 w-40 h-40 left-0 bottom-0">
            <Image
              className="object-contain fixed"
              src="/assets/renders/drone1.png"
              alt="Cave image"
              object-fit="cover"
              fill
            />
          </div>
        </div>
      </div>

      {/*Second Descript */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[30rem]">
        <div className="col-start-1 lg:col-start-2 w-full relative text-white">
          <div className=" left-20 z-20 absolute space-y-4">
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
          <div className="animate-slide-blastro absolute z-10 w-32 h-32 right-0 bottom-0">
            <Image
              className="object-contain fixed"
              src="/assets/renders/Blastro2-cropped.png"
              alt="Cave image"
              object-fit="cover"
              fill
            />
          </div>
        </div>
      </div>
      {/*Third descript */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-20 h-[30rem]">
        <div className="col-start-1 w-full relative text-white">
          <div className=" right-20 z-20 absolute space-y-4">
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
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        <div className="col-start-1 lg:col-start-2 w-full relative text-white">
          <div
            ref={elementRef}
            className="absolute z-10 w-40 h-40 right-0 lg:left-0 bottom-0"
          >
            <Image
              className="object-contain"
              src="/assets/renders/drone2.png"
              alt="Cave image"
              object-fit="cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
