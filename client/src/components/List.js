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
            // <section>
            //     <div className='m-4'>
            //         <ul className='w-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200'>
            //             {cards.map(({ id, title }) => (
            //                 <li className='flex justify items-center py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600'>
            //                     <div className='m-1'>
            //                         {id}
            //                     </div>
            //                     <div className='m-1'>
            //                         {title}
            //                     </div>
            //                     <button className='btn m-2 p-3 bg-indigo-300 rounded-lg' onClick={this.onDeleteClick.bind(this, id)}>Some Operation</button>
            //                 </li>
            //             ))}

            //         </ul>
            //     </div>
            // </section>
            <Container>
                <ListGroup>
                    <TransitionGroup className="list">
                        {cards.map(({ id, title }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                        {title}
                                </ListGroupItem>
                                <Button onClick={this.onDeleteClick.bind(this, id)}>
                                    Some Operation &times;
                                </Button>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
                <Button>

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