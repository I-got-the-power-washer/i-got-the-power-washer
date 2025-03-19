import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPhoneCall } from 'react-icons/fi';

const FenceWashing = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#00c6f9] to-cyan-600 bg-clip-text text-transparent">
          Set up a fence washing service with IGotThePowerWasher
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
            Is your dirty fence ruining your curb appeal? IGotThePowerWasher offers professional fence pressure washing services for homeowners and business owners in Cincinnati, OH and the surrounding area. You can trust our specialists to remove caked-on dirt, grime, and debris in a flash. After we’re finished, your fence will look as good as new.
            </p>

            <div className="border-l-4 border-[#00c6f9] pl-4">
              <p className="text-gray-600 italic">
                "Plan your professional fence pressure washing service today."
              </p>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#00c6f9] to-cyan-600 bg-clip-text text-transparent">
            Don’t let your fence fall by the wayside, call us for fence pressure washing services
          </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
            We take pride in our fence pressure washing services and we know that we’ll exceed your expectations. That’s why we’ll take photos of your fence before and after we wash it so you can see the difference. You’ll feel confident knowing that we won’t stop working until you’re satisfied with the results
            </p>

            <div className="border-l-4 border-[#00c6f9] pl-4">
              <p className="text-gray-600 italic">
                "Call 513-570-0355 now to schedule your fence washing service in Cincinnati, OH or the surrounding area."
              </p>
            </div>

            <a
              href="tel:513-570-0355"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <FiPhoneCall className="w-6 h-6" />
              Schedule Free Estimate
            </a>
          </div>
        </motion.div>

        {/* Right Image Comparison */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 relative group"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            {/* Before Image */}
            <div className="absolute inset-0 w-1/2 overflow-hidden">
              <Image
                src="/images/Before_fence.jpg"
                alt="Weathered fence"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                Before Cleaning
              </div>
            </div>
            
            {/* After Image */}
            <div className="absolute inset-0 left-1/2 w-1/2 overflow-hidden">
              <Image
                src="/images/After_fence.jpg"
                alt="Restored fence"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#00c6f9]/90 text-white px-4 py-2 rounded-lg">
                After Cleaning
              </div>
            </div>
            
            {/* Slider Bar */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/50 cursor-col-resize z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FenceWashing;