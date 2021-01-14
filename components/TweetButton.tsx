export const TweetButton: React.FC = ({ children }) => {
  return (
    <button className="w-60 focus:outline-none border border-transparent py-2 px-5 m-2 rounded-lg shadow-md text-center text-white bg-blue-400 hover:bg-blue-500 font-medium">
      { children }
    </button>
  );
};
