import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f0e6;
  color: #000;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const SubmitButton = styled.button`
  background-color: #d4af37;
  color: #000;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 25px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b38f1a;
  }
`;

const SubmissionStatus = styled.p`
  background-color: #e8f5e9; /* Light green */
  color: #2e7d32; /* Dark green */
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
`;

const ErrorStatus = styled(SubmissionStatus)`
  background-color: #fdecea; /* Light red */
  color: #b71c1c; /* Dark red */
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const InfoTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.5rem;
`;

const ContactLabel = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  color: #d4af37;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submission, setSubmission] = useState({
    status: 'idle', // 'idle', 'loading', 'success', 'error'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset status on new input
    if (submission.status !== 'idle') {
      setSubmission({ status: 'idle', message: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmission({ status: 'loading', message: '' });

    // Replace with your actual EmailJS credentials
    const serviceID = 'service_qjcus4d';
    const templateID = 'template_hqp4jtc';
    const publicKey = 'UVpwGSnCVG--rj1SC';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmission({ status: 'success', message: 'Thank you for your message! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmission({ status: 'error', message: 'Something went wrong. Please try again later.' });
      });
  };

  return (
    <ContactSection id="contact">
      <Title>Contact Me</Title>
      <ContactContainer>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <FormTitle>Send a Message</FormTitle>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit" disabled={submission.status === 'loading'}>
            {submission.status === 'loading' ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {submission.status === 'success' && (
            <SubmissionStatus>{submission.message}</SubmissionStatus>
          )}
          {submission.status === 'error' && (
            <ErrorStatus>{submission.message}</ErrorStatus>
          )}
        </ContactForm>
        <ContactInfo>
          <InfoTitle>Get in Touch</InfoTitle>
          <ContactItem>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>
              <ContactLink href="mailto:nmmotswiane@gmail.com">nmmotswiane@gmail.com</ContactLink>
            </ContactValue>
          </ContactItem>
          <ContactItem>
            <ContactLabel>WhatsApp</ContactLabel>
            <ContactValue>
              <ContactLink href="https://wa.me/27733978321" target="_blank" rel="noopener noreferrer">
                +27 73 397 8321
              </ContactLink>
            </ContactValue>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Professional Profiles</ContactLabel>
            <SocialLinks color="#000" size="1.8rem" gap="1.5rem" />
          </ContactItem>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
