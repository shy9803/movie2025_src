import React from 'react';
import '../css/Sub.css';

function Contact(props) {
  return (
    <section className='main sub'>
      <h2>Contact Us</h2>
      <form>
        <p>
          <label>Name : </label>
          <input type='text' />
        </p>
        <p>
          <label>E-Mail : </label>
          <input type='text' />
        </p>
        <p>
          <label>Subject : </label>
          <input type='text' />
        </p>
        <p>
          <label>Message : </label>
          <textarea cols='60' rows='15'></textarea>
        </p>
        <input type='submit' value='Send' />
      </form>
    </section>
  );
}

export default Contact;