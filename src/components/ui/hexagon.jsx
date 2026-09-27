import Image from "next/image";

const Hexagon = ({src}) => {
  return (
    <div className="relative flex h-9.5 w-9.5 items-center justify-center">
      {/*  Hexagon border */}
      <div
        className="absolute inset-0 bg-primary
        [clip-path:polygon(25%_7%,75%_7%,100%_50%,75%_93%,25%_93%,0%_50%)]"
      >
        <div
          className="absolute inset-[1px] bg-white
          [clip-path:polygon(25%_7%,75%_7%,100%_50%,75%_93%,25%_93%,0%_50%)]"
        ></div>
      </div>

      {/* Icon */}
      <div className="relative z-10">
        <Image src={src} width={21} height={21} alt="icon"/>
      </div>
    </div>
  );
};

export default Hexagon;
