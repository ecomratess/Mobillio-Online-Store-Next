import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Checkout = (props) => {
  return (
    <>
      <div className="checkout-container">
        <Head>
          <title>Checkout - Mobillio Online Store</title>
          <meta
            property="og:title"
            content="Checkout - Mobillio Online Store"
          />
        </Head>
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="checkout-main-container">
          <div className="checkout-container1">
            <h1 className="checkout-text">Checkout</h1>
            <div className="checkout-left">
              <img
                alt="image"
                src="/64c590c754d6bc13ebd90cbc_ai_product_photo_styles-200h.webp"
                className="checkout-image"
              />
              <div className="checkout-container2">
                <h1 className="Heading-3 checkout-text01">
                  Title of the product
                </h1>
                <h1 className="checkout-text02">$29</h1>
                <span>Delivery fee $1</span>
                <strong>Total Due $29 + $1 = $30</strong>
                <span>Payment methods : Cash on delivery</span>
              </div>
            </div>
          </div>
          <div className="checkout-right">
            <h1>Payment Form</h1>
            <span>
              Fill the form by providing correct details to place an order.
            </span>
            <form className="checkout-form">
              <div className="checkout-fullname">
                <label className="checkout-text07">
                  <span>Full name</span>
                  <br></br>
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required="true"
                  placeholder="Afnan Ahad"
                  autoComplete="name"
                  className="input checkout-textinput"
                />
              </div>
              <div className="checkout-email-address">
                <label className="checkout-text10">
                  <span>Email</span>
                  <br></br>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required="true"
                  placeholder="afnanahhad@gmail.com"
                  autoComplete="email"
                  className="input checkout-textinput1"
                />
              </div>
              <div className="checkout-email-address1">
                <label className="checkout-text13">
                  <span>Phone</span>
                  <br></br>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required="true"
                  placeholder="+1097239872"
                  autoComplete="tel"
                  className="input checkout-textinput2"
                />
              </div>
              <div className="checkout-container3">
                <div className="checkout-country">
                  <label className="checkout-text16">
                    <span>Street address</span>
                    <br></br>
                  </label>
                  <input
                    type="text"
                    id="street-address"
                    name="street-address"
                    required="true"
                    placeholder="F7, house 04"
                    autoComplete="street-address"
                    className="input checkout-textinput3"
                  />
                </div>
                <div className="checkout-address-1">
                  <label className="checkout-text19">
                    <span>Address line 1</span>
                    <br></br>
                  </label>
                  <input
                    type="text"
                    id="address-line1"
                    name="address-line1"
                    placeholder="Peshawar"
                    autoComplete="address-line1"
                    className="input checkout-textinput4"
                  />
                </div>
              </div>
              <div className="checkout-container4">
                <div className="checkout-address-2">
                  <label className="checkout-label">
                    <span>Address line 2</span>
                    <br></br>
                  </label>
                  <input
                    type="text"
                    id="address-line2"
                    name="address-line2"
                    placeholder="Hayat abad"
                    autoComplete="address-line2"
                    className="input checkout-textinput5"
                  />
                </div>
                <div className="checkout-address-11">
                  <label className="checkout-text24">
                    <span>Postal code</span>
                    <br></br>
                  </label>
                  <input
                    type="number"
                    id="postal-code"
                    name="postal-code"
                    required="true"
                    placeholder="0000"
                    autoComplete="postal-code"
                    className="input checkout-textinput6"
                  />
                </div>
              </div>
              <div className="checkout-container5">
                <div className="checkout-address-12">
                  <button
                    name="submit"
                    type="submit"
                    className="button checkout-button"
                  >
                    <span>
                      <span className="checkout-text28">Place an order</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
        <div className="checkout-container6"></div>
      </div>
      <style jsx>
        {`
          .checkout-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .checkout-main-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .checkout-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .checkout-left {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .checkout-image {
            width: 200px;
            object-fit: cover;
          }
          .checkout-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-right {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-form {
            width: 200px;
            height: 100px;
            display: flex;
            flex-direction: column;
          }
          .checkout-fullname {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-email-address {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-email-address1 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .checkout-country {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-address-1 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .checkout-address-2 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-address-11 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 150px;
            display: flex;
            align-items: flex-start;
          }
          .checkout-address-12 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .checkout-container6 {
            flex: 0 0 auto;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 1600px) {
            .checkout-main-container {
              width: 100%;
              height: auto;
              max-width: var(--dl-size-size-maxwidth);
              padding-top: 40px;
              padding-left: 10px;
              padding-right: 10px;
              padding-bottom: 40px;
            }
            .checkout-container1 {
              width: 789px;
            }
            .checkout-text {
              width: 193px;
              height: 60px;
              margin-left: 20px;
            }
            .checkout-left {
              width: 60%;
              height: auto;
              max-width: auto;
            }
            .checkout-image {
              width: 223px;
              height: 165px;
            }
            .checkout-container2 {
              width: 453px;
              height: auto;
            }
            .checkout-text01 {
              margin-top: 10px;
            }
            .checkout-text02 {
              margin-top: 10px;
            }
            .checkout-right {
              width: 40%;
              height: auto;
              padding: 10px;
              border-color: #505050;
              border-width: 1px;
            }
            .checkout-form {
              width: 100%;
              height: auto;
            }
            .checkout-fullname {
              width: 100%;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .checkout-text07 {
              font-style: normal;
              font-weight: 600;
            }
            .checkout-textinput {
              color: #4a4a4a;
              width: 100%;
              font-size: 18px;
              border-color: #676767;
              border-width: 1px;
              background-color: rgba(255, 255, 255, 0);
            }
            .checkout-email-address {
              width: 100%;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .checkout-text10 {
              font-weight: 600;
            }
            .checkout-textinput1 {
              color: #4a4a4a;
              width: 100%;
              font-size: 18px;
              border-color: #676767;
              border-width: 1px;
              background-color: rgba(255, 255, 255, 0);
            }
            .checkout-email-address1 {
              width: 100%;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .checkout-text13 {
              font-weight: 600;
            }
            .checkout-textinput2 {
              color: #4a4a4a;
              width: 100%;
              font-size: 18px;
              border-color: #676767;
              border-width: 1px;
              background-color: rgba(255, 255, 255, 0);
            }
            .checkout-container3 {
              gap: var(--dl-space-space-halfunit);
              height: auto;
            }
            .checkout-country {
              width: 48%;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .checkout-text16 {
              font-weight: 600;
            }
            .checkout-textinput3 {
              color: #4a4a4a;
              width: 100%;
              font-size: 18px;
              border-color: #676767;
              border-width: 1px;
              background-color: rgba(255, 255, 255, 0);
            }
            .checkout-address-1 {
              width: 50%;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .checkout-text19 {
              font-weight: 600;
            }
            .checkout-textinput4 {
              color: #4a4a4a;
              width: 100%;
              font-size: 18px;
              border-color: #676767;
              border-width: 1px;
              background-color: rgba(255, 255, 255, 0);
            }
            .checkout-container4 {
              gap: var(--dl-space-space-halfunit);
              height: auto;
            }
            .checkout-address-2 {
              width: 48%;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .checkout-label {
              font-weight: 600;
            }
            .checkout-textinput5 {
              color: #4a4a4a;
              width: 100%;
              font-size: 18px;
              border-color: #676767;
              border-width: 1px;
              background-color: rgba(255, 255, 255, 0);
            }
            .checkout-address-11 {
              width: 50%;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .checkout-text24 {
              font-weight: 600;
            }
            .checkout-textinput6 {
              color: #4a4a4a;
              width: 100%;
              font-size: 18px;
              border-color: #676767;
              border-width: 1px;
              background-color: rgba(255, 255, 255, 0);
            }
            .checkout-container5 {
              gap: var(--dl-space-space-halfunit);
              height: auto;
            }
            .checkout-address-12 {
              width: 502px;
              height: 100%;
              margin-top: 5px;
              margin-bottom: 5px;
              justify-content: flex-end;
            }
            .checkout-button {
              fill: var(--dl-color-gray-white);
              color: var(--dl-color-gray-white);
              width: 100%;
              height: 40px;
              align-items: stretch;
              border-color: rgba(255, 255, 255, 0.5019607843137255);
              border-width: 0px;
              padding-bottom: var(--dl-space-space-halfunit);
              background-color: #000000;
            }
            .checkout-text28 {
              width: 100%;
              height: 100%;
              align-items: stretch;
            }
            .checkout-container6 {
              width: 100%;
              height: 20px;
              border-width: 0px;
            }
          }
          @media (max-width: 991px) {
            .checkout-main-container {
              flex-direction: column;
            }
            .checkout-left {
              flex-direction: column;
            }
            .checkout-right {
              width: 100%;
              margin-top: 4rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Checkout
