import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(data.email)) {
    toast.error('Enter a valid Email');
  } else {
    console.log(data);
    toast.success('Thank you for joining us');
  }
  return redirect('/');
};

const Newsletter = () => {
  const nav = useNavigation();
  console.log(nav);
  const isSubmitting = nav.state === 'submitting';
  return (
    <StyleSheet>
      <Form className="form" method="POST">
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Our Newsletter
        </h3>
        <div className="heading-underline" />
        <div className="form-row">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastname" className="label">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="input"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="label">
            E-mail
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="input"
            defaultValue="test@test.com"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: '0.5rem' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
      </Form>
    </StyleSheet>
  );
};

const StyleSheet = styled.div`
  .form {
    width: 100%;
    max-width: var(--fixed-Width);
    background: var(--white);
    border-radius: var(--border-Radius);
    box-shadow: var(--shadow-20);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .label {
    display: block;
    font-size: var(--small-text);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-Spacing);
  }
  .input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--border-Radius);
    background: var(--background-Color);
    border: 1px solid var(--grey-20);
  }
  .form-row {
    margin-bottom: 1rem;
  }
  ::placeholder {
    font-family: inherit;
    color: var(--grey-40);
  }
`;
export default Newsletter;
