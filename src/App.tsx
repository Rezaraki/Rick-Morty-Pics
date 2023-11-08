import { useEffect } from 'react';
import { useAppDispatch } from 'state/typedHooks';
import getRickMortyPics from 'state/actions/getRickMortyPics';
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
      <Gallery />
    </div>
  );
}

export default App;
