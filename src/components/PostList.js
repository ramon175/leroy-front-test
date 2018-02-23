import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { Modal, Button, Row } from 'react-materialize';

const PostList = (props) => {
    return (
        <div>
            
            {props.posts.map(post => {
                return <PostItem {...post} key={post.id} />
            })}
        </div>
    );
    
}

const mapStateToProps = (state) => {
   return {
       posts: state.posts
   }
}

export default connect(mapStateToProps)(PostList);