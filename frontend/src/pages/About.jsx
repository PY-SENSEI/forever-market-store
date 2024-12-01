import React from 'react'
import Title from "../components/Title.jsx";
import {assets} from "../assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Forever was born in 2023 and it is a place where you can find the latest fashion trends.</p>
              <p>Since our launch, we have been dedicated to providing you with the best products and services.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our misson is to provide you with the best products and services and our costumers are our priority</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality assurance</b>
          <p className='text-gray-600'>Our products are carefully selected and tested to ensure they meet our high standards of quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Our website is user-friendly and easy to navigate, so you can find what you need quickly and easily.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Costumer Service</b>
          <p className='text-gray-600'>Our costumer service team is dedicated to providing exceptional customer service.</p>
        </div>
      </div>
      
      <NewsletterBox />
    </div>
  )
}

export default About