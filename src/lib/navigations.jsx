import { RiHeart2Fill, RiShoppingBag3Fill, RiUser3Fill } from "react-icons/ri"

export const HEADER_NAV = [
    {
        label: "Profile",
        path: "/profile",
        icon: <RiUser3Fill fontSize={20} />,
    },
    {
        label: "Orders",
        path: "/orders",
        icon: <RiHeart2Fill fontSize={20} />,
    },
    {
        label: "My Cart",
        path: "/cart",
        icon: <RiShoppingBag3Fill fontSize={20} />,
    },
]

export const CATEGORY_LINKS = [
    {
        label: "Technology & Software",
        path: "/list",
    },
    {
        label: "Digital Marketing",
        path: "/list",
    },
    {
        label: "UI & UX Design",
        path: "/list",
    },
]
