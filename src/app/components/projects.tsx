import Link from "next/link";

export default function Projects() {
  return (
    <main className="mx-auto text-gray-1100 antialiased">
      <header className="mb-8">
        <span className="mb-5 block font-medium sm:mb-4">Projects</span>
      </header>

      {/* KarbonWise */}
      <section className="mb-10">
        <h2 className=" font-semibold text-gray-1100">
          <Link
            href="https://karbonwise.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-3 decoration-2 decoration-gray-200 transition-all hover:decoration-gray-900"
          >
            KarbonWise
          </Link>
        </h2>
        <p className="italic text-gray-1100 mt-1">
          A B2B SaaS platform that helps companies measure, manage, and offset
          their carbon footprint.
        </p>
        <ul className="list-disc list-outside pl-6 mt-4 space-y-2 text-[#b5b3ad]">
          <li>
            Built and optimized frontend features with a focus on design
            translation and responsiveness
          </li>
          <li>
            Integrated REST APIs for seamless communication between frontend and
            backend services
          </li>
          <li>
            Collaborated with designers to deliver consistent and scalable UI/UX
          </li>
          <li>
            Worked directly with clients to gather feedback and improve product
            features
          </li>
          <li>
            Contributed to testing, deployment pipelines, and ongoing
            maintenance in a fast-paced environment
          </li>
        </ul>
      </section>

      {/* Planorama */}
      <section className="mb-10">
        <h2 className="font-semibold text-gray-1100">
          <Link
            href="https://planorama.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-3 decoration-2 decoration-gray-200 transition-all hover:decoration-gray-900"
          >
            Planorama
          </Link>
        </h2>
        <p className="italic text-gray-1100 mt-1">
          A SaaS solution for event planning and management, enabling organizers
          to streamline operations.
        </p>
        <ul className="list-disc list-outside pl-6 mt-4 space-y-2 text-[#b5b3ad]">
          <li>
            Developed frontend components and ensured accurate design-to-code
            implementation
          </li>
          <li>
            Connected frontend with backend APIs for real-time data and
            functionality
          </li>
          <li>
            Coordinated with clients to refine workflows and deliver requested
            updates
          </li>
          <li>
            Involved in testing and deployment to ensure reliable product
            releases
          </li>
          <li>
            Supported post-launch iterations, bug fixes, and feature
            enhancements
          </li>
        </ul>
      </section>
    </main>
  );
}
