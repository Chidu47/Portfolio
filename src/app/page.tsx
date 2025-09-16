import Link from "next/link";
import Projects from "./components/projects";

export default function Home() {
  //test
  return (
    <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12  antialiased sm:py-32 md:overflow-x-visible md:py-16">
      <header className="mb-32 flex flex-col items-start">
        <Link
          className="text-medium inline-block font-medium no-underline mb-1 "
          href="/"
        >
          Chidananda K M
        </Link>
        <span className="text-medium font-medium leading-none text-[#b5b3ad]">
          Full Stack Developer
        </span>
      </header>
      <main>
        <span className="mb-5 block font-medium sm:mb-6">Today</span>
        <p className="text-gray-1100 font-bold text-[#b5b3ad]">
          Fullstack Developer —{" "}
          <Link
            href="https://iterator.in"
            className="underline font-bold underline-offset-3 decoration-2 decoration-gray-200 transition-all hover:decoration-gray-900"
            target="_blank"
          >
            Iterator
          </Link>
        </p>
        <div className="mt-4 text-gray-1100 text-[#b5b3ad]">
          <ul className="list-disc pl-5">
            <li>
              Contributed to building and scaling B2B SaaS products in a
              fast-paced startup environment
            </li>
            <li>
              Worked closely with clients to gather feedback and translate it
              into product improvements
            </li>
            <li>
              Collaborated with backend teams to define requirements and ensure
              seamless integrations
            </li>
            <li>
              Took ownership of end-to-end development, deployment, and ongoing
              maintenance
            </li>
            <li>
              Focused on delivering high-quality, user-centric frontend
              experiences while supporting backend needs
            </li>
          </ul>
        </div>
        <div className="-mb-3 mt-16 sm:mt-32">
          <Projects />
          {/* <span className="mb-5 block font-medium sm:mb-4">Projects</span>
          <div className="flex flex-col gap-7 sm:gap-4">
            <a
              href="https://karbonwise.com/"
              target="_blank"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#191918] sm:py-3"
            >
              <span>Karbonwise</span>
              <span className="text-gray-1100">
                A course on web animations.
              </span>
            </a>
            <a
              href="https://sonner.emilkowal.ski/"
              target="_blank"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-gray-200 sm:py-3"
            >
              <span>Sonner</span>
              <span className="text-gray-1100">
                An opinionated toast component for React.
              </span>
            </a>
            <a
              href="https://vaul.emilkowal.ski/"
              target="_blank"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-gray-200 sm:py-3"
            >
              <span>Vaul</span>
              <span className="text-gray-1100">
                A drawer component for React.
              </span>
            </a>
          </div> */}
        </div>

        {/* <div className="mt-16 pb-1 sm:mt-32">
                    <span className="mb-5 block font-medium sm:mb-6">Newsletter</span>
                    <span className="block text-gray-1100">Exclusive, newsletter-only content once a month. No spam, no nonsense.</span>
                    <form className="mt-6 flex h-10 items-center  justify-between gap-2 overflow-hidden rounded-md bg-gray-100 bg-white shadow-border focus-within:border-gray-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-black/20 focus-within:ring-offset-0 dark:bg-[#0B0B09] dark:focus-within:ring-white/20 border-gray-200 focus-within:border-gray-400 focus-within:ring-black/20 dark:focus-within:ring-white/20">
                        <label for="email" className="sr-only">Email</label>
                        <input id="email" className="h-full w-[40%] grow border-none bg-transparent px-3.5 transition-colors placeholder:text-gray-900 focus:outline-none" required="" placeholder="Enter your email" value=""/>
                        <button type="submit" className="hover:bg-gray-1200/90 mr-1 h-[30px] w-[80px] rounded-[4px] bg-gray-1200 px-1.5 text-sm font-medium text-gray-100 outline-none focus:shadow-focus-ring md:w-[104px] md:px-3.5">
                            <span className="block" style="opacity:1;transform:none">Subscribe</span>
                        </button>
                    </form>
                </div> */}
        <div className="mt-16 sm:mt-32">
          <span className="mb-5 block font-medium sm:mb-6">More</span>
          <span className="text-gray-1100">
            You can see more of my work on
            {/* <!-- --> */}
            <a href="https://twitter.com/emilkowalski_" target="_blank">
              Twitter
            </a>
            {/* <!-- --> */}
            and more of my code on {/* <!-- --> */}
            <a href="https://github.com/emilkowalski" target="_blank">
              GitHub
            </a>
            .
          </span>
        </div>
      </main>
    </div>
  );
}
