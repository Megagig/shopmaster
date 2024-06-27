import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-md text-center">
        Welcome to ShopMaster, your number one source for all things shopping.
        We're dedicated to giving you the very best of products, with a focus on
        dependability, customer service, and uniqueness.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default About;
