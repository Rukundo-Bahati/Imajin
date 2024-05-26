import { useState } from "react";
import robot from "../../assets/Robot.png";
import "./faq.css";

const Faq = () => {
  const [answer, setAnswer] = useState(null);

  const handleShowAnswer = (id) => {
    setAnswer(id === answer ? null : id);
  };
  const questions = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase if the item is in its original condition.",
    },

    {
      id: 2,
      question: "How do I track my order?",
      answer:
        "Once your order has shipped, we will send you an email with the tracking number. You can use this number to track your order on the shipping company’s website.",
    },

    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping costs and delivery times will vary depending on your location.",
    },

    {
      id: 4,
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 24 hours of placing it. After that, we cannot guarantee modifications as the order may have already been processed.",
    },

    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, Discover, and PayPal.",
    },
  ];

  return (
    <div className="faq">
      <div>
        <h1 className="is-size-3" style={{ width: "", color: "#fff" }}>
          Frequently Asked Questoins
        </h1>
        <img src={robot} alt="Robot image" width="40%" />
      </div>
      <div>
        {questions.map((q) => (
          <ul onClick={() => handleShowAnswer(q.id)}>
            <li
              key={q.id}
              className="is-size-5 mt-5 has-text-light"
              style={{
                cursor: "pointer",
                border: "1px solid dodgerblue",
                padding: "5px",
                background: "#439",
              }}
            >
              {q.question}
              {answer === q.id && (
                <p className="is-size-4 has-text-link-light">{q.answer}</p>
              )}
            </li>
          </ul>
        ))}
        <button className="p-3 mt-4 btn" style={{ color: "#222" }}>
          Visit FAQ Center
        </button>
      </div>
    </div>
  );
};

export default Faq;
