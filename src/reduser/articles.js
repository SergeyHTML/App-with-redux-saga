import {FAIL, LOAD_ARTICLES, START, SUCCESS} from '../constans'
import {OrderedMap, Record} from 'immutable'

const DefaultReducerState = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: ''
});

export default (articles = new DefaultReducerState(), action) => {
  const {type, payload} = action;

  function arrayToMap(arr) {
    return arr.reduce((acc, el) => acc.set(el.id, el), new OrderedMap({}))
  }
  switch (type) {
    case LOAD_ARTICLES + START:
      return articles
        .set('loading', true);

    case LOAD_ARTICLES + SUCCESS:
      return articles
        .set('entities', arrayToMap(payload.response))
        .set('loading', false)
        .set('loaded', true);

    case LOAD_ARTICLES + FAIL:
      return articles
          .set('error', "Something was wrong!")
          .set('loading', false)
          .set('loaded', true);

    default:
      return articles
  }
}
