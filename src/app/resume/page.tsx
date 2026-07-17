import Link from "next/link";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  ArrowLeftIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/Icons";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume — Maryam Mueen",
  description:
    "Resume of Maryam Mueen — Computer Scientist, final-year CS student at UET Lahore.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-surface print:bg-white">
      <header className="sticky top-0 z-40 border-b border-token backdrop-blur-xl bg-white/60 dark:bg-black/50 print:hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <PrintButton />
            <a
              href="/Resume_Maryam.pdf"
              download
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <DownloadIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 print:p-0 print:max-w-none">
        <article className="mx-auto rounded-lg shadow-2xl border border-token bg-elev p-6 sm:p-10 md:p-14 print:shadow-none print:border-0 print:p-8 print:bg-white print:text-black leading-relaxed">
          <ResumeHeader />
          <ResumeSection title="Summary">
            <p className="text-[13.5px] leading-relaxed">
              Final-year Computer Science student at UET Lahore with strong
              programming and problem-solving skills. Proficient in C++, Python,
              C#, Django, and Flask, with experience in databases, automation,
              and cloud technologies. Passionate about AI and aspiring to build
              a career in software Development. A quick learner and team
              player, eager to take on challenging projects.
            </p>
          </ResumeSection>

          <ResumeSection title="Experience">
            <ExperienceEntry
              title="Junior Website Developer"
              period="June 2025 – August 2025"
              company="ppcfly.pk"
              location="Pakistan, Lahore"
              description="Gained hands-on experience in web development using Django. Successfully deployed multiple application stacks on Vercel and AWS."
            />
            <ExperienceEntry
              title="Teaching Assistant"
              period="September 2023 – May 2024"
              company="Department of Computer Science, UET Lahore"
              description="Worked as a Teaching Assistant for Object Oriented Programming (OOP) and Programming Fundamentals (PF) under Mr. Laiq uz Zaman Khan Niazi. Also served as Teaching Assistant for Information Security under Ms. Ayesha Altaf."
            />
          </ResumeSection>

          <ResumeSection title="Selected Projects">
            <ProjectEntry
              name="Dark Prompt"
              stack="Django, Kaggle, Vercel"
              description="Developed a web application as part of my Final Year Project (FYP). The frontend and backend basic functionalities were implemented using Django, while the main LLM chat-bot was hosted and run on Kaggle."
            />
            <ProjectEntry
              name="School Management System"
              stack="Django"
              description="Created a web application for school management as part of the Software Engineering course."
            />
            <ProjectEntry
              name="Mind Craft"
              stack="Django"
              description="NLP project for education and learning, fine tuned an LLM on data from twitter chats for semantic analysis and quiz and exam taker from uploaded documents"
            />
            <ProjectEntry
              name="Secure Chatting App"
              stack="Django"
              description="An Information Security project for chatting and file transfer with end to end encryption using various Encryption Algorithms."
            />
            <ProjectEntry
              name="Chess"
              stack="Python"
              description="Made a chess game as a Data structure project with GUI in Pyqt5, and and backend in python with every data setructure used manually implimented."
            />
          </ResumeSection>

          <ResumeSection title="Education">
            <div className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-1 text-[13.5px]">
              <span className="font-bold">
                University of Enginerring and Technology
              </span>
              <span className="italic">
                Lahore, Bachelor of Computer Science
              </span>
              <span>2022 - 2026</span>
            </div>
          </ResumeSection>

          <ResumeSection title="Technical Skills">
            <SkillLine label="Languages" items="Python, Bash, SQL, C#, C++" />
            <SkillLine
              label="Tools"
              items="Django, Docker, Window Forms, Microdoft Office"
            />
            <SkillLine label="Cloud" items="AWS" />
            <SkillLine
              label="Databases"
              items="PostgreSQL, MySQL, MongoDB"
            />
            <SkillLine
              label="Tools and DevOps"
              items="Selenium, Pandas, OpenAI, 'WhisperAI, GitLab, GIT"
            />
            <SkillLine
              label="Soft Skills"
              items="Problem-solving, Logical thinking, Debugging and optimization"
            />
            <SkillLine label="Languages" items="English and Urdu" />
          </ResumeSection>
        </article>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
          <a
            href="/Resume_Maryam.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Resume PDF
          </a>
          <PrintButton />
        </div>
        <p className="mt-4 text-center text-xs text-muted print:hidden">
          This is a rendered HTML version of the PDF resume. Download the PDF
          for the original layout.
        </p>
      </main>
    </div>
  );
}

function ResumeHeader() {
  return (
    <header className="text-center pb-4 mb-4">
      <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight print:text-black">
        MARYAM MUEEN
      </h1>
      <p className="mt-1 text-sm print:text-black">Computer Scientist</p>
      <p className="mt-1 text-[13px] print:text-black">
        +923124933903 | maryammueen1@gmail.com | Lahore, Punjab Pakistan |{" "}
        <a
          href="#"
          className="inline-flex items-center gap-1 underline underline-offset-2"
        >
          <LinkedinIcon className="h-3 w-3" />
          Linkedin
        </a>{" "}
        |{" "}
        <a
          href="#"
          className="inline-flex items-center gap-1 underline underline-offset-2"
        >
          <GithubIcon className="h-3 w-3" />
          GitHub
        </a>
      </p>
      <p className="mt-1 text-[13px] print:text-black">
        open to On-Site | open to Remote | open to Hybrid
      </p>
    </header>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5 md:mb-6">
      <h2 className="text-[13px] font-serif font-semibold uppercase tracking-[0.15em] pb-1 mb-3 border-b border-current/40 print:text-black print:border-black/40">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function ExperienceEntry({
  title,
  period,
  company,
  location,
  description,
}: {
  title: string;
  period: string;
  company: string;
  location?: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-0.5 text-[13.5px]">
        <span className="font-bold">{title}</span>
        <span className="italic text-[13px]">{period}</span>
        <span className="italic text-[13px]">{company}</span>
        {location && <span className="text-[13px]">{location}</span>}
      </div>
      <p className="mt-1 text-[13.5px] leading-relaxed">{description}</p>
    </div>
  );
}

function ProjectEntry({
  name,
  stack,
  description,
}: {
  name: string;
  stack: string;
  description: string;
}) {
  return (
    <div>
      <div className="text-[13.5px]">
        <span className="font-bold">{name}</span>{" "}
        <span className="italic">| {stack}</span>
      </div>
      <p className="mt-0.5 text-[13.5px] leading-relaxed">{description}</p>
    </div>
  );
}

function SkillLine({ label, items }: { label: string; items: string }) {
  return (
    <p className="text-[13.5px] leading-relaxed">
      <span className="font-bold">{label}:</span> {items}
    </p>
  );
}
