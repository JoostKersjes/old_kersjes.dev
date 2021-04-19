import Link from 'next/link';
import type { ReactElement } from 'react';

import Emoji from './Emoji';

function IntroHero(): ReactElement {
  return (
    <section className="text-gray-800 bg-gray-300 bg-hero py-4">
      <div className="kd_max-w-container flex justify-center md:px-16">
        <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col-dense gap-4 justify-items-center bg-white bg-opacity-40 p-4 rounded-lg">
          <h1 className="text-lg text-center">
            Hi! I&apos;m
            <br />
            <span className="inline-block text-5xl">Joost&nbsp;Kersjes</span>
          </h1>

          <div className="sm:row-span-full kd_bg-gradient h-72 w-72 rounded-full shadow-lg flex items-center justify-center hover:from-cyan-500 hover:to-pink-600">
            <Link href="/joost">
              <a>
                <img
                  src="/whatsapp_pfp.jpg"
                  alt="Joost Kersjes headshot"
                  className="h-[17rem] w-[17rem] rounded-full"
                />
              </a>
            </Link>
          </div>

          <p className="w-72 px-2 my-auto">
            Welcome to my place!
            <br />I am a Web Developer at{' '}
            <a
              href="https://tripolis.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Tripolis
            </a>{' '}
            (formerly known as Webpower)
          </p>

          <div className="text-cyan-200 my-auto">
            <Link href="/joost">
              <a className="block p-4 rounded-lg shadow-lg kd_bg-gradient hover:from-cyan-500 hover:to-pink-600">
                Let&apos;s get to know eachother&nbsp;
                <Emoji char="🤝" label="Handshake" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroHero;
