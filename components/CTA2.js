import Image from "next/image";

export default function CTA2() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* This is the Cave image */}
      <div className="absolute z-10 w-full h-full overflow-hidden animate-scale-bottom CTA2 ShowAnimHidden-Blur">
        <Image
          className="object-cover"
          src="/assets/renders/bottomCave.png"
          alt="Cave image"
          object-fit="cover"
          fill
        />
      </div>

      {/* This is the Blastroman image */}
      <div className="absolute z-20 w-full h-full animate-slide-blastro CTA2 ShowAnimHidden-Blur">
        <Image
          className="object-cover"
          src="/assets/renders/Blastroman.png "
          alt="Blastroman image"
          fill
        />
      </div>

      {/* This is the worm image with a transparent part */}
      <div className="absolute z-10 w-full h-full animate-scale-worm CTA2 ShowAnimHidden-Blur">
        <Image
          className="object-cover"
          src="/assets/renders/Worm.png"
          alt="Worm image"
          fill
        />
      </div>

      {/* This is the BorderCave image with a transparent middle part */}
      <div className="absolute z-30 w-full h-full animate-slide-top mb-52 CTA2 ShowAnimHidden-Blur">
        <Image
          className="object-cover"
          src="/assets/renders/caveBorder.png"
          alt="Border Cave image"
          fill
        />
      </div>

      <div className="absolute left-0 z-40 w-full h-full flex place-items-center justify-center">
        <a href="https://store.steampowered.com/app/1392650/BLASTRONAUT/">
          <button className="px-20 py-3 text-black bg-green-600 hover:bg-green-800 hover:text-white hover:scale-105 transition-all duration-200 rounded-lg animate-bounce">
            Play now!
          </button>
        </a>
      </div>
    </div>
  );
}
