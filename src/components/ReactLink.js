import React from 'react'

class ReactLink extends React.Component {
  render() {
    return (
      <a
        className="App-link"
        href={this.props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {this.props.label}
      </a>
    )
  }
}

export default ReactLink