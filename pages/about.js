import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Mobillio Online Store</title>
          <meta property="og:title" content="About - Mobillio Online Store" />
        </Head>
        <Header rootClassName="header-root-class-name2"></Header>
        <div className="about-hero">
          <h1 className="about-text">Let&apos;s keep things organized</h1>
          <span className="about-text01">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="about-btn-group">
            <button className="about-button button">Get Started</button>
            <button className="about-button1 button">Learn More</button>
          </div>
        </div>
        <div className="about-gallery">
          <h1 className="about-text08">
            <span className="about-text09">Gallery of our Samples</span>
            <br></br>
          </h1>
          <span className="about-text11">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="about-container1">
            <GalleryCard3 rootClassName="rootClassName"></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
        <div className="about-banner">
          <div className="about-container2">
            <h1 className="about-text18">
              <span>Be the first to get the latest features</span>
            </h1>
            <span className="about-text20">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis, ut tincidunt lectus. Mauris luctus
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                rutrum mi ut rhoncus. Integer in dignissim tortor, id egestas
                ante. Proin at enim purus. Mauris ut felis nisi.
              </span>
            </span>
            <div className="about-container3">
              <input
                type="text"
                placeholder="Email here..."
                className="about-textinput input"
              />
              <button className="about-button2 button">Subscribe</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=1000"
            className="about-image"
          />
        </div>
        <div className="about-stats">
          <div className="about-stat">
            <svg viewBox="0 0 1152 1024" className="about-icon">
              <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
            </svg>
            <span className="about-text25">Customers</span>
            <span className="about-text26">Lorem ipsum dolor sit amet.</span>
            <h1 className="about-text27">
              <span>50</span>
            </h1>
          </div>
          <div className="about-stat1">
            <svg viewBox="0 0 1024 1024" className="about-icon3">
              <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
            </svg>
            <span className="about-text29">Projects</span>
            <span className="about-text30">Lorem ipsum dolor sit amet.</span>
            <h1 className="about-text31">
              <span>300</span>
            </h1>
          </div>
          <div className="about-stat2">
            <svg viewBox="0 0 1024 1024" className="about-icon5">
              <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
            </svg>
            <span className="about-text33">Cities</span>
            <span className="about-text34">Lorem ipsum dolor sit amet.</span>
            <h1 className="about-text35">
              <span>20</span>
            </h1>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
        <div className="about-container4"></div>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                113.8deg,
                rgba(255, 76, 92, 0.8) 7.5%,
                rgba(255, 177, 70, 0.8) 94.47%
              ),
              url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHx3b3JrJTIwbGFwdG9wfGVufDB8fHx8MTYyNjE3NjkzMA&ixlib=rb-1.2.1&h=1200');
          }
          .about-text {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .about-text01 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-button {
            font-size: 0.75rem;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-button:hover {
            transform: scale(1.02);
          }
          .about-button1 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-white);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            background-color: transparent;
          }
          .about-button1:hover {
            transform: scale(1.02);
          }
          .about-gallery {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .about-text08 {
            font-size: 3rem;
            text-align: center;
          }
          .about-text09 {
            text-align: center;
          }
          .about-text11 {
            color: var(--dl-color-gray-700);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .about-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .about-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .about-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text18 {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text20 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .about-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-textinput {
            font-size: 0.75rem;
            border-color: var(--dl-color-gray-500);
            border-radius: var(--dl-radius-radius-radius4);
          }
          .about-button2 {
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-500);
          }
          .about-button2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .about-image {
            width: 300px;
            height: 300px;
            object-fit: cover;
            flex-shrink: 0;
          }
          .about-stats {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            justify-content: center;
          }
          .about-stat {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .about-icon {
            fill: var(--dl-color-gray-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .about-text25 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .about-text26 {
            color: var(--dl-color-gray-700);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .about-text27 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .about-stat1 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .about-icon3 {
            fill: var(--dl-color-gray-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .about-text29 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .about-text30 {
            color: var(--dl-color-gray-700);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .about-text31 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .about-stat2 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .about-icon5 {
            fill: var(--dl-color-gray-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .about-text33 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .about-text34 {
            color: var(--dl-color-gray-700);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .about-text35 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .about-container4 {
            flex: 0 0 auto;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 1600px) {
            .about-gallery {
              margin: 40px;
            }
            .about-text08 {
              font-size: 3rem;
            }
            .about-banner {
              margin-top: 40px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 40px;
            }
            .about-textinput {
              color: #4c4c4c;
              font-size: 1em;
              background-color: #ffffff;
            }
            .about-stats {
              margin-top: 40px;
              margin-bottom: 40px;
            }
            .about-container4 {
              border-width: 0px;
            }
          }
          @media (max-width: 991px) {
            .about-hero {
              flex-direction: column;
            }
            .about-text {
              text-align: center;
            }
            .about-text01 {
              text-align: center;
            }
            .about-text11 {
              text-align: center;
            }
            .about-container1 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .about-banner {
              flex-direction: column;
            }
            .about-container2 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-text20 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .about-container3 {
              justify-content: center;
            }
            .about-image {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
          }
          @media (max-width: 767px) {
            .about-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-text11 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-container1 {
              grid-template-columns: 1fr 1fr;
            }
            .about-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-text20 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .about-stats {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-stat {
              padding: var(--dl-space-space-unit);
            }
            .about-text25 {
              text-align: center;
            }
            .about-stat1 {
              padding: var(--dl-space-space-unit);
            }
            .about-text29 {
              text-align: center;
            }
            .about-stat2 {
              padding: var(--dl-space-space-unit);
            }
            .about-text33 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .about-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-btn-group {
              flex-direction: column;
            }
            .about-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .about-gallery {
              padding: var(--dl-space-space-unit);
            }
            .about-container1 {
              grid-template-columns: 1fr;
            }
            .about-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-container3 {
              align-items: center;
              flex-direction: column;
            }
            .about-button2 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .about-image {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
            .about-stats {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
