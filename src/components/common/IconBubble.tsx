import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";


type LinkProp = {
  to: string,
  icon: LucideIcon;
}

const IconBubble = ({ to, icon: Icon }: LinkProp) => {
  return (
    <Link
      to={to}
      target="_blank"
      className={"bg-neutral-medium hover:bg-transparent text-neutral-dark hover:text-white p-1 rounded-full"}
    >
      <Icon size={20} />
    </Link>
  )
}

export default IconBubble