const Header = () => (
  <div className="border-b w-full z-50">
    <nav className="border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <a className="flex items-center">
          <img src="assets/admin.dev.mypilar.com.svg" alt="pilar-logo" />
        </a>
        <div className="w-fit">
          <button className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  className="!rounded-full rounded w-10 h-10"
                  src="assets/logo-right.png"
                  alt="avatar"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
