import Image from "next/image";

interface IconsMapperProps {
  img: string;
}
const IconsMapper = ({ img }: IconsMapperProps) => {
  return (
    <div style={{ width: "50px", height: "50px", marginBottom: "10px" }}>
      <Image
        src={img}
        alt="Picture of the author"
        width={50}
        height={50}
        objectFit="contain"
      />
    </div>
  );
};

export default IconsMapper;
