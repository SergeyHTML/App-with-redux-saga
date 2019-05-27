import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {loadArticles, loadUsers, loadComments} from '../../AC'
import Loading from '../Loading'
import './style.scss'
import User from '../User'
import Comments from '../Comments'
import {connect} from 'react-redux'

class ArticleItem extends Component {
  static propTypes = {
    article: PropTypes.object,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const {loadArticles, article, loadUsers, loadComments, match, user, comments} = this.props;
    if (!article) loadArticles();
    if (!user) loadUsers();
    if (!comments) loadComments(match.params.id);
  }

  render() {

    const {article, user, comments} = this.props;
    const userComp = !user ? <Loading/> : <User user={user} />;
    const commentsComp = !comments ? <Loading/> : <Comments comments={comments} />;

    if (!article){
      return(
        <div className='article-item'>
          <div className="container">
            <div className="article-item__loading">
              <Loading />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className='article-item'>
        <div className="container">
          <article>
            <h1 className='article-item__ttl'>
              {article.title}
            </h1>
            <div className="article-item__user">
              {userComp}
            </div>
            <div className="article-item__text">
              {article.body}
            </div>


            <h3 className="article-item__comments-ttl">
              Comments:
            </h3>
            <div className="article-item__comments">
              {commentsComp}
            </div>
          </article>



        </div>
      </div>
    )
  }
}

export default connect((state, {match}) => ({
  article: state.articles.getIn(['entities', +match.params.id]),
  user: state.users.getIn(['entities', +match.params.id]),
  comments: state.comments.getIn(['entities', match.params.id]),
}), {loadArticles, loadUsers, loadComments})(ArticleItem)
