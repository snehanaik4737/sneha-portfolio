
import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";



const ContactForm = () => {

  const [isOpen, setIsOpen] = useState(false);


  const form = useRef();

  const handleClick = () => {
         setIsOpen(true)
       }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1j8ve7f",
        "template_ju13yny",
        form.current,
        "HSLLr-8duUMwxfUwH"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
         
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
        <div  data-aos="fade-right"><h2 style={{color:"#0f87e3",textAlign:"center",marginTop:"10%"}}>Contact Form</h2>
      <form ref={form} onSubmit={sendEmail}  data-aos="fade-right">
        <label>Your name</label>
        <input type="text" name="user_name" />
        <label>Your email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
       {isOpen ? (
         <input  type="submit" onClick={handleClick} value="Sent" />
         ):(
          <input  type="submit" onClick={handleClick} value="Send" />
       )
       }
      </form>
      </div>
    </StyledContactForm>
  );
};

export default ContactForm;


const StyledContactForm = styled.div`
  
  width: 40%;
  margin: 0 auto;
  background-color: transparent;

  form {
    margin:auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      border: 2px solid var(--clr-primary);
    
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      
    }
   
    textarea {
      border: 2px solid var(--clr-primary);
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
     
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {

      margin-left: 23%;
   
    height:60px;
    width:220px;
  
   
    border-radius: 10px;
   
    font-size: 18px;
    margin-top:3%;
   
    border: 2px solid var(--clr-primary);
    display: flex;
    justify-content: center;
    padding-top:1.75%;
     
      &:hover{
    color: var(--clr-bg);
    border: 2px solid var(--clr-primary);
    background-color: var(--clr-primary);
  }
    }
    button {
      
    margin-left: 40%;
    height:20px;
    width:50px;
    border-radius: 10px;
    font-size: 18px;
    margin-top:3%;
    border: 2px solid var(--clr-primary);
    display: flex;
    justify-content: center;
    padding-top:1.75%;
    }
  }
`;