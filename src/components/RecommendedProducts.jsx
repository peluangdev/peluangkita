import { RECOMMENDED_PRODUCTS } from "@/lib/products"
import React from "react"
import ProductCardCompact from "./ProductCardCompact"

function RecommendedProducts() {
    return (
        <div className="my-10 max-w-[78rem] mx-auto">
            <h3 className="mb-4 text-xl text-gray-800 font-semibold">Rekomendasi Kelas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {RECOMMENDED_PRODUCTS.map((product, idx) => (
                    <ProductCardCompact key={idx} product={product} />
                ))}
            </div>
        </div>
    )
}

export default RecommendedProducts
