import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({images}) => {
    function getImgSource(url) {
       console.log('yee');
       if (url === 'default' || url === 'self') {
           console.log('default or self')
            return (
                <img
                src="http://www.wilwia.com/images/default-user.png"
                className="img-thumb--alt"/>
            )
        } else {
            console.log('hasImg', url)
            return (
                <img src={url}
                className="img-thumb"/>
            )
        }
    }
    return (
        getImgSource(images.data.thumbnail)
    )
}
            // return (
            //     <div className="post-thumb">
            //         <img src={getImgSource(images.data.thumbnail)} className="img-thumb"/>
            //     </div>
            // )

export default Avatar;