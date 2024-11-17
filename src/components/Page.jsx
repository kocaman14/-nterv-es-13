import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enterNumber, halfButton, doubleButton, incrementButton, decrementButton, clearNumber, sendNumber } from '../features/math'
import './style.css'

const Page = () => {
  const dispatch = useDispatch()
  const { number, process, newAr } = useSelector((state) => state.mathLab)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendNumber())
  };

  return (
    <div className="container">

      <div className="button-container">
        <button onClick={() => dispatch(halfButton())}>Yarım</button>
        <button onClick={() => dispatch(doubleButton())}>İki Katı</button>
        <button onClick={() => dispatch(incrementButton())}>Arttır</button>
        <button onClick={() => dispatch(decrementButton())}>Azalt</button>
        <button onClick={() => dispatch(clearNumber())}>Temizle</button>
      </div>


      <div className="transactions">
        <h2>Transactions</h2>
        {process.length > 0 && process.map((pross, index) => (
          <ul key={index} className="transactions-list">
            <li className="transaction-item">{pross.name}</li>
          </ul>
        ))}
      </div>


      <h1>Fonksiyonum</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type='number'
          value={number}
          onChange={(e) => dispatch(enterNumber(Number(e.target.value)))}
        />
        <button type='submit'>Gönder</button>
      </form>


      <div className="result">
        <h3 className="result-title">Son yürütme</h3>
        {newAr.length > 0 && (
          <p className="result-text">
            <span>Bir önceki işlem {newAr[0]}</span> --- <span>Fonksiyonum</span> --- <span>Sonuç {newAr[1]}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Page
