import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import PostList from './PostList';
import { Row, Col} from 'react-materialize';


const home = (props) => {
    return (
        <div className="dashboard">
            <Row>
                <Col s={12} >
                    <PostList style={{overflowY: 'auto'}} />
                </Col>
            </Row>
        </div>
    );
}

export default home;