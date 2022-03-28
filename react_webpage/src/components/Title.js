import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const TitleSection = styled.div`
    .main_title{
        margin-top: 10vh;
        margin-right: 70vw;
    }
    .secondary_title{
        margin-top: 5vh;
        margin-right: 70vw;
        color: #006F51;
    }
    a{
        text-decoration: none;
    }
    .signup_link{
        font-size: 12px;
        margin-top: 2em;
        margin-right: 70vw;
    }
`

const Title = () => {
    return(
        <TitleSection>
            <div>
                <h4 className='main_title'>Sign In</h4>
                <div className='secondary_title'>
                    <h5>Welcome to Commerce Bank</h5>
                    <h5>Open Source Tracking</h5>
                </div>
                <div className='signup_link'>
                    <p>Don't have an account? <Link to = '/SignUp'>Sign Up</Link></p>
                </div>
            </div>
        </TitleSection>
    );
};

export default Title;