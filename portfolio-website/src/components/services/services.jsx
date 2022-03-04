import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Smart Contract Programming</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
          </ul>
        </article>
        {/* End of Smart Contract Programming */}
        <article className="service">
          <div className="service_head">
            <h3>Web3 Marketing</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Lorem, ipsum color sit amet</p>
            </li>
          </ul>
        </article>
        {/* End Web3 Marketing */}
      </div>
    </section>
  )
}

export default services