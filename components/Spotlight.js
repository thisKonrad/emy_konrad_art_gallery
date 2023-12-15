import Image from "next/image";

export default function Spotlight({ image, artist, title }) {
  return (
    <div>
      <Image src={image} alt={title} height={340} width={340} />
      <h2>Artist name: {artist}</h2>
    </div>
  );
}
