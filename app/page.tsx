'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  WORK_EXPERIENCE,
  BLOG_POSTS,
  SOCIAL_LINKS,
  EMAIL,
  TECHNOLOGIES,
  CERTIFICATIONS,
  QUALIFICATIONS,
  ACADEMIC_PROJECTS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="connect"
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="about"
      >
        <h3 className="mb-5 text-lg font-medium">PROFESSIONAL PROFILE</h3>
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            ➢ <strong>Data Analytics:</strong> Solid skills in complex analysis and mapping business goals, objectives and needs. Adept in applying machine learning algorithms to derive meaningful insights and definitive results, explaining reports and presenting research findings and decision tree model results in a clear and understandable way. Strong track record of deploying Business Intelligence Solutions, applying industry best practices, and using the latest technology in data and analytics.
            <br /><br />
            ➢ <strong>Data Science:</strong> Demonstrates skills in data processing, able to work in complex environments with enterprise applications. Possesses a combination of technical and non-technical skills with proficiency in programming languages like Python and R, statistical modelling, machine learning, and data visualisation. Understands data science research methods. Practical skills include strong communication, problem-solving and critical thinking.
            <br /><br />
            ➢ <strong>Data Engineering:</strong> Through comprehensive studies has gained skills and knowledge in database management, big data technologies, data warehousing, troubleshooting and cloud computing platforms. Advance knowledge base includes SQL Server Administration, Manipulating Complex Datasets, Data Transformation & Cleaning, Integrating Data Sources and Big Data Technologies.
          </p>
          
          <div className="mt-6">
            <h4 className="mb-3 text-md font-medium text-zinc-700 dark:text-zinc-300">Advanced Knowledge Base</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Data Mining & Modelling</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Performance Evaluation</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Data Visualisation & Mining</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Data Science Research Methods</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Machine Learning Algorithms</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Integrating Data Sources</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">SQL Server Administration</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Big Data Technologies</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Data Transformation & Cleaning</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Data Insights & Results</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Manipulating Complex Datasets</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500 dark:text-zinc-400">▪</span>
                <span className="text-zinc-600 dark:text-zinc-400">Generating & Analysing Reports</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="technologies"
      >
        <h3 className="mb-5 text-lg font-medium">TECHNOLOGY & SOFTWARE LANGUAGES</h3>
        <div className="flex flex-col space-y-4">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <h4 className="mb-3 font-medium text-zinc-700 dark:text-zinc-300">{tech.category}</h4>
                <ul className="list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {tech.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="experience"
      >
        <h3 className="mb-5 text-lg font-medium">PROFESSIONAL EXPERIENCE</h3>
        <div className="flex flex-col space-y-4">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
                
                {job.tools && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-4">
                  <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">Responsibilities & Achievements</h5>
                  <ul className="list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {job.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                {job.results && (
                  <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                    <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">Results Delivered</h5>
                    <ul className="list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {job.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="academic"
      >
        <h3 className="mb-5 text-lg font-medium">ACADEMIC PROJECTS</h3>
        <div className="flex flex-col space-y-4">
          {ACADEMIC_PROJECTS.map((project) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={project.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {project.institution}
                    </p>
                  </div>
                </div>
                
                {project.tools && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-4">
                  <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">Project Details</h5>
                  <ul className="list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                {project.results && (
                  <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                    <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">Results & Achievements</h5>
                    <ul className="list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="qualifications"
      >
        <h3 className="mb-5 text-lg font-medium">QUALIFICATIONS</h3>
        <div className="flex flex-col space-y-4">
          {QUALIFICATIONS.map((qualification) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={qualification.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {qualification.degree}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {qualification.institution}
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {qualification.location}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {qualification.period}
                  </p>
                </div>
                
                {qualification.details && (
                  <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                    <ul className="list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {qualification.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="certifications"
      >
        <h3 className="mb-5 text-lg font-medium">TECHNICAL CERTIFICATIONS</h3>
        <div className="flex flex-col space-y-4">
          {CERTIFICATIONS.map((certification) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={certification.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {certification.name}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {certification.issuer}
                    </p>
                    {certification.credentialId && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Credential ID: {certification.credentialId}
                      </p>
                    )}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {certification.date}
                  </p>
                </div>
                
                {certification.link && (
                  <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                    <a 
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                      View Credential
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="references"
      >
        <h3 className="mb-3 text-lg font-medium">REFERENCES</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>
    </motion.main>
  )
}
