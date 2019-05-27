import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function User(props) {
    const {user} = props;

    return (
        <div className="article-author">
            <div className="article-author__ttl">
                Author:
            </div>
            <ul className="article-info">
                <li className="article-info-item">
                    <span>Name:</span> {user.name} ({user.username})
                </li>

                <li className="article-info-item">
                    <span>Email:</span> {user.email}
                </li>

            </ul>

        </div>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User
