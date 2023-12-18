import Image from "next/image";
import Link from "next/link";

export default function ArtImage({ piece }) {
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
