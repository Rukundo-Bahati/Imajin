import { useState } from 'react';
import robot from '../../assets/Robot.png'
import './faq.css'

const Faq = () => {
    const [answer, setAnswer] = useState(null)

     const handleShowAnswer = (id) => {
        setAnswer(id === answer ? null : id)
     }

  const questions = [
    {id:1 , question: 'Pellentesque ac bibendum tortor?' , answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '},

    {id:2 , question: 'In mi nulla, fringilla vestibulum?' , answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '},

    {id:3 , question: 'In mi nulla, fringilla vestibulum?' , answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '},

    {id:4 , question: 'In mi nulla, fringilla vestibulum?' , answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '},


    {id:5 , question: 'In mi nulla, fringilla vestibulum?' , answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '},
  ]

  return (
    <div className='is-flex is-justify-content-center'>
      <div>
  <h1 className='is-size-1' style={{width: '10px' ,color: '#fff'}}>Frequently Asked Questoins</h1>
  <img src={robot} alt="Robot image" width='40%' />

      </div>
      <div>
  {questions.map(q => <ul     onClick={() => handleShowAnswer(q.id)}>
    <li key={q.id} className='is-size-3 mt-5 has-text-light'  style={{ cursor: 'pointer',
   border: '1px solid dodgerblue',
   padding: '5px',
   background: '#439'
    }}>{q.question}
  {answer === q.id && <p className='is-size-4 has-text-link-light'>{q.answer}</p>}
    </li>
  </ul>)}
  <button  className='p-3 mt-4 btn'>Visit FAQ Center </button>
      </div>
    </div>
  )
}

export default Faq
