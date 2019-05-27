import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function Comments(props) {
    const {comments} = props;

    const el = comments.map((item) => {
        return (
            <li className="comments__item" key={item.id}>

                <div className="comments__item-text">{item.body}</div>

                <div className="comments__item-name">Name: {item.name} / Email: {item.email}</div>
            </li>
        )
    });

    return (
        <ul className="comments__list">
            {el}
        </ul>
    )
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
};
export default Comments
