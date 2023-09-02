import Image from 'next/image'
import LinkInternal from "../Links/LinkInternal"
import LinkExternal from "../Links/LinkExternal"

const PageFooter = (): JSX.Element => {
  let currentYear: number=new Date().getFullYear();

  return (
      <footer className="bg-cyan-900 text-white text-xl w-full shadow-[0_-5px_5px_0px_rgba(0,0,0,0.1)]">
        <div className="pt-16 pb-12 px-9 flex flex-col gap-y-10 text-center items-center justify-center">
          <div className="flex flex-row flex-wrap gap-10 text-center items-center justify-center">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/JamesCumiskey.png' || './JamesCumiskey.png'}
              width={300}
              height={300}
              alt="James Cumiskey"
              className="shadow-lg bg-white rounded-lg text-center flex items-center justify-center align-middle break-all overflow-auto"
            />
            <div className="flex flex-col text-left max-sm:text-center items-left justify-left">
              <LinkInternal className="no-underline" href="" title="James Sells NSB">
                <p className="font-light text-6xl">James Sells NSB</p>
              </LinkInternal>
              <hr className="mt-2 mb-2" />
              <p className="mt-6 mb-2 text-white font-light text-black text-4xl"><strong>James Cumiskey</strong><br /><em className="text-3xl">New Smyrna Beach</em></p>

              <p className="mt-3 mb-2 font-normal text-3xl">
                Realtor ®
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
              <p>Email: <LinkExternal className="text-white no-underline max-sm:break-all" href="mailto:contact@jamessellsnsb.com" title="Contact James Cumiskey via Email at Contact@JamesSellsNSB.com">Contact@JamesSellsNSB.com</LinkExternal></p>
              <p>Phone: <LinkExternal className="text-white no-underline max-sm:break-all" href="tel:3864449116" title="Contact James Cumiskey via Phone at 386-444-9116">386-444-9116</LinkExternal></p>
          </div>
          <div className="flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
              <p> © {currentYear} <LinkInternal className="text-white no-underline" href="" title="James Cumiskey">James Cumiskey</LinkInternal></p>
              <LinkInternal className="text-white" href="privacy" title="Privacy Policy">Privacy Policy</LinkInternal>
          </div>
        </div>
      </footer>
  )
}

export default PageFooter