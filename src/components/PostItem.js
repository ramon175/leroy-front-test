import React from 'react';
import { Row, Button ,Col, Card, Collection, CollectionItem, Badge, Icon, Chip } from 'react-materialize';
import { connect } from 'react-redux';
import { removePost, upVotePost } from '../actions/posts';


const PostItem = (props) => {
    const onDelete = (id) => {
        props.dispatch(removePost({id: id}))
    }

    const onUpVote = (id) => {
        props.dispatch(upVotePost({id: id}))
    }
    return (
        <div className="postItem">
            <Row>
                <Col s={12}>
                <Collection>
	                <CollectionItem className="flow-text">
                        <Col s={2}>
                            <Chip close={false}>{props.tag}</Chip>
                        </Col>
                        <Col s={2}>
                            <Col s={12}>
                                <Button className="white black-text" onClick={onUpVote.bind(null, props.id)} >
                                    <Icon className="teal-text">keyboard_arrow_up</Icon>{props.votes}
                                </Button>
                            </Col>
                        </Col>
                        <Col s={2}>
                            <p className="flow-text" style={{fontSize: 9}}>{props.description}</p>
                            </Col>
                        <Col s={2}>
                            <p className="flow-text blue-text" style={{fontWeight: 'bold', fontSize: 7}}>{props.user}</p>
                        </Col>
                        <Col s={2}>
                            <p className="flow-text" style={{fontSize: 9}}>{props.createdAt}</p>
                        </Col>
                        <Col s={2}>
                            <Button className="white right"  onClick={onDelete.bind(null, props.id)}><Icon className="red-text">close</Icon></Button>
                        </Col>
                    </CollectionItem>
                </Collection>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostItem);