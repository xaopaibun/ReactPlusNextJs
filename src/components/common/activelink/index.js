import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    fontWeight: "500",
    letterSpacing: "-0.02em",
    fontSize: "13px",
    fontWeight: "500",
    display: "block",
    cursor: "pointer",
    textDecoration: "none",
    color: "#25282b",
    transition: "0.3s",
    borderBottom: router.asPath === href ? "3px solid #00daff" : "none",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
