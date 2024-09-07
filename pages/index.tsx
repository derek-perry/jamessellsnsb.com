import type { NextPage } from 'next'
import Image from 'next/image'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="James Sells NSB" description="James Sells NSB is the official website for Realtor James Cumiskey of New Smyrna Beach." url="" />

      <main className="py-10 bg-slate-100 w-full flex flex-1 flex-col text-center items-center justify-center">
        <section id="info" className="px-9 max-w-[1100px] w-full flex flex-1 flex-col text-center items-center justify-center">
          <div className="mt-10 mb-10 flex flex-row flex-wrap gap-10 text-center items-center justify-center">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/JamesCumiskey.png' || './JamesCumiskey.png'}
              width={300}
              height={300}
              alt="James Cumiskey"
              className="shadow-lg bg-white rounded-lg text-center flex items-center justify-center align-middle break-all overflow-auto"
            />
            <div className="flex flex-col text-left max-sm:text-center items-left justify-left">
              <h1 className="mt-8 mb-2 text-cyan-600 font-light text-6xl">James Sells NSB</h1>
              <hr className="mt-2 mb-2" />
              <p className="mt-4 mb-2 font-light text-black text-4xl"><strong>James Cumiskey</strong><br /><em className="text-3xl">New Smyrna Beach</em></p>

              <p className="mt-3 mb-2 font-normal text-3xl">
                Realtor ®
              </p>
            </div>
          </div>

          <div id="contact" className="mt-10 mb-10 text-xl flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
            <p>Email: <LinkExternal className="no-underline max-sm:break-all" href="mailto:contact@jamessellsnsb.com" title="Contact James Cumiskey via Email at Contact@JamesSellsNSB.com">Contact@JamesSellsNSB.com</LinkExternal></p>
            <p>Phone: <LinkExternal className="no-underline max-sm:break-all" href="tel:3864449116" title="Contact James Cumiskey via Phone at 386-444-9116">386-444-9116</LinkExternal></p>
          </div>

          <div id="social" className="mb-20 text-xl flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
            <p>TikTok: <LinkExternal className="no-underline max-sm:break-all" href="https://tiktok.com/@James.CumiskeySales" title="Follow James Cumiskey on TikTok at James.CumiskeySales">James.CumiskeySales</LinkExternal></p>
            <p>Instagram: <LinkExternal className="no-underline max-sm:break-all" href="https://instagram.com/JamesRDCumiskeyRealEstateSales" title="Follow James Cumiskey on Instagram at JamesRDCumiskeyRealEstateSales">JamesRDCumiskeyRealEstateSales</LinkExternal></p>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  )
}

export default HomePage