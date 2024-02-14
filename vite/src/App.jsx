import React from 'react';
import './App.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { dataFetching, fetchDataFunction } from './Redux/Action';

const App = () => {
  const data = useSelector((store) => store.data)
  console.log(data)
  const dispatch = useDispatch()
  const getData = () => {
      // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {console.log(res.data), dispatch(fetchDataFunction(res.data))})
      dispatch(dataFetching())
  }
  return (
    <div>
      {data.map((el) => {
        return <div key={el.id}>
          <p>{el.name}</p>
          <p>{el.email}</p>
          <hr />
        </div>
      })}
      <button onClick={getData}>GetData</button>
    </div>
  );
}

export default App;
