import Image from "next/image";


export default function Spotlight({ image, artist, title }) {
  return (
    <div>
      <Image src={image} alt={title} height={440} width={440}/>
      <h2>Artist name: {artist}</h2>
    </div>
  );
}
