import { logout } from '@/store/actions/clientActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

export const ProfileDropdown = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await dispatch(logout())
      console.log(response)

        toast.success('Logout Successful!');
        history.push("/login")

    } catch (error) {
      console.log(error)
      toast.error('Logout failed.');
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div className = "flex">
          <svg
            onClick={toggleDropdown}
            className="mt-1 h-5 w-5"
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
                <button onClick = {handleLogout} className = "mb-3 mt-3 mont">Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};