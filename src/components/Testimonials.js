import React from "react"
 
function Testimonials(props) {
  return (
    <div>
      <h1>Testimonials</h1>

      <div className="testimonial">
        <div className="testimonialImage"><img className="image" src="https://tylerolli.io/images/testimonials/jackson-allen.jpg" alt=""/></div>
        <div className="testimonialItem">
          <p className="testimonialText">"He takes pride in his work and is always looking to learn and better 
          himself. While at Biz Tech, he was a great co-worker. He constantly brought 
          new ideas to the table and was always willing to lend a helping hand. 
          His bubbly personality and web development skills are a perfect fit for 
          any organization looking to improve their image and increase SEO rankings."</p>
          <div className="testimonialSecondary">
            <h3 className="testimonialName">Jackson Allen</h3>
            <h5 className="testimonialTitle">CEO & Co-Founder</h5>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonialImage"><img className="image" src="https://tylerolli.io/images/testimonials/jason-harwell.jpg" alt=""/></div>
        <div className="testimonialItem">
          <p className="testimonialText">"Tyler is a best in class web developer with skills that are hard to find. 
          These included not only being great with his technical skills but he also has a contagious positive 
          attitude and strong drive to increase his technical skills. Clients love working with him which makes my job easy."</p>
          <div className="testimonialSecondary">
            <h3 className="testimonialName">Jason Harwell</h3>
            <h5 className="testimonialTitle">Director of Software Development</h5>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonialImage"><img className="image" src="https://tylerolli.io/images/testimonials/christi-kannapel-thompson.jpg" alt=""/></div>
        <div className="testimonialItem">
          <p className="testimonialText">"He takes pride in his work and is always looking to learn and better 
          himself. While at Biz Tech, he was a great co-worker. He constantly brought 
          new ideas to the table and was always willing to lend a helping hand. 
          His bubbly personality and web development skills are a perfect fit for 
          any organization looking to improve their image and increase SEO rankings."</p>
          <div className="testimonialSecondary">
            <h3 className="testimonialName">Christi Kannapel Thompson</h3>
            <h5 className="testimonialTitle">Sales & Marketing Supervisor</h5>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonialImage"><img className="image" src="https://tylerolli.io/images/testimonials/christi-kannapel-thompson.jpg" alt=""/></div>
        <div className="testimonialItem">
          <p className="testimonialText">"Tyler is energetic and proactive. Tyler works hard to come up with 
          creative solutions to web design and development problems. Tyler's web design experience allows him 
          to design wireframes and builds quickly."</p>
          <div className="testimonialSecondary">
            <h3 className="testimonialName">David Kanwisher</h3>
            <h5 className="testimonialTitle">Software Engineer</h5>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonialImage"><img className="image" src="https://tylerolli.io/images/testimonials/emma-rojas.jpg" alt=""/></div>
        <div className="testimonialItem">
          <p className="testimonialText">"Tyler helped me build my first website using the Bootstrap framework. At first I was very 
          intimidated, however Tyler was able to teach me the basics of HTML, CSS, and JavaScript over the course of a weekend."</p>
          <div className="testimonialSecondary">
            <h3 className="testimonialName">Emma Rojas</h3>
            <h5 className="testimonialTitle">Prime Margin Analyst</h5>
          </div>
        </div>
      </div>

    </div>
  )
}
 
export default Testimonials;