import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './style.scss'

function ArticlesList(props) {
    let {search, data} = props;

    search = search.toLowerCase();

    const el = data.filter((item) => {
        return item.title.indexOf(search) >= 0 || item.body.indexOf(search) >= 0 || !search
        })
        .map((item) => {
            return (<li className='articles-list__item' key={item.id}>
                <h3 className='articles-list__ttl'>
                    <Link to={`/${item.id}`} >{item.title}</Link>
                </h3>
                <div className='articles-list__description'><Link to={`/${item.id}`} >{item.body}</Link></div>

            </li>)
        });

    return (
        <div className='articles-list'>
            <ul className='articles-list__list'>
                {el}
            </ul>
        </div>
    )
}

ArticlesList.propTypes = {
    data: PropTypes.array.isRequired,
    search: PropTypes.string,
    bgColor: PropTypes.string,
    match: PropTypes.object.isRequired,
};

export default ArticlesList;
