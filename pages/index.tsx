import Reac from 'react';
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import { getListings } from "../lib/api";
import ListingImages from "../components/ListingImages"

interface listingsProps {
  listings: listingsInnerProps[]
}

interface listingsInnerProps {
  address: string,
  city: string,
  price: string,
  description: string,
  image1: string,
  image2: string,
  image3: string,
  image4: string,
  image5: string,
  image6: string,
  image7: string,
  image8: string,
  image9: string,
  image10: string
}

const homePage: NextPage<listingsProps> = ({ listings }) => {
  function stringWithCommas(inputString: string) {
    var outputString = inputString.toString().split(".");
    outputString[0] = outputString[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return outputString.join(".");
  }
  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString.toString().replace(/\n/g, "<br />");
    return outputString;
  }
  function stringWithUrlSupport(inputString: string) {
    var outputString = inputString.trim().toString().toLowerCase().replace(/\s+/g, '-').replace(/ - /g, "-").replace(/---/g, "-").replace(/\&/g, "and").replace(/;/g, "%3B").replace(/:/g, "%3A").replace(/"/g, "%22").replace(/'/g, "%27").replace(/,/g, "%2C").replace(/\?/g, "%3F").replace(/!/g, "%21").replace(/@/g, "%40").replace(/#/g, "%23").replace(/\$/g, "%24").replace(/&/g, "%26").replace(/\*/g, "%2A").replace(/=/g, "%3D").replace(/\+/g, "%2B").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\\/g, "%5C").replace(/\//g, "%2F");
    return outputString;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="James Sells NSB" description="James Sells NSB is the official website for Realtor James Cumiskey of New Smyrna Beach." url="" />

      <main className="py-20 px-9 bg-slate-100 w-full flex flex-1 flex-col text-center items-center justify-center">
        <div className="max-w-[1100px] w-full flex flex-1 flex-col text-center items-center justify-center">
          <h1 className="mt-8 mb-10 text-sky-600 font-light text-5xl">James Sells NSB <hr className="mt-2 mb-6" /><em className="text-black">James Cumiskey of New Smyrna Beach</em></h1>

          <Image
            src={process.env.NEXT_PUBLIC_SITE_URL + '/JamesCumiskey.png' || './JamesCumiskey.png'}
            width={300}
            height={300}
            alt="James Cumiskey"
            className="shadow-lg bg-white rounded-lg text-center flex items-center justify-center align-middle break-all overflow-auto"
          />

          <p className="mt-10 mb-10 font-normal text-4xl">
            Realtor ®
          </p>

          <div id="contact" className="mb-10 text-xl flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
            <p>Email: <LinkExternal className="no-underline max-sm:break-all" href="mailto:contact@jamessellsnsb.com" title="Contact James Cumiskey via Email at Contact@JamesSellsNSB.com">Contact@JamesSellsNSB.com</LinkExternal></p>
            <p>Phone: <LinkExternal className="no-underline max-sm:break-all" href="tel:3864449116" title="Contact James Cumiskey via Phone at 386-444-9116">386-444-9116</LinkExternal></p>
          </div>

          <div id="social" className="mb-20 text-xl flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
            <p>TikTok: <LinkExternal className="no-underline max-sm:break-all" href="https://tiktok.com/@James.CumiskeySales" title="Follow James Cumiskey on TikTok at James.CumiskeySales">James.CumiskeySales</LinkExternal></p>
            <p>Instagram: <LinkExternal className="no-underline max-sm:break-all" href="https://instagram.com/JamesRDCumiskeyRealEstateSales" title="Follow James Cumiskey on Instagram at JamesRDCumiskeyRealEstateSales">JamesRDCumiskeyRealEstateSales</LinkExternal></p>
          </div>
        </div>

        <div className="w-full flex flex-1 flex-col text-center items-center justify-center">
          <h2 id="listings" className="mt-8 mb-10 font-semibold text-4xl">Active Listings</h2>
          <div className="overflow-hidden w-full max-w-full mb-20 mx-2 text-xl flex flex-row flex-wrap gap-x-8 gap-y-8 text-center items-top justify-center">
            {listings
              .slice(1)
              .map(({ address, city, price, description, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 }) => (
                <div
                  className="overflow-hidden w-full max-w-full xl:max-w-[500px] shadow-lg bg-white rounded-lg py-4 px-5"
                  key={address}
                  id={stringWithUrlSupport(address)}
                >
                  <h3 className="bg-slate-100 min-h-[88px] flex items-center justify-center font-bold text-3xl p-2 mt-1 mb-3 hyphens-auto rounded-lg">{address}</h3>
                  <p className="mt-4 mb-1 text-2xl">{city}</p>
                  <p className="mb-4 text-2xl"><em>{'$' + stringWithCommas(price)}</em></p>
                  <ListingImages address={address} images={[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]}/>
                  <p className="mt-2 mb-2 hyphens-auto text-left" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(description) }} />
                </div>
              ))}
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage

export const getStaticProps: GetStaticProps = async () => {
  const listings = await getListings();

  return {
    props: {
      listings
    },
    revalidate: 1
  };
}