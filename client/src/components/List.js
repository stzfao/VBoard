import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCards, deleteCard } from '../actions/cardActions';
import PropTypes from 'prop-types';

class List extends Component {

    componentDidMount() {
        this.props.getCards();
    };

    onDeleteClick = (id) => {
        this.props.deleteCard(id);
    };

    render() {
        const { cards } = this.props.card;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="list">
                        {cards.map(({ _id, title }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem >
                                    {title}
                                    <Button onClick={this.onDeleteClick.bind(this, _id)} className="mx-4">
                                        &times;
                                    </Button>
                                </ListGroupItem>

                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
                <Button className='m-4 px-6' style={{borderRadius: '40px'}}>
                            IDK
                </Button>
            </Container>
        );
    }
}

List.propTypes = {
    getCards: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    card: state.card
});

export default connect(mapStateToProps, { getCards, deleteCard })(List);