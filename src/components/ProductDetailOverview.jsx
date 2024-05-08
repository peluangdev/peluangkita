'use client'
import { useState, useEffect } from "react"
import ReactStars from 'react-stars'
import Image from 'next/image'

const PRODUCT =   {
    id: '1321',
    title: 'Digital Marketing Course',
    description:
      'Bersama Salford, kamu akan belajar seputar dasar-dasar Digital Marketing. Pelajari strategi dasar, parameter, dan media yang digunakan di Digital Marketing. Kami juga akan memandu kamu melalui tools yang digunakan di remote work yang pastinya akan membantu kamu menjadi seorang spesialis Digital Marketing dengan klien internasional, Kursus ini dirancang bagi kamu yang ingin menjadi digital marketer secara instan, dan bisa diikuti dari mana saja dan kapan saja',
    price: 'Rp 199.000',
    rating: '4.8',
    category: 'Digital Marketing',
    image: '/images/banner/Thumbnail-1.png',
    createdBy: 'Salford & Co',
  }

export default function ProductDetailOverview() {

    const [product, setProduct] = useState(PRODUCT)

    // async function fetchProduct() {
    //     // const data = await fetch("https://dummyjson.com/products/5").then((res) => res.json())
    //     // console.log(data)
    //     const 
    //     setProduct(PRODUCT)
    // }

    // useEffect(() => {
    //     fetchProduct()
    // }, [])

    return(
        <section>
            <div className="bg-[url('/images/Banner.png')] lg:h-[300px]">
                <div className="flex flex-col max-w-[78rem] h-full mx-auto p-8 lg:p-10">
                    <div className="pt-4 lg:pt-16">
                        <div className="justify-center ">
                            <h1 className="font-bold text-3xl lg:text-[44px] ">{product.title}</h1>
                            {/* <p className="font-normal text-gray-300">{product.description}</p> */}
                        </div>
                        <div className="flex gap-10">
                            <div className="flex-col py-6">
                                <p className="text-gray-300 text-sm mb-2">Kursus dari: </p>
                                <p className="font-normal">{product.createdBy}</p>
                            </div>

                            <div className="flex flex-col py-6">
                                <p className="text-gray-300 text-sm ">Rating: </p>
                                <div className="flex justify-center items-center ">
                                    <ReactStars 
                                        count={5}
                                        value={product.rating} 
                                        size={26} 
                                        color2={'#ffd700'}
                                        className="items-start"
                                        edit={false}
                                    />
                                    <span className="pl-2 text-md text-['#ffd700']">{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto lg:w-[78rem] p-6">
                <div className="shadow-lg rounded-lg mt-2 lg:mt-[-3rem] mb-4 flex flex-col bg-white">
                    <div className="mx-auto px-4">
                        <div className="px-4 py-6 lg:py-10 lg:px-14 ">
                            <h2 className="text-center font-semibold text-[26px] text-gray-800 mb-4">Tentang kursus</h2>
                            <p className="text-gray-500">{product.description}</p>

                        </div>
                    </div>
                </div>



                <div className="card shadow-lg p-4">
                    <div className="flex my-10">
                        <Image src={product.image} width={500} height={500} />
                    </div>
                </div>

                

            </div>

           

            
        </section>
        
        
    )
}