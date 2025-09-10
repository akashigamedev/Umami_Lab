import { Link, LinkProps } from "react-router-dom";
import { ReactNode, MouseEvent } from "react";

interface ScrollLinkProps extends Omit<LinkProps, "to"> {
    to: string;
    children: ReactNode;
}

const ScrollLink = ({ to, children, ...props }: ScrollLinkProps) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const section = document.getElementById(to);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Link to="/" onClick={handleClick} {...props}>
            {children}
        </Link>
    );
};

export default ScrollLink;
