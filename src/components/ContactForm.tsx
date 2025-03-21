import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Replace this with your actual Google Form URL
  // Look for the form action URL when inspecting your Google Form
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScx8rCaVIT_5WPYvxNC7ZhK4uQ4imq2znis9Rpu3XG-8IHDHg/formResponse';
  
  // Replace these with your actual Google Form field names
  // They typically look like "entry.123456789"
  const googleFormFields = {
    name: 'entry.1557782384',
    email: 'entry.94286970',
    message: 'entry.1336349009',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create form data to send to Google
      const googleFormData = new FormData();
      googleFormData.append(googleFormFields.name, formData.name);
      googleFormData.append(googleFormFields.email, formData.email);
      googleFormData.append(googleFormFields.message, formData.message);
      
      // CORS issues will prevent direct submission with fetch
      // We'll use a no-cors request to submit the form
      // This won't return a useful response, but the form will be submitted
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData,
      });
      
      // Clear the form after submission
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="">
      {submitStatus ? (
        <div className={`p-4 rounded-xl mb-6 ${submitStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
          {submitStatus.message}
          {submitStatus.success && (
            <button 
              onClick={() => setSubmitStatus(null)} 
              className="block mt-4 text-sm underline"
            >
              Send another message
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 transition-all resize-none"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;