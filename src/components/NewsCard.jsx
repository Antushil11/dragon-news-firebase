import React from "react";
import { FaRegEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id,title, author, thumbnail_url, details, total_view, rating } = news;

  const formattedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  return (
    <div className="bg-white  rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
      {/* Header: Author & Share */}
      <div className="flex justify-between items-center bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{author.name}</p>
            <p className="text-gray-500 text-sm">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <FaRegBookmark />
          <FaShareAlt className="text-gray-500 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg font-semibold text-gray-800 mb-2">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Description */}
      <div className="px-4 py-3 text-gray-600 text-sm border-b border-gray-100">
        {details.length > 160 ? (
          <>
            {details.slice(0, 160)}...
            <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <span className="ml-2 text-gray-800 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
