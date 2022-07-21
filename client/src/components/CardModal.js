import React, { Component } from "react";
import {v4 as uuid } from 'uuid';
import { connect } from "react-redux";
import { addCard } from '../actions/cardActions'

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
        this.preventDefault();

        const newCard = {
            id: uuid(),
            title: this.state.title
        }

        //Add card via addCard action
        this.props.addCard(newCard);
        this.toggle();
    }

    render() {
        return (
            <div>
                <button className="btn bg-slate-100 m-4 px-6 py-4 rounded-full" onClick={this.toggle}>
                    Add Card
                </button>
                { this.state.modal && 
                <div className="bg-sky-100 bg-opacity-40 backdrop-blur-sm  absolute inset-0 flex justify-center items-center">
                    <div className="modal bg-white max-w-sm p-6 rounded shadow-md text-slate-800" >
                        <div className="modal-header text-xl font-bold m-2 mx-4">
                            Add Card
                        </div>
                        <div>
                            <form>
                                <div className="block m-2 p-2">
                                    <label for="title" id="card" className="block text-gray-700 text-md font-bold mb-2 ">
                                        Title
                                    </label>
                                    <input type="text"
                                        className=" focus:outline-slate-400 duration-100 outline outline-2 outline-slate-100 focuse:outline-offset-2 p-2 flex-1 block w-full rounded-md text-md border-gray-300"
                                        placeholder="Add your title"
                                        onChange={this.onChange}></input>
                                </div>
                                <button type="submit" className=" justify-center m-2 px-4 py-2 rounded-full bg-slate-100 hover:ring-1 duration-100 hover:ring-slate-400" onSubmit={this.onSubmit}>
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    card: state.card
});

export default connect(mapStateToProps, {addCard})(CardModal);