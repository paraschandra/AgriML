import React from 'react'
import HeroImg from '../../assets/hero_img.svg'
import Arrow from '../../assets/arrow.svg'
import AbImg from '../../assets/smart_ag.webp'
import cropRec from '../../assets/cropRec.jpeg'
import fertilizerRec from '../../assets/fertilizerRec.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className="w-full max-w-7xl mx-auto scroll-smooth">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl mt-96 sm:mt-1 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Smart Agriculture
                            <span className="hidden sm:block text-3xl">using Machine Learning</span>
                        </h2>

                        <p>Elevate your farming experience with our AI-driven solution! <br/> 
                        Grow with confidence, guided by the intelligence of tomorrow. <br/> 
                        Your fields, our expertise - cultivating success together!</p>

                        <button
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-emerald-600 rounded-lg hover:opacity-80"
                            to="/"
                        >
                            <img src={Arrow} alt="down-arrow" />
                            &nbsp; Read More
                        </button>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-8 h-full">
                    <img className="w-96" src={HeroImg} alt="image1" />
                </div>
            </aside>

            <hr/><br/>

            <h2 className='text-3xl sm:text-4xl font-semibold text-center sm:text-left sm:ml-8'>| About Us</h2>
            <div id='#about' className="relative flex flex-col sm:flex-row justify-between items-center overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 py-2 sm:py-18 mr-auto sm:px-4 lg:px-4">
                    <div className="max-w-xl sm:mt-1 mt-6 space-y-8 text-center sm:text-left sm:mr-auto">
                        <p className='font-semibold'>
                            Our project leverages the power of artificial intelligence to provide personalized crop and 
                            fertilizer recommendations tailored to the unique soil composition of your farm.<br/><br/>
                            By analyzing a variety of crucial soil factors such as nutrient levels, pH, and moisture content, 
                            our platform ensures that farmers receive precise and data-driven guidance for their specific agricultural needs. 
                            Empowering farmers with this advanced technology not only enhances crop yield but also promotes sustainable farming practices.<br/><br/>
                            Join us on this transformative journey as we bridge the gap between tradition and technology, 
                            revolutionizing the way farmers make critical decisions for their fields. 
                            Cultivate success with our ML-driven solution, and let your fields thrive with optimal crops and fertilizers.
                        </p>
                    </div>
                </div>

                <div className="sm:ml-auto sm:py-1 py-6 h-full">
                    <img className='h-48 sm:h-80' src={AbImg} alt="image2" />
                </div>
            </div>

            <hr/><br/>

            <h2 className='text-3xl sm:text-4xl font-semibold text-center sm:text-right sm:mr-8'>Services |</h2>
            <div className="relative flex flex-col sm:flex-row justify-between items-center overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative max-w-2xl flex flex-col sm:flex-row justify-around items-center z-10 w-full py-6 sm:py-8 sm:mr-auto">
                    <div className="rounded max-w-xs overflow-hidden shadow-lg my-4 sm:my-0 hover:scale-105 duration-300 hover:translate-x-1">
                        <img className="w-full" src={cropRec} alt="crop-img"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Crop Recommendations</div>
                            <p className="text-gray-700 text-base">
                            Crops recommendation based on the analysis of soil factors, humidity, temperature and rainfall.
                            </p>
                        </div>
                        <Link to="/crops" className="px-6 pt-4 pb-2 float-right">
                            <span className="inline-block bg-emerald-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                View Details
                            </span>
                        </Link>
                    </div>

                    <div className="max-w-xs rounded overflow-hidden shadow-lg hover:scale-105 duration-300 hover:translate-x-1">
                        <img className="w-full" src={fertilizerRec} alt="fertilizer-img"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Fertilizer Recommendations</div>
                            <p className="text-gray-700 text-base">
                            Recommendations about fertilizers to be used that are best suited for the soil and crop.
                            </p>
                        </div>
                        <Link to="/fertilizers" className="px-6 pt-4 pb-2 float-right">
                            <span className="inline-block bg-emerald-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                View Details
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm left-0 sm:my-1 my-6 space-y-8 text-center sm:text-right ">
                    <p className='font-semibold'>
                        Our services are based on the analysis of soil and other crucial factors to provide personalized crop and fertilizer recommendation.
                    </p>
                </div>
            </div>

            <hr/><br/>

            <div className="text-center">
                Final Year Project<br/><br/>
            </div>
        </div>
    </>
  )
}

export default Home