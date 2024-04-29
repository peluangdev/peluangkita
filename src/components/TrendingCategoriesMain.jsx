'use client'
import React from "react"
import {  HOME_BANNER} from "@/lib/products"
import Slider from "react-slick";
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function TrendingCategoriesMain() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="my-6 max-w-[78rem] mx-auto">
            {/* <div className="flex gap-4">
                {TRENDING_CATEGORIES.slice(0, 2).map((category) => (
                    <ProductCategoryCard key={category.key} category={category} size="xl" />
                ))}
            </div> */}
            
            <Slider {...settings} className="my-4">
                {HOME_BANNER.map((banner)=>(
                    <img key={banner.key} src={banner.image} className="rounded-lg"/>
                ))}
            </Slider>

            <Link href="/" className="flex bg-primary my-10 p-4 rounded-lg justify-between" >
                <h3>Konsultasi untuk tentukan pilihan kelasmu</h3>
                <FaArrowRight size={20} className="w-10" />
            </Link>

            
        </div>
        
    )
}

export default TrendingCategoriesMain
