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

  function handelButtonClick() {}

  useEffect(() => {
    fetchImges();
  }, []);

  return (
    <div className="App pt-24">
      <Gallery />
      <Header title="hola" />
      <Logo height={100} width={100} />
      <Button onClick={handelButtonClick}>Heyo</Button>
    </div>
  );
}

export default App;
