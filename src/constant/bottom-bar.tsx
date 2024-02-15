import { FaFile, FaRegPaperPlane, FaTasks } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
const ICON_SIZE: number = 24;

export const BOTTOM_BAR_ITEMS = [
    { icon: <HiHome size={ICON_SIZE} />, pathname: '/' },
    { icon: <FaPerson size={ICON_SIZE} />, pathname: '/about' },
    { icon: <FaFile size={ICON_SIZE} />, pathname: '/experience' },
    { icon: <FaTasks size={ICON_SIZE} />, pathname: '/project' },
    { icon: <FaRegPaperPlane size={ICON_SIZE} />, pathname: '/contact' },
]