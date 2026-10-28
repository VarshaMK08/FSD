import FavoriteColor from './FavoriteColor';
import ShowHide from './ShowHide';
import Child from './ChildComponent';
import CounterEffect from './CounterEffect';

function Parent() {
  return (
    <div>
      <Child name="Rohan" />
      <Child name="Advitha" />
      <Child name="Jane" />
    </div>
  );
}

function App() {
  return (
    <div>
      <Parent />
      <hr />

      <FavoriteColor />
      <hr />

      <ShowHide />
      <hr />

      <CounterEffect />
      <hr />
    </div>
  );
}

export default App;

