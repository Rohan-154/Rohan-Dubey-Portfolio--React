import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
const Testimonial = () => {
  const clients = [
    {
      img: "https://rohan154.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1653904221675%2FUWz404EVl.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
      review:
        "This blog explain what is binding in JavaScript and its different methods. Famous methods like call, apply and bind are discussed in this blog.  ",
      linkBlog:
        "https://rohan154.hashnode.dev/binding-call-apply-and-bind-in-javascript",
    },
    {
      img: "https://rohan154.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1652276466510%2F63tTxZT4T.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
      review:
        " This blog is a tutorial on how you can apply localization with the help of context api in your projects in simple 5 steps. Lot's of examples and code is given to analyze and understand.   ",
      linkBlog:
        "https://rohan154.hashnode.dev/5-steps-to-toggle-between-languages-using-context-api",
    },
    {
      img: "https://rohan154.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1630765611587%2Fc0Ua3e9Wv.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
      review:
        "The backbone of Frontend Development our very own JavaScript does all the rendering smoothly and we witness the beautiful working of our web apps. Have you ever wondered how? This is explained with images and code in this blog.    ",
      linkBlog: "https://rohan154.hashnode.dev/how-javascript-magic-happens",
    },
    {
      img: "https://rohan154.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1629016706988%2FoIpMcxWIW.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
      review:
        "As a developer writing clean and maintainable code is the key. This blog talks about some good practices of writing clean codes.     ",
      linkBlog:
        "https://rohan154.hashnode.dev/importance-of-writing-clean-codes",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My </span>
        <span>Technical & Non-Technical </span>
        <span>Blogs</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>
                  {client.review}
                  <a href={client.linkBlog} className="blog-link">
                    Read Now
                  </a>
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
