import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from '../actions/cardActions'
import { Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label } from 'reactstrap'

class CardModal extends Component {
    state = {
        modal: false,
        title: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    onSubmit = e => {
        e.preventDefault();

        const newCard = {
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
                <Button color="dark" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
                    Add Card
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Card
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="card">Card Title</Label>
                                <Input type="text" name="title" id="card" placeholder="Add Card Title" onChange={this.onChange}/>
                                <Button color="dark" style={{ marginTop: '2rem' }} block>Save</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    card: state.card
});

export default connect(mapStateToProps, { addCard })(CardModal);