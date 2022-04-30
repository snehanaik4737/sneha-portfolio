import React, { useState } from 'react'
import styled from './ContactForm.module.css'
import emailjs from 'emailjs-com'
import Modal from 'react-modal'
let obj={
  "user_name":"",
  "contact_number":"",
  "user_email":"",
  "message":"",
}
const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [data,setData]=useState(obj)
  const handleChange = (e)=>
  {
    let {name,value}=e.target
    let payload={
      ...data,
      [name]:value,
    }
    setData(payload)
  }
  const handleClick = () => {
    setIsOpen(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_f3322fh',
        'template_livi7up',
        e.target,
        //  'user_9LffP4jCfFdSRK43r6Mcn',
        "snehanaik856@gmail.com"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }
  return (
    <div className="projects_container" data-aos="fade-right">
    <form onSubmit={handleSubmit} id="contact">
      <h2 className={styled.h2}>Contact Form</h2>
      <div className={styled.top}>
        <input
           onChange={handleChange}
          className={styled.color}
          name="user_name"
          placeholder="Full Name"
          type="text"
          required

        />
        <input
           onChange={handleChange}
          className={styled.color1}
          name="contact_number"
          placeholder="Mobile Number"
          type="text"
          required
        />
      </div>
      <div>
        <input
           onChange={handleChange}
          className={styled.color2}
          name="user_email"
          placeholder="Email Id"
          type="email"
          required
        />
      </div>
      <div>
        <input
           onChange={handleChange}
          className={styled.color2}
          name="message"
          placeholder="Subject of the message"
          type="text"
          required
        />
      </div>
      <button type="submit"  onClick={handleClick} className={styled.btn}>
        Send Message
      </button>
      <Modal className={styled.background} isOpen={isOpen}>
        <h2 className={styled.h1}>Congratulation You Successfully send mail</h2>
        <button  onClick={() => setIsOpen(false)} className={styled.btn}>
          Close
        </button>
      </Modal>
    </form>
    </div>
  )
}

export default ContactForm