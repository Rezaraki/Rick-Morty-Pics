import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from 'state/typedHooks';
import ImageCard from './ImageCard';
import Skeleton from '@mui/material/Skeleton';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import getRickMortyPics from 'state/actions/getRickMortyPics';

function Gallery() {
  const [page, setPage] = useState(1);
  const {
    pics: { images, status, count },
  } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const pages = Math.ceil(count / 20);

  function handleChange(_: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    dispatch(getRickMortyPics(value));
  }

  return (
    <>
      <Grid container justifyContent="center" spacing={5}>
        {status === 'loading'
          ? new Array(20).fill(null).map((_, i) => (
              <>
                <Grid key={'skleton' + i} item>
                  <Skeleton height="300px" width="300px" />
                  <Skeleton width="50%" />
                </Grid>
              </>
            ))
          : status === 'succeeded' &&
            images.map((imgName, i) => (
              <Grid key={i + imgName.name} item>
                <ImageCard imgName={imgName} key={imgName.name + i} />
              </Grid>
            ))}
      </Grid>

      <div className="flex justify-center w-full">
        {status === 'failed' ? (
          <div>Couldn&rsquo;t fetch data.</div>
        ) : (
          <Pagination count={pages} onChange={handleChange} />
        )}
      </div>
    </>
  );
}
export default Gallery;
