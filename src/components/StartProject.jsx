// src/components/StartProject.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, ScrollReveal } from "./ui";
import { startProjectFields } from "../constants";

const StartProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Logic for Formspree or other submission would go here if requested
  };

  return (
    <section id="start-project" className="py-16 md:py-28 bg-surface-section">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className={`flex flex-col mb-16 text-center items-center`}>
            <span className="text-gold font-sans text-xs uppercase tracking-[0.2em] mb-4">
              Start a Project
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
              Ready to craft your next masterpiece?
            </h2>
            <p className="max-w-140 text-text-secondary font-sans">
              Briefly describe your goals below and our team will get in touch
              to schedule a private discovery session.
            </p>
          </div>
        </ScrollReveal>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-160 mx-auto mt-12 space-y-6"
        >
          {startProjectFields.map((field, idx) => (
            <ScrollReveal key={field.name} delay={field.delay} threshold={0.1}>
              <Input
                label={field.label}
                name={field.name}
                type={field.type}
                placeholder={
                  field.type === "select"
                    ? "Select a project type"
                    : field.placeholder
                }
                options={field.options}
                register={register}
                error={errors[field.name] ? "This field is required" : null}
                required={field.required}
              />
            </ScrollReveal>
          ))}

          <ScrollReveal delay={500} className="pt-6">
            <Button
              type="submit"
              variant="primary"
              className="w-full text-xl py-4 shadow-lg"
            >
              Request Consultation
            </Button>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
};

export default StartProject;
