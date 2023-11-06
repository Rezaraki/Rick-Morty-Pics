import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { useAppDispatch, useAppSelector } from 'state/typedHooks';
import getRickMortyPics from 'state/actions/getRickMortyPics';

function App() {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  function handelButtonClick() {
    dispatch(getRickMortyPics());
  }
  return (
    <div className="App pt-24">
      <Header title="hola" />
      <Logo height={100} width={100} />
      <Button onClick={handelButtonClick}>Heyo</Button>
    </div>
  );
}

export default App;
