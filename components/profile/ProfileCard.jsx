const ProfileCard = ({ fname, lname, photoURL, title, description, createdAt }) => {

  // console.log(createdAt.toDate())
  return (
    <div>
      {/* <!-- Profile Card --> */}
      <div className="w-96 bg-white p-3 border-t-4 border-green-400 shadow-lg">
        <div className="image overflow-hidden">
          <img
            className="h-52 w-52 mx-auto"
            src={photoURL || '/noProfilePic.png'}
            alt=""
          />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
          {fname} {lname}
        </h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">
          {title}
        </h3>
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
          {description}
        </p>
        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li className="flex items-center py-3">
            <span>Status</span>
            <span className="ml-auto">
              <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                Active
              </span>
            </span>
          </li>
          <li className="flex items-center py-3">
            <span>Member since</span>
            <span className="ml-auto">{}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
