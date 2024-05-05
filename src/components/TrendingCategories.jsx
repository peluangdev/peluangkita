import React from "react"
import ProductCategoryCard from "@/components/ProductCategoryCard"
import { KATEGORI_KELAS} from "@/lib/products"

function TrendingCategories() {
    return (
        <div className="my-6 px-4 md:px-6 max-w-[78rem] mx-auto">
            <h3 className="mb-4 text-xl font-medium text-gray-800 font-semibold">Kategori Kelas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {KATEGORI_KELAS.map((category) => (
                    <ProductCategoryCard key={category.key} category={category} />
                ))}
            </div>
        </div>
    )
}

export default TrendingCategories
