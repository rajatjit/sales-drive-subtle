import React from "react";

const FooterLinks = () => {
  const links = [
    { name: "SPM Services", path: "" },
    { name: "Solutions", path: "" },
    { name: "Partners & Products", path: "" },
    { name: "Blog", path: "" },
  ];
  const moreLinks = [
    { name: "Careers", path: "" },
    { name: "Resources", path: "" },
    { name: "About Us", path: "" },
  ];

  return (
    <div className=" flex justify-between w-1/4 flex-wrap max-md:w-full max-md:justify-around">
      {/* First Links list */}
      <ul>
        {links.map((item, index) => (
          <li
            key={index}
            className=" text-white font-BeVietnamPro hover:text-BrightRed my-2 duration-200"
          >
            <a href={item.path} target="blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {/* More Link List */}
      <ul>
        {moreLinks.map((item, index) => (
          <li
            key={index}
            className=" text-white font-BeVietnamPro hover:text-BrightRed my-2 duration-200"
          >
            <a href={item.path} target="blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
