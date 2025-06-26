// src/components/BookingForm.tsx
import React from "react";
import { useForm, Controller, UseFormRegister, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// The correct class data was provided by the user in a previous turn.
const classPackages = [
  {
    type: "Yoga",
    title: "Weekday Batches",
  },
  {
    type: "Yoga",
    title: "Weekend Batches",
  },
  {
    type: "Yoga",
    title: "Full Week Batches",
  },
  {
    type: "Face Yoga",
    title: "Face Yoga Sessions",
  },
];

// --- Define the types for the form data ---
interface FormValues {
  name: string;
  email: string;
  phone: string;
  preferredClass: string;
  date: Date;
}

// --- Helper component for input fields ---
interface InputFieldProps {
  label: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, register, errors, placeholder, type = "text" }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-2 text-lg font-body font-medium text-charcoal-800">
      {label}
    </label>
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full p-3 rounded-lg border bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
        errors[name] ? "border-red-400 focus:ring-red-200" : "border-sage-400/50"
      }`}
    />
    {errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name].message}</p>}
  </div>
);


// --- Validation Schema ---
const schema = yup.object({
  name: yup.string().required("Your name is required"),
  email: yup.string().email("Must be a valid email").required("Your email is required"),
  phone: yup.string().required("A contact number is required"),
  preferredClass: yup.string().required("Please select a class"),
  date: yup.date().required("Please select a date and time").typeError("A valid date is required"),
});

// --- Main Booking Form Component ---
const BookingForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<FormValues>({ resolver: yupResolver(schema) });

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('There was an error submitting the form:', error);
            alert('Sorry, there was an issue submitting your inquiry. Please try again later.');
        }
    };

    return (
        <section id="booking" className="pt-5 pb-20 bg-beige-100">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-heading text-4xl text-charcoal-800 mb-4">Book a Class</h2>
                    <p className="text-lg font-body text-charcoal-800 mb-10">
                        Take the first step on your yoga journey. Fill out the form below to express your interest.
                    </p>
                </div>

                <div className="lg:w-5/6 xl:w-3/4 mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg">
                    {isSubmitSuccessful ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-charcoal-800 mb-3">Thank you for your interest!</h3>
                            <p className="text-charcoal-800">We'll reach out to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                           <div className="md:col-span-2"><InputField label="Full Name" name="name" register={register} errors={errors} placeholder="e.g., Savita Bhabhi" /></div>
                            <div><InputField label="Email Address" name="email" register={register} errors={errors} placeholder="e.g., kendrick.lamar@example.com" /></div>
                            <div><InputField label="Phone Number" name="phone" register={register} errors={errors} placeholder="e.g., 8888888888" /></div>
                           <div className="md:col-span-2">
                                <label htmlFor="preferredClass" className="mb-2 text-lg font-body font-medium text-charcoal-800">Preferred Class</label>
                                <select
                                  id="preferredClass"
                                  {...register("preferredClass")}
                                  defaultValue=""
                                  required
                                  className={`w-full p-3 rounded-lg border bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 text-charcoal-800 invalid:text-gray-400 ${errors.preferredClass ? "border-red-400 focus:ring-red-200" : "border-sage-400/50"}`}
                                >
                                  <option value="" disabled>Select a Class...</option>
                                  {classPackages.map((item) => (
                                    <option key={item.title} value={item.title}>
                                      {item.title}
                                    </option>
                                  ))}
                                </select>
                                {errors.preferredClass && <p className="mt-1 text-xs text-red-600">{errors.preferredClass.message}</p>}
                            </div>
                           {/* THE CHANGE IS HERE: Reverted to a stacked layout and added wrapperClassName */}
                           <div className="md:col-span-2">
                                <label htmlFor="date" className="block mb-3 text-lg font-body font-medium text-charcoal-800">Preferred Date & Time</label>
                                <Controller control={control} name="date" render={({ field }) => (
                                    <DatePicker
                                      id="date"
                                      wrapperClassName="w-full" // This ensures the component's container is full-width
                                      selected={field.value}
                                      onChange={(date) => field.onChange(date)}
                                      placeholderText="Click to select a date and time"
                                      className={`w-full p-3 rounded-lg border bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 ${errors.date ? "border-red-400 focus:ring-red-200" : "border-sage-400/50"}`}
                                      showTimeSelect
                                      dateFormat="MMMM d,<x_bin_42> h:mm aa"
                                    />
                                )}/>
                                {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date.message}</p>}
                            </div>
                           <div className="md:col-span-2 text-center">
                                <button
                                  type="submit"
                                  disabled={isSubmitting}
                                  className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-300 disabled:bg-gray-300"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BookingForm;