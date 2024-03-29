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

const Hero = () => {
  return (
    <div className="bg-white">
        <div className="relative">
        <div className="mx-auto px-16">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    VIP PROTECTION & INTELLIGENCE UNIT.{' '}
                    <a
                      href="#"
                      className="whitespace-nowrap font-semibold text-[#54ad62]"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      RABOKGADI <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-[#54ad62]  sm:text-5xl">
                  Delivering comprehensive security solutions
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Rabokgadi VIP Protection & Intelligence Unit stands as 
                  beacon of excellence in the realm of security services.
                  Founded with a passion for safeguarding lives and assets, our
                  company has emerged as a trusted partner for those seeking
                  unparalleled protection. With a management team boasting 25
                  combined years of experience in both the security and business
                  sectors, Rabokgadi is committed to delivering comprehensive
                  security solutions tailored to the unique needs of our diverse
                  clientele.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-[#54ad62] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#54ad62]"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900 "
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/images/2.png"
            alt=""
          />
        </div>
      </div> 
      <main className="isolate">
      
        {/* Logo cloud */}
        <div className="mx-auto mt-32 px-6 sm:mt-40 sm:px-6 lg:px-16">
          <div className="relative isolate overflow-hidden bg-[#54ad62] px-6 py-12 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h6 className="mx-auto max-w-2xl my-6 text-3xl font-bold tracking-tight text-gray-200 sm:text-3xl">
              Our Partners, Clients & Accreditations Love Us
            </h6>
            <h2 className="mx-auto max-w-2xl my-3 text-2xl font-bold tracking-tight text-white sm:text-2xl">
              Partners
            </h2>
              <img
                className="w-full object-contain"
                src="/images/32.png"
                alt="Transistor"
              />
              <h2 className="mx-auto max-w-2xl text-2xl font-bold my-3 tracking-tight text-white sm:text-2xl">
             Clients
            </h2>
              <img
                className="w-full object-contain"
                src="/images/33.png"
                alt="Transistor"
              />
              <h2 className="mx-auto max-w-2xl my-3 text-2xl font-bold tracking-tight text-white sm:text-2xl">
              Accreditations
            </h2>
               <img
                className="w-full object-contain"
                src="/images/34.png"
                alt="Transistor"
              />
            <div
              className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#539e56] to-[#54ad62] opacity-25"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto px-6 lg:flex lg:px-24">
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
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/about"
                    className="rounded-md bg-[#54ad62] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#54ad62]"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                
                </div>
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

        {/* Content section */}
       
      </main>
      <div class="bg-white shadow-3xl py-8 sm:py-8">
    <div class="mx-auto px-16 lg:px-24">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-[#54ad62] sm:text-4xl">
          Why Choose Rabokgadi VIP Protection & Intelligence Unit?
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-full lg:px-24">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#54ad62]">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              </div>
              Experience and Expertise
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              With a management team boasting 25 combined years of experience in
              business and security, Rabokgadi VIP Protection & Intelligence
              Unit is dedicated to upholding the highest standards of
              professionalism, reliability, and innovation.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#54ad62]">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              </div>
              Client-Centric Approach
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              We prioritize our clients' safety and satisfaction, tailoring our
              services to meet their specific needs and ensuring a personalized
              and attentive approach.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#54ad62]">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              </div>
              Innovation and Technology
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              Stay ahead of potential threats with our commitment to innovation
              and the integration of cutting-edge technologies, providing
              advanced security solutions.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#54ad62]">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              </div>
              Comprehensive Security Solutions
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              From VIP protection to intelligence gathering, event security, and
              technological installations, Rabokgadi offers a wide range of
              services to address diverse security needs.
            </dd>
          </div>
         
        </dl>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/why-us"
                    className="rounded-md bg-[#54ad62] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#54ad62]"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                
                </div>
    </div>
  </div>
  <div class="bg-white py-8 sm:py-8">
    <div class="mx-auto px-16 lg:px-24">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          We offer varities of services.
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <img
              src="/images/13.png"
              alt=""
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Robotics and Drone Technology Powered Guarding Services
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Our security company sets the standard for security with a
                combination of robotic patrols for constant vigilance and
                surveillance with high-tech cameras and sensors, along with
                aerial drones for expanded patrols, real-time threat detection,
                and improved response to incidents.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <img
              src="/images/14.png"
              alt=""
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Security Escort & VIP, Bodyguard & Personal Protection
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Safeguarding individuals and valuable cargo, our escort services
                provide a secure environment during transit. Our trained
                personnel ensure safe passage, mitigating risks and responding
                to potential threats with vigilance and professionalism.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src="/images/15.png"
              alt=""
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Static, Venue & Event Security
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                From securing static locations to managing events, our security
                personnel are adept at maintaining a safe and controlled
                environment, ensuring the well-being of clients and attendees.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src="/images/16.png"
              alt=""
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Riot Control & Armed Response
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                In times of crisis, our highly trained armed response teams and
                riot control units swiftly and effectively manage situations to
                protect lives and property.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start ">
          <div class="relative w-full">
            <img
              src="/images/17.png"
              alt=""
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  ANPR (Automatic Number Plate Recognition) Integration
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Our security company takes a multi-layered approach to ensure
                your peace of mind. We leverage cutting-edge technology like
                predictive security algorithms, real-time threat assessment, and
                data-driven decision making to proactively prevent security
                breaches and swiftly mitigate emerging threats.
              </p>
            </div>
          </div>
        </article>
        <article class="flex flex-col items-start ">
          <div class="relative w-full">
            <img
              src="/images/18.png"
              alt=""
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  CCTV & Access Control Installations
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                We provide state-of-the-art CCTV and access control
                installations, customizing security systems to meet the specific
                requirements of our clients.
              </p>
            </div>
          </div>
        </article>
        
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/services"
                    className="rounded-md bg-[#54ad62] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#54ad62]"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                
                </div>
    </div>
  </div>
  <div class="bg-white py-8 sm:py-8">
  <div class="mx-auto px-16 lg:px-24">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
    </div>
    <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
      <li class="flex flex-col gap-6 xl:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/6.png" alt=""/>
        <div class="flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">James Matshubeng</h3>
          <p class="text-base leading-7 text-gray-600">CIC - Commander in Chief</p>
          <p class="mt-6 text-base leading-7 text-gray-600">James Matshubeng is a visionary leader with over 20 years of experience in technology and business. He serves as the Group CEO of Matoto Group of Companies, a group encompassing diverse businesses, including Rabokgadi VIP Protection and Intelligence Unit. James is passionate about leveraging technology to revolutionize the security industry and is a highly sought-after expert in the field.</p>
        </div>
      </li>
      <li class="flex flex-col gap-6 xl:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/9.png" alt=""/>
        <div class="flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Mpumelelo Mahlangu</h3>
          <p class="text-base leading-7 text-gray-600">Divisional Head: Business Dev & Corporate Partnerships</p>
          <p class="mt-6 text-base leading-7 text-gray-600">Mpumelelo Junior Mahlangu is a seasoned security professional with extensive experience in various aspects of the industry. Currently, he serves as the Divisional Head: Business Development & Corporate Partnerships at Rabokgadi VIP Protection and Intelligence Unit.</p>
        </div>
      </li>
      <li class="flex flex-col gap-6 xl:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/7.png" alt=""/>
        <div class="flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Dilons Radebe</h3>
          <p class="text-base leading-7 text-gray-600">Divisional Head: Operations & Logistics</p>
          <p class="mt-6 text-base leading-7 text-gray-600">Dilons Mayibongwinkosi Radebe is a seasoned security professional with over 25 years of experience in the industry. He possesses a proven track record of leadership, management, and operational excellence.</p>
        </div>
      </li>
      <li class="flex flex-col gap-6 xl:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/8.png" alt=""/>
        <div class="flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Lerato Matsobane</h3>
          <p class="text-base leading-7 text-gray-600">Divisional Head: Close Protection & Guarding</p>
          <p class="mt-6 text-base leading-7 text-gray-600">Lerato Matsobane brings over 30 years of experience in the security sector, with a proven track record of success in diverse security roles.</p>
        </div>
      </li>
      
      <li class="flex flex-col gap-6 xl:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/10.png" alt=""/>
        <div class="flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Thobeka Khumalo</h3>
          <p class="text-base leading-7 text-gray-600">Divisional Head: Commercial Sales & Marketing</p>
          <p class="mt-6 text-base leading-7 text-gray-600">Thobeka Khumalo is a dynamic and results-oriented professional with over 5 years of experience in the security industry. Currently, she holds the position of Divisional Head: Commercial Sales & Marketing at Rabokgadi VIP Protection and Intelligence Unit.</p>
        </div>
      </li>
      <li class="flex flex-col gap-6 xl:flex-row">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/11.png" alt=""/>
        <div class="flex-auto">
          <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Lebogang Matsobe</h3>
          <p class="text-base leading-7 text-gray-600">Divisional Head: Technology & Innovation</p>
          <p class="mt-6 text-base leading-7 text-gray-600">Lebogang Matsobe is a tech-savvy and innovative leader with over 5 years of experience in the IT field. Currently, she serves as the Divisional Head: Technology & Innovation at Rabokgadi VIP Protection and Intelligence Unit.</p>
        </div>
      </li>

    </ul>
    <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/team"
                    className="rounded-md bg-[#54ad62] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#54ad62]"
                  >
                    See More Details <span aria-hidden="true">→</span>
                  </a>
                
                </div>
  </div>
</div>

    </div>
  )
}
export default Hero
