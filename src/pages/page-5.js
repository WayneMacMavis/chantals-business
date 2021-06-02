import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../assets/stylesheets/contact.css"

const ThirdPage = () => (
  <Layout>
    <Seo title="Page five" />
    <h1>Hi from the 5th page</h1>
    <p>Welcome to page 5</p>
    <div className="modal">
    <form method="post" action="https://formspree.io/f/mvodawpn">
    <label>
    <input type="text" name="name" placeholder="Name and Surname" />
  </label>
    <label>
    <input type="email" name="email" placeholder="Email" />
  </label>
  <label>
    <input type="text" name="subject" placeholder="Subject"/>
  </label>
  <textarea rows="4" cols="50" placeholder="Type your message..." />
  <input type="submit" value="Send"/>
  <input type="reset" value="Clear" />
</form>
</div>
  </Layout>
)

export default ThirdPage