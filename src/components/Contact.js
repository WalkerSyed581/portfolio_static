import React,{ useRef } from 'react'
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react"
var base64 = require('base-64');

const Contact = () => {
	const captchaRef = useRef(null)
	const form = useRef();
	

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [message, setMessage] = useState("");

	const [emailBody, setEmailBody] = useState("");
	const [subject, setSubject] = useState("");

	const [captchaResult, setCaptchaResult] = useState(false)
	

	const handleToggle = () => {
		setEmailError(!emailError);  
	};

	const handleChange = event => {
		if (!isValidEmail(event.target.value) && !emailError) {
			handleToggle()
		} else if(emailError){
			handleToggle()
		}
	
		setEmail(event.target.value);
	  };

	const handleRecaptcha = async (value) => {
		let url;
		if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
			url = 'http://localhost:8000/recaptcha/';
		} else {
			url = 'http://localhost:8000/recaptcha/';
		}
		fetch(url ,{
			method: 'POST',
			body: JSON.stringify({ 'captcha_value': value }),
			headers: { 'Content-Type': 'application/json' }
		})
		.then(res => 
			res.json()
		)
		.then(data => {
			console.log(data)
			console.log(data.captcha.success)
			setCaptchaResult(data.captcha.success)
		}) 
	  }
	function isValidEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}

	function componentDidMount(){
		setMessage("");
	}

	const handleSubmit = async (e) =>{
        e.preventDefault();
        const token = captchaRef.current.getValue();
		
		try {
			if(	name.trim().length === 0 ||
				email.trim().length === 0 ||
				emailBody.trim().length === 0 ||
				subject.trim().length === 0 ||
				!isValidEmail(email)){

				setMessage(<div className='error-area'>Some fields are empty!!</div>)
				return

			}else{
				setMessage("")
			}
			emailjs.sendForm('service_e5mrqu8', 'template_lkclrtq', form.current, 'zD5mth2ZsfbTTTXyH')
			.then((result) => {
				setMessage(<div className='success-area'>Email Sent!!!</div>)
			}, (error) => {
				setMessage(<div className='error-area'>Unable to Send Email!</div>)
			});
			
			
		} catch (err) {
			console.log(err);
		}
		captchaRef.current.reset();

	}

	return (
		<div className="bg-black p-10" id="contact">
			<script src="https://www.recaptcha.net/recaptcha/api.js" async defer></script>

			<div className='text-white'>
				<h1>Contact Me</h1>
			</div>
			<form ref={form} onSubmit={handleSubmit} className='p-8 md:max-w-lg m-auto'>
				{message}
				<div className="grid grid-cols-1">
					<label className="block">
						<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full" placeholder="Your Name..." />
					</label>
					<label className="block">
						<input type="email" name="email" value={email} onChange={handleChange} className={emailError ? "error block w-full" : "block w-full"} placeholder="Your Email..." />
					</label>
					<label className="block">
						<input type="text" name="subject"  value={subject} onChange={(e) => setSubject(e.target.value)} className="block w-full" placeholder="Subject of Email..." />
					</label>
					<label className="block">
						<textarea className="block w-full" name="email_body" value={emailBody} onChange={(e) => setEmailBody(e.target.value)} rows="5" placeholder="Your Message..."></textarea>
					</label>
					<ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} onChange={handleRecaptcha} />
					{ captchaResult && (<input onClick={(e) => {handleSubmit(e)}}  className="place-self-end text-xl border-2 border-white w-36 px-8 py-2 mt-4 hover:bg-blue hover:text-dark text-white transition duration-150" type="submit" id="submit" value="SUBMIT"></input>)}
				</div>
			</form>
		</div> 
		
	)
}

export default Contact