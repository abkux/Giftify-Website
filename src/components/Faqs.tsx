import { FC } from 'react';

interface FaqsProps {
    question: string;
    answer: string;
}

const Faqs: FC<FaqsProps> = ({ question, answer }) => {
    return (
    
<div className="bg-[#1f2937] m-2 md:m-2 flex flex-col justify-center items-center space-y-4">
  <h1 className="text-5xl font-bold text-white">FAQs</h1>


  <div className="container cursor-pointer space-y-2">
    <details className="rounded-lg m-2 md:m-40 border border-gray-300 hover:shadow-md text-white bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
      <summary className="px-4 py-3">{question}</summary>
      <div className="px-4 pb-3">
        <p>{answer}</p>
      </div>
    </details>
  </div>

</div>

    )
}

export default Faqs;