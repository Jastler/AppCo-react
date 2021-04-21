import React from 'react';

import imageCleanDesing from '../../../images/clean_design.png';
import imageSecureData from '../../../images/secure_data.png';
import imageRetina from '../../../images/retina_ready.png';

export const MainPageContent = () => (
  <main>
    <section className="section">
      <div className="services">
        <div className="wrapper">
            <h2 className="services__title">
              Why <span className="services__title_bold">small business owners <br /> love</span> AppCo?
            </h2>
            <p className="services__text">
              Our design projects are fresh and simple and will benefit your business <br/> greatly. Learn more about our work!
            </p>
            <div className="services__cards">
                <div className="services__card card">
                  <img
                    className="card__img"
                    src={imageCleanDesing}
                    alt="clean_design"
                  />
                  <h3 className="card__title">
                    Clean Design
                  </h3>
                  <p className="card__text">
                    Increase sales by showing true dynamics of your website.
                  </p>
                </div>
                <div className="services__card card">
                  <img
                    className="card__img"
                    src={imageSecureData}
                    alt="clean_design"
                  />
                  <h3 className="card__title">
                    Secure Data
                  </h3>
                  <p className="card__text">
                    Build your online store’s trust using Social Proof and Urgency.
                  </p>
                </div>
                <div className="services__card card">
                  <img
                    className="card__img"
                    src={imageRetina}
                    alt="clean_design"
                  />
                  <h3 className="card__title">
                    Retina Ready
                  </h3>
                  <p className="card__text">
                    Realize importance of social proof in customer’s purchase decision.
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  </main>
);
