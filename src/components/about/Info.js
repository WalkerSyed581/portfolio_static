import React from 'react'

const Info = () => {
  return (
	<div className='flex-1 flex justify-center flex-col items-center sm:mb-4'>
		<img className="w-32 md:w-40 lg:w-48 rounded-full mb-4" src={process.env.PUBLIC_URL + '/sajeel_pic.jpeg'} alt="" />
		<p>
			I'm an experienced Full-Stack Developer working Freelance on <a href="https://www.upwork.com/freelancers/~01d5ced9257eb7da75?s=1110580755107926016">Upwork</a>. 
			I have a passion for working with multiple techonolgies to create efficient, 
			immersive and customer-oriented systems across the various platforms. <br/>
			<a href="#contact">Let's make your dream digital.</a>
		</p>
	</div>
  )
}

export default Info