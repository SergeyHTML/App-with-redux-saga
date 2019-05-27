import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadArticles} from '../../AC'
import ArticlesList from '../ArticlesList'
import SearchInput from '../SearchInput'
import Loading from '../Loading'
import './style.scss'

class ArticlesPage extends Component{
  static propTypes = {
    articles: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {search: ''};
  }
  componentDidMount() {
    const {loadArticles, isLoading, isLoaded} = this.props;
    if (!isLoading && !isLoaded) loadArticles()
  }

  render() {
    const {articles, isLoading, isError, match} = this.props;

    const heroesGrid = isError.length > 0 ? <div>{isError}</div> : <div>
      <ArticlesList match={match} search={this.state.search} data={articles}/>
    </div>;

    const loading = <Loading />;

    return (
      <div className='heroes-page'>
        <div className="container">
          <SearchInput onSearch={this.handleSearchChange}/>

          {isLoading ? loading : heroesGrid}
        </div>
      </div>
    )
  }

  handleSearchChange = (value) => {
    this.setState({
      search: value
    })
  }
}

export default connect((state) => ({
  articles: state.articles.entities.valueSeq().toArray(),
  isLoading: state.articles.loading,
  isLoaded: state.articles.loaded,
  isError: state.articles.error
}), {loadArticles})(ArticlesPage);
