import React from 'react'

const Inquire = () => {
  return (
    <div>
          {/* Inquiry Section */}
          <section className="inquiry">
        <h2>Fuel Your Ambition with Expert Guidance</h2>
        <form className="inquiry-form">
          
          <input type="text" placeholder="Enter name" />
          <input type="email" placeholder="Enter email" />
          <input type="tel" placeholder="Enter mobile" />
          <select>
            <option>Choose course</option>
            <option>Python Fullstack</option>
            <option>Java Fullstack</option>
            <option>Data Analytics</option>
          </select> 
        
          
          <button type="submit">INQUIRE NOW</button>
        </form>
      </section>
  
    </div>
  )
}

export default Inquire
