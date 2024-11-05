import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, handleCategory } from '../store/actions/productActions.jsx';
import { Link } from 'react-router-dom';

const ShopDropdownMenu = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (gender, categoryName, categoryId) => {
    dispatch(handleCategory(gender, categoryName, categoryId));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Fetch categories when component mounts
    dispatch(fetchCategories());
  }, [dispatch]);

  // Group categories by gender
  const groupedCategories = {
    kadin: categories.filter(cat => cat.gender === 'k'),
    erkek: categories.filter(cat => cat.gender === 'e')
  };

  return (
    <div className="relative inline-block text-left">
      <div className = "flex">
          <svg
            onClick={toggleDropdown}
            className="mt-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
                  <div className="category-dropdown flex gap-x-20">
              <div className="dropdown-section pl-8">
                <h4 className = "mb-3 mt-1 mont">Kadın</h4>
                {groupedCategories.kadin.map(category => (
                  <Link
                    onClick={() => handleCategoryClick(category.gender, category.name, category.id)}
                    key={category.id} 
                    to={`/shop/k/${category.code.split(':')[1]}`}
                    className="dropdown-item mb-1 mont"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
              <div className="dropdown-section pr-8">
                <h4 className = "mb-3 mt-1 mont">Erkek</h4>
                {groupedCategories.erkek.map(category => (
                  <Link
                    onClick={() => handleCategoryClick(category.gender, category.name, category.id)}
                    key={category.id} 
                    to={`/shop/e/${category.code.split(':')[1]}`}
                    className="dropdown-item mb-1 mont"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopDropdownMenu;