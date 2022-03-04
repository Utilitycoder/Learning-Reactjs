import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="exprience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>NextJS</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
        {/* End of Frontend */}
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Blockchain Development</h3>
          <div className="exprience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Ethereum</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Solidity</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Truffle</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Hardhat</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>OpenZeppelin</h4>
              <small className='text-light'>Experienced</small>
            </article>
        </div>  
        </div>
      </div>
    </section>
  )
}

export default experience