import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal_Fetching_sheet from './Modal_Fetching_sheet'
import Modal_data from './Modal_data'
const Home = () => {
  const [name, setName] = useState([])
  const [year, setYear] = useState([])
  const [month, setMonth] = useState([])
  const [profitorLoss, setProfitorLoss] = useState([])
  const [asset, setAsset] = useState([])
  const [loan, setLoan] = useState([])
  const [data, setData] = useState([])
  const [balanceSheet, setBalanceSheet] = useState([])


  const FetchingBalanceSheet = (e) => {
    e.preventDefault()
    axios.get('/data')
      .then(data => setBalanceSheet(data.data))
      .catch(e => console.log(e))
  }

  const submit = (e) => {
    e.preventDefault()
    axios.post('/data/submit', { name, year, month, profitorLoss, asset, loan })
      .then(res => setData(res.data))
      .catch(e => console.log(e))
  }
 
  return (
    <>
    <h1 className='text-center'>Loan Application</h1>
      <form onSubmit={submit} className='container mt-5 w-50'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Name of Business</label>
          <input required onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Year Established</label>
          <input required onChange={(e) => setYear(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Month</label>
          <input required onChange={(e) => setMonth(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Profit or Loss</label>
          <input required onChange={(e) => setProfitorLoss(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Assets Value</label>
          <input required onChange={(e) => setAsset(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Loan Amount</label>
          <input required onChange={(e) => setLoan(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="row">
          <div className="col">
            <select class="form-select mb-3" aria-label="One">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-4">
            <button onClick={FetchingBalanceSheet} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Fetch Balance Sheet
            </button>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
          Submit
        </button>
      </form>
      <Modal_Fetching_sheet data={balanceSheet} />
      <Modal_data  data ={data}  />
    </>
  )
}

export default Home