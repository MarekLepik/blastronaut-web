import Image from "next/image";

export default function CTA2() {
  return (
    <div className="relative w-full h-screen overflow-hidden imgDiv">
      {/* This is the Cave image */}
      <div className="absolute imgDiv z-10 w-full h-full overflow-hidden animate-scale-bottom CTA2 ShowAnimHidden-Blur">
        <Image
          className="object-cover"
          src="/assets/renders/bottomCave.png"
          alt="Cave image"
          object-fit="cover"
          fill
        />
      </div>

      {/* This is the Blastroman image */}
      <div className="absolute imgDiv z-20 w-full h-full animate-slide-blastro CTA2 ShowAnimHidden-Blur">
        <Image
          className="object-cover"
          src="/assets/renders/Blastroman.png"
          alt="Blastroman image"
          fill
        />
      </div>

      {/* This is the worm image with a transparent part */}
      <div className="absolute imgDiv z-10 w-full h-full animate-scale-worm CTA2 ShowAnimHidden-Blur">
        <Image
          className="object-cover"
          src="/assets/renders/Worm.png"
          alt="Worm image"
          fill
        />
      </div>

      {/* This is the BorderCave image with a transparent middle part */}
      <div className="absolute imgDiv z-30 w-full h-full animate-slide-top mb-52 CTA2 ShowAnimHidden-Blur">
        <Image
          className="object-cover"
          src="/assets/renders/caveBorder.png"
          alt="Border Cave image"
          fill
        />
      </div>

      <div className="absolute left-0 z-40 w-full h-full flex place-items-center justify-center overflow-hidden">
        <a href="https://store.steampowered.com/app/1392650/BLASTRONAUT/">
          <button className="text-2xl px-32 py-5 font-bold text-black rounded-lg animate-bounce blastroButton shadow-2xl">
            Play now!
          </button>
        </a>
      </div>
    </div>
  );
}
