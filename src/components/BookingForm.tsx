import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  preferredClass: string;
  date: Date;
}

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  preferredClass: yup.string().required(),
  date: yup.date().required()
});

const BookingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="booking" className="py-20 bg-sage-400/10">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl text-center mb-10">
          Book a Class
        </h2>
        {isSubmitSuccessful ? (
          <p className="text-center text-xl">
            Thanks for booking! Check your email for confirmation.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto grid gap-6"
          >
            <input
              placeholder="Name"
              {...register("name")}
              className={`p-3 rounded border ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            <input
              placeholder="Email"
              {...register("email")}
              className={`p-3 rounded border ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            <input
              placeholder="Phone"
              {...register("phone")}
              className={`p-3 rounded border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            <select
              {...register("preferredClass")}
              className={`p-3 rounded border ${
                errors.preferredClass ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a Class</option>
              <option value="Vinyasa">Vinyasa</option>
              <option value="Hatha">Hatha</option>
              <option value="Yin">Yin</option>
            </select>
            <DatePicker
              selected={undefined}
              onChange={(date) => setValue("date", date as Date)}
              placeholderText="Preferred Date & Time"
              className={`p-3 rounded border w-full ${
                errors.date ? "border-red-500" : "border-gray-300"
              }`}
              showTimeSelect
              dateFormat="Pp"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-charcoal-800 rounded font-semibold hover:opacity-90 transition font-body"
            >
              Book Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
