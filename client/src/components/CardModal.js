import React, { Component } from "react";
import {v4 as uuid } from 'uuid';
import { connect } from "react-redux";
import { addCard } from '../actions/cardActions'
import Modal from "./Modal";


class CardModal extends Component {
    state = {
        modal: false,
        title: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.title]: e.target.value });
    }


    onSubmit = e => {
        e.preventDefault();

        const newCard = {
            id: uuid(),
            title: this.state.title
        }

        //Add card via addCard action
        this.props.addCard(newCard);

        //Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <button className="btn bg-slate-100 m-4 px-6 py-4 rounded-full" onClick={this.toggle}>
                    Add Card
                </button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} onSubmit={this.onSubmit} onChange={this.onChange} state={this.state}>
                </Modal>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    card: state.card
});

export default connect(mapStateToProps, {addCard})(CardModal);