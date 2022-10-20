import React from 'react';

export default function Contact() {
  return (
    <section id="Contact" className="contact container-fluid py-16 px-4 md:px-32  md:pt-32 md:flex justify-center">
      <div className="contact__container w-full md:w-full flex flex-col md:flex-row justify-center md:justify-between md:items-start items-center md:gap-12">
        <div className="w-full md:w-10/12 flex flex-col justify-center items-center md:items-start md:text-start text-center text-myPortfolio-white mb-10 md:gap-10">
          <div className="flex flex-col md:flex-row md:justify-start justify-center items-center md:items-baseline md:gap-2 mb-6 md:mb-2">
            <h1 className="wow slideInLeft text-2xl md:text-4xl text-myPortfolio-white md:font-bold font-normal md:text-myPortfolio-logo">
              Contact
            </h1>
            <span className="wow fadeInDown bar w-12 md:w-32 h-1 bg-myPortfolio-logo md:bg-gray-600" />
          </div>
          <h1 className="wow bounceInLeft md:text-7xl md:font-bold text-gray-200">Let&#39;s Discuss a new project.</h1>
          <p className="text-xl md:text:2xl md:font-bold tracking-wide hover:animate-pulse text-orange-600">
            If you have an application you are interested in developing,
            a feature that you need built or a project that needs coding.
            I’d love to help with it.
          </p>
        </div>
        <form action="https://formspree.io/f/xpzbqlab" method="POST" autoComplete="off" id="contact-form" className="w-full h-auto flex flex-col justify-center items-center gap-4 col text-myPortfolio-white">
          <label htmlFor="name" className="w-full flex flex-col gap-2">
            <span className="text-xl">Name</span>
            <input type="text" name="name" placeholder="Full Name" required id="name" className="w-full bg-transparent text-xl border-blue-50 focus:none outline-none" />
          </label>
          <label htmlFor="email" className="w-full flex flex-col gap-2">
            <span className="text-xl">Email</span>
            <input type="email" name="email" placeholder="Email" required id="email" className="w-full bg-transparent text-xl border-blue-50 outline-none" />
          </label>
          <label htmlFor="message" className="w-full flex flex-col gap-2">
            <span className="text-xl">Message</span>
            <textarea name="message" placeholder="Message" required id="message" className="w-full bg-transparent text-xl border-blue-50 outline-none h-32 " />
          </label>
          <span className="w-full flex justify-end">
            <button type="submit" className="w-32 uppercase bg-white px-4 py-2 text-myPortfolio-logo font-medium">submit</button>
          </span>
        </form>
      </div>
    </section>
  );
}
