const ContactSection = () => (
    <section className='p-10'>
      <h2 className='text-4xl font-bold text-center mb-5'>Get In Touch</h2>
      <form className='max-w-lg mx-auto'>
        <div className='mb-6'>
          <input type='text' placeholder='Your Name' required className='input input-bordered w-full' />
        </div>
        <div className='mb-6'>
          <input type='email' placeholder='Your Email' required className='input input-bordered w-full' />
        </div>
        <div className='mb-6'>
          <textarea placeholder='Your Message' required className='textarea textarea-bordered w-full' rows={4} />
        </div>
        <button type='submit' className='btn btn-primary w-full'>Send Message</button>
      </form>
    </section>
  );
  
  export default ContactSection;