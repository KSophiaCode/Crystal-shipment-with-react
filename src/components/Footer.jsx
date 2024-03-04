import React from 'react'
import footer1 from '../assets/footer1.png'
import footer2 from '../assets/footer2.png'
import footer3 from '../assets/footer3.png'
import footer4 from '../assets/footer4.png'

function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>CRYSTAL SHIPMENT</h4>
            <p>Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
          </div>
          <div className="col-md-3">
            <h4>QUICK LINKS</h4>
            <ul className='list-unstyled'>
              <li><a href="" className='text-light text-decoration-none'>All Services</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Land Freight</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Sea Freight</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Air Freight</a></li>
              
            </ul>
          </div>
          <div className="col-md-3">
            <h4>PHOTO GALLERY</h4>
            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
                <img src={footer1} alt="" className='img-fluid rounded'/>
                </div>
                <div className='flex-grow-1 ms-2'>
                <img src={footer2} alt=""  className='img-fluid rounded'/>
                </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
                <img src={footer3} alt="" className='img-fluid rounded' />
                </div>
                <div className='flex-grow-1 ms-2'>
                <img src={footer4} alt="" className='img-fluid rounded' />
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            <input type="email" className='form-control mb-3 mt-3' placeholder='Enter your email here'/>
            <button className="btn btn-danger">Submit</button>
          </div>
        </div>
      </div>

    </div>
        
    </>
  )
}

export default Footer