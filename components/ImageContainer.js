import Image from "next/image";

export default function ImageContainer({src, alt}) {
 
return (<Image
    src={src}
    height={240}
    width={240}
    alt={alt}
  />);
}