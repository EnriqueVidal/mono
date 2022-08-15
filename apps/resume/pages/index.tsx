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
        <Block
          className={styles.workPlace}
          headingType="h3"
          title="Director of Fun | Darwinhomes.com"
          omitWrapper
        >
          <p className={styles.time}>10/2020 - Present</p>
          <p>
            I work here as a software engineering messing with frontend and
            backend code as well as a bunch of DX and infrastructure.
          </p>

          <ul>
            <li>Worked on moving us to from Javascript to TypeScript</li>
            <li>Worked on moving us to github actions</li>
            <li>Worked on bricks component library</li>
          </ul>

          <Block headingType="h3" title="Tech Stack">
            <div className={styles.cardTechStackItems}>
              <div className={styles.cardTechStack}>
                <span>TypeScript, Javascript, Python</span>
              </div>

              <div className={styles.cardTechStack}>
                <span>React, React Native, Django</span>
              </div>

              <div className={styles.cardTechStack}>
                <span>Postgres, Apollo GraphQL</span>
              </div>
            </div>
          </Block>
        </Block>

        <Block
          className={styles.workPlace}
          headingType="h3"
          title="Sr. Software Engineer | AFAR Media"
          omitWrapper
        >
          <p className={styles.time}>04/2019 - 04/2020</p>
          <p>
            I worked here helping AFAR migrate their web application to newer
            tech stack to Node.js, GraphQL and React.
          </p>

          <ul>
            <li>Wrote new UI in React</li>
            <li>
              Help migrate part of the backend code from Ruby on Rails to
              Node.js
            </li>
            <li>
              Wrote content parsers to clean code and apply new styles without
              making editors rewrite their articles
            </li>
            <li>
              Helped ad ops get more ad impressions and better balance and
              comply with google&apos;s ad to content ratio
            </li>
          </ul>

          <Block headingType="h3" title="Tech Stack">
            <div className={styles.cardTechStackItems}>
              <div className={styles.cardTechStack}>
                <span>Javascript, Ruby</span>
              </div>

              <div className={styles.cardTechStack}>
                <span>React, Ruby on Rails, Node.js, Next.js</span>
              </div>

              <div className={styles.cardTechStack}>
                <span>Postgres, MongoDB, Apollo GraphQL</span>
              </div>
            </div>
          </Block>
        </Block>
      </Block>
    </div>
  )
}

export default Home
