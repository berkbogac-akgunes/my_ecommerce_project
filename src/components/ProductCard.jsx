import { fetchProducts } from "@/store/actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function ProductCard() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <span>Loading...</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-red-500 p-4 text-center">
          Error: {error}
        </div>
      );
    }

    return (
      products.map((product) => {
        return(
        <>
        <Link to = {`/products/${product.id}`}>
        <section className = "mt-12">
          <div className ="md:w-64 flex flex-col text-center items-center">
            <img
            className ="h-[27rem] md:w-[17rem] md:h-[21rem] object-cover rounded"
            src = {product.images[0]?.url}
            alt= {product.name}
            />
            <div className = "pb-6 md:w-[14rem] mt-3">
                <h5 className = "mont font-bold text-lg mb-2">{product.name}</h5>
                <p className = "mont truncate text-sm font-semibold text-[#737373] mb-3">{product.description}</p>
                <div className = "flex text-center justify-center mb-3">
                    <h5 className = "mont font-bold text-xl text-[#23856D]">{product.price.toFixed(2)}$</h5>
                </div>
                <div className = "flex gap-x-10">
                  <div className = "flex">
                <p className = "mont text-base font-semibold text-[#737373] mt-0.5 mr-2">Rating:</p>
                <h5 className = "mont font-semibold text-lg text-[#23856D]">{product.rating.toFixed(1)}</h5>
                </div>
                <div className = "flex">
                <p className = "mont text-base font-semibold text-[#737373] mt-0.5 mr-2">Stock:</p>
                <h5 className = "mont font-semibold text-lg text-[#23856D]">{product.stock}</h5>
                </div>
                </div>
            </div>
          </div>
        </section>
        </Link>
        </>
        )
      })
    )
}