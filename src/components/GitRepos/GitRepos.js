import React, { useState } from 'react'
import Ajax from '../../service/Ajax'
import './GitRepos.scss'

class Contributors extends React.Component {
  render() {
    const { gitUser, repoName } = this.props

    const config = data => {
      return (
        <div className={'contributions'}>
          {data.map((e, i) => {
            return (
              <div
                key={i}
                className={'avi after'}
                style={{ backgroundImage: `url(${e.avatar_url})` }}
                name={e.login}
                value={e.contributions}
                title={`${e.contributions} contributions by ${e.login}`}
              />
            )
          })}
        </div>
      )
    }
    return (
      <Ajax
        url={`https://api.github.com/repos/${gitUser}/${repoName}/contributors`}
        config={config}
      />
    )
  }
}

const parseDate = str => {
  return new Date(Date.parse(str)).toLocaleDateString()
}

class Github extends React.Component {
  render() {
    const { user } = this.props

    const config = data => {
      return (
        <div id="github-activity">
          {Object.entries(data).map((e, i) => {
            return (
              <div key={e[0]} className="repo-container">
                <a href={data[i]['html_url']} className="h3">
                  {data[i]['name']}
                </a>
                <div className="repo-description">{data[i].description}</div>
                <div className="before margin-top" value="last updated: ">
                  {parseDate(data[i]['updated_at'])}
                </div>
                <Contributors gitUser={user} repoName={data[i]['name']} />
              </div>
            )
          })}
        </div>
      )
    }

    return <Ajax url={`//api.github.com/users/${user}/repos?sort=updated`} config={config} />
  }
}

//TODO: add input to search other users
function GitRepos() {
  const [user, setUser] = useState('nntrn')

  return (
    <div>
      <h2 className="project-title">github repo API</h2>
      <center>display repo contributors</center>
      <Github user={user} />
    </div>
  )
}

export default GitRepos
