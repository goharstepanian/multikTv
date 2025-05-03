import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { useAppDispatch } from "./hooks/hooks";
import { getFilms } from "./store/slices/Films/filmsSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilms(1));
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
