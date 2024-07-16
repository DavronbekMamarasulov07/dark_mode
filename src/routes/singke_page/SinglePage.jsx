// import React from 'react'

// const SinglePage = () => {
//   return (
//     <div>
//       SinglePage
//     </div>
//   )
// }

// export default SinglePage


import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { blogs } from "../../utils/database";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import avatar from "../../images/blog_image.svg";
import Container from "../../components/container";

const Blog = () => {
  const data = useTranslation();
  console.log(data);

  let thatBlog;
  const { id } = useParams();

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id === +id) {
      thatBlog = blogs[i];
    }
  }

  console.log(thatBlog);

  return (
    <div>
      <Nav />

      <Container>
        <div className=" flex items-center justify-center">
          <section className="pt-[120px] w-full max-w-[800px] flex flex-col gap-7">
            <div className="flex flex-col items-center justify-center gap-5">
              <span className="text-5xl font-bold text-center">
                {thatBlog[`title_${data.i18n.language}`]}
              </span>

              <div className="flex items-center justify-start gap-2 mt-2">
                <div className="shrink-0">
                  <img src={avatar} alt="Ava" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold ">Husni Ramdani</span>
                  <span className="text-xs font-normal ">30 November 2021</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 items-center justify-center">
              <div className="w-full">
                <img className="rounded" src={thatBlog.img} alt="Banner" />
              </div>
              <div className="flex flex-col gap-4 pt-[30px] pb-[50px]">
                <p className="text-lg font-normal">
                  {thatBlog[`text_${data.i18n.language}`]}
                </p>
                <p className="text-lg font-normal">
                  {thatBlog[`text_${data.i18n.language}`]}
                </p>               
              </div>
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Blog;
