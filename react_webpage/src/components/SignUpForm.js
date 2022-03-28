import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUpForm = () => {
    return(
        <Form>
            <div>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password'></Form.Control>
                </Form.Group>
            </div>
        </Form>
    );
};

export default SignUpForm;