import React from 'react'

import './index.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {AiOutlineEllipsis} from 'react-icons/ai'

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Header = () => {

    const responsive = {
        superLargeDesktop: {
           
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='bt-container'>

            <div className='divider'>

                <div className='div-row'>

                    <ul className='rowing' >
                        <li>Home</li>
                        <li>About</li>
                        <li>Schedules</li>
                        <li>Membership</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='header-1'>

                    <ul className='  rowing-2' >
                        <li><span className='offers'>Offers</span></li>
                        <li className='courses'>Courses</li>

                    </ul>

                </div>

            </div>


            <div className='main-container'>

                <div className='margin-first'>
                    <div className='left-curve'>
                        <div className='erasor'>
                        </div>
                    </div>
                </div>

                <div className='under-curve-para'>

                    <p className='mt-3 discover'>Discover the beauty of the tropics</p>
                    <h1 className='heading-1'>Tropical Destinations <span className='font-span'>For Student</span></h1>

                    <p className='lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, saepe? Asperiores et. </p>
                    <button className='btn signup-button'>Sign up</button>

                </div>

                <div className='right-side-container'>

                    <div className='overimage-arc'>

                    </div>
                    <img src="https://i.ibb.co/d0v7zMt/Group-171.png" alt='student' className='first-image' />
                    <div className='right-curve'>
                        <div className='erasor-2'></div>
                    </div>
                    <div className='hollow-circle'>

                    </div>
                    <div className='hollow-circle-2'>

                    </div>

                </div>


            </div>


            <div className='main-container-2'>

                <div className='left-side'>

                    <div className='card-1'>
                    <img src="https://i.ibb.co/BZv6CF4/Group-167.png" alt="jenny" className='jenny-pic' />
                        <div>
                            <p><b>Jenny Wilson</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit architecto dolore.</p>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img src="https://i.ibb.co/pdJSk0K/pexels-sam-rana-1442005.jpg" alt="pexels-sam-rana-1442005" className='jenny-pic' />
                        <div>
                            <p><b>Jenny Wilson</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit architecto dolore.</p>
                        </div>
                    </div>
                    <div className='card-1'>
                        <img src="https://i.ibb.co/X2GHNSm/pexels-filipe-leme-2760338.jpg" alt="pexels-sam-rana-1442005" className='jenny-pic' />
                        <div>
                            <p><b>Jenny Wilson</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit architecto dolore.</p>
                        </div>
                    </div>

                </div>

                <div className='right-side'>
                    <div className='big-circle'>

                    </div>

                    <div className='marg    '>
                        <div className='left-curve-2'>
                            <div className='erasor-two'>
                            </div>

                        </div>
                    </div>

                    <div className='text-1'>
                        <h1><b>Tropical Adventure</b><br /> <span className='for-students'>for Students.</span></h1>
                        <h3 className='mt-4'>Student Tropical Vacation: Relax and Recharge</h3>
                        <ul className='listing-style'>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                            <li>  Ipsum quos pariatur voluptatibus veniam </li>
                            <li>  eius accusantium fuga repudiandae accusamus,</li>
                            <li>   mollitia repellendus tempore provident rerum </li>
                            <li>   modi maiores recusandae ut ducimus necessitatibus at.</li>
                        </ul>
                        <button className='btn signup-button ml-5'>Explore More</button>
                    </div>
                </div>

            </div>

            <div className='mt-5'>
                <h1 className=' m-5 text-1'>Our Destinations</h1>
                <Carousel responsive={responsive}>
                    <div>
                       =<img src="https://i.ibb.co/9pV3vJY/card-image.png" alt='img1' className='slider-image-1' />
                        <p className='mt-2'>Harvard University</p>
                        <div className='rowing'>
                            <p>Cambridge, Massachusetts, UK <span className='m-3'><AiOutlineEllipsis/></span></p>
                            
                        </div>
                    </div>
                    <div>
                    <img src="https://i.ibb.co/1Jfddzm/card-image-1.png"  className='slider-image-1' alt='img2' />
                        <p className='mt-2'>Oxford University</p>
                        <div className='rowing'>
                            <p>Oxford, England <span className='m-3'><AiOutlineEllipsis/></span></p>
                            
                        </div>
                    </div>
                    <div>
                    <img src="https://i.ibb.co/BjjJkzG/card-image-2.png"  className='slider-image-1' alt="img3" />
                        <p className='mt-2'>Stanford University</p>
                        <div className='rowing'>
                            <p>Standford, California <span className='m-3'><AiOutlineEllipsis/></span></p>
                            
                        </div>
                    </div>
                    <div>
                    <img src="https://i.ibb.co/TthskVF/card-image-3.png"  alt="img4" className='slider-image-1' />
                        <p className='mt-2'>Nanyang Technologies</p>
                        <div className='rowing'>
                            <p>Nanyang Ave, Singapore <span className='m-3'><AiOutlineEllipsis/></span></p>
                            
                        </div>

                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1555526647-94b8ec455f22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className='slider-image-1' alt='img5' />
                        <p className='mt-2'>Whirlwind stairs</p>

                    </div>
                    <div>
                        < img src="https://images.unsplash.com/photo-1693396487944-861e540e6052?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" className='slider-image-1' alt='img6' />
                        <p className='mt-2'>Office for work </p>

                    </div>
                </Carousel>
            </div>

            <div className='container-3'>

                <div className='left-side-3'>

                    <div className='margin-first'>
                        <div className='mr-5 left-curve-3'>
                            <div className='erasor'>
                            </div>
                        </div>
                    </div>

                    <p className='m-3 text-2'>Get 20% off for student</p>
                    <div className='big-circle-2'></div>
                    <h1>Student discounts available.
                    </h1>    
                            <div className='right-curve-2'>
                                <div className='erasor-down'></div>
                            </div>
                    <h2>Get ready for some fun in the sun!
                    </h2>
                    <ul className='listing-style'>
                            <li className='listing-style'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                            <li className='listing-style'>  Ipsum quos pariatur voluptatibus veniam </li>
                            <li className='listing-style'>  eius accusantium fuga repudiandae accusamus,</li>
                            <li className='listing-style'>   mollitia repellendus tempore provident rerum </li>
                            <li className='listing-style'>   modi maiores recusandae ut ducimus necessitatibus at.</li>
                    </ul>        
                        
                    <button className='btn signup-button-2 ml-5'>Explore More</button>


                    <div className='overimage-arc-2'>

                    </div>

                </div>

                <div className=' right-side-3'>
                <img src="https://i.ibb.co/F3KPFq9/Mask-group.png" alt="Mask-group" className="girl-img" />
                <div className='big-circle-3'>

                </div>

                </div>

            </div>

            <div className='container-4'>

                <div className='lefting-side'>
                <img src="https://i.ibb.co/M861LSf/Group-167.png" alt="Group-167" className='muslim-girl' />
                </div>
                <div className='big-circle-4'>

                </div>

                <div className='righting-side'>
                    <form className='form-shadow'>
                        <h1 className='book-now'>Book now</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit,
                            <br/> Sit architecto dignissimos.</p>
                        <div className='labels'>    
                        <label >City</label>
                        <input placeholder='Placeholder' className='outline' />
                        
                        </div> 
                        <div className='labels-2'>

                            <div className='columning'>
                            <label>ARRIVAL</label>
                            <input type='date' />
                            </div>
                            <div className='columning'>
                            <label>DEPARTURE</label>
                            <input type='date' />
                            </div>
                        </div>  

                        <div className='labels-2'>

                            <div className='columning'>
                            <label>STAR</label>
                            <input type='number' />
                            </div>
                            <div className='columning-4'>
                            <label>ROOM</label>
                            <input type='number' />
                            </div>
                        </div>
                        <div className='text-1 mt-3'>
                        <button className='btn btn-dark'>Button</button>
                        </div>
                    </form>
                </div>
                    
            </div>

            <div className='container-5'>
                <h1>Testimonials</h1>

                <div className='rowing'>
                <div className='box'>
                    <img src='https://assets.ccbp.in/frontend/react-js/esther-howard-img.png' className='gol' alt='gol' />
                    <p>Esther Howard</p>
                    <p>Its a long established fact that a reader will be distracted by the readable content of a page by looking at its layout. </p>
                </div>
                <div className='box'>
                    <img src='https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png' className='gol' alt='gol' />
                    <p>Floyd Miles</p>
                    <p>Its a long established fact that a reader will be distracted by the readable content of a page by looking at its layout.</p>
                </div>
                <div className='box'>
                    <img src='https://assets.ccbp.in/frontend/react-js/devon-lane-img.png' className='gol'alt='gol' />
                    <p>Devon Lane</p>
                    <p>Its a long established fact that a reader will be distracted by the readable content of a page by looking at its layout.</p>
                </div>

                </div>

            </div>

            <div className='container-6'>
                <h1>Student Special: Discounted rates<br/>  on tropical getaways!</h1>
                <p className='last-para'>Lets embody your beautiful ideas together, simplify the way you visualize your next big things.</p>

                <div className='footer'>
                    <ul className='foot'>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Sales and Refunds</li>
                        <li>Legal</li>
                        <li>About</li>
                        <li>Schedules</li>
                        <li>Pricing</li>
                        <li>Membership</li>
                        <li>Joins</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header