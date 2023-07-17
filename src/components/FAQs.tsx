import { FC } from "react";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQs: FC<FAQProps> = ({ question, answer }) => {
  return (
    <div className="container cursor-pointer space-y-2">
      <details className="rounded-lg my-10 md:mx-10 border border-gray-700 hover:shadow-md text-white bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        <summary className="px-4 py-3 block">{question}</summary>
        <div className="px-4 pb-3 animate-sweep">
          <p>{answer}</p>
        </div>
      </details>
    </div>
  );
};

export default FAQs;
