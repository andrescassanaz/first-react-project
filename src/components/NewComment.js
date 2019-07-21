import React, {Component} from 'react';

class NewComment extends Component {
    state = {}
    render() {
        return (
            <div className='card mt-5 py-5'>
                <div className='card-body'>
                    <form>
                        <div className='form-group row'>
                            <div className='col-sm-8 col-lg-12'>
                                <input type='text' className='form-control' placeholder='Nombre' name='name'/>
                            </div>

                        </div>
                        <div className='form-group row'>
                            <div className='col-sm-8 col-lg-12'>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Email'
                                    name='emailaddress'/>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className='col-sm-8 col-lg-12'>
                                <textarea
                                    type='text'
                                    className='form-control'
                                    placeholder='Mensaje'
                                    name='message'/>
                            </div>
                        </div>

                        <input type='submit' className='py-3 mt-2 btn btn-success btn-block' value='Enviar'/>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewComment;