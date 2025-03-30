import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();


  return (
    <>
      <div className="conatiner">
        <h1>Increament/ decreament counter</h1>
        <h4>using react and redux</h4>

        <div className="quantity">
          <a onClick={ () => dispatch(decNumber())} className="quantity_minus" title='decreament'><span> - </span></a>
          <input type="text" name='quantity' className='quantity__input' value={myState} />
          <a onClick={ () => dispatch(incNumber())} className="quantity_plus" title='increament'><span> + </span></a>
        </div>
      </div>
    </>
  )
}

export default App
