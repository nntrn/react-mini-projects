import React from 'react'
import Ajax from '../../service/Ajax'
import './GitRepos.scss'

const gitUser = 'nntrn'

const git = {
  user: 'nntrn',
  repo: 'react-mini-projects'
}

const api = {
  userRepos: `https://api.github.com/repos/${git.user}`,
  commits: `https://api.github.com/repos/${git.user}/${git.repo}/commits`,
  contents: `https://api.github.com/repos/${git.user}/${git.repo}/contents`,
  contributiors: `https://api.github.com/repos/${git.user}/${git.repo}/contributors`
}

function Avi(props) {
  return (
    <div
      className={'flex before'}
      title={`${props.contributions} contributions by ${props.name} value=${props.contributions}`}
    >
      <div
        className={'avi'}
        style={props.img}
        name={props.name}
        contributions={props.contributions}
      />
    </div>
  )
}

class Repos extends React.Component {
  render() {
    const { repoName } = this.props

    const config = data => {
      return (
        <div>
          {data.map((e, i) => {
            return (
              <Avi
                key={i}
                url={e.avatar_url}
                img={{ backgroundImage: `url(${e.avatar_url})` }}
                name={e.login}
                contributions={e.contributions}
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
    const { url } = this.props

    const config = data => {
      return (
        <div id="github-activity">
          <h2 className="project-title">github repo API</h2>
          {Object.entries(data).map((e, i) => {
            return (
              <div key={e[0]} className="my">
                <h3>
                  <a href={data[i]['html_url']}>{data[i]['name']}</a>
                </h3>
                <div>{e[1].description}</div>
                <div className="before green" value="last updated: ">
                  {parseDate(data[i]['updated_at'])}
                </div>
                <Repos repoName={data[i]['name']} />
              </div>
            )
          })}
        </div>
      )
    }

    return <Ajax url={url} config={config} />
  }
}

class GitRepos extends React.Component {
  render() {
    return <Github url="//api.github.com/users/nntrn/repos?sort=created" />
  }
}

export default GitRepos
