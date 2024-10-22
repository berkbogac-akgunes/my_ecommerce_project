import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { ProductCardsGroup } from "./ProductCardsGroup";

export function ShopPageProducts({ direction, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return(
        <>
        <section className = "flex flex-col items-center">
        <h6 className = "text-[#737373] font-semibold mt-0.5 mb-10 mt-8">Showing all 12 results</h6>
        <div className = "flex gap-x-6">
        <h6 className = "text-[#737373] font-semibold mt-0.5 mt-2">Views:</h6>
        <button className = "border rounded-sm py-2 px-3"><FontAwesomeIcon icon={faGrip} /></button>
        <button className = "border rounded-sm py-2 px-3"><FontAwesomeIcon icon={faList} /></button>
        </div>
        <div className = "h-[3rem] gap-x-6 flex mt-4">
            <div className="d-flex">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                <DropdownToggle caret>Popularity</DropdownToggle>
                <DropdownMenu {...args}>
                <DropdownItem>Popularity</DropdownItem>
                <DropdownItem>Price</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
            <button className = "bg-[#23A6F0] text-white h-[2.5rem] px-6 rounded font-semibold text-base">Filter</button>
        </div>
        <section className = "flex flex-col items-center py-20">
        <div>
            <ProductCardsGroup/>
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