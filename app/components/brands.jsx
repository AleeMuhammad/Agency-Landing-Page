import Image from "next/image";

export default function Brands({title, src,className }) {
  return (
    <div className="space-y-3">
      <Image src={src} width={350} height={240} alt="apple"  className= {className}/>
      <p className="text-center font-medium text-lg mt-3">{title}</p>
    </div>
  );
}
