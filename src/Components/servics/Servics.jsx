import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
const Service = () => {
    return (
        <>
              <div className="row text-center mt-5">
        <div className="col-md-4">
        <FontAwesomeIcon icon={faYoutube} />
          <h5>Free and Fast Delivery</h5>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="col-md-4">
          <h5>24/7 Customer Service</h5>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="col-md-4">
        
          <h5>Money Back Guarantee</h5>
          <p>We return money within 30 days</p>
        </div>
      </div>
        </>
    );
}

export default Service