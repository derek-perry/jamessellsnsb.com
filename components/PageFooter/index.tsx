import Image from 'next/image'
import LinkInternal from "../Links/LinkInternal"
import LinkExternal from "../Links/LinkExternal"

const PageFooter = (): JSX.Element => {
  let currentYear: number=new Date().getFullYear();

  return (
      <footer className="bg-[#252162] text-white text-xl w-full shadow-[0_-5px_5px_0px_rgba(0,0,0,0.1)]">
        <div className="pt-16 pb-12 px-9 flex flex-col gap-y-10 text-center items-center justify-center">
          <LinkInternal className="!text-sky-600 focus:!text-sky-800 hover:!text-sky-700 no-underline" href="" title="James Sells NSB">
            <h1 className="font-light text-5xl">James Sells NSB</h1>
          </LinkInternal>
          <div className="flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
              <p> © {currentYear} <LinkInternal className="!text-white focus:!text-slate-400 hover:!text-slate-300 no-underline" href="" title="James Cumiskey">James Cumiskey</LinkInternal></p>
              <LinkInternal className="!text-white focus:!text-slate-400 hover:!text-slate-300" href="privacy" title="Privacy Policy">Privacy Policy</LinkInternal>
          </div>
        </div>
      </footer>
  )
}

export default PageFooter