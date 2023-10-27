import { useState } from "react";

import { useDispatch } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

//import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { SignUpContainer, ButtonsContainer } from './sign-in-form.styles';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormField] = useState(defaultFormFields);
    const { email, password } = formFields;



    const resetFormFields = () => {
        setFormField(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();

        } catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert("no user associated with this email")
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({...formFields, [name] : value });
    }

    return (
        <SignUpContainer>
            <h2>Already have a account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email'
                    type="email" 
                    onChange={handleChange} 
                    required 
                    name="email" 
                    value={email} 
                />

                <FormInput
                    label='Password'
                    type="password" 
                    onChange={handleChange} 
                    required 
                    name="password" 
                    value={password} 
                />
                <ButtonsContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign In</Button>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        type='button'
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </ButtonsContainer>
                
            </form>
        </SignUpContainer>
    );
}

export default SignInForm;