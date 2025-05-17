import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    document.title = 'About | LUXE';
  }, []);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Story</h1>

          <div className="aspect-video mb-12 overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="LUXE team at work"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-6">
              Founded in 2020, LUXE was born from a simple vision: to create contemporary clothing that combines minimalist design, sustainable practices, and exceptional quality.
            </p>

            <p className="mb-6">
              Our founder, Alex Chen, spent over a decade working with luxury fashion houses before deciding to create a brand that addressed the growing need for well-made, timeless pieces that don't compromise on ethics or aesthetics.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Philosophy</h2>

            <p className="mb-6">
              At LUXE, we believe that great style shouldn't come at the expense of our planet or the people who make our clothes. We're committed to responsible manufacturing, using high-quality materials that are built to last, and creating designs that transcend seasonal trends.
            </p>

            <p className="mb-6">
              Each piece in our collection is thoughtfully designed and rigorously tested to ensure that it meets our standards for quality, comfort, and longevity. We work closely with our manufacturing partners to maintain fair labor practices and reduce our environmental footprint at every step of the process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Clothing design process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/4612722/pexels-photo-4612722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sustainable materials"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Commitment to Sustainability</h2>

            <p className="mb-6">
              Sustainability isn't just a buzzword for us—it's a core principle that guides every decision we make. We're constantly researching and implementing ways to reduce our environmental impact, from sourcing eco-friendly materials to minimizing waste in our production process.
            </p>

            <p className="mb-6">
              We believe in transparency and accountability, which is why we share information about our materials, manufacturing processes, and environmental initiatives. We're not perfect, but we're committed to continuous improvement and doing our part to create a more sustainable fashion industry.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Join Our Journey</h2>

            <p className="mb-6">
              We're building more than just a clothing brand—we're creating a community of like-minded individuals who value quality, sustainability, and timeless style. Whether you're a long-time customer or discovering us for the first time, we invite you to join us on our journey.
            </p>

            <p className="mb-6">
              Thank you for supporting LUXE and our mission to create clothing that looks good, feels good, and does good.
            </p>
          </div>

          <div className="mt-12 p-8 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="mb-6">Sign up for our newsletter to receive updates on new collections, sustainability initiatives, and exclusive offers.</p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-indigo-900 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
