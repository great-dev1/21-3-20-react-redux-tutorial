import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../actions/index'

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
}

export class Post extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(el =>
          <li key={el.id}>{el.title}</li>
        )}
      </ul>
    )
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post)