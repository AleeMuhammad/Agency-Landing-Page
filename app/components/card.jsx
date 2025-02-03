import Image from "next/image";

export default function Card({title,text,src}) {
  return (
    <div className="flex sm:space-x-5 flex-wrap mt-10 lg:mt-0 items-center justify-center ">
      <div className="relative">
        <span className="bg-[#3461FF] rounded-xl font-extrabold px-10 py-8"></span>
        <Image
          className="absolute top-0 right-[1.6rem] "
          alt=""
          src={src}
          width={30}
          height={0}
        />
      </div>
      <div className="space-y-4 text-center md:text-start py-10 lg:py-0">
        <h1 className="font-medium text-2xl">{title} </h1>
        <p className="text-[#686868]   sm:w-[28rem]">
          {text}
        </p>
      </div>
    </div>
  );
}
