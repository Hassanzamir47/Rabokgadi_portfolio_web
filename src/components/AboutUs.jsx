import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]
const timeline = [
  {
    name: 'Founded company',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]
const jobOpenings = [
  {
    id: 1,
    role: 'Full-time designer',
    href: '#',
    description:
      'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
    salary: '$75,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    role: 'Laravel developer',
    href: '#',
    description:
      'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
    salary: '$125,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 3,
    role: 'React Native developer',
    href: '#',
    description:
      'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
    salary: '$105,000 USD',
    location: 'San Francisco, CA',
  },
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

const AboutUs = () => {
  return (
    <div className="bg-white mb-16">
      <main className="isolate">
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  About Us
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  At Rabokgadi, we understand that security is not merely a
                  service but a commitment to the well-being of our clients. Our
                  journey began with a vision to redefine security by blending
                  expertise, innovation, and a client-centric approach. As a
                  company, we take pride in our ability to adapt to the evolving
                  landscape of threats and challenges, staying at the forefront
                  of the security industry.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="/images/3.png"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="images/4.png"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="images/5.png"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AboutUs */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our success is built on a foundation of professionalism,
              integrity, and a relentless pursuit of excellence.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We believe in not just meeting but exceeding the expectations of
              our clients, ensuring their peace of mind in an increasingly
              complex world.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                Mission
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">
                  To provide unrivaled protection and security solutions.
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Ensuring the safety and well-being of our clients through
                  strategic, professional, and innovative services.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 rounded-2xl bg-[#54ad62] p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-white mb-2">
              Values
              </p>
              <div class="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h6 class="text-lg font-semibold mb-2">Professionalism:</h6>
            <p class="text-gray-700 text-xs">Conducting all operations with the highest standards of professionalism and integrity.</p>
            <h6 class="text-lg font-semibold mb-2">Client-Centric:</h6>
            <p class="text-gray-700 text-xs">Placing our clients' safety and satisfaction at the forefront of everything we do.</p>
            <h6 class="text-lg font-semibold mb-2">Innovation:</h6>
            <p class="text-gray-700 text-xs">Embracing cutting-edge technologies and methodologies to stay ahead in the evolving security landscape.</p>
            <h6 class="text-lg font-semibold mb-2">Teamwork:</h6>
            <p class="text-gray-700 text-xs">Fostering a collaborative and supportive environment that values the contributions of every team member.</p>
        </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#54ad62] p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-16">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                Vision
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  To provide unrivaled protection and security solutions
                </p>
                <p className="mt-2 text-base leading-7 text-green-200">
                  Ensuring the safety and well-being of our clients through
                  strategic, professional, and innovative services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        {/* <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col justify-between lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We’re always Loving with Our Professional Management Team
              </h2>
              <img
                src="/images/6.png"
                alt=""
                className="mt-16 aspect-[6/5] w-[300px] rounded-2xl bg-gray-50  lg:aspect-auto lg:h-[330px]"
              />
            </div>
              <div class="container mx-auto py-8">
        <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-4">
                <h1 class="text-3xl font-bold mb-4 text-[#54ad62]">James Matshubeng</h1>
                <h2 class="text-lg font-semibold mb-2">CIC - Commander in Chief</h2>
                <p class="text-base mb-6">James Matshubeng is a visionary leader with over 20 years of experience in technology and business. He serves as the Group CEO of Matoto Group of Companies, a group encompassing diverse businesses, including Rabokgadi VIP Protection and Intelligence Unit. James is passionate about leveraging technology to revolutionize the security industry and is a highly sought-after expert in the field.</p>

                <h2 class="text-lg font-semibold mb-2">Key Highlights:</h2>
                <ul class="list-disc pl-6 mb-6">
                    <li class="mb-2">Seasoned IT professional with extensive experience in consulting, implementation, and support.</li>
                    <li class="mb-2">Proven track record of success in building and leading multiple technology companies, some of which were acquired by leading brands.</li>
                    <li class="mb-2">Group CEO of Matoto Group of Companies, driving strategic direction and overseeing diverse business ventures.</li>
                    <li class="mb-2">Champion of innovation in the security space, utilizing AI and technology to enhance security solutions.</li>
                    <li class="mb-2">Resident Tech Expert and Thought Leader: Regularly invited on television and national radio to discuss technology, innovations, and industry trends.</li>
                    <li class="mb-2">Active communicator and influencer, sharing expertise through social media and industry engagements.</li>
                </ul>

                <h2 class="text-lg font-semibold mb-2">Experience:</h2>
                <ul class="list-disc pl-6">
                    <li class="mb-2"><strong>Matoto Group of Companies (Group CEO)</strong>
                        <ul class="list-disc pl-6">
                            <li>Provides strategic leadership and direction for the group, overseeing diverse business operations.</li>
                            <li>Spearheads the integration of AI and technology within the group's security ventures, including Rabokgadi VIP Protection and Intelligence Unit.</li>
                        </ul>
                    </li>
                    <li class="mt-4"><strong>Matoto Technologies (Founder)</strong>
                        <ul class="list-disc pl-6">
                            <li>Established Matoto Technologies, a leading IT consulting firm.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
          </div>
          <div className="mx-auto flex max-w-2xl flex-col justify-between lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              
              <img
                src="/images/7.png"
                alt=""
                className="mt-16 aspect-[6/5] w-[300px] rounded-2xl bg-gray-50  lg:aspect-auto lg:h-[330px]"
              />
            </div>
            <div class="container mx-auto py-8">
        <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-4">
                <h1 class="text-3xl font-bold mb-4 text-[#54ad62]">Dilons Radebe</h1>
                <h2 class="text-lg font-semibold mb-2">Divisional Head: Operations & Logistics</h2>
                <p class="text-base mb-6">Dilons Mayibongwinkosi Radebe is a seasoned security professional with over 25 years of experience in the industry. He possesses a proven track record of leadership, management, and operational excellence.</p>

                <h2 class="text-lg font-semibold mb-2">Key Highlights:</h2>
                <ul class="list-disc pl-6 mb-6">
                    <li class="mb-2">Extensive experience in all aspects of security operations, from frontline guarding to strategic leadership.</li>
                    <li class="mb-2">Proven ability to lead and manage teams, fostering a culture of excellence and integrity.</li>
                    <li class="mb-2">Strong commitment to client satisfaction, consistently exceeding expectations and prioritizing client needs.</li>
                    <li class="mb-2">Demonstrated expertise in security protocols, quality control, and strategic planning.</li>
                    <li class="mb-2">Instrumental in driving company growth, contributing to an enhanced reputation within the industry.</li>
                </ul>

                <h2 class="text-lg font-semibold mb-2">Experience:</h2>
                <ul class="list-disc pl-6">
                    <li class="mb-2"><strong>Rabokgadi VIP Protection and Intelligence Unit (2024 - Present)</strong>
                        <ul class="list-disc pl-6">
                            <li>Head of Operations</li>
                            <li>Manages and directs operations of the company, ensuring efficient service delivery and client satisfaction.</li>
                            <li>Creates and promotes a culture of excellence and integrity within the team.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>All Is Well Security (2012 - 2024)</strong>
                        <ul class="list-disc pl-6">
                            <li>Head of Operations (2022 - 2024)</li>
                            <li>Led and supervised the entire security operation, including planning, execution, and resource management.</li>
                            <li>Developed and implemented strategic and operational plans for the company.</li>
                            <li>Established and maintained strong relationships with clients and stakeholders.</li>
                        </ul>
                        <ul class="list-disc pl-6">
                            <li>Assistant Operations Manager (2022)</li>
                            <li>Oversaw all security operations, ensuring adherence to protocols and quality standards.</li>
                        </ul>
                        <ul class="list-disc pl-6">
                            <li>Quality Controller (2012 - 2022)</li>
                            <li>Ensured the highest quality of security services were delivered by the company.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Abavikeli Security (2007 - 2012)</strong>
                        <ul class="list-disc pl-6">
                            <li>Site Manager</li>
                            <li>Managed and coordinated security services for various disciplines, including CCTV, access control, and security personnel training.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>CHUBB Security (2003 - 2007)</strong>
                        <ul class="list-disc pl-6">
                            <li>Supervisor</li>
                            <li>Demonstrated leadership and management skills by overseeing a team of guards and ensuring client satisfaction.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>BBR Security (1999 - 2003)</strong>
                        <ul class="list-disc pl-6">
                            <li>Security Guard</li>
                            <li>Gained foundational experience in security operations and procedures.</li>
                        </ul>
                    </li>
                </ul>
                <p class="mb-2">Dilons' dedication, expertise, and operational excellence make him a valuable asset to any security team.</p>
            </div>
        </div>
    </div>
          </div>
          <div className="mx-auto flex max-w-2xl flex-col justify-between lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              
              <img
                src="/images/8.png"
                alt=""
                className="mt-16 aspect-[6/5] w-[300px] rounded-2xl bg-gray-50  lg:aspect-auto lg:h-[330px]"
              />
            </div>
            <div class="container mx-auto py-8">
        <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-4">
                <h1 class="text-3xl font-bold mb-4 text-[#54ad62]">Lerato Matsobane</h1>
                <h2 class="text-lg font-semibold mb-2">Divisional Head: Close Protection & Guarding</h2>
                <p class="text-base mb-6">Lerato Matsobane brings over 30 years of experience in the security sector, with a proven track record of success in diverse security roles.</p>

                <h2 class="text-lg font-semibold mb-2">Key Highlights:</h2>
                <ul class="list-disc pl-6 mb-6">
                    <li class="mb-2">Extensive experience in VIP protection, having served as an escort for multiple high-profile individuals, including government ministers.</li>
                    <li class="mb-2">Strong leadership and management skills, demonstrated through promotions to regional senior supervisor and acting regional manager roles.</li>
                    <li class="mb-2">In-depth knowledge of various security operations, including access control, covert investigations, and reaction response.</li>
                    <li class="mb-2">Proven ability to adapt and excel in different security environments, including government, private corporations, and commercial properties.</li>
                    <li class="mb-2">Commitment to continuous learning and development, as evidenced by his diverse roles within the security field.</li>
                </ul>

                <h2 class="text-lg font-semibold mb-2">Experience:</h2>
                <ul class="list-disc pl-6">
                    <li class="mb-2"><strong>Rabokgadi VIP Protection & Intelligence Unit (2023 - Present)</strong>
                        <ul class="list-disc pl-6">
                            <li>Head of CPO and Guarding Services</li>
                            <li>Responsible for overseeing the entire security operation, ensuring the safety and security of clients and assets.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Bongani Rainmaker Logistic (2020 - 2023)</strong>
                        <ul class="list-disc pl-6">
                            <li>Quality Controller and Safety Officer (OHS)</li>
                            <li>Implemented and maintained safety protocols to ensure a safe working environment for personnel.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Zylec (2019 - 2020)</strong>
                        <ul class="list-disc pl-6">
                            <li>Senior Supervisor</li>
                            <li>Provided leadership and supervision to security teams, ensuring adherence to security protocols and procedures.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Other Experiences</strong>
                        <ul class="list-disc pl-6">
                            <li>Coin Africa (2004 - 2014)</li>
                            <li>Telesafe (2002 - 2004)</li>
                            <li>South African Police Services Guard Unit (SAPGU) (2001 - 2002)</li>
                            <li>Ministry of Safety and Security (1995 - 1998)</li>
                            <li>Springbok Security (1994 - 1995)</li>
                            <li>Stealth Protection Services (SPS) (Early 1990s)</li>
                        </ul>
                    </li>
                </ul>
                <p class="mb-2">Lerato's dedication, expertise, and diverse experience make him a valuable asset to any security team.</p>
            </div>
        </div>
    </div>
          </div>
          <div className="mx-auto flex max-w-2xl flex-col justify-between lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              
              <img
                src="/images/9.png"
                alt=""
                className="mt-16 aspect-[6/5] w-[300px] rounded-2xl bg-gray-50  lg:aspect-auto lg:h-[330px]"
              />
            </div>
            <div class="container mx-auto py-8">
        <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-4">
                <h1 class="text-3xl font-bold mb-4 text-[#54ad62]">Mpumelelo Mahlangu</h1>
                <h2 class="text-lg font-semibold mb-2">Divisional Head: Business Dev & Corporate Partnerships</h2>
                <p class="text-base mb-6">Mpumelelo Junior Mahlangu is a seasoned security professional with extensive experience in various aspects of the industry. Currently, he serves as the Divisional Head: Business Development & Corporate Partnerships at Rabokgadi VIP Protection and Intelligence Unit.</p>

                <h2 class="text-lg font-semibold mb-2">Key Highlights:</h2>
                <ul class="list-disc pl-6 mb-6">
                    <li class="mb-2">Proven track record of success in business development and corporate partnerships, fostering strategic collaborations to drive organizational growth.</li>
                    <li class="mb-2">Strong leadership and management skills, demonstrated through progressive career advancements and effective team management.</li>
                    <li class="mb-2">Excellent communication and interpersonal skills, essential for building strong relationships with clients and partners.</li>
                    <li class="mb-2">Deep understanding of the security industry, leveraging his diverse experience to develop strategic partnerships and business opportunities.</li>
                </ul>

                <h2 class="text-lg font-semibold mb-2">Experience:</h2>
                <ul class="list-disc pl-6">
                    <li class="mb-2"><strong>Rabokgadi VIP Protection and Intelligence Unit (Present)</strong>
                        <ul class="list-disc pl-6">
                            <li>Divisional Head: Business Development & Corporate Partnerships (2023 - Present)</li>
                            <li>Leads the development and execution of strategic business development initiatives to expand the organization's reach and client base.</li>
                            <li>Fosters and manages key corporate partnerships, aligning objectives to achieve mutually beneficial outcomes.</li>
                            <li>Oversees a team of professionals responsible for business development and partnership activities.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Operations Manager (2023)</strong>
                        <ul class="list-disc pl-6">
                            <li>Oversaw all security operations, ensuring efficient service delivery and client satisfaction.</li>
                            <li>Managed resources and personnel to optimize operational effectiveness.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Business Support Manager (2022)</strong>
                        <ul class="list-disc pl-6">
                            <li>Provided comprehensive support to various departments, ensuring smooth business operations.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Client Services Manager (2021 - 2022)</strong>
                        <ul class="list-disc pl-6">
                            <li>Managed client relationships, ensuring exceptional service and exceeding client expectations.</li>
                            <li>Developed and implemented strategies to enhance client satisfaction and retention.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Security Administrator (2019 - 2020)</strong>
                        <ul class="list-disc pl-6">
                            <li>Administered security systems and protocols, upholding the safety and security of clients and assets.</li>
                        </ul>
                    </li>
                </ul>
                <p class="mb-2">Mpumelelo's dedication, diverse skillset, and leadership qualities make him a valuable asset to Rabokgadi VIP Protection and Intelligence Unit.</p>
            </div>
        </div>
    </div>
          </div>
          <div className="mx-auto flex max-w-2xl flex-col justify-between lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              
              <img
                src="/images/10.png"
                alt=""
                className="mt-16 aspect-[6/5] w-[300px] rounded-2xl bg-gray-50  lg:aspect-auto lg:h-[330px]"
              />
            </div>
            <div class="container mx-auto py-8">
        <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-4">
                <h1 class="text-3xl font-bold mb-4 text-[#54ad62]">Thobeka Khumalo</h1>
                <h2 class="text-lg font-semibold mb-2">Divisional Head: Commercial Sales & Marketing</h2>
                <p class="text-base mb-6">Thobeka Khumalo is a dynamic and results-oriented professional with over 5 years of experience in the security industry. Currently, she holds the position of Divisional Head: Commercial Sales & Marketing at Rabokgadi VIP Protection and Intelligence Unit.</p>

                <h2 class="text-lg font-semibold mb-2">Key Highlights:</h2>
                <ul class="list-disc pl-6 mb-6">
                    <li class="mb-2">Proven track record of success in driving sales growth and exceeding business objectives through strategic leadership and effective marketing initiatives.</li>
                    <li class="mb-2">Strong negotiation and contract management skills, ensuring mutually beneficial agreements with clients.</li>
                    <li class="mb-2">In-depth understanding of the commercial landscape within the security industry.</li>
                    <li class="mb-2">Excellent communication and interpersonal skills, fostering strong relationships with clients and internal stakeholders.</li>
                </ul>

                <h2 class="text-lg font-semibold mb-2">Experience:</h2>
                <ul class="list-disc pl-6">
                    <li class="mb-2"><strong>Rabokgadi VIP Protection and Intelligence Unit (Present)</strong>
                        <ul class="list-disc pl-6">
                            <li>Divisional Head: Commercial Sales & Marketing (2023 - Present)</li>
                            <li>Leads the development and execution of comprehensive sales and marketing strategies to achieve commercial goals and organizational growth.</li>
                            <li>Oversees a team of professionals responsible for sales, marketing, and client relationship management.</li>
                            <li>Manages the commercial pipeline and ensures successful contract negotiations and finalization.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Head of Commercials & Contracts (2022)</strong>
                        <ul class="list-disc pl-6">
                            <li>Oversaw the commercial and contracting functions, ensuring efficient contract management and client satisfaction.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Contracts Manager (2021 - 2022)</strong>
                        <ul class="list-disc pl-6">
                            <li>Negotiated and finalized contracts with clients, upholding legal and commercial best practices.</li>
                            <li>Managed the contract lifecycle, ensuring timely execution and adherence to terms.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>Sales Administrator (2019 - 2020)</strong>
                        <ul class="list-disc pl-6">
                            <li>Provided administrative support to the sales team, facilitating efficient sales processes and client interactions.</li>
                        </ul>
                    </li>
                </ul>
                <p class="mb-2">Thobeka's dedication, expertise, and leadership make her a valuable asset to Rabokgadi VIP Protection and Intelligence Unit.</p>
            </div>
        </div>
    </div>
          </div>
          <div className="mx-auto flex max-w-2xl flex-col justify-between lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              
              <img
                src="/images/11.png"
                alt=""
                className="mt-16 aspect-[6/5] w-[300px] rounded-2xl bg-gray-50  lg:aspect-auto lg:h-[330px]"
              />
            </div>
            <div class="container mx-auto py-8">
        <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-4">
                <h1 class="text-3xl font-bold mb-4 text-[#54ad62]">Lebogang Matsobe</h1>
                <h2 class="text-lg font-semibold mb-2">Divisional Head: Technology & Innovation</h2>
                <p class="text-base mb-6">Lebogang Matsobe is a tech-savvy and innovative leader with over 5 years of experience in the IT field. Currently, she serves as the Divisional Head: Technology & Innovation at Rabokgadi VIP Protection and Intelligence Unit.</p>

                <h2 class="text-lg font-semibold mb-2">Key Highlights:</h2>
                <ul class="list-disc pl-6 mb-6">
                    <li class="mb-2">Proven track record of success in leading and managing IT teams, driving innovation and implementing solutions to enhance operational efficiency and security.</li>
                    <li class="mb-2">Strong technical expertise in IT administration, infrastructure management, and emerging technologies.</li>
                    <li class="mb-2">Strategic vision and problem-solving skills, adept at identifying and implementing technology solutions that address business needs.</li>
                    <li class="mb-2">Excellent communication and collaboration skills, fostering teamwork and alignment across the organization.</li>
                </ul>

                <h2 class="text-lg font-semibold mb-2">Experience:</h2>
                <ul class="list-disc pl-6">
                    <li class="mb-2"><strong>Rabokgadi VIP Protection and Intelligence Unit (Present)</strong>
                        <ul class="list-disc pl-6">
                            <li>Divisional Head: Technology & Innovation (2023 - Present)</li>
                            <li>Leads the development and execution of strategic technology initiatives to optimize operations, enhance security, and drive innovation within the organization.</li>
                            <li>Oversees a team of IT professionals responsible for infrastructure management, system administration, and technology implementation.</li>
                            <li>Explores and champions the adoption of emerging technologies to improve security solutions and gain a competitive edge.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>IT Manager (2022)</strong>
                        <ul class="list-disc pl-6">
                            <li>Managed the IT department, ensuring efficient operations, infrastructure maintenance, and user support.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>IT Team Leader (2021 - 2022)</strong>
                        <ul class="list-disc pl-6">
                            <li>Provided leadership and guidance to the IT team, ensuring successful project execution and problem-solving.</li>
                        </ul>
                    </li>
                    <li class="mb-2"><strong>IT Administrator (2019 - 2020)</strong>
                        <ul class="list-disc pl-6">
                            <li>Administered IT systems and networks, maintaining smooth operations and user support.</li>
                        </ul>
                    </li>
                </ul>
                <p class="mb-2">Lebogang's dedication, technical expertise, and leadership qualities make her a valuable asset to Rabokgadi VIP Protection and Intelligence Unit.</p>
            </div>
        </div>
    </div>
          </div>
        </div> */}
      </main>

    </div>
  )
}
export default AboutUs
