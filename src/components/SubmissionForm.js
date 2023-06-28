import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import ErrorText from "./ErrorText";

export default function SubmissionForm() {
  const submitForm = (values) => {
    axios
      .post("http://localhost:3030/streamers", values)
      .then((res) => console.log(res))
      .catch((err) => alert(err.response.data.error));
  };

  const submissionFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name has to be at least 3 characters")
      .max(20, "Name has to be less than 20 characters")
      .required("Name required"),
    description: Yup.string()
      .min(10, "Description has to be at least 10 characters")
      .max(1000, "Description has to be less than 1000 characters")
      .required("Description required"),
    platform: Yup.string()
      .oneOf(
        ["Twitch", "YouTube", "TikTok", "Kick", "Rumble"],
        "Please select a platform"
      )
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
          platform: "none",
        }}
        validationSchema={submissionFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          submitForm(values);
          setSubmitting(false);
        }}
      >
        <Form className="submission-form">
          <h3>
            Please use this form to submit a streamer you would like to see on
            the site.
          </h3>
          <div className="form-field">
            <div className="field-title">
              <label
                className="form-label"
                htmlFor="name"
              >
                Streamer Name
              </label>
              <ErrorMessage
                name="name"
                render={(msg) => <ErrorText message={msg} />}
              />
            </div>
            <Field
              className="form-input"
              id="name"
              name="name"
            />
          </div>
          <div className="form-field">
            <div className="field-title">
              <label
                className="form-label"
                htmlFor="description"
              >
                Description
              </label>
              <ErrorMessage
                name="description"
                render={(msg) => <ErrorText message={msg} />}
              />
            </div>
            <Field
              className="form-input form-area"
              as="textarea"
              id="description"
              name="description"
            />
          </div>
          <div className="form-field">
            <div className="field-title">
              <label
                className="form-label"
                htmlFor="platform"
              >
                Platform
              </label>
              <ErrorMessage
                name="platform"
                render={(msg) => <ErrorText message={msg} />}
              />
            </div>
            <Field
              className="form-select"
              as="select"
              id="platform"
              name="platform"
            >
              <option value="none">Select platform...</option>
              <option value="Twitch">Twitch</option>
              <option value="YouTube">YouTube</option>
              <option value="TikTok">TikTok</option>
              <option value="Kick">Kick</option>
              <option value="Rumble">Rumble</option>
            </Field>
          </div>
          <button
            className="submit-button"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
