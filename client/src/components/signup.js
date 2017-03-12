import React, { Component } from 'react';
import {Button, Divider, Form, Icon, Modal } from 'semantic-ui-react';

class SignUpForm extends Component {
    render() {
        return (
            <Modal trigger={<Button primary={true} size="huge">Get Started</Button>}>
                <Modal.Header>Let's get started</Modal.Header>
                <Modal.Content>
                    <Button><Icon google name="google" />Sign up with Google</Button>
                    <Divider horizontal>Or</Divider>
                    <Form>
                        <Form.Field>
                            <Form.Input label="Full Name" placeholder="Full Name" name="fullname" id="fullname"/>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label="Email" placeholder="Email" name="email" id="email"/>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label="password" placeholder="password" name="password" id="password" type="password"/>
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

export default SignUpForm;