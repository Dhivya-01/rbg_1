import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExternalLink = ({ href, children, className }) => {
  const navigate = useNavigate();

  const handleExternalLink = (e) => {
    e.preventDefault();

    fetch(href, {
      mode: "no-cors",
    })
      .then(() => {
        window.open(href, "_blank", "noopener,noreferrer");
      })
      .catch(() => {
        // Navigate to error page when link fails
        navigate("/error");
      });
  };

  return (
    <button onClick={handleExternalLink} className={className}>
      {children}
    </button>
  );
};

export default ExternalLink;
