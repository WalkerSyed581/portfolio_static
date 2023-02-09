import React from 'react'


const Testimonial = ({testimonial}) => {
  let image;
  if(testimonial.image !== "") {      
    image = <img className='' src={process.env.PUBLIC_URL + testimonial.image} alt=""></img>;
  } else {     
    image = <img className='' src={process.env.PUBLIC_URL + "user.jpg"} alt="Head icons created by Pixelmeetup - Flaticon"></img>;
  }
  return (
    
    <div className='basis-96 text-white m-4 flex flex-col h-full'>
      {image}
      <div className="p-6 bg-black testimonial ">
        <p>
          {testimonial.description}
        </p>
        <h2 className='text-2xl font-black pb-4 text-blue'>{testimonial.client_name}</h2>
      </div>
    </div>
  )
}

export default Testimonial