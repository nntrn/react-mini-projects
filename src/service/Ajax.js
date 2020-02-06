import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class Ajax extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ajaxRequests: [],
      loading: true,
      error: null,
    }
  }

  componentDidMount() {
    axios
      .get(this.props.url)
      .then(res => {
        const ajaxRequests = res.data

        this.setState({
          ajaxRequests,
          loading: false,
          error: null,
        })
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err,
        })
      })
  }

  renderLoading() {
    return <div>Loading...</div>
  }

  renderError() {
    return <div>Uh oh: {this.state.error.message}</div>
  }

  renderAjax() {
    const ajaxRequest = this.state.ajaxRequests

    if (this.state.error) {
      return this.renderError()
    }

    return this.props.config(ajaxRequest)
  }

  render() {
    return <div>{this.state.loading ? this.renderLoading() : this.renderAjax()}</div>
  }
}

Ajax.propTypes = {
  url: PropTypes.string,
  config: PropTypes.object,
  entries: PropTypes.array,
}
