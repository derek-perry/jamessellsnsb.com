import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
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

        <p className="mt-10 mb-20 font-normal text-4xl">
          Realtor ®
        </p>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage