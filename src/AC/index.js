import {FAIL, LOAD_ARTICLES, LOAD_AUTHOR, LOAD_COMMENTS, START, SUCCESS} from '../constans'

export function loadArticles() {
  return {
    type: LOAD_ARTICLES + START
  }
}

export function loadArticlesCusses(response) {
  return {
    type: LOAD_ARTICLES + SUCCESS,
    payload: {response}
  }
}

export function loadArticlesError(data) {
  return {
    type: LOAD_ARTICLES + FAIL,
    payload: {data}
  }
}


// load author post
export function loadUsers() {
  return {
    type: LOAD_AUTHOR + START
  }
}

export function loadUsersCusses(response) {
  return {
    type: LOAD_AUTHOR + SUCCESS,
    payload: {response}
  }
}

export function loadUsersError(data) {
  return {
    type: LOAD_AUTHOR + FAIL,
    payload: {data}
  }
}


// comments for post
export function loadComments(postId) {
  return {
    type: LOAD_COMMENTS + START,
    payload: postId
  }
}

export function loadCommentsCusses(response, id) {
  return {
    type: LOAD_COMMENTS + SUCCESS,
    payload: {response, id}
  }
}

export function loadCommentsError(data) {
  return {
    type: LOAD_COMMENTS + FAIL,
    payload: {data}
  }
}
