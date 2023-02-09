import React from 'react'
import Button from './Button'
import { FaFacebookF,FaGithub,FaLinkedinIn,FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = () => {
  return (
	<div className='bg-black p-8 text-white' id="footer">
		<div className='border-t-2 border-t-stone-500'>
			<div className='flex justify-between m-auto my-4 mt-8 w-1/4'>
			<IconContext.Provider value={{ size: "1.5em" }}>
					<a href="https://github.com/WalkerSyed581" className='transition-all duration-300 hover:bg-red bg-white text-black p-4 mr-2'>
						<div>
							<FaGithub />
						</div>
					</a>
					<a href="https://www.linkedin.com/in/sajeel-hassan-045580208/" className='transition-all duration-300 hover:bg-red bg-white text-black p-4 mr-2'>
						<div>
							<FaLinkedinIn />
						</div>
					</a>
					<a href="https://web.facebook.com/WalkerSyed581" className='transition-all duration-300 hover:bg-red bg-white text-black p-4 mr-2'>
						<div>
							<FaFacebookF />
						</div>
					</a>
					<a href="https://www.instagram.com/sajeelh581/" className='transition-all duration-300 hover:bg-red bg-white text-black p-4'>
						<div>
							<FaInstagram />
						</div>
					</a>
				</IconContext.Provider>
			</div>
		</div>
		<div>
		SAJEEL HASSAN &copy; 2022
		</div>
 	</div>
  )
}

export default Footer