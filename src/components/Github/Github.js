import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
  }, [user]) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  const handleSubmit = e => {
    e.preventDefault()
    setUser(inputValue)
  }

  // Return a table with some data from the API.
  return (
    <div className="main">
      <h1>{inputValue}</h1>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={e => setValue(e.target.value)} />
      </form>
      <div id="github-activity">
        {Object.entries(user).map((e, i) => {
          return (
            <div key={e[0]} className="repo-container">
              <a href={user[i]['html_url']} className="h3">
                {user[i]['name']}
              </a>
              <div className="repo-description">{user[i].description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
