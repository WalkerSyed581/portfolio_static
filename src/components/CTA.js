import Button from './Button';

const CTA = () => {
  return (
	<section className=' h-screen bg-fixed
                     bg-[url("/public/cta.jpg")] bg-cover '>
    <div className='bg-transparent-black h-screen flex flex-col justify-center content-center'>
      <div className='m-2'>
        <p className='text-slate text-5xl font-bold'>This is <span className='text-red'>SAJEEL HASSAN</span>.<br /> I'm a full-stack developer.</p>
      </div>
      <Button text='VIEW PORTFOLIO' classText="bg-red transition-all duration-500 py-4 px-10 text-xl w-fit mx-auto mt-10 font-bold hover:bg-white" />
    </div>
  </section>
  )
}

export default CTA