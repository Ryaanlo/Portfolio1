import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Stack from '@/components/Stack';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <a
            href="/files/Ryan_Lo_Resume_New.pdf"
            alt="alt text"
            target="_blank"
            rel="file.png"
            >
            <img src="static/icons/file.png" width="64"/>
          </a>
          <Experience />
          <Education />
          <Projects />
          <Stack />
          <Contact />
        </div>
      </div>
    </>
  );
}
