import Head from 'next/head'
import Image from 'next/image'
import React, {useState, useEffect} from 'react';


export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500)


  }, [])
  return (
    <>
    <Head>

      <title>Speed Digital</title>
      <link rel="speed-digital-icon"  href="https://speeddigital.com/images/SD_MARK_on-dark-gray-e215649a.svg" />
    </Head>
      
<section>
  
    <div className="bg-black text-white py-8 ">
      
    {loading ? 
    <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-200">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#f0aa29] to-black/30 animate-spin">
        <div className="h-9 w-9 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </div>
    
    : 
    
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-[#fa991b] uppercase md:text-8xl text-4xl tracking-wide tracking-loose">Speed digital</p>
        <p className="uppercase tracking-widest text-xl md:text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">A look back at the last decade</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
          
        </p>
        <a href="https://speeddigital.com/" target="_blank" rel="noreferrer"
        className="uppercase tracking-widest ease-in duration-300 bg-transparent mr-auto  text-[#f0aa29] hover:text-white rounded-lg py-2 px-4 border border-[#f0aa29] hover:border-white">
        check us out</a>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              ></div>
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              ></div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className=" ease-in duration-300 hover:scale-105 order-1 md:w-5/12 w-10/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-[#f0aa29]">January 01, 2012</p>
                <h4 className="mb-3 font-bold text-lg md:text-4xl">The Founding Year</h4>
                <p className="pb-6 text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Founded in 2012, the Charlotte-based company offers a range of solutions. Its Dealer Accelerate software helps 200+ dealers manage over 8,200 collector cars in inventory for sale.
                </p>
                <a target="_blank" rel="noreferrer" href="https://www.crunchbase.com/organization/speed-digital" className="   text-center m-auto"><span className="tracking-widest uppercase p-2 border rounded-lg ease-in duration-300 hover:text-[#f0aa29] hover:border-[#f0aa29] text-xs">Source</span></a>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 "></div>
              <div className="order-1 ease-in duration-300 hover:scale-105 md:w-5/12 w-10/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-[#f0aa29]">May 26, 2017</p>
                <h4 className="mb-3 font-bold text-lg md:text-3xl">Speed Digital partners with HemmingsPRO for Mustangs vs. Camaros</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                This event will help settle the long-standing rivalry between the two sporsts car brands and determine which American classic is truly most popular, Speed Digital said. 
                </p>
                <div className=" text-right p-3 pb-6 uppercase tracking-widest text-sm md:text-lg text-white/60"><p >&quot;We look forward to bringing this unique auction format to millions of Mustang and Camaro fans&quot;</p>
                <p>-Neil Pitt</p>
              </div>
              <a rel="noreferrer" target="_blank" href="https://www.autoremarketing.com/wholesale/online-auction-host-mustangs-vs-camaros-sale" className="   text-center m-auto"><span className="tracking-widest uppercase p-2 border rounded-lg ease-in duration-300 hover:text-[#f0aa29] hover:border-[#f0aa29] text-xs">Source</span></a>
              </div>
            </div>
            <div className="mb-8  flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="group ease-in duration-300 hover:scale-105 order-1 md:w-5/12 w-10/12 px-4 py-4 text-right">
                <p className="mb-3 text-base text-[#f0aa29]">January 24, 2018</p>
                <h4 className="mb-3 font-bold text-lg md:text-3xl">2017 Speed Digital Dealer of the Year Awarded to <a target="_blank" rel="noreferrer" className="hover:text-[#f0aa29]" href="https://www.flemingsultimategarage.com/">Fleming&apos;s Ultimate Garage</a></h4>
                <p className=" text-left text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Every year at the Speed Soiree, beginning with this year&apos;s event, Speed Digital will recognize the previous year&apos;s Dealer of the Year. This year the winner was given a custom Speed Digital BRM Chronographers watch.
                </p>
                <div className="p-3 uppercase tracking-widest text-sm md:text-lg text-white/60 pb-6"><p >&quot; Thanks to speed digital for this incredible award...&quot;</p>
                <p>-Tony Flemings</p>
              </div>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Sojz36F7I4o" className="   text-center m-auto"><span className="tracking-widest uppercase p-2 border rounded-lg ease-in duration-300 hover:text-[#f0aa29] hover:border-[#f0aa29] text-xs ">Source</span></a>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1 ease-in duration-300 hover:scale-105 md:w-5/12 w-10/12 px-1 py-4">
                <p className="mb-3 text-base text-[#f0aa29]">September 03, 2020</p>
                <h4 className="mb-3 font-bold  md:text-5xl  text-left"><a className="hover:text-[#f0aa29]" rel="noreferrer" target="_blank" href="https://www.motorious.com/">Motorious.com</a> Ranks on Alexa</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Motorious.com Puts The Pedal To The Metal And Becomes The Top Collector Car Site In The US
                </p>
                <div className="p-3 pb-6 text-right uppercase tracking-widest text-sm md:text-lg text-white/60"><p >&quot;I&apos;m proud of what the Speed Digital and Motorious team has accomplished in a short time-frame,&quot;</p>
                <p className="pt-5">-Also Neil Pitt</p>
              </div>
              <a target="_blank" rel="noreferrer" href="https://www.prnewswire.com/news-releases/motoriouscom-puts-the-pedal-to-the-metal-and-becomes-the-top-collector-car-site-in-the-us-301123913.html" className="   text-center m-auto"><span className="tracking-widest uppercase p-2 border rounded-lg ease-in duration-300 text-xs hover:text-[#f0aa29] hover:border-[#f0aa29] ">Source</span></a>
            
              </div>
            </div>
            <div className="order-1 ease-in duration-300 hover:scale-105 md:w-5/12 w-10/12 px-1 py-4 text-right">
                <p className="mb-3   text-base text-[#f0aa29]">April 14, 2022</p>
                <h4 className="mb-3 font-bold text-3xl md:text-2xl"><a rel="noreferrer" target="_blank" href="https://www.hagerty.com/" className="hover:text-[#f0aa29] cursor-pointer">Hagerty, Inc. </a>acquired Speed Digital, LLC for $15 million.</h4>
                <p className="px-5  text-left pb-6 text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Hagerty, Inc. completed the acquisition of Speed Digital, LLC on April 14, 2022. Houlihan Lokey Capital, Inc. acted as fairness opinion provider to Hagerty, Inc. Out of total $15 million consideration, Hagerty paid $7.5 million at closing with an additional $3.75 million to be paid in two annual installments occurring in 2023 and 2024.
                </p>
                <div className="p-3 pb-6 uppercase tracking-widest text-sm md:text-xl text-right  text-white/60"><p >&quot;When we talk about our passion for strengthening and growing car culture for future generations, we mean the whole automotive ecosystem, including those who help get collector cars in the hands of enthusiasts&quot;</p>
                <p className="pt-5">-McKeel Hagerty</p>
              </div>
              <a target="_blank" rel="noreferrer" href="https://www.prnewswire.com/news-releases/motoriouscom-puts-the-pedal-to-the-metal-and-becomes-the-top-collector-car-site-in-the-us-301123913.html" className="   text-center m-auto"><span className="tracking-widest uppercase p-2 border rounded-lg ease-in duration-300 text-xs hover:text-[#f0aa29] hover:border-[#f0aa29] ">Source</span></a>
              </div>
              
            
              
          </div>
          <Image alt="speed digital logo" width={150} height={150} className="mx-auto -mt-36 md:-mt-36" src="https://speeddigital.com/images/SD_MARK_on-dark-gray-e215649a.svg" />
        </div>
      </div>
    </div>}
  </div>
  </section>
    </>
  )
}
