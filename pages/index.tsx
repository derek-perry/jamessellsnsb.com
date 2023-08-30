import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import Image from 'next/image'

const homePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="James Sells NSB" description="James Sells NSB is the official website for Realtor James Cumiskey of New Smyrna Beach." url="" />

      <main className="py-20 px-9 max-w-[1100px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <h1 className="mt-8 mb-10 text-sky-600 font-light text-5xl">James Sells NSB <hr className="mt-2 mb-6" /><em className="text-black">James Cumiskey of New Smyrna Beach</em></h1>

        <Image
          src={process.env.NEXT_PUBLIC_SITE_URL + '/JamesCumiskey.png' || './JamesCumiskey.png'}
          width={300}
          height={300}
          alt="James Cumiskey"
          className="shadow-lg"
        />

        <p className="mt-10 mb-10 font-normal text-4xl">
          Realtor ®
        </p>

        <div className="mb-10 text-xl flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
            <p>Email: <LinkExternal className="no-underline break-all" href="mailto:contact@jamessellsnsb.com" title="Contact James Cumiskey via Email at Contact@JamesSellsNSB.com">Contact@JamesSellsNSB.com</LinkExternal></p>
            <p>Phone: <LinkExternal className="no-underline break-all" href="tel:3864449116" title="Contact James Cumiskey via Phone at 386-444-9116">386-444-9116</LinkExternal></p>
        </div>

        <div className="mb-20 text-xl flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
            <p>TikTok: <LinkExternal className="no-underline break-all" href="https://tiktok.com/@James.CumiskeySales" title="Follow James Cumiskey on TikTok at James.CumiskeySales">James.CumiskeySales</LinkExternal></p>
            <p>Instagram: <LinkExternal className="no-underline break-all" href="https://instagram.com/JamesRDCumiskeyRealEstateSales" title="Follow James Cumiskey on Instagram at JamesRDCumiskeyRealEstateSales">JamesRDCumiskeyRealEstateSales</LinkExternal></p>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage