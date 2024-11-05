import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "@/helpers/LoadingSpinner";
import { ProductCard } from "./ProductCard";
import { handleSearch, handleSort, resetFilter, resetSort } from "@/store/actions/productActions";
import { useEffect, useState } from "react";

export function ShopPageProducts() {
    const { products, loading } = useSelector(state => state.products);
    const [sortOption, setSortOption] = useState("");
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(handleSort(sortOption));
        dispatch(handleSearch(search));
    };

    const handleChangeSort = (event) => {
        setSortOption(event.target.value); // Update the state with the selected option
    };
    const handleChangeSearch = (event) => {
        setSearch(event.target.value); // Update the state with the selected option
    };

    useEffect(() => {
        // Reset filter and sort when the component mounts
        dispatch(resetFilter());
        dispatch(resetSort());
      }, [dispatch]);
    return(
        <>
        {loading && <LoadingSpinner />}
        <section className = "flex flex-col items-center md:mx-44">
        <div className = "md:flex md: gap-x-[14rem] md:mt-6">
        <h6 className = "text-[#737373] font-semibold mt-0.5 mb-10 mt-8">Showing all {products.length} results</h6>
        <div className = "flex gap-x-6 md:h-[3rem] md:mt-5">
        <h6 className = "text-[#737373] font-semibold mt-0.5 mt-2 md:pt-1">Views:</h6>
        <button className = "border rounded-sm py-2 px-3"><FontAwesomeIcon icon={faGrip} /></button>
        <button className = "border rounded-sm py-2 px-3"><FontAwesomeIcon icon={faList} /></button>
        </div>
        <form className = "md:gap-x-4 md:flex" onSubmit = {handleSubmit}>
        <div>
        <input
        className = "border rounded py-2 px-1 mt-[2rem]"
        type="text"
        placeholder="Filter products..."
        onChange = {handleChangeSearch}
        />
        </div>
        <div className = "h-[3rem] gap-x-6 flex mt-4">
            <div className="d-flex">
            <select 
            className="sort-select"
            value = {sortOption}
            onChange = {handleChangeSort}
        >
          <option value="">Select sorting</option>
          <option value="price:asc">Price: Low to High</option>
          <option value="price:desc">Price: High to Low</option>
          <option value="rating:asc">Rating: Low to High</option>
          <option value="rating:desc">Rating: High to Low</option>
        </select>
            </div>
            <button className = "bg-[#23A6F0] text-white h-[2.5rem] md:mt-1.5 px-6 rounded font-semibold text-base">Filter</button>
        </div>
        </form>
        </div>
        <section className = "flex flex-col items-center pb-10 pt-4">
        <div className = "pb-4 md:flex md:flex-wrap md:gap-x-8 md:w-[72rem]">
            <ProductCard/>
        </div>
        <div>
            <Pagination
            aria-label="Page navigation example"
            size=""
            >
            <PaginationItem>
                <PaginationLink
                first
                href="#"
                >
                First
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                href="#"
                next
                >
                Next
                </PaginationLink>
            </PaginationItem>
            </Pagination>
        </div>
        </section>
        </section>
        </>
    )
}

ShopPageProducts.propTypes = {
    direction: PropTypes.string,
  };