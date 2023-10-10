const FeedBack = ({
    question,
    handleChange,
    index,
  }: {
    question: {
      question: string;
      type: string;
      answer: string;
    };
    index: number;
    handleChange: (e: any, index: number) => void;
  }) => {
    return (
      <div
        className="
        border-2 border-gray-300 rounded-lg p-2 m-2 w-full
        dark:border-gray-700 dark:bg-gray-800/30 dark:text-gray-200
      "
      >
        <h3>{question?.question}</h3>
        <textarea
          value={question?.answer}
          onChange={(e) => handleChange(e, index)}
          placeholder="Type your answer here"
          className="border-2 border-gray-300 rounded-lg p-2  w-full  text-gray-700 dark:border-gray-700 dark:bg-gray-800/30 dark:text-gray-200"
          rows={5}
        ></textarea>
      </div>
    );
  };

  export default FeedBack;