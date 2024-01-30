import Image from "next/image";
import Link from "next/link";
import ArtPieceCardStyle from '../styles/ArtPieceCardStyle.module.css';


export default function ImageContainer({ piece }) {
  return (
    <div className={ArtPieceCardStyle.image_wrap}>
      <Link href={`/art-pieces/${piece.slug}`}>
        <Image
          src={piece.imageSource}
          height={260}
          width={260}
          alt={piece.name}
          className={ArtPieceCardStyle.image}
        />
      </Link>
    </div>
  );
}
