import React from 'react'
import './Home.css'
import mainImage from '../../assets/mainImg.svg'
import poewrImg from '../../assets/powerfluImg.svg'
import poewrImg2 from '../../assets/powerImage2.svg'
import poewrImg3 from '../../assets/powerImage3.svg'
import poewrImg4 from '../../assets/powerImage4.svg'
import poewrImg5 from '../../assets/powerImage5.svg'
export default function Home() {
  return (
    <>
    <div className='container mt-3'>
        {/* start nav */}
        <nav className=' d-flex '>
            <ul className='d-flex ' >
                <li className='navLink'>Home</li>
                <li className='navLink'>About</li>
                <li className='navLink'>Contact</li>
            </ul>
            <p className=' titleNav'>Landing</p>
            <div className="btn ">
                <button>Buy Now</button>
            </div>
        </nav>
        {/* end nav */}

        {/* start contentMain */}
        <div className="content ms-4">
            <div className="row">
                <div className="col-md-6">
                    <p className='titleContent'>Introduce Your Product Quickly & Effectively</p>

                    <div className="mainText">
                    <p className='loremContent'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p className='loremContent'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>

                    <div className="btnContent">
                        <button className='btnKit'>Purchase UI Kit</button>
                        <button className='btnMore'>Learn More</button>
                    </div>
                </div>

                <div className="col-md-6">
                    <img src={mainImage}/>
                </div>
            </div>
        </div>
        {/* end contentMain */}

        {/* start powerflu */}
        <div className="powerflu mt-5">
            <div className="row">
            <div className="col-md-6">
            <p className='powerfluLight'>Light, Fast & Powerful</p>

            <div className="pargragh">
            <p className='powerfluTitle1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            <p className='powerfluTitle1'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            
            </div>  
    
            <div className="powerfluImage">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <img src={poewrImg}/>
                        <p className='my-3'>Title Goes Here</p>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </span>
                    </div>
                    
                    <div className="col-md-6 mt-5">
                        <img src={poewrImg}/>
                        <p className='my-3'>Title Goes Here</p>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </span>
                    </div>

                </div>
            </div>
            </div>

            <div className="col-md-6 image2 mt-5">
                <img src={poewrImg2} className='mt-5'/>
            </div>
            </div>
        </div>
        {/* start powerflu */}

        {/* start powerflu Image  */}
        <div className="content1 mt-5">
            <div className="row">
                {/* start img3 */}
                <div className="img3">
                    <div className="row">
                    <div className="col-md-6">
                    <img src={poewrImg3} className='poewrImg3'/>
                </div>

                <div className="col-md-6">
                    <p className='powerfluLight'>Light, Fast & Powerful</p>

                    <div className="pargragh">
                    <p className='powerfluTitle1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p className='powerfluTitle1'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
                    </div>
                </div>
                {/* end img3 */}

                {/* start img4 */}
                <div className="img4">
                    <div className="row">
                    <div className="col-md-6 mt-5">
                    <img src={poewrImg4} className='poewrImg3'/>
                </div>

                <div className="col-md-6 mt-5">
                    <p className='powerfluLight'>Light, Fast & Powerful</p>

                    <div className="pargragh">
                    <p className='powerfluTitle1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p className='powerfluTitle1'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
                    </div>
                </div>
                {/* end img4 */}

                {/* start img5 */}
                <div className="img5">
                    <div className="row">
                    <div className="col-md-6 mt-5">
                    <img src={poewrImg5} className='poewrImg3'/>
                </div>

                <div className="col-md-6 mt-5">
                    <p className='powerfluLight'>Light, Fast & Powerful</p>

                    <div className="pargragh">
                    <p className='powerfluTitle1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p className='powerfluTitle1'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <button className='btnKit'>Purchase Now</button>
                    </div>
                </div>
                    </div>
                </div>
                {/* end img5 */}
        </div>
        </div>
        {/* end powerflu Image  */}
    </div>   
        {/* start sectionPrice */}
        <div className="price">
            <div className="contentPrice">
                <div className='titleprice'>
                    <p>A Price To Suit Everyone</p>
                </div>
                <div className="textContent">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                </div>
                <div className="numPrice">
                    <p className='prices'>$40</p>
                    <p className='priceUI'>UI Design Kit</p>
                </div>
                <div className="btnPrice text-center">
                    <p>See, One price. Simple.</p>
                    <button className='btnKit ms-4'>Purchase Now</button>
                </div>
            </div>
        </div>
        {/* end sectionPrice */}

        {/* start Footer */}
        <div className="footer ">
            <div className="footerContent container">
                <div className="row ">
                    <div className="col-md-4">
                        <p className='yearCompany'>©2023 Yourcompany</p>
                    </div>
                    
                    <div className="col-md-4">
                        <p className='titleFooter'>Landing</p>
                    </div>

                    <div className="col-md-4 ">
                        <button className='btnFooter'>Purchase now</button>
                    </div>

                    <div className="hr">
                        <hr></hr>
                    </div>

                    <div className="itemNav col-md-3">
                    <ul className='d-flex ' >
                        <li className='navLink'>Home</li>
                        <li className='navLink'>About</li>
                        <li className='navLink'>Contact</li>
                    </ul>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="IconFooter col-md-3 ">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-youtube"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
        {/* end Footer */}
        </>
  )
}
