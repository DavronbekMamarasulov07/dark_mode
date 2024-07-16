import Container from '../container'
import React from 'react'
import blog_image from '../../images/blog_image.svg'
import { useTranslation } from "react-i18next"
import i18n from "../../locales/index.js"

const Main = () => {
  const { t } = useTranslation()
  return (
    <main className='mt-[120px]'>
      <Container>
        <div className=' flex w-full justify-between gap-[50px]   '>
          <div className='w-full flex flex-col justify-between '>
            <div className='flex flex-col gap-2 w-full max-w-[400px] border-b border-gray-200 py-6'>
              <div className="blog_text text-black text-3xl font-bold mb-1">{t("blog.hublot.title")}</div>
              <div className="blog_text text-black text-[10px] font-normal  ">{t("blog.hublot.text")}</div>
              <div className='flex items-center gap-3'>
                <img src={blog_image} alt="image" />
                <div>
                  <div className="blog_text text-black text-xs font-semibold  ">Husni Ramdani</div>
                  <div className="blog_text text-black text-[8px] font-normal  ">30 November 2021</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-full max-w-[400px] py-6 border-b border-gray-200'>
              <div className="blog_text text-black text-3xl font-bold mb-1">{t("blog.omega.title")}</div>
              <div className="blog_text text-black text-[10px] font-normal  ">{t("blog.omega.text")}</div>
              <div className='flex items-center gap-3'>
                <img  src={blog_image} alt="image" />
                <div>
                  <div className="blog_text text-black text-xs font-semibold  ">Husni Ramdani</div>
                  <div className="blog_text text-black text-[8px] font-normal  ">30 November 2021</div>
                </div>
              </div>
            </div>
          </div>
          <div className=' w-full max-w-[300px] flex flex-col gap-2 w-full max-w-[400px] border-b  justify-between  border-gray-200 pb-6 '>
            <img width={300}  className='object-cover mb-7' src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Rolex_Geneva_13.jpg" alt="Rolex company" />
            <div className="blog_text text-black text-3xl font-bold ">{t("blog.rolex.title")}</div>
            <div className="blog_text  text-black text-[16px] font-normal f">{t("blog.rolex.text")}</div>
            <div className='flex items-center gap-3'>
              <img src={blog_image} alt="image" />
              <div>
                <div className="blog_text text-black text-xs font-semibold  ">Husni Ramdani</div>
                <div className="blog_text text-black text-[8px] font-normal  ">30 November 2021</div>
              </div>
            </div>
          </div>
          <div className='w-full  max-w-[300px] flex flex-col  '>
            <div className='flex flex-col gap-2 w-full border-b  max-w-[300px] justify-between  border-gray-200 pb-6'>
              <img  width={300}  className='object-cover mb-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/20211212_Omega_at_MixC_Zhengzhou.jpg/800px-20211212_Omega_at_MixC_Zhengzhou.jpg" alt="Omge " />
              <div className="blog_text text-justify text-black text-[16px] font-bold ">{t("blog.omega.title")}</div><div><span className="text-black text-xs font-normal ">By </span><span className="text-orange-600 text-xs font-normal ">Omega Watch</span></div>
            </div>
            <div className='flex flex-col gap-2 w-full  border-b max-w-[300px] justify-between  border-gray-200 pb-6'>
              <img width={300}  className='object-cover mb-3' src="https://hodinkee.imgix.net/uploads/images/a07046ef-ca7f-41c1-b00c-1f0623e9c2d0/Hodinkee-SarahMiller-HublotFinals21of50.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12" alt="Hublot " />
              <div className="blog_text text-justify text-black text-[16px] font-bold ">{t("blog.hublot.title")}</div><div><span className="text-black text-xs font-normal ">By </span><span className="text-orange-600 text-xs font-normal ">Hublot Watch</span></div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Main
