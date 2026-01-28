import Link from 'next/link';
import Image from 'next/image';
import mihirbhaiSvg from '../src/assets/imag/mihirbhai.svg';
import radhikbhaiSvg from '../src/assets/imag/radhikbhai.svg';
import { GraduationCap, Scroll, Microscope } from 'lucide-react';

export default function HomePage() {
  const stats = [
    { number: '1300+', label: 'Parents Reviews' },
    { number: '4000+', label: 'Good Students' },
    { number: '7+', label: 'Years Of Experience' },
    { number: '200+', label: 'German Universities' },
    { number: '3+', label: 'Total Branches' },
  ];

  const services = [
    {
      title: 'University Admission in Germany',
      description: 'Global Heaven Overseas Education – Germany Visa Consultants, has an expert team located in Surat (India), Hannover & Heidelberg (Germany) to find best suitable German university for your selected course.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Accommodation / Stay in Germany',
      description: 'Global Heaven Overseas Education – Germany Visa Consultants, Best Germany Consultancy help our students to find their stay in the nearest place to their University in Germany, even before their departure for Germany from India.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Germany Student Visa Process',
      description: 'Get the best forbearance Germany Student Visa Process services from one of the top-notch most experienced German Visa organization in Surat, Hannover & Heidelberg.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 bg-white overflow-hidden">
        {/* Background Map Watermark */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 H100 V100 H0 Z" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 relative z-10">
              <p className="text-blue-900 font-bold bg-blue-50 inline-block px-4 py-1 rounded-full text-sm">Makes your Future Bright</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-black">
                Best Experience<br />
                Learning<br />
                University <span className="text-black">For You</span>
              </h1>
              <p className="text-gray-500 text-lg max-w-md">
                Podcasting operational change management inside of workflows system
              </p>
              <Link
                href="/about"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors shadow-lg w-full sm:w-auto text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] lg:h-[600px]">
                <Image
                  src="/student-hero.png"
                  alt="Student in Germany"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Location Pin */}
                <div className="absolute top-1/4 left-1/4 w-24 h-24 transform -translate-x-1/2">
                  {/* Pin SVG */}
                  <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
                    <path d="M50 0 C22.4 0 0 22.4 0 50 C0 85 50 120 50 120 C50 120 100 85 100 50 C100 22.4 77.6 0 50 0 Z" fill="#DC2626" />
                    <circle cx="50" cy="50" r="35" fill="white" />
                    {/* Grad Cap Icon */}
                    <path d="M30 50 L50 40 L70 50 L50 60 Z M50 60 V75 M30 50 V60 C30 65 40 68 50 68" stroke="#1E3A8A" strokeWidth="3" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Global Heaven Overseas Advantages</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-8">
                  {/* Orange Arc */}
                  <div className="absolute -top-2 -right-2 w-full h-full rounded-full border-t-4 border-r-4 border-orange-400 transform rotate-12"></div>
                  {/* Blue Circle */}
                  <div className="w-full h-full bg-blue-900 rounded-full flex items-center justify-center relative z-10 text-white shadow-xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 px-4">{service.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm px-4">{service.description}</p>
                <Link href="/services" className="text-blue-900 font-bold hover:text-red-600 transition-colors border-b-2 border-red-500 pb-1">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black">Offered Courses in Germany</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Bachelor', url: '/study-in-germany/bachelor' },
              { name: 'Master', url: '/study-in-germany/master' },
              { name: 'Ph.D.', url: '/study-in-germany/phd' }
            ].map((course, index) => (
              <Link key={index} href={course.url} className="block group">
                <div className="bg-blue-900 text-white rounded-lg p-8 h-80 flex flex-col justify-center items-center relative overflow-hidden hover:shadow-2xl transition-all">
                  {/* Visible Icon */}
                  <div className="mb-6 z-10 opacity-100">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      {index === 0 && <GraduationCap className="w-10 h-10 text-white" />}
                      {index === 1 && <Scroll className="w-10 h-10 text-white" />}
                      {index === 2 && <Microscope className="w-10 h-10 text-white" />}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-center z-10 leading-snug">
                    {course.name}<br />In Germany
                  </h3>

                  {/* Red Corner Button */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-600 rounded-tl-3xl flex items-center justify-center group-hover:w-20 group-hover:h-20 transition-all">
                    <svg className="w-6 h-6 text-white transform -rotate-45 mt-2 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section (Refactored) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black">Meet Our Expert Advisors</h2>
          </div>

          <div className="flex flex-col xl:flex-row justify-center items-center gap-16 relative">
            {/* Advisors List */}
            <div className="flex flex-wrap justify-center gap-10 md:gap-16 z-10">
              <div className="text-center relative group">
                {/* Red Border Ring Container */}
                <div className="relative mb-8 mx-auto w-52 h-52 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[3px] border-red-600 scale-100 group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="w-48 h-48 rounded-full overflow-hidden p-1 bg-white relative z-10">
                    <Image
                      src={mihirbhaiSvg}
                      alt="Mr. Mihir Sanghani"
                      width={200}
                      height={200}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* Name Pill */}
                <div className="bg-white rounded-[2rem] py-3 px-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 z-20 whitespace-nowrap border border-gray-100">
                  <h3 className="font-extrabold text-[#0a1f44] text-lg">Mr. Mihir Sanghani</h3>
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wide mt-0.5">(FOUNDER-GERMANY)</p>
                </div>
              </div>

              <div className="text-center relative group">
                {/* Red Border Ring Container */}
                <div className="relative mb-8 mx-auto w-52 h-52 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[3px] border-red-600 scale-100 group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="w-48 h-48 rounded-full overflow-hidden p-1 bg-white relative z-10">
                    <Image
                      src={radhikbhaiSvg}
                      alt="Mr. Radhik Dhameliya"
                      width={200}
                      height={200}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* Name Pill */}
                <div className="bg-white rounded-[2rem] py-3 px-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 z-20 whitespace-nowrap border border-gray-100">
                  <h3 className="font-extrabold text-[#0a1f44] text-lg">Mr. Radhik Dhameliya</h3>
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wide mt-0.5">(FOUNDER-INDIA)</p>
                </div>
              </div>
            </div>

            {/* Map & CTA side */}
            <div className="relative w-full max-w-sm xl:w-[400px] h-80 flex items-center justify-center mt-12 xl:mt-0 xl:ml-12">
              {/* Background Elements matching screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Abstract light gray map shape */}
                <svg viewBox="0 0 200 200" className="w-[120%] h-[120%] text-gray-50 drop-shadow-sm" style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.03))' }}>
                  <path d="M40 20 L160 40 L180 120 L140 180 L60 160 L20 100 Z" fill="#f3f4f6" />
                </svg>

                {/* Decorative Dots */}
                <div className="absolute top-[35%] right-[25%] w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
                <div className="absolute bottom-[35%] left-[40%] w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              </div>

              {/* Learn More Button */}
              <Link
                href="/about"
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2 relative z-10 min-w-[160px]"
              >
                Learn More
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
