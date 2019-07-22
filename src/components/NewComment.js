import React, {Component} from 'react';
import uuid from 'uuid';

class NewComment extends Component {

    state = {
        message: {
            username: '',
            emailaddress: '',
            textmessage: ''
        },
        error: 'false'

    }

    handleInputChange = e => {
        this.setState({
            message: {
                ...this.state.message,
                [e.target.name]: e.target.value
            }
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const {username, emailaddress, textmessage} = this.state.message;
        if (username === '' || emailaddress === '' || textmessage === '') {
            this.setState({error: true})
            return;
        }

        const newComment = {
            ...this.state.message
        };
        newComment.id = uuid();

        this
            .props
            .createNewComment(newComment);
    }

    render() {
        return (
            <div className='card mt-5 py-5'>
                <div className='card-body'>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className='form-group row'>
                            <div className='col-sm-8 col-lg-12'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre'
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.handleInputChange}/>
                            </div>

                        </div>
                        <div className='form-group row'>
                            <div className='col-sm-8 col-lg-12'>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Email'
                                    name='emailaddress'
                                    value={this.state.emailaddress}
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-sm-8 col-lg-12'>
                                <textarea
                                    type='text'
                                    className='form-control'
                                    placeholder='Mensaje'
                                    name='textmessage'
                                    value={this.state.textmessage}
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>

                        <input
                            type='submit'
                            className='py-3 mt-2 btn btn-success btn-block'
                            value='Enviar'/>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewComment;