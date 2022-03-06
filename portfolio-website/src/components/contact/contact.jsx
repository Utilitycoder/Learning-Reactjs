import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>utility4all@gmail.com</h5>
          <a href="mailto:utility4all@gmail.com" target="_blank" rel="nonreferrer">Send a Message</a>
        </article>
        <article className="contact_option">
          <RiMessengerLine />
          <h4>Messenger</h4>
          <h5>Lawal Abubakar Babatunde</h5>
          <a href="https://m.me/lawal.abubakr" target="_blank" rel="nonreferrer">Send a Message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp />
          <h4>Whatsapp</h4>
          <h5>+2348098634567</h5>
          <a href="https://api.whatsapp.com/send?phone=+2348062702016" target="_blank" rel="nonreferrer">Send a Message</a>
        </article>
        </div>
      {/* End of Contact Section */}
      <form action="">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email Address" required />
        <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default contact