export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center md:text-left">
        <p className="text-sm md:text-base">&copy; 2024 Your Website Name</p>
        <ul className="flex justify-center md:justify-start mt-4 space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};