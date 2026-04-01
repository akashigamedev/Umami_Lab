import { Link, LinkProps, useNavigate, useLocation } from "react-router-dom";
import { ReactNode, MouseEvent } from "react";

interface ScrollLinkProps extends Omit<LinkProps, "to"> {
    to: string;
    children: ReactNode;
}

const ScrollLink = ({ to, children, ...props }: ScrollLinkProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            const section = document.getElementById(to);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <Link to="/" onClick={handleClick} {...props}>
            {children}
        </Link>
    );
};

export default ScrollLink;
