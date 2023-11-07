import { useEffect } from 'react';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { useAppDispatch, useAppSelector } from 'state/typedHooks';
import getRickMortyPics from 'state/actions/getRickMortyPics';
import ImageCard from 'components/ImageCard';
import Gallery from 'components/Gallery';

function App() {
  const dispatch = useAppDispatch();
  function fetchImges() {
    dispatch(getRickMortyPics());
  }

  useEffect(() => {
    fetchImges();
  }, []);

  return (
    <div className="App pt-24">
      {/* <Header title="header" /> */}
      <Gallery />
    </div>
  );
}

export default App;
