import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";

export default function SubmissionForm() {

    const submitForm = (values) => {
        axios.post('http://localhost:3030/streamers', values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    platform: 'none'
                }}

                onSubmit={(values, {setSubmitting}) => {
                    submitForm(values)
                    setSubmitting(false);
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Streamer Name</label>
                        <Field id="name" name="name" placeholder="Streamer Name"/>
                        <ErrorMessage name="name"/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <Field as="textarea" id="description" name="description" placeholder="Description"/>
                        <ErrorMessage name="description"/>
                    </div>
                    <div>
                        <label htmlFor="platform">Platform</label>
                        <Field as="select" id="platform" name="platform" placeholder="Platform">
                            <option value="none">Select platform...</option>
                            <option value="twitch">Twitch</option>
                            <option value="youtube">YouTube</option>
                            <option value="tiktok">TikTok</option>
                            <option value="kick">Kick</option>
                            <option value="rumble">Rumble</option>
                        </Field>
                        <ErrorMessage name="platform"/>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
