import Image from "next/image";
import Link from "next/link";

export default function ArtImage({ piece }) {
  console.log(piece);
  console.log(piece.slug);

  return (
    <div className="art-image">
      <Link href={`/art-pieces/${piece.slug}`}>
        <Image
          src={piece.imageSource}
          height={240}
          width={240}
          alt={piece.name}
        />
      </Link>
    </div>
  );
}
