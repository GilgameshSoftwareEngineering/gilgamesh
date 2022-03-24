import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

const FormGroup = styled.div`
    .main_group{
        width: 20vw;
        margin-left: 5em;
    }
    .login_label{
        margin-right: 15em;
    }
    .submit_btn{
        background-color: #006F51;
        width: 20vw;
    }
    .login_info{
        display: flex;
        font-size: 10px;
        justify-content: space-between;
    }
    a{
        text-decoration: none;
    }
`

const FormPage = () => {
    return(
        <FormGroup>
            <Form>
            <Form.Group className='main_group'>
                <Form.Group className='mb-3 email_group'>
                    <Form.Label className='login_label'>Email</Form.Label>
                    <Form.Control className='' type='email'/>
                </Form.Group>
                <Form.Group className='mb-3 password_group'>
                    <Form.Label className='login_label'>Password</Form.Label>
                    <Form.Control className='password' type='password'/>
                </Form.Group>
                <Form.Group className='login_info'>
                    <Form.Check type='checkbox' label='Remeber Me'/>
                    <a href=''>Forgot your password?</a>
                </Form.Group>
                <Form.Group className='mb-3 btn_group'>
                    <Button className='submit_btn' onClick=''>Sign In</Button>
                </Form.Group>
            </Form.Group>
            </Form>
        </FormGroup>
    );
};

export default FormPage;