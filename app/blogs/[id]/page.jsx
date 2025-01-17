'use client'
import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  const [data,setData] = useState(null);

  const fetchBlogData = () =>{
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id)==blog_data[i].id) {
        setData(blog_data[i]);
        break;
        console.log(blog_data[i]);
        
      }
      
    }

  }
  useEffect(()=>{
    fetchBlogData();
  },[])


  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center '>
        <Image src={assets.logo} className='w-[130px] sm:w-auto'/>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get started <Image src={assets.arrow} alt=''/></button>
      </div>
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
        <Image src={data.author_img} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full'/>
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>

      </div>
    
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image src={data.image} width={1280} height={720} alt='' className='border-4 border-white '/>
      <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step-1 : ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis possimus consequatur aspernatur quo, laboriosam quos?</h3>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sunt asperiores? Pariatur, neque eum voluptates ea sequi veniam vitae in temporibus quia est a dignissimos officia odio aperiam accusantium.</p>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sunt asperiores? Pariatur, neque eum voluptates ea sequi veniam vitae in temporibus quia est a dignissimos officia odio aperiam accusantium.</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step-1 : ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis possimus consequatur aspernatur quo, laboriosam quos?</h3>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sunt asperiores? Pariatur, neque eum voluptates ea sequi veniam vitae in temporibus quia est a dignissimos officia odio aperiam accusantium.</p>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sunt asperiores? Pariatur, neque eum voluptates ea sequi veniam vitae in temporibus quia est a dignissimos officia odio aperiam accusantium.</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step-1 : ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis possimus consequatur aspernatur quo, laboriosam quos?</h3>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sunt asperiores? Pariatur, neque eum voluptates ea sequi veniam vitae in temporibus quia est a dignissimos officia odio aperiam accusantium.</p>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sunt asperiores? Pariatur, neque eum voluptates ea sequi veniam vitae in temporibus quia est a dignissimos officia odio aperiam accusantium.</p>
    </div>
    </> : <></>
  )
}

export default page