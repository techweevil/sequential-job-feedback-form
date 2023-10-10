"use client";
import FeedBack from "@/src/components/_Feedback";
import db from "@/src/configs/db";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import React from "react";



export default function Home() {
  // handle form submission
const __DEV__ = process.env.NODE_ENV === "development";

  const [name, setName] = useState(__DEV__ ? "John Doe" : "");
  const [email, setEmail] = useState(__DEV__ ? "weevil@gmail.com" : "");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [questions, setQuestions] = useState([
    {
      question: "How was your experience with us?",
      type: "text",
      answer: __DEV__ ? "Good" : "",
    },
    {
      question: "How likely are you to recommend us to a friend?",
      type: "text",
      answer: __DEV__ ? "Very likely" : "",
    },
    {
      question: "What can we do to improve?",
      type: "text",
      answer: __DEV__ ? "Nothing" : "",
    },
    {
      question: "any other comments?",
      type: "text",
      answer: __DEV__ ? "No" : "",
    },
  ]);

  const handleQuestionChange = (e: any, index: number) => {
    let newQuestions = [...questions];
    newQuestions[index].answer = e.target.value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    if (loading) return;
    //checks
    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!questions.every((question) => question.answer)) {
      alert("Please answer all questions");
      return;
    }

    const data = {
      name,
      email,
      questions,
    };

    setLoading(true);

    try {
      const docRef = doc(db, "sequential-job-feedbacks", email);
      await setDoc(docRef, data);
      alert("Thank you for your feedback");
      setSubmitted(true);
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error submitting feedback");
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome😊&nbsp; we are happy to have you give your feedback on this app
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
       <div>
     
       <h2 className="my-[1em]  text-4xl font-bold text-center text-white dark:text-white lg:text-6xl">
          Sequential Job Application
        </h2>
       </div>
      </div>

      {submitted ? (
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-700 dark:text-gray-200">
            Thank you for your feedback
          </h1>
        </div>
      ) : (
        <div className="lg:w-[40%] md:w-[60%] w-[80%] p-2">
          <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200">
            Feedback Form
          </h2>
          <div>
            <div className=" m-2">
              <h3>Name</h3>
              <input
               value={name}
                type="text"
                placeholder="Name"
                className="border-2 border-gray-300 rounded-lg p-2 w-full text-gray-700 dark:border-gray-700 dark:bg-gray-800/30 dark:text-gray-200"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" m-2 mt-4">
              <h3>Email</h3>
              <input
              value={email}
                type="text"
                placeholder="Email"
                className="border-2 border-gray-300 rounded-lg p-2  w-full  text-gray-700 dark:border-gray-700 dark:bg-gray-800/30 dark:text-gray-200"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              {questions.map((question, index) => (
                <FeedBack
                  key={index}
                  question={question}
                  index={index}
                  handleChange={handleQuestionChange}
                />
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-[10em] lg:w-auto w-full m-2 "
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
