import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type Link = {
  to: string;
  text: string;
}

const LinkLister = ({ links }: { links: Link[] }) => {
  return (
    links.map(link =>
      <li key={link.text}>
        <Link to={link.to}
          className={cn("whitespace-nowrap w-fit underline-offset-2 text-sm xs:text-base",
            "hover:text-neutral-medium/60 hover:underline ")}>
          {link.text}
        </Link>
      </li>
    )
  )
}

export default LinkLister