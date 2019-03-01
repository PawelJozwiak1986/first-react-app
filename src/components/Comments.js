import React from 'react'

class Comments extends React.Component {
  render() {
    return (
      <p>
        {this.props.bold
          ? <strong>{this.props.children}</strong>
          : this.props.children
        }
      </p>
    )
  }
}

export default Comments