import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import M from 'materialize-css';

class Contact extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            buttonText: 'Send',
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            buttonText: 'Sending...'
        });
        const newContact = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };

        axios.post('/sendMessage', newContact)
            .then(res => {
                M.toast({ 
                    html: res.data.msg
                });
                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    buttonText: 'Send',
                    errors: {}
                });
            })
        
            .catch(err => {
                console.log(err.response.data);
                if (err.response.status === 400) {
                    this.setState({
                        ...this.state,
                        buttonText: 'Send',
                        errors: err.response.data
                    });
                } else {
                    M.toast({ 
                        html: 'Message not sent. Try again.'
                    }); 
                }
            });
    }

    render () {
        const { errors } = this.state;
        return (
            <div className="contact-form row container">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h3>Contact Us</h3>
                        <p>Have a question or suggestion? Please leave a message.</p>   
                    </div>
                    <div className="col s12 m6 l6 input-field">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className={classnames('validate', {
                                'invalid': errors.name
                            })}
                            onChange={this.onChange}
                            value={this.state.name} 
                            autoFocus
                        />
                        <label htmlFor="name">Enter Full Name</label>
                        <span className="helper-text" data-error={errors.name}></span>
                    </div>
                    <div className="col s12 m6 l6 input-field">
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className={classnames('validate', {
                                'invalid': errors.email
                            })}
                            onChange={this.onChange} 
                            value={this.state.email} 
                        />
                        <label htmlFor="email">Enter Email Address</label>
                        <span className="helper-text" data-error={errors.email}>e.g. john@doe.com</span>
                    </div>
                    <div className="col s12 m12 l12 input-field">
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            className={classnames('validate', {
                                'invalid': errors.subject
                            })}
                            onChange={this.onChange} 
                            value={this.state.subject} 
                        />
                        <label htmlFor="subject">Message Subject</label>
                        <span className="helper-text" data-error={errors.subject}></span>
                    </div>
                    <div className="col s12 m12 l12 input-field">
                        <textarea 
                            id="message" 
                            name="message" 
                            className={classnames('materialize-textarea validate', {
                                'invalid': errors.message
                            })}
                            onChange={this.onChange} 
                            value={this.state.message}>
                        </textarea>
                        <label htmlFor="name">Enter Message here...</label>
                        <span className="helper-text" data-error={errors.message}></span>
                    </div>
                    <div className="col s12">
                        <button 
                            className="btn"
                        >
                            {this.state.buttonText}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;