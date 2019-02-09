import React from 'react'

class Paragraph extends React.Component {
  render() {
    return (
      <p>
        {this.props.children}
      </p>
    )
  }
}

export default Paragraph