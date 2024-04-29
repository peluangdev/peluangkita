import Image from "next/image"
import Link from "next/link"
import React from "react"

function ProductCardCompact({ product }) {
    const { image, title, description, price } = product
    return (
        <Link
            href="/product"
            className="card shadow-lg rounded-lg bg-white flex flex-col my-2 h-[350px]"
        >
            <div>
                <Image src={image} width={300} height={300} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-4 p-4">
                <p className="text-gray-800 justify-start font-bold">{title}</p>
                <p className="leading-tight justify-start text-gray-400 font-normal">{description}</p>
                <div className="card-actions items-end">
                    <strong className="font-semibold text-gray-900">{price}</strong>
                </div>
            </div>      
        </Link>
    )
}

export default ProductCardCompact
