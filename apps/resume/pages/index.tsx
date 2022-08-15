import classNames from 'classnames'
import type { NextPage } from 'next'
import Head from 'next/head'
import Profile from 'profile'
import Block from 'block'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume App</title>
      </Head>

      <Block
        className={classNames(styles.hero, styles.blockSection)}
        omitWrapper
      >
        <Profile
          className={styles.profilePic}
          maxWidth="300px"
          src="http://placekitten.com/600/800"
        />

        <div>
          <h1>Enrique Vidal</h1>
          <p className={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className={styles.socialsList}>
            <a
              href="https://github.com/EnriqueVidal"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/enriquevidal"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Block>

      <Block className={styles.blockSection} title="Skills and Qualifications">
        <ul className={styles.skillsList}>
          <li>React and React native</li>
          <li>TypeScript and Javascript</li>
          <li>Ruby and Ruby on Rails</li>
        </ul>
      </Block>

      <Block className={styles.blockSection} title="Work History" omitWrapper>
        <div>
          <strong>Director of Fun | Darwinhomes.com</strong>
          <p>10/2020 - Present</p>
          <p>
            I work here as a software engineering messing with frontend and
            backend code as well as a bunch of DX and infrastructure.
          </p>

          <ul>
            <li>Worked on moving us to from Javascript to TypeScript</li>
            <li>Worked on moving us to github actions</li>
            <li>Worked on bricks component library</li>
          </ul>
        </div>
      </Block>

      <Block className={styles.blockSection} title="Tech Stack">
        <div className={styles.cardTechStackItems}>
          <div className={styles.cardTechStack}>
            <span>TypeScript, Ruby, Python</span>
          </div>

          <div className={styles.cardTechStack}>
            <span>React, Rails, Django, Node</span>
          </div>

          <div className={styles.cardTechStack}>
            <span>Postgres, MySQL, MongoDB</span>
          </div>
        </div>
      </Block>
    </div>
  )
}

export default Home
