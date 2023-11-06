import { IImageName } from 'types';

function ImageCard({ imgName }: { imgName: IImageName }) {
  return (
    <article className="drop-shadow-md border rounded-md">
      <img src={imgName.image} alt={imgName.name} className="rounded-md" />

      <h2 className="text-center">{imgName.name}</h2>
    </article>
  );
}
export default ImageCard;
