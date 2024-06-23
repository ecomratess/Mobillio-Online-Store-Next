import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Review from '../components/review'
import ItemCard from '../components/item-card'
import Footer from '../components/footer'

const ProductPage = (props) => {
  return (
    <>
      <section className="product-page-container">
        <Head>
          <title>ProductPage - Mobillio Online Store</title>
          <meta
            property="og:title"
            content="ProductPage - Mobillio Online Store"
          />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="product-page-container1">
          <div className="product-page-container2">
            <div className="product-page-container3">
              <img
                id="product id"
                alt="product image"
                src="/64c590c754d6bc13ebd90cbc_ai_product_photo_styles-1400w.webp"
                loading="lazy"
                className="product-page-image"
              />
              <div className="product-page-container4">
                <img
                  alt="image"
                  src="/64c590c754d6bc13ebd90cbc_ai_product_photo_styles-1400w.webp"
                  className="product-page-image1"
                />
                <img
                  alt="image"
                  src="/64c590c754d6bc13ebd90cbc_ai_product_photo_styles-1400w.webp"
                  className="product-page-image2"
                />
                <img
                  alt="image"
                  src="/64c590c754d6bc13ebd90cbc_ai_product_photo_styles-1400w.webp"
                  className="product-page-image3"
                />
              </div>
            </div>
            <div className="product-page-container5">
              <div className="product-page-stars">
                <svg viewBox="0 0 1024 1024" className="product-page-icon">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <strong className="product-page-text">4.5</strong>
                <span className="product-page-reviews">13,330 reviews</span>
              </div>
              <h1>
                <span>
                  Turn your body an oily style with this body oil spray
                </span>
                <br></br>
              </h1>
              <div className="product-page-price">
                <strong className="product-page-current-price">$29.00</strong>
                <s className="product-page-old-price Content">$49.00</s>
              </div>
              <div className="product-page-action-buttons">
                <button
                  id="but-now-button"
                  name="buy-now-button"
                  type="button"
                  className="product-page-buy-now button"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="product-page-add-to-cart button"
                >
                  <span>
                    <span className="product-page-text4">Add to Cart</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <p className="product-page-description">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>
          </div>
        </div>
        <div className="product-page-container6">
          <div className="product-page-reviews-container">
            <h1>Reviews (09)</h1>
            <Review rootClassName="review-root-class-name"></Review>
            <Review rootClassName="review-root-class-name3"></Review>
            <Review rootClassName="review-root-class-name2"></Review>
            <Review rootClassName="review-root-class-name1"></Review>
          </div>
          <div className="product-page-similar-products-container">
            <h1>Similar products</h1>
          </div>
        </div>
        <div className="product-page-hot-products-container">
          <h1>
            <span>Hot products</span>
            <br></br>
          </h1>
          <div className="product-page-container7">
            <ItemCard rootClassName="item-card-root-class-name7"></ItemCard>
            <ItemCard rootClassName="item-card-root-class-name10"></ItemCard>
            <ItemCard rootClassName="item-card-root-class-name9"></ItemCard>
            <ItemCard rootClassName="item-card-root-class-name8"></ItemCard>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
        <div className="product-page-container8"></div>
      </section>
      <style jsx>
        {`
          .product-page-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .product-page-container1 {
            width: 100%;
            height: auto;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .product-page-container2 {
            width: 100%;
            height: auto;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: flex-start;
          }
          .product-page-container3 {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            animation-name: slideInLeft;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .product-page-image {
            width: 100%;
            height: 70%;
            object-fit: cover;
          }
          .product-page-container4 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 10px;
            align-self: flex-start;
            align-items: center;
            justify-content: flex-start;
          }
          .product-page-image1 {
            width: 120px;
            object-fit: cover;
          }
          .product-page-image2 {
            width: 120px;
            object-fit: cover;
          }
          .product-page-image3 {
            width: 120px;
            object-fit: cover;
          }
          .product-page-container5 {
            flex: 0 0 auto;
            width: 50%;
            height: 611px;
            display: flex;
            align-items: flex-start;
            padding-top: 22px;
            padding-left: 10px;
            padding-right: 10px;
            animation-name: slideInDown;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: flex-start;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .product-page-stars {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .product-page-icon {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .product-page-price {
            flex: 0 0 auto;
            width: 100%;
            height: 49px;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: 10px;
            justify-content: flex-start;
          }
          .product-page-current-price {
            font-size: 28px;
            font-style: normal;
            margin-top: 0px;
            font-weight: 500;
            line-height: 36px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }
          .product-page-old-price {
            align-self: flex-start;
            font-style: normal;
            line-height: 36px;
            margin-left: 10px;
            text-decoration: line-through;
          }
          .product-page-action-buttons {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .product-page-buy-now {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            width: 50%;
            margin-top: 0px;
            background-color: var(--dl-color-gray-black);
          }
          .product-page-add-to-cart {
            width: 50%;
            align-self: center;
            margin-top: 0px;
            align-items: center;
            justify-content: center;
          }
          .product-page-description {
            margin-top: 10px;
          }
          .product-page-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .product-page-reviews-container {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .product-page-similar-products-container {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .product-page-hot-products-container {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .product-page-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .product-page-container8 {
            flex: 0 0 auto;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 1600px) {
            .product-page-container1 {
              height: 100%;
            }
            .product-page-container2 {
              height: 100%;
            }
            .product-page-container3 {
              width: 40%;
              height: 100%;
            }
            .product-page-image {
              height: auto;
            }
            .product-page-container5 {
              width: 55%;
            }
            .product-page-stars {
              height: 38px;
              border-width: 0px;
            }
            .product-page-text {
              margin-left: 5px;
            }
            .product-page-reviews {
              margin-left: 10px;
            }
            .product-page-container6 {
              height: auto;
              max-width: var(--dl-size-size-maxwidth);
              margin-top: 40px;
              margin-bottom: 40px;
              justify-content: space-between;
            }
            .product-page-reviews-container {
              width: 60%;
              height: 100%;
              padding: 10px;
            }
            .product-page-similar-products-container {
              width: 33%;
              height: 100%;
              margin: 10px;
              padding: 5px;
              border-color: #5e5e5e;
              border-width: 0px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .product-page-hot-products-container {
              flex: 0;
              width: 100%;
              height: auto;
              padding: 10px;
              max-width: var(--dl-size-size-maxwidth);
              margin-top: 40px;
              margin-bottom: 40px;
            }
            .product-page-container7 {
              gap: var(--dl-space-space-oneandhalfunits);
              height: auto;
              padding-top: 15px;
              padding-bottom: 15px;
            }
            .product-page-container8 {
              border-width: 0px;
            }
          }
          @media (max-width: 991px) {
            .product-page-container1 {
              height: auto;
            }
            .product-page-container2 {
              width: 100%;
              height: auto;
              flex-direction: column;
            }
            .product-page-container3 {
              width: 100%;
            }
            .product-page-container5 {
              width: 100%;
              height: auto;
              padding-top: 0;
            }
            .product-page-current-price {
              padding-top: 0px;
            }
            .product-page-old-price {
              padding-top: 0px;
            }
            .product-page-buy-now {
              width: 100%;
            }
            .product-page-add-to-cart {
              width: 100%;
            }
            .product-page-text4 {
              width: 100%;
            }
            .product-page-description {
              padding-top: 0px;
            }
            .product-page-container6 {
              flex-direction: column;
            }
            .product-page-reviews-container {
              width: 100%;
            }
            .product-page-similar-products-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ProductPage
