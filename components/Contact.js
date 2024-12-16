import React from "react";
import { useState } from "react";
import { FormData } from "formdata-node";
import axios from "axios";
import { useForm } from "react-hook-form";
import Heading from "./Heading";

const contactform = {
  en: {
    title: "Contact",
    name: "Your Name",
    email: "Email Address",
    message: "Message",
    sendMessage: "Send Message",
  },
  es: {
    title: "Contacto",
    name: "Tu Nombre",
    email: "Correo",
    message: "Mensaje",
    sendMessage: "Manda Correo",
  },
};

export default function Contact({ locale }) {
  console.log("NEXT_PUBLIC_EMAIL_URL"); // Accessible in the browser
  console.log(process.env.NEXT_PUBLIC_EMAIL_URL); // Accessible in the browser

  const form = contactform[locale];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(false);

  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  function submitForm(data, evt) {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    let EMAIL_URL = process.env.NEXT_PUBLIC_EMAIL_URL;

    console.log("EMAIL_URL", EMAIL_URL);

    setResponse(false);
    console.log("start");

    return new Promise((resolve) => {
      axios.post(EMAIL_URL, formData).then((res) => {
        console.log("promised response");
        console.log(res);
        setResponse(true);
        resolve();
      });
    });
  }

  return (
    <section
      className="dark:bg-darkBlue3
    bg-alt2   bg-no-repeat bg-right-bottom bg-araucaria"
      id="contact"
    >
      <Heading text={form.title} />
      <div className="container mx-auto my-1 py-1">
        <div className="w-full max-w-2xl mx-auto my-2">
          <div className="p-6 border  rounded-md">
            {response ? (
              <>
                <h2 className="p-6 text-5xl text-red-600 text-center font-extrabold">
                  ENVIADO
                </h2>
              </>
            ) : (
              ""
            )}
            <form
              method="post"
              onSubmit={handleSubmit(submitForm)}
              className={response ? "hidden" : ""}
            >
              <label className="block mb-6 px">
                <span className="">{form.name}</span>
                <input
                  id="name-2"
                  type="text"
                  name="your-name"
                  className="block w-full mt-1  border-gray-300 rounded-md shadow-sm p-2 px-3 dark:text-white dark:bg-darkGrayishBlue"
                  placeholder="Pedro RiosLibres"
                  minLength={3}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label className="block mb-6">
                <span className=" ">{form.email}</span>
                <input
                  name="your-email"
                  type="email"
                  className="p-2 px-3 block w-full mt-1 border-gray-300 rounded-md shadow-sm dark:text-white dark:bg-darkGrayishBlue"
                  placeholder="juan.pedro@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  minLength={5}
                />
              </label>
              <label className="block mb-6">
                <span className=" ">{form.message}</span>
                <textarea
                  name="your-message"
                  className="dark:text-white dark:bg-darkGrayishBlue p-2 px-3 block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  rows="3"
                  placeholder="Cuenta nos que estas pensando..."
                  minLength={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
              <div className="mb-2">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className=" h-10 px-5 text-indigo-100 bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800  inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed
          "
                >
                  {isSubmitting && (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </>
                  )}{" "}
                  {form.sendMessage}
                </button>
              </div>
            </form>
            <a
              href="https://wa.me/1234567890" // Replace '1234567890' with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-5 right-5 bg-green-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}