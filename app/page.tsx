import Image from "next/image";
import Link from "next/link";
import { CheckIcon, MapIcon, StoreIcon, SproutIcon, HandshakeIcon, CoinsIcon, UserRoundIcon, LandmarkIcon, SendIcon, MoveRightIcon } from "lucide-react";

import SelectDropdown from "./component/SelectDropdown"
import { LineChartIcon } from "lucide-react";
/*import { useFormStatus } from 'react-dom';*/
import { Send, Loader2 } from 'lucide-react';



const Icon = () => {
  return (

    <div className="w-6 h-6 bg-primary-500 text-white f rounded-full flex items-center justify-center">
      <CheckIcon size={15} />
    </div>
  )
}

const HeroStats = ({ label, value }: { label: string, value: number }) => {
  return (
    <div className="bg-white/10 border-[0.5px] border-gray-300 px-10 py-6 w-84 rounded-2xl">
      <div className="text-4xl text-amber-500 font-bold pb-1">{value}</div>
      <div className="text-white font-bold">{label}</div>
    </div>
  )
}



const ServicesComponent = ({ Icon, Title, Body, options }: { Icon: any, Title: string, Body: string, options: any }) => {
  return (
    <div className="bg-cyan-50 border-[0.5px] border-gray-300 px-15 py-5 w-84 rounded-2xl w-full h-full">
      <div>

 <Icon 
  size={50} 
  className="text-white bg-primary-500 border border-primary-500 rounded-md p-1" 
/>
<div className="text-xl text-black font-bold py-5">{Title}</div>
</div>
      <div>{Body}</div>
      <div>
        {options.map((option: any) => {
          <li className="flex items-center gap-2 pb-6"><Icon /> {option} </li>
        })}

      </div>
  <div className="text-primary-400">
  <Link href="https://darb.axiomzorndata.com/login"  className="flex items-center gap-2 hover:text-amber-500"> Learn More <MoveRightIcon className="w-4 h-4" /> </Link>
  </div>
</div>
  )
}




const ProcessComponent = ({ label, title, body }: { label: any, title: string, body: string }) => {
  return (
    <div className="bg-gray-50 border-[0.5px] border-gray-50 px-15 py-5 rounded-2xl gap-1.55 ">

      <div className="w-18 h-18 bg-primary-500 text-white f rounded-full font-bold text-3xl flex items-center justify-center gap-.5 ">{label}</div>

      <div>
        <div className="text-xl text-black font-bold gap-1.5">{title}</div>

      </div>


      <div>{body}</div>


    </div>
  )
}





const PartnersComponent = ({ title }: { title: string }) => {
  return (
    <div className="bg-white border-[0.5px] border-gray-300 px-5 py-12 rounded-2xl">

      <div>
        <div className="text-xl text-black font-bold gap-1.5">{title}</div>

      </div>


    </div>
  )
}




const ImpactComponent = ({ label, value }: { label: string, value: number }) => {
  return (
    <div className="bg-white/10 border-[0.5px] border-gray-300 px-10 py-10 w-64 rounded-2xl">
      <div className="text-4xl text-amber-500 font-bold pb-1">{value}</div>
      <div className="text-white font-bold">{label}</div>
    </div>
  )
}






