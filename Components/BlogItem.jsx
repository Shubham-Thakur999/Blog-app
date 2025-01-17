import { Card, CardHeader, CardFooter, CardContent } from '@/Components/ui/card';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <Card className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] transform transition-transform duration-300 ease-in-out hover:scale-105 animate-fadeIn">
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt="img" width={400} height={400} className="border-b border-black rounded-xl pt-0.3" />
      </Link>

      <CardHeader className="ml-5 mt-5 px-1">
        <p className="inline-block bg-black text-white text-sm">{category}</p>
      </CardHeader>

      <CardContent className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">{description}</p>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">
          Read more <Image src={assets.arrow} alt="" width={12} className="ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogItem;
