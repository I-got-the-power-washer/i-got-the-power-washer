"use client";
import Link from "next/link";
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-bold  text-[#FCD148] font-pj">
              Testimonials
            </p>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl xl:text-4xl font-pj">
              Our Success Stories Unveiled through Satisfied Clients
            </h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
  <Link
    href="/review-page"
    className="btn bg-[#FCD34E] text-black hover:bg-black hover:text-[#FCD34E] cursor-pointer z-40 flex items-center justify-center"
  >
    <img
      src="/images/google-icon.svg"
      alt="Google Icon"
      className="w-5 h-5 mr-2"
    />
    Check All Reviews
  </Link>
</div>


          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-4 inset-y-8 md:-inset-x-8 md:-inset-y-10">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #FFD700 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {/** Testimonial 1 */}
              <Link href="https://www.google.com/maps/contrib/114936146757684090429/place/ChIJ59SvPWPXwogRcLEZKBauxX8/@27.8050131,-82.3106162,19z?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D">

              <div className="flex flex-col overflow-hidden shadow-2xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="/images/testimonial-up-1.png"
                        alt="Adis Torres"
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Jaye Webster
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          2024-29-08
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/google-icon.svg"
                        alt="Google Icon"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 mt-4">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      “Very easy to work with. Super professional service.
                      Prompt! Would definitely recommend. I will use them again”
                    </p>
                  </blockquote>
                
                </div>
              </div>
              </Link>

              {/** Testimonial 2 */}
              <Link href="https://www.google.com/maps/contrib/108433029002887744832/place/ChIJ59SvPWPXwogRcLEZKBauxX8/@27.8039704,-82.3111929,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D">
              <div className="flex flex-col overflow-hidden shadow-2xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="/images/testimonial-2-up.png"
                        alt="Adis Torres"
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Karen Pena
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          2024-22-08
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/google-icon.svg"
                        alt="Google Icon"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 mt-4">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      “Alberto was very sweet amd It was great knowing he is a
                      believer of Christ!! Thank you for your prompt service.”
                    </p>
                  </blockquote>
                 
                </div>
              </div>
              </Link>

              {/** Testimonial 3 */}
              <Link href="https://www.google.com/maps/contrib/100502989039923079908/place/ChIJ59SvPWPXwogRcLEZKBauxX8/@27.8039704,-82.3111929,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D">
              <div className="flex flex-col overflow-hidden shadow-2xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="/images/testimonial-3-up.png"
                        alt="Adis Torres"
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                        Ronald Hinton
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          2024-22-08
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/google-icon.svg"
                        alt="Google Icon"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 mt-4">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      “Trinity was very accommodating and reliable in helping in
                      at time of need. I needed help at 6am and they were there.
                      Appreciate you heavily.”
                    </p>
                  </blockquote>
                 
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
