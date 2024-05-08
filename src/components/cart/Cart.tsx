import Link from 'next/link';
import React from 'react'
import './Cart.scss'

const Cart = () => {
  return (
    <div className="container">
      <div className="cart">
        <Link href={`./cart-page/id`}>
          <div className="cart-box">
            <div className="cart-box__cart">
              <img src="/german.png" alt="" />
              <div className="cart-name">
                <h3>Germany</h3>
                <div className="cart-content">
                  <div className="cart-titles">
                    <h5>Population:</h5>
                    <p>81,770,900</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Capital:</h5>
                    <p>Berlin</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Region:</h5>
                    <p>Europe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-box__cart">
              <img src="/use.png" alt="" />
              <div className="cart-name">
                <h3>Germany</h3>
                <div className="cart-content">
                  <div className="cart-titles">
                    <h5>Population:</h5>
                    <p>81,770,900</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Capital:</h5>
                    <p>Berlin</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Region:</h5>
                    <p>Europe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-box__cart">
              <img src="/brizl.png" alt="" />
              <div className="cart-name">
                <h3>Germany</h3>
                <div className="cart-content">
                  <div className="cart-titles">
                    <h5>Population:</h5>
                    <p>81,770,900</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Capital:</h5>
                    <p>Berlin</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Region:</h5>
                    <p>Europe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-box__cart">
              <img src="/izail.png" alt="" />
              <div className="cart-name">
                <h3>Germany</h3>
                <div className="cart-content">
                  <div className="cart-titles">
                    <h5>Population:</h5>
                    <p>81,770,900</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Capital:</h5>
                    <p>Berlin</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Region:</h5>
                    <p>Europe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"./cart-page"}>
          <div className="cart-box">
            <div className="cart-box__cart">
              <img src="/afgan.png" alt="" />
              <div className="cart-name">
                <h3>Germany</h3>
                <div className="cart-content">
                  <div className="cart-titles">
                    <h5>Population:</h5>
                    <p>81,770,900</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Capital:</h5>
                    <p>Berlin</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Region:</h5>
                    <p>Europe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-box__cart">
              <img src="/island.png" alt="" />
              <div className="cart-name">
                <h3>Germany</h3>
                <div className="cart-content">
                  <div className="cart-titles">
                    <h5>Population:</h5>
                    <p>81,770,900</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Capital:</h5>
                    <p>Berlin</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Region:</h5>
                    <p>Europe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-box__cart">
              <img src="/albaniya.png" alt="" />
              <div className="cart-name">
                <h3>Germany</h3>
                <div className="cart-content">
                  <div className="cart-titles">
                    <h5>Population:</h5>
                    <p>81,770,900</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Capital:</h5>
                    <p>Berlin</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Region:</h5>
                    <p>Europe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-box__cart">
              <img src="/algariya.png" alt="" />
              <div className="cart-name">
                <h3>Germany</h3>
                <div className="cart-content">
                  <div className="cart-titles">
                    <h5>Population:</h5>
                    <p>81,770,900</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Capital:</h5>
                    <p>Berlin</p>
                  </div>
                  <div className="cart-titles">
                    <h5>Region:</h5>
                    <p>Europe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Cart