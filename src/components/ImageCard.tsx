import { IImageName } from 'types';

function ImageCard({ imgName }: { imgName: IImageName }) {
  return (
    <article className="drop-shadow-md border rounded-md w-full">
      <img
        src={imgName.image}
        alt={imgName.name}
        className="rounded-md object-contain sm:w-[300px] sm:h-[300px] w-full aspect-square"
        loading="lazy"
      />

      <h2 className="text-center">{imgName.name}</h2>
    </article>
  );
}
export default ImageCard;
