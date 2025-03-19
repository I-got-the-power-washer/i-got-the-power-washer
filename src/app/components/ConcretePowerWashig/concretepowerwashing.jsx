import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPhoneCall } from 'react-icons/fi';

const ConcreteCleaning = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Got Dirty Concrete? We've Got You Covered!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bring your concrete surfaces back to life with the help of IGotThePowerWasher! Whether it’s dirt, grime, or tough stains, our expert team in Cincinnati, OH specializes in making your concrete, sidewalks, and more look brand new. Using powerful cleaning solutions and advanced techniques, we’ll leave your surfaces spotless and shining. Plus, we’ll guide you through every step of the process so you know exactly what to expect.
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Call 513-570-0355 now to book your concrete pressure washing service! We proudly serve home and business owners across Cincinnati, OH, and surrounding areas
          </p>

        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900">
              Let’s Make Your Surfaces Shine!
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
              There’s no concrete surface we can’t tackle! Count on us for:
              </p>

              <div className="space-y-4">
                {[
                  "Driveways",
                  "Sidewalks",
                  "Walkways",
                  "Patios",
                  "Porches",
                  "Pavers",
                  "Brick",
                  "Stamped Concrete"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="w-6 h-6 text-[#00c6f9] flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
              Ready for a fresh start? Contact IGotThePowerWasher today!
              </p>
            </div>

            <a
              href="tel:513-570-0355"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <FiPhoneCall className="w-6 h-6" />
              Schedule Free Consultation
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
              <Image
                src="/images/1252.jpg"
                alt="Concrete power washing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConcreteCleaning;