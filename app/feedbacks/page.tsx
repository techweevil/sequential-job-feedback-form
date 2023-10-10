"use client";
import db from "@/src/configs/db";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type FeedBackProps = {
  name: string;
  email: string;
  questions: {
    question: string;
    type: string;
    answer: string;
  }[];
};

const FeedBack = ({
  name,
  email,
  questions,
}: FeedBackProps) => {
  return (
    <div className=" text-gray-700 dark:border-gray-700 dark:bg-gray-800/30 dark:text-gray-200 p-2">
      <h2 className="text-lg font-semibold">{name}</h2>
      <h3 className="text-sm">{email}</h3>
      
      <div>
        {questions.map((question, index) => (
          <div
            key={index}
            className="
              border-2 border-gray-300 rounded-lg p-2 my-2 w-full
              dark:border-gray-700 dark:bg-gray-800/30 dark:text-gray-200 
            "
          >
            <h3>{question?.answer}</h3>
            <p className="text-gray-500 text-[10px]">{question?.question}</p>
            
            </div>
        ))}

      </div>
    </div>
  );
};

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]) as any[];
  const _ref = collection(db, "sequential-job-feedbacks");

  useEffect(() => {
    const getFeedbacks = async () => {
      const doc = await getDocs(_ref);
      let feedbacks = [] as any[];
      doc.forEach((doc) => {
        feedbacks.push(doc.data());
      });
      setFeedbacks(feedbacks);
      console.log(feedbacks);
    };
    getFeedbacks();
  }, []);

  return (
    <div className="m-auto flex align-middle items-center justify-center">
     <div className="lg:w-[50%] md:w-[60%] w-[80%]">
     {feedbacks.map((feedback:FeedBackProps, index:number) => (
        <FeedBack
          key={index}
          name={feedback.name}
          email={feedback.email}
          questions={feedback.questions}
        />
      ))}
     </div>
    </div>
  );
};

export default Feedbacks;
