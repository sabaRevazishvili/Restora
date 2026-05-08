// src/constants/forms.js
export const startProjectFields = [
  { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'John Doe', delay: 0, required: true },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com', delay: 100, required: true },
  { label: 'Phone (optional)', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', delay: 200, required: false },
  { 
    label: 'Project Type', 
    name: 'projectType',
    type: 'select', 
    options: ['New Restaurant', 'Renovation', 'Consulting', 'Other'],
    delay: 300,
    required: true
  },
  { label: 'Project Details', name: 'details', type: 'textarea', placeholder: 'Tell us about your culinary vision...', delay: 400, required: true },
];
