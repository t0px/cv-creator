export const Primary = ({ text, href }) => {
  return (
    <a
      href={href}
      className="text-lg bg-orange-600 hover:bg-orange-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
    >
      {text}
    </a>
  );
};

export const Secondary = ({ text, href }) => {
  return (
    <a
      href={href}
      className="text-lg bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
    >
      {text}
    </a>
  );
};
