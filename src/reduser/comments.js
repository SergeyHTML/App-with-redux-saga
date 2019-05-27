import {LOAD_COMMENTS, FAIL, START, SUCCESS} from '../constans'
import {OrderedMap, Record} from 'immutable'

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false,
    error: ''
});

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_COMMENTS + START:
            return comments
                .set('loading', true);

        case LOAD_COMMENTS + SUCCESS:
            return comments
                .setIn(['entities', payload.id], payload.response)
                .set('loading', false)
                .set('loaded', true);

        case LOAD_COMMENTS + FAIL:
            return comments
                .set('error', "Something was wrong!")
                .set('loading', false)
                .set('loaded', true);

        default:
            return comments
    }
}
