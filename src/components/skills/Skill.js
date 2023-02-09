import React from 'react'

const Skill = ({skill}) => {
	let levelText;
	if (skill.level === "EXP") {
		levelText = "EXPERT";
	} else if(skill.level === "INT") {
		levelText = "INTERMEDIATE";
	} else {
		levelText = "BEGINNER";
	}
  return (
	<div className='p-6'>
		<div className='bg-white sm:flex-col flex md:flex-row m-6 p-8'>
			<div className='sm:border-b-8 sm:border-r-0 md:border-r-8 md:border-b-0 border-black p-4 mr-10 flex-2'>
				<img className="sm:w-48 md:w-auto object-fill mt-3 ml-2 p-5" src={process.env.PUBLIC_URL + skill.logo} />
			</div>
			<div className='self-center text-left'> 
				<h2 className='text-blue font-black text-2xl'>{skill.name}</h2>
				<p className="font-black">{levelText}</p>
				<p className='text-base'>{skill.description}</p>
			</div>
		</div>
	</div>
  )
}

export default Skill