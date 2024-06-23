import React from 'react'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header-container ${props.rootClassName} `}>
        <header
          data-role="Header"
          className="header-header max-width-container"
        >
          <div className="header-navbar">
            <span className="navbar-logo-title">{props.logoCenter}</span>
            <div className="header-middle">
              <div className="header-left">
                <span className="navbar-link">{props.text}</span>
                <span className="navbar-link">{props.text1}</span>
                <span className="navbar-link">{props.text2}</span>
                <span className="navbar-link">{props.text5}</span>
              </div>
            </div>
            <div className="header-icons">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="header-image"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="header-burger-menu">
            <svg
              id="menu-button"
              viewBox="0 0 1024 1024"
              className="header-icon"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="header-mobile-menu">
            <div className="header-nav">
              <div className="header-container1">
                <span className="header-logo-center1">{props.logoCenter1}</span>
                <div
                  data-role="CloseMobileMenu"
                  className="header-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="header-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="header-middle1">
                <span className="header-text04">{props.text6}</span>
                <span className="header-text05">{props.text7}</span>
                <span className="header-text06">{props.text8}</span>
                <span className="header-text07">{props.text9}</span>
                <span className="header-text08">{props.text10}</span>
                <span className="header-text09">{props.text11}</span>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="header-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="header-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="header-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .header-header {
            width: 100%;
            max-width: auto;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .header-navbar {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .header-middle {
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 1;
            border-color: transparent;
            justify-content: center;
          }
          .header-left {
            display: flex;
            grid-gap: 45px;
            position: relative;
            align-items: flex-start;
          }
          .header-icons {
            display: flex;
          }
          .header-image {
            width: 24px;
            height: 24px;
            margin: 0 24px 0 0;
            position: relative;
            box-sizing: border-box;
            object-fit: cover;
            border-color: transparent;
          }
          .header-burger-menu {
            display: none;
          }
          .header-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-logo-center1 {
            color: var(--dl-color-gray-black);
            height: auto;
            font-size: 24px;
            font-family: Jost;
            font-weight: 500;
            line-height: 20px;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            letter-spacing: 0.4em;
            text-decoration: none;
          }
          .header-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-middle1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .header-text04 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .header-text05 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .header-text06 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .header-text07 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .header-text08 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .header-text09 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            text-align: left;
            font-family: Jost;
            font-weight: 500;
            text-decoration: none;
          }
          .header-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 991px) {
            .header-left {
              display: none;
            }
            .header-icons {
              display: none;
            }
            .header-burger-menu {
              display: flex;
            }
            .header-icon {
              width: 24px;
              height: 24px;
              display: flex;
            }
            .header-logo-center1 {
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .header-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              padding: var(--dl-space-space-unit);
            }
            .header-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  textinputPlaceholder: 'search',
  imageAlt3: 'AccountCircle3271301',
  text3: 'ABOUT',
  imageAlt: 'search3271286',
  imageAlt1: 'iconsbxscart3271299',
  imageSrc1:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K',
  text7: 'LOOKBOOK',
  text4: 'BLOG',
  text: 'SHOP',
  text10: 'BLOG',
  logoCenter: 'Ecomrates',
  logoCenter1: 'MOBILLIO',
  text2: 'SALES',
  imageSrc: 'Featured',
  text11: 'CONTACT',
  imageSrc2:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg==',
  text6: 'SHOP',
  text8: 'SPECIAL',
  rootClassName: '',
  text5: 'CONTACT',
  imageSrc3:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg==',
  text9: 'ABOUT',
  imageAlt2: 'iconsbxsheartcircle3271300',
  text1: 'ABOUT',
}

Header.propTypes = {
  textinputPlaceholder: PropTypes.string,
  imageAlt3: PropTypes.string,
  text3: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text10: PropTypes.string,
  logoCenter: PropTypes.string,
  logoCenter1: PropTypes.string,
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  text11: PropTypes.string,
  imageSrc2: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  imageSrc3: PropTypes.string,
  text9: PropTypes.string,
  imageAlt2: PropTypes.string,
  text1: PropTypes.string,
}

export default Header
