import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='data:image/jpeg;base64,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' alt='Фото' />
            {props.message}

            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>


    )
};
export default Post;