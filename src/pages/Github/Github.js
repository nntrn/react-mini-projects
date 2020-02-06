import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Github.scss'
import { parseDate } from '../../utils'

function Contributors(props) {
  // const [inputValue, setValue] = useState(props.repo)
  const [repo, setRepo] = useState(props.repo)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getRepo = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(
        `https://api.github.com/repos/${props.user}/${props.repo}/contributors`,
      )
      // Update state
      setRepo(data)
    }

    getRepo()
    // `[]` prevents useEffect from running in an infinite loop
  }, [props.repo, props.user])

  return <div className="main">{JSON.stringify(repo)}</div>
}

export default function Github() {
  const [inputValue, setValue] = useState('nntrn')
  const [user, setUser] = useState(inputValue)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getUser = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(`https://api.github.com/users/${user}/repos?sort=updated`)
      // Update state
      setUser(data)
    }

    getUser()
  }, [user]) // `[]` prevents useEffect from running in an infinite loop

  const handleSubmit = e => {
    e.preventDefault()
    setUser(inputValue)
  }

  return (
    <>
      <center>
        <h4>user lookup: {inputValue}</h4>
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={e => setValue(e.target.value)} />
        </form>
      </center>
      <div id="github-activity">
        {Object.entries(user).map((e, i) => {
          return (
            <div key={e[0]} className="card">
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <a href={user[i]['html_url']} className="h3 text" text={user[i]['name']} />
              <div className="text" text={user[i].description} />
              <div className="text" text={parseDate(user[i].updated_at)} before="last updated: " />
              <Contributors user={user} repo={user[i]['name']} />
            </div>
          )
        })}
      </div>
    </>
  )
}
