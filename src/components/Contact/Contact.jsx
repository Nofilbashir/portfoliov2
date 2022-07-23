import React, { useEffect } from 'react'
import './Contact.css'
import { useRef, useState} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const[sent, setSent] = useState('')
  const form = useRef()
  const [input, setInput] = useState({
    name:'',
    email:'',
    message:''
  })

    const fillDetails=(e)=>{
  
          const inputName=e.target.name;
          const inputValue=e.target.value;
          setInput({...input,[inputName]:inputValue})
      }


  const sendEmail = (e) => {
    e.preventDefault();

    if(input.name && input.email && input.message){
        setInput({
            name:'',
            email:'',
            message:''
          })
    emailjs.sendForm('service_1dfhyni', 'template_fs9nue9', form.current, 'kBxhbgyOTkvwm01I-')
      .then((result) => {
          console.log(result.text);
          // e.target.reset();
          setSent(true)
      }, (error) => {
          console.log(error.text);
          setSent(false)
      })}
  };

  useEffect(()=>{
    if (!sent===''){
      setTimeout(()=>{
        setSent((prev)=>{
          return ''
        })
      },8000)
    }
  })

  return (
    <section id='contact'>
    <div className='section flex_l' style={{flexDirection:'column'}}  data-aos="zoom-in">
    <h2 className='contact_h'>Contact Me</h2>

    <div className="container contact__container">

      <form ref={form}>
      
        <input type="text" name='name' placeholder='Your Full Name' required value={input.name} onChange={fillDetails} />
        <input type="email" name='email' placeholder='Your Email' value={input.email} onChange={fillDetails}required/>
        <textarea name="message" id="" cols="20" rows="7" placeholder='Your Message' value={input.message} onChange={fillDetails} required ></textarea>
        <div className='contact__button-div'>
        <button type='submit' className='contact_button' onClick={sendEmail}>Send</button>
        {sent===''?<p></p>:sent===true?<p>Message sent</p>: sent===false?<p>Message not sent</p>:null}
        </div>
      </form>
    </div>

    </div>
    </section>
  )
}

export default Contact
