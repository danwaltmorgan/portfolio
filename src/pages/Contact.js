import React, { useState } from 'react'
import SectionTitle from '../comps/SectionTitle'
import "../style/contact.css"
import emailjs from "emailjs-com"


export default function Contact() {

  const defaultForm = {
    name: "",
    email: "",
    phone: "",
    comment: ""
  }

  const [form, setForm] = useState(defaultForm)

  const template_params = {
    "name": form.name,
   "email": form.email,
   "phone": form.phone,
   "comments": form.comment
}
  const service_id = "default_service";
  const template_id = "template_K0Rh4NAH";
  const user_id = "user_QQfsuqyfK89RdkLbrmTNi"


  function handleChange(e) {
    setForm({...form,  [e.target.id]: e.target.value})
  }

  function handleSubmit(e) {

    if (form.name === "" || form.email === "") {
      alert("Please enter a name and email so I may better assist you :)")
    } else {
      sendFeedback()
      setForm(defaultForm)
      alert(`Thank you ${form.name}! I will get back to you as soon as possible!`)
      console.log(form)
    }
  }

  function sendFeedback() {
    emailjs.send(service_id, template_id, template_params, user_id)
    .then(res => console.log(res))
    .catch(err => console.error(err))
  }

  return(
    <div className="container" id="contact">
      <SectionTitle text="Let's Work Together"/>
      <form name="contact-form" className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="name"
          id="name"
          placeholder="Name"
          value={form.name}
          onChange={e => handleChange(e)}
        />
        <input
          type="text"
          className="input"
          id="email"
          placeholder="Email"
          value={form.email}
          onChange={e => handleChange(e)}
        />
        <input
          type="tel"
          className="input"
          id="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={e => handleChange(e)}
        />
        <textarea
          data-gramm={false} //disables grammerly because it fucks up the page
          placeholder="Comments..."
          className="textarea"
          id="comment"
          value={form.comment}
          onChange={e => handleChange(e)}
        />
        <button type="submit" id="submit">Submit</button>
      </form>
    </div>
  )
}
