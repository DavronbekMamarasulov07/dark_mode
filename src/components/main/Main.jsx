import Container from '../container'
import React from 'react'
import { blogs } from '../../utils/database.js'
import { useTranslation } from 'react-i18next'
import blog_image from '../../images/blog_image.svg'
import "./Main.css"
import { Link } from 'react-router-dom'

const Main = () => {


  const data = useTranslation()


  console.log(data)

  return (
    <section className='mt-[120px] mb-16'>
      <Container>
        <div className='flex justify-between gap-5 '>
          {
            blogs.map((blog) => (
              <div className='blog w-full flex' key={blog.id} >
                <div className='w-full flex   justify-between gap-3'>
                  <Link to={`/single_page/${blog.id}`}>
                    <div className=' flex flex-col  gap-2 w-full     '>
                      <img className='object-cover mb-7 h-[300px] w-[500px]' src={blog.img} alt="Rolex company" />
                        <div className="blog_text h-[160px]  text-black text-3xl font-bold ">{blog[`title_${data.i18n.language}`]}</div>
                        <div className="blog_text blog_title mb-3  text-black text-[16px] font-normal f">{blog[`text_${data.i18n.language}`]}</div>
                        <div className='flex items-center gap-3'>
                          <img src={blog_image} alt="image" />
                          <div>
                            <div className="blog_text text-black text-xs font-semibold  ">Husni Ramdani</div>
                            <div className="blog_text text-black text-[8px] font-normal  ">30 November 2021</div>
                          </div>
                        </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </section>
  )
}

export default Main
