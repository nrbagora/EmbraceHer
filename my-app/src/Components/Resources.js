import React from "react";

const Resources = () => {
  const resourceList = [
    { title: "Postpartum Support International", link: "https://www.postpartum.net/" },
    { title: "CDC Maternal Health", link: "https://www.cdc.gov/maternalhealth/index.html" },
    { title: "Mental Health America", link: "https://mhanational.org/" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Resources</h2>
      <ul>
        {resourceList.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;



