// src/constants/forms.js
export const startProjectFields = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "john@example.com",
    required: true,
  },
  {
    label: "Phone (optional)",
    name: "phone",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
    required: false,
  },
  {
    label: "Project Type",
    name: "projectType",
    type: "select",
    options: ["New Restaurant", "Renovation", "Consulting", "Other"],

    required: true,
  },
  {
    label: "Project Details",
    name: "details",
    type: "textarea",
    placeholder: "Tell us about your culinary vision...",
    required: true,
  },
];
