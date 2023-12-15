import Spotlight from "../components/Spotlight.js";


export default function SpotlightPage({pieces}) {

  const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];
  console.log("random ", randomPicture);


  return (<>
      <h1>Art Gallery</h1>
    <Spotlight
        image={randomPicture.imageSource}
        artist={randomPicture.title}
      />
  </>);
}
