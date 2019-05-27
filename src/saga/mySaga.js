import {LOAD_ARTICLES, LOAD_AUTHOR, LOAD_COMMENTS, START} from '../constans'
import {loadUsersCusses, loadUsersError, loadArticlesCusses, loadArticlesError, loadCommentsCusses, loadCommentsError} from '../AC/index'
import { call, put, takeEvery} from 'redux-saga/effects'

function* fetchArticles() {
    try {
        const data = yield call(() => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
        });
        yield put(loadArticlesCusses(data));
    } catch (e) {
        yield put(loadArticlesError());
    }
}

function* fetchUsers() {
    try {
        const data = yield call(() => {
            return fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
        });
        yield put(loadUsersCusses(data));
    } catch (e) {
        yield put(loadUsersError());
    }
}

function* fetchComments(action) {
    const id = action.payload;

    try {
        const data = yield call(() => {
            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then(res => res.json())
        });
        yield put(loadCommentsCusses(data, id));
    } catch (e) {
        yield put(loadCommentsError());
    }
}

function* mySaga() {
    yield takeEvery(LOAD_ARTICLES + START, fetchArticles);
    yield takeEvery(LOAD_AUTHOR + START, fetchUsers);
    yield takeEvery(LOAD_COMMENTS + START, fetchComments);
}

export default mySaga
