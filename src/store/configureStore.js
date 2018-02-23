import React from 'react';
import { createStore, combineReducers } from 'redux';
import postsReducer from '../reducers/posts';
import modalReducer from '../reducers/modal';
import postReducer from '../reducers/post';

export default () => {

    const rootReducer = combineReducers({
        posts: postsReducer,
        modal: modalReducer,
        post: postReducer
    })

    const store = createStore(rootReducer);

    return store;
}