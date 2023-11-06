import Grid from '@mui/material/Grid';
import { useAppSelector } from 'state/typedHooks';
import ImageCard from './ImageCard';
import Skeleton from '@mui/material/Skeleton';

function Gallery() {
  const {
    pics: { images, status },
  } = useAppSelector((state) => state.app);

  return (
    <Grid container justifyContent="center" spacing={5}>
      {status === 'succeeded'
        ? images.map((imgName, i) => (
            <Grid key={i + imgName.name} item>
              <ImageCard imgName={imgName} />
            </Grid>
          ))
        : new Array(20).fill(null).map((_, i) => (
            <>
              <Grid key={i} item>
                <Skeleton height="300px" width="300px" />
                <Skeleton width="50%" />
              </Grid>
            </>
          ))}
    </Grid>
  );
}
export default Gallery;
