import React from 'react';

// type safety user prop

interface UserProps {
  marg?: string;
}

/**
 * User testimonial component.
 * @param {UserProps} props - Component props.
 * @returns {JSX.Element} - Rendered JSX element for the user testimonial.
 */

const User: React.FC<UserProps> = ({ marg }) => {
  return (
    <div
      className="bg-[#020817] w-[60%] h-auto rounded-xl p-4 flex items-start flex-col my-5"
      style={{ marginLeft: marg }}
    >
      <div className="w-full text-white flex justify-start mb-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
          alt="User"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <span className="font-semibold">User name</span>
          <span className="text-sm">Ritik</span>
        </div>
      </div>
      <div className="w-full text-white text-sm pb-5">
        Ut enim ad minim veniam, quis nostrud exercitation.
      </div>
    </div>
  );
}

export default User;
