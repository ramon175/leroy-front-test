import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactModal from 'react-modal';
import {  Navbar, NavItem,Button, Chip, Icon,Col, Input, Row, Modal } from 'react-materialize';
import { addPost } from '../actions/posts';
import { toggleModal } from '../actions/modal';
import { addDescription } from '../actions/post';
import moment from 'moment';


const Header = (props) => {
    const onAddPost = () => {
        props.dispatch(toggleModal())
    }

    const handleChange = (e) => {
        props.dispatch(addDescription({description: e.target.value }));
    }

    const onAddPostHandler = (description) => {
        props.dispatch(addPost({description: props.post, user: 'Usuário', votes: 1, createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')}));
        props.dispatch(toggleModal())

    }
    
    
    

    return (
        <div>
        <ReactModal contentLabel="Modal" isOpen={props.modal.isOpen} >
            <Row>
                <Col s={12}>
                    <Col s={12}>
                        <Button className="white" onClick={() => {props.dispatch(toggleModal())}}><Icon className="red-text">close</Icon></Button>
                    </Col>
                    <Col s={12}>
                        <Input s={12} placeholder="Descrição"  onChange={ handleChange.bind(this) } />
                    </Col>
                    <Col s={12}>
                        <Button onClick={onAddPostHandler.bind(null, props.post)} className="center" >Adicionar</Button>
                    </Col>
                </Col>
            </Row>
        </ReactModal>
        <Navbar className="blue-grey darken-1" left>
	        <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
            <li><Col><Icon>search</Icon></Col></li>
            <li><Input placeholder="Filter Posts" /></li>
            <li className="right"><Col><Icon>face</Icon></Col></li> 
            <li className="right"><Button className="red white-text" onClick={onAddPost}>Add Post</Button></li>
            
        </Navbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        modal: state.modal,
        post: state.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps)(Header);