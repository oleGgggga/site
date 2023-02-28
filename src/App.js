import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchData} from './redux/itemsSlice';
import Header from './Components/Header';
import PagesRouter from './routes/PagesRouter';
import Footer from './Components/Footer';
function App(){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">
      <Header/>
      <PagesRouter/>
      <Footer/>
    </div>
  );
}

export default App;
