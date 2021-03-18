import Link from 'next/link';
import React, { ReactElement } from 'react';
import Emoji from './Emoji';

function IntroHero(): ReactElement {
  return (
    <section className="text-gray-900 bg-gray-300">
      <div className="kd_max-w-container flex flex-col items-start justify-between">
        <h1 className="text-lg">
          Hi! I&apos;m <span className="block text-6xl">Joost Kersjes</span>
        </h1>

        <div className="kd_bg-gradient h-[19rem] w-[19rem] rounded-full flex-shrink-0 flex items-center justify-center">
          <Link href="/joost">
            <a>
              <img
                src="/whatsapp_pfp.jpg"
                alt="Joost Kersjes headshot"
                className="h-72 w-72 rounded-full"
              />
            </a>
          </Link>
        </div>

        <p>
          Welcome to my place!
          <br />I am a Web Developer at {/* TODO: Tripolis icon */}
          <a
            href="https://tripolis.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Tripolis
          </a>{' '}
          (formerly Webpower)
        </p>

        <Link href="/joost">
          <a className="p-4 font-mono text-cyan-200 rounded-lg kd_bg-gradient hover:from-cyan-500 hover:to-pink-600">
            Let&apos;s get to know eachother <Emoji char="🤝" label="Handshake" />
          </a>
        </Link>
      </div>
    </section>
  );
}

export default IntroHero;
