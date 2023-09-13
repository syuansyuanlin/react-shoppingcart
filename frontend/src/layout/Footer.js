import React from "react";
import "../styles/Cards.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__addr">
        

        <h2>聯絡我們</h2>

        <address>
          服務時間 ｜ 10:00 - 18:00
          <br />
          <a class="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">顧客服務</h2>

          <ul class="nav__ul">
            <li>
              <a href="frontend/src/layout/footer#Footer.js">購物須知</a>
            </li>

            <li>
              <a href="frontend/src/layout/footer#Footer.js">售後服務</a>
            </li>

            <li>
              <a href="frontend/src/layout/footer#Footer.js">V I P 會員制度</a>
            </li>
          </ul>
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">官方社群</h2>

          <ul class="nav__ul nav__ul--extra">
            <li>
            <a href="#"><img style={{width:"2rem"}} src="./images/2993766_instagram_social media_icon.svg" alt="facebook" /></a>
            </li>

            <li>
            <a href="#"><img style={{width:"2rem"}} src="./images/2609541_facebook_media_social_icon.svg" alt="facebook" /></a>
            </li>

            
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">關於我們</h2>

          <ul class="nav__ul">
            <li>
              <a href="frontend/src/layout/footer#Footer.js">條款與細則</a>
            </li>

            <li>
              <a href="frontend/src/layout/footer#Footer.js">隱私政策</a>
            </li>

            <li>
              <a href="frontend/src/layout/footer#Footer.js">售後服務</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>&copy; 2023 Jessie Lin. All rights reserved.</p>

        
      </div>
    </footer>
  );
};

export default Footer;
