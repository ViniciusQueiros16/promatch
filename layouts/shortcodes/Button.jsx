import Link from "next/link";

const Button = ({ href, type, rel, openInNewTab, children }) => {
  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn ml-3  px-5 py-2 ${
        type === "outline" ? "btn-outline-primary" : "btn-primary"
      } border-primary hover:text-white hover:no-underline`}
    >
      {children}
    </Link>
  );
};

export default Button;
