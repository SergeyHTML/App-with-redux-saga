import {LOAD_AUTHOR, FAIL, START, SUCCESS} from '../constans'
import {OrderedMap, Record} from 'immutable'

const DefaultReducerState = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: ''
});

export default (users = new DefaultReducerState(), action) => {
  const {type, payload} = action;

  function arrayToMap(arr) {
    return arr.reduce((acc, el) => acc.set(el.id, el), new OrderedMap({}))
  }
  switch (type) {
    case LOAD_AUTHOR + START:
      return users
        .set('loading', true);

    case LOAD_AUTHOR + SUCCESS:
      return users
        .set('entities', arrayToMap(payload.response))
        .set('loading', false)
        .set('loaded', true);

    case LOAD_AUTHOR + FAIL:
      return users
          .set('error', "Something was wrong!")
          .set('loading', false)
          .set('loaded', true);

    default:
      return users
  }
}