export default function Home() {

  const servicesList = [
    'Real-time Market Intelligence',
    'Credit Assessment & Scoring',
    'Weather Data & Insights',
    'Insurance Solutions',
    'Financial Services Access',
    'Expert Advisory Support'
  ];

  const servicesArray = [
    {
      title: 'Profiling & Analytics',
      icon: LineChartIcon,
      body: "Unlocking the power of data with aXiom Zorn's DARB Profiling. Close critical agricultural information gaps by utilizing verified data, real time analytics, and visual insights that help development partners and enterprises make smarter decisions.",
      options: [
        'POP Credit Scoring',
        'Digital Soil Mapping',
        'Dynamic Baseline Reports',
      ]
    },
    {
      title: 'Field Force Management',
      icon: MapIcon,
      body: "Take control of your field operations and empower your workforce with aXiom Zorn's Field Force Management Solution. Get real-time GPS and photo tagged data from all farm locations.",
      options: [
        'Real-time GPS Tracking',
        'Photo Verification System',
        'Automated Activity Scheduling',
      ]
    },


    {
      title: 'SME Zone',
      icon: StoreIcon,
      body: "Welcome to SME Zone, a shared marketplace where small and medium businesses can access the tools, insights and opportunities that drive growth. No matter your size, your business can gain visibility, secure finance, and reach new markets.",
      options: [
        'Business Visibility Platform',
        'Access to Finance',
        'Market Connection Tools',
      ]
    },


    {
      title: 'Fertilizer Optimization',
      icon:SproutIcon,
      body: "Maximize your farm profits with Fertilizer Optimization by aXiom Zorn. We help you choose the right crops, optimize input use, and forecast potential returns, so every investment in your farm works harder for you.",
      options: [
        'Crop Selection Guidance',
        'Input Optimization',
        'ROI Forecasting',
      ]
    },



    {
      title: 'Market Linkages',
      icon: HandshakeIcon,
      body: "Expand your reach with aXiom Zorn's Market Linkages. Access up to date market information for all your crops from across the country, all in one platform. Make smarter sales decisions and maximize your profits.",
      options: [
        'Real-time Market Prices',
        'Nationwide Coverage',
        'Buyer Connection System',
      ]
    },




    {
      title: 'Financial Linkages',
      icon: CoinsIcon,
      body: "Unlock financial opportunities for your farm with aXiom Zorn's Financial Linkages. Through our partnership with Centenary Bank, farmers and agribusinesses can access loans, inputs, and financial services without the usual hardships.",
      options: [
        'POP Credit Scoring System',
        'No-Collateral Loans',
        'Banking Partnerships',
      ]
    },



    {
      title: 'AZ Bundle Insurance',
      icon: LandmarkIcon,
      body: "Protect your farm and your future with AZ Bundle Insurance. This mobile-based, seasonal insurance package shields you from crop losses, weather shocks, and health risks that could affect farm productivity.",
      options: [
        'Weather Index Coverage',
        'Micro-health Insurance',
        'Seasonal Subscription Model',
      ]
    },



    {
      title: 'Advisory Services',
      icon: UserRoundIcon,
      body: "Make smarter farming decisions with aXiom Zorn Advisory Services. We provide real time insights, agronomic guidance, pest and disease alerts, and early warning systems through our network of field agents.",
      options: [
        'Expert Agronomic Guidance',
        'Pest & Disease Monitoring',
        'Early Warning Systems',
      ]
    }


  ]




  const processArray = [
    {
      title: 'Data Collection',
      label: '1',
      body: "We gather comprehensive farmer and farm data through our network of field agents and digital tools.",

    },

    {
      title: 'Verification & Analysis',
      label: '2',
      body: "All data is verified, processed, and analyzed in real-time to ensure accuracy and reliability.",

    },


    {
      title: 'Intelligence Platform',
      label: '3',
      body: "Structured data is made accessible through DARB platform for informed decision-making.",

    },


    {
      title: 'Service Delivery',
      label: '4',
      body: "Financial institutions, insurers, and partners use the data to deliver tailored services to farmers.",

    },


  ]





  const partnersArray = [
    {
      title: 'AIC',
    },

    {
      title: 'Centenary Bank',
    },

    {
      title: 'Yo! Uganda',
    },

    {
      title: 'Turaco',
    },

  ]



  const impactArray = [
    {
      value: '401,256',
      label: 'Farmers Profiled',


    },



    {
      value: '4,767',
      label: '1SMEs Supported',


    },


    {
      value: '17',
      label: 'Regions Covered',


    },


    {
      value: '58',
      label: 'Active Users',


    },




  ]



  return (
    <>
      <section id="home" className="bg-primary-500 px-20 py-26"> <img class="h-full w-full object-cover ..." src="/component/images/11.jpg" />

        <div className="grid grid-cols-12 gap-6 pb-10">
          <div className="col-span-7">
            <div className="pb-6">
              <div className="text-7xl text-white font-extrabold pb-6">Empowering farmers through smart data solutions</div>
              <div className="text-2xl text-amber-500">Boost your profilts with our Fertilizer optimization tool</div>
            </div>
            <div className="pb-10 text-white">
              The Digital Agricultural Reference Bureau (DARB) is an ICT powered, data driven platform developed by aXiom Zorn to bridge the gap between the production activities of smallholder farmers and agribusinesses into a single, verified agricultural intelligence system.
            </div>
            <div className="flex items-center space-x-5">
              <Link href="/services" className="px-8 py-4 bg-white text-primary-500 rounded-xl">Explore Solutions</Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-primary-100 rounded-xl">Request Demo</Link>
            </div>
          </div>

          <div className="col-span-5 flex items-end ">
            <div className="bg-white rounded-2xl p-12 w-full">
              <div className="text-2xl text-primary-500 font-bold pb-12">Complete Platform Features</div>
              <ul className="">
                {servicesList.map((item) => {
                  return (
                    <li className="flex items-center gap-2 pb-6"><Icon /> {item}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex item-center gap-6">
          <HeroStats label={'Farmers Profiles'} value={401} />
          <HeroStats label={'Regions Covered'} value={17} />
        </div>





      </section>
      <section id="details" className="bg-white px-20 py-26 w-full">
        <div >
          <div className="bg-cyan-50 border-[0.5px] border-gray-300 px-15 py-8 rounded-2xl gap-1.55">
            <p>
              The platform enables banks, insurance companies, government agencies, and development partners to access reliable, structured data and analytics, allowing them to channel financial services, markets, advisory support and policy interventions that improve agricultural production in rural areas as well as agribusinesses.
              DARB anchors a series of information, including farmer and agro dealer profiles, value chains, locations, production data, markets, and weather as processed and harmonized in real time. These altogether creates a reliable reference system for banks, insurers, governments, and agribusinesses to make informed decisions and support agricultural growth.
            </p>
          </div>
        </div>

      </section>


      <section id="services" className="bg-gray-100 px-20 py-26">
        <div className="bg-gray-100 px-20 py-20 ">
          <div className="pb-4 justify-content: center">
            <div className="text-2xl text-amber-600">Our Sevices</div>
            <div className="text-5xl text-black font-extrabold pb-6">Comprehensive Agricultural Solutions</div>
            <div className="text-2xl text-gray-500">Data-driven services designed to transform agricultural productivity and profitability</div>
          </div>

        </div>
        <div className="grid grid-cols-3 gap-12">
          {
            servicesArray.map((service: any) => (
              <div key={service.title}>
                <ServicesComponent Title={service.title} Body={service.body} options={service.options} Icon={service.icon} />
              </div>
            )

            )
          }
        </div>
      </section>




      <section id="process" className="bg-gray-100/10 px-20 py-10">
        <div className="bg-gray-100/10 px-20 py-20 ">
          <div className="pb-4 justify-content: center">
            <div className="text-2xl text-amber-600">Our Process</div>
            <div className="text-5xl text-black font-extrabold pb-6">How It Works</div>
            <div className="text-2xl text-gray-500">A simple, data-driven approach to transforming agricultural productivity</div>
          </div>

        </div>
        <div className="grid grid-cols-4 ">
          {
            processArray.map((process: any) => (
              <div key={process.title}>
                <ProcessComponent title={process.title} body={process.body} label={process.label} />
              </div>
            )

            )
          }
        </div>
      </section>



      <section id="partners" className="bg-gray-100 px-20 py-5">
        <div className="bg-gray-100/10 px-20 py-20 ">
          <div className="pb-4 justify-content: center">
            <div className="text-5xl text-black font-extrabold pb-6">Trusted By Leading Organizations</div>
          </div>

        </div>
        <div className="grid grid-cols-4 gap-4">
          {
            partnersArray.map((partners: any) => (
              <div key={partners.title}>
                <PartnersComponent title={partners.title} />
              </div>
            )

            )
          }
        </div>
      </section>




      <section id="impact" className="bg-primary-500 px-20 py-26">
        <div className="bg-primary-500 px-20 py-26 ">
          <div className="pb-4 justify-content: center">
            <div className="text-5xl text-white font-extrabold pb-6">Our Impact in Numbers</div>
          </div>

        </div>
        <div className="grid grid-cols-4 gap-12">
          {
            impactArray.map((impact: any) => (
              <div key={impact.title}>
                <ImpactComponent value={impact.value} label={impact.label} />
              </div>
            )

            )
          }
        </div>
      </section>




 <section id="form" className="bg-gray-50 px-10 py-26">
 <div className="relative isolate bg-white px-20 py-20 ">
 <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
    <div className="relative left-1/2 -z-10 aspect-square w-160 -translate-x-1/2 rounded-full bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-6xl"></div>
  </div>


  <div className="mx-auto max-w-2xl text-center">
     <div className="text-2xl text-amber-600">Get In Touch</div>
    <div className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us</div>
    <div className="mt-2 text-lg/8 text-gray-600">Have questions or ready to get started? We're here to help.</div>
  </div>

  <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">First name</label>
        <div className="mt-2.5">
          <input id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-400" />
        </div>
      </div>

      <div>
        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">Last name</label>
        <div className="mt-2.5">
          <input id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-400" />
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email Address*</label>
        <div className="mt-2.5">
          <input id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-400" />
        </div>
      </div>
      
<div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">Reason*</label>
        <div className="mt-2.5">
          <input id="reason" type="text" name="reason" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primar-400" />
        </div>
      </div>


      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message*</label>
        <div className="mt-2.5">
          <textarea id="message" name="message" rows= {4} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-400"></textarea>
        </div>
      </div>

      <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-primary-400 has-focus-visible:outline-2">
            <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
            <input id="agree-to-policies" type="checkbox" name="agree-to-policies" aria-label="Agree to policies" className="absolute inset-0 size-full appearance-none focus:outline-hidden" />
          </div>

        </div>
        <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
          By selecting this, you agree to our 
          <a href="#" className="font-semibold whitespace-nowrap text-amber-700"> privacy policy</a>.
        </label>
      </div>
    </div>
    
    <div className="mt-10">
  <button 
  type="submit" 
  className="flex w-full items-center justify-center gap-2 rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400">
  <span>Send message</span>
  <SendIcon size={18} />
</button>
    </div>
  </form>
</div>
      </section>

<footer/>


    </>

  );

}
