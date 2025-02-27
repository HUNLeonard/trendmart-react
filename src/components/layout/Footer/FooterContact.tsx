import { Facebook, ExternalLink, Linkedin, Instagram } from 'lucide-react';
import IconBubble from '../../common/IconBubble';

const FooterContact = () => {
  const links = [
    {
      to: "https://www.facebook.com/atesz.acs/",
      icon: Facebook
    },
    {
      to: "https://www.linkedin.com/in/attila-%C3%A1cs-9569b229a/",
      icon: Linkedin
    },
    {
      to: "https://attila-acs.netlify.app/",
      icon: ExternalLink
    },
    {
      to: "https://www.instagram.com/atesz_acs/",
      icon: Instagram
    }
  ]

  return (
    <div className='!flex-grow-0 text-white max-md:mx-auto w-fit'>
      <p className="font-outfit text-base xs:text-lg font-semibold max-md:mr-auto ml-auto w-fit">Connact me</p>
      <div className="flex flex-row my-2 gap-2  w-fit">
        {links.map(link =>
          <IconBubble {...link} key={link.to} />
        )}

      </div>
    </div>
  )
}

export default FooterContact