import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import emailjs from 'emailjs-com'
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";

const Contact = () => {
    const [sendForm, setSendForm] = useState(false);
    const user_id = '3fnlrd5hutuQtwmAv';
    const template_id = 'template_om6qmvf';
    const service_id = 'service_y28hwac';

    return (
        <Box id='contact' className="container-fluid" sx={{ marginBottom: 10, marginTop: 10 }}>
            <Typography variant="h3" sx={{ color: '#fff', fontFamily: 'Oswald', textAlign: 'center', margin: 2, textDecorationLine: 'underline', textDecorationColor: '#ff5800' }}>
                CONTACT
            </Typography>
            <Formik
                validate={({ name, email, message }) => {
                    let errors = {}
                    //VALIDACION NOMBRE
                    if (!name) {
                        errors.name = 'Please enter a name'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)) {
                        errors.name = 'The name can only contain letters and spaces'
                    }
                    //VALIDACION EMAIL
                    if (!email) {
                        errors.email = 'Please enter an email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
                        errors.email = 'Email can only have letters, numbers, dots, dashes, and underscores.'
                    }
                    //VALIDACION MESSAGE
                    if (!message) {
                        errors.message = 'Plese live a message'
                    }
                    return errors
                }}
                initialValues={{
                    name: '',
                    email: '',
                    message: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    resetForm()
                    setSendForm(true)
                    setTimeout(() => setSendForm(false), 5000)
                    emailjs.send(service_id, template_id, values, user_id).then(res => console.log(res))
                }}
            >
                {({ errors }) => (
                    <Form method="post" className="w-100">
                        <div className="m-2">
                            <label htmlFor="name" className="text-white">Name</label>
                            <Field
                                type="text"
                                name="name"
                                id="name"
                                className='form-control bg-dark text-white'
                                placeholder="John Doe"
                            />
                            <ErrorMessage name="name" component={() => (
                                <p className="text-danger">{errors.name}</p>
                            )} />
                        </div>
                        <div className="m-2">
                            <label htmlFor="email" className="text-white">Email</label>
                            <Field
                                type="text"
                                name="email"
                                id="email"
                                className='form-control bg-dark text-white'
                                placeholder="johndoe@hotmail.com"
                            />
                            <ErrorMessage name='email' component={() => (
                                <p className="text-danger">{errors.email}</p>
                            )} />
                        </div>
                        <div className="m-2">
                            <label htmlFor="message" className="text-white">Message</label>
                            <Field
                                as='textarea'
                                name="message"
                                id="message"
                                className="form-control bg-dark text-white"
                                placeholder="Leave a message"
                                cols="20"
                                rows="5"
                            />
                            <ErrorMessage name='message' component={() => (
                                <p className="text-danger">{errors.message}</p>
                            )} />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <Button className="w-50" type="submit" variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                            {sendForm && <p className="text-success mt-2">Submitted form!</p>}
                        </div>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default Contact;