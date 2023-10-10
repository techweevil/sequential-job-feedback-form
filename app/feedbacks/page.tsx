"use client";
import FeedBack, { FeedBackProps } from "@/src/components/Feedback";
import db from "@/src/configs/db";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";



const Page = () => {
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
  }, [_ref]);

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

export default Page;
