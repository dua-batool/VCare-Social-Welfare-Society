
import axios from 'axios';

// In a real app, this would point to your actual backend API
const API_URL = 'https://api.helpinghands.org/api';

// For demo purposes, we'll use a mock function
// In a real application, this would send data to your backend
export const sendContactForm = async (formData: any) => {
  try {
    // For demo, we'll simulate a successful API call
    console.log('Contact form data:', formData);
    
    // Uncomment this in a real app with an actual backend
    // const response = await axios.post(`${API_URL}/contact`, formData);
    // return response.data;
    
    // Mock response
    return {
      success: true,
      message: 'Your message has been sent successfully. We will contact you soon!'
    };
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw new Error('Failed to send your message. Please try again later.');
  }
};

export const sendDonationForm = async (formData: any) => {
  try {
    console.log('Donation form data:', formData);
    
    // Uncomment in real app
    // const response = await axios.post(`${API_URL}/donate`, formData);
    // return response.data;
    
    return {
      success: true,
      message: 'Thank you for your generous donation! A confirmation email has been sent to you.'
    };
  } catch (error) {
    console.error('Error processing donation:', error);
    throw new Error('Failed to process your donation. Please try again later.');
  }
};

export const sendVolunteerForm = async (formData: any) => {
  try {
    console.log('Volunteer form data:', formData);
    
    // Uncomment in real app
    // const response = await axios.post(`${API_URL}/volunteer`, formData);
    // return response.data;
    
    return {
      success: true,
      message: 'Thank you for your interest in volunteering! Our team will contact you shortly.'
    };
  } catch (error) {
    console.error('Error submitting volunteer form:', error);
    throw new Error('Failed to submit your volunteer application. Please try again later.');
  }
};
