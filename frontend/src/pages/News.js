import React, { useRef, useState, useEffect } from "react";
import "../styles/Cards.css";
import AOS from "aos";
import "aos/dist/aos.css"; // 导入 AOS 的样式文件
import { Link } from "react-router-dom";

const News = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // 动画持续时间（以毫秒为单位）
      once: true, // 是否只执行一次
    });
  }, []); // []

  return (
    <>
      <div className="banner">
        <div className="container" id="container01">
          <div className="bannerText">
            <h1
              className="pb-2"
              data-aos="zoom-in"
              style={{ color: "#331D2C", fontFamily: "Kaisei Decol" }}
            >
              おいしい幸せをお届けしたい
              <small>「ワクワク」するメニューづくり</small>
            </h1>
            <p
              data-aos="zoom-in"
              style={{ color: "#331D2C", fontFamily: "Kaisei Decol" }}
            >
              いつお店にいらっしゃってもワクワクしていただけるメニューづくりを目指し、
              <br />
              旬の素材を使った季節限定のケーキや焼菓子、
              <br />
              パティシエのおすすめケーキなど、日々の商品開発に取り組んでいます。{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <img src="images/Cakehouse01.png" className="w-50 mt-5"></img> */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F6F4EB",
        }}
        className=" d-flex justify-content-center p-3"
      >
        <img
          style={{ width: "11vh" }}
          className="p-3"
          src="images/9165471_cake_food_icon.png"
          alt=""
        />
        <h4 className="pt-2">蛋糕小知識</h4>
      </div>

      <div class="grid-container" style={{ backgroundColor: "#F6F4EB" }}>
        <div data-aos="fade-up-right" class="grid-container m-4">
          <div class="image-container">
            <img src="images/baked03.jpg" id="image-with-arch" />
          </div>
          <div class="text-content">
            <h4 className="container">
              經典年輪蛋糕{" "}
              <span style={{ fontWeight: "bold", fontFamily: "Kaisei Decol" }}>
                クラシックバウムクーヘン
              </span>
            </h4>
            <p className="container">
              年輪蛋糕起源於1807年德國，有深深祝福與圓滿⻑久的含義當其橫斷切開時，年輪蛋糕呈現了特徵性的金色環圈，而使之得「年輪」之名層層的紋理和樹椿般的外型，富有「德國蛋糕之王」的美譽。
            </p>
          </div>
        </div>
      </div>

      <div class="content-wrapper" style={{ backgroundColor: "#F6F4EB" }}>
        <div data-aos="fade-up-left" class="grid-container1">
          <div class="image-container">
            <img src="images/baked02.jpg" id="image-with-arch2" />
          </div>
          <div class="text-content">
            <h4 className="container">
              瑪德蓮蛋糕{" "}
              <span style={{ fontWeight: "bold", fontFamily: "Kaisei Decol" }}>
                マドレーヌ くるみ
              </span>
            </h4>
            <p className="container">
              是一種傳統的貝殼形狀的小蛋糕，以濃稠且呈膏狀的質地為特點，
              <br />
              18世紀路易十五的岳父、波蘭國王、洛林公爵斯坦尼斯瓦夫一世的一位女廚師，
              <br />
              斯坦尼斯瓦夫一世將此蛋糕由洛林推廣到凡爾賽宮廷以及整個法國。
            </p>
          </div>
        </div>
      </div>

      <div class="grid-container" style={{ backgroundColor: "#F6F4EB" }}>
        <div data-aos="zoom-out-up" class="grid-container m-4">
          <div class="image-container">
            <img src="images/baked06.jpg" id="image-with-arch3" />
          </div>
          <div class="text-content">
            <h4 className="container">
              卡瑪貝爾乳酪{" "}
              <span style={{ fontWeight: "bold", fontFamily: "Kaisei Decol" }}>
                カマンベルン
              </span>
            </h4>
            <p className="container">
              是一種法國的乳酪，通常以其圓形和濃郁的風味而聞名。 <br />
              它是一種軟質乳酪，通常製作自牛奶，並且在熟成期間會變得非常軟和奶香四溢。
            </p>
          </div>
        </div>
      </div>

      <img
        style={{ backgroundColor: "#F6F4EB" }}
        src="images/bg-info-top.png"
        alt=""
      />

      <div
        style={{ display: "flex", alignItems: "center" }}
        className=" d-flex justify-content-center "
      >
        <img
          style={{ width: "11vh" }}
          className="p-3"
          src="images/9165471_cake_food_icon.png"
          alt=""
        />
        <h4 className="pt-2">聯絡我們</h4>
      </div>

      <div></div>
      <div class="content-wrapper">
        <div class="grid-container">
          <div class="image-container">
            <iframe
              data-aos="fade-up-right"
              class="iframecss"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37302.8741773248!2d136.97759827595834!3d35.458045194851735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60031072879a9dc3%3A0x5293cf4c0284abc6!2zMS1jaMWNbWUtNyBBamlzYWlnYW9rYSwgTWlub2thbW8sIEdpZnUgNTA1LTAwMjnml6XmnKw!5e0!3m2!1szh-TW!2stw!4v1694509747308!5m2!1szh-TW!2stw"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div data-aos="fade-left" class="text-content">
            <p
              className="container "
              style={{ fontWeight: "bold", fontFamily: "Kaisei Decol" }}
            >
              スイス下通店
              <hr />
              <span className="p-2">所在地 :</span>
              〒860-0801 熊本市中央区安政町5-2
              <hr />
              <span className="p-2">電話番号 :</span>
              096-352-1251
              <hr />
              <span className="p-2">FAX :</span>
              096-352-1252
              <hr />
              <span className="p-2">営業時間:</span>
              10:00 - 21:00
              <hr />
            </p>
          </div>
        </div>
        <img
          style={{ backgroundColor: "#FFF8D6" }}
          src="images/bg-info-bottom.png"
          alt=""
        />
      </div>
      <div style={{ backgroundColor: "#FFF8D6" }}>
        <br />
        <br />
        <br />
        <div className="image-cake">
          <img className="cakehouse" src="images/slide3.webp" alt="" />
          <img data-aos="fade-left"
            className="Chocolatecake"         
            src="https://www.s-swiss.com/assets/image/home/obj_item3.png"
            alt=""
          />
          <div className="caketext"   style={{ fontWeight: "bold", fontFamily: "Kaisei Decol" }}>
          生活は美味しいケーキのようで、各層には驚きと喜びが詰まっています。そして、甘い味わいは私たちの心にずっと残ります。
      </div>
        </div>
      </div>
    
    </>
  );
};

export default News;
