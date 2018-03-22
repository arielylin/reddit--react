import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({post}) => (
    <div className="post-listing">
        <div className="post-title">
            <a href={post.data.url}>
                {post.data.title}
            </a>
        </div>
    </div>
)


export default Posts;