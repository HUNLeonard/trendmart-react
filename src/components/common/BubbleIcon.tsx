import { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const BubbleIcon = ({ to, title = "", icon: Icon, bgColor = "bg-primary" }: { to: string, icon: LucideIcon, title: string, bgColor?: string }) => {
  const correctedColor = `hover:${bgColor}`

  return (
    <Link
      to={to}
      title={title}
      className={cn('cursor-pointer bg-white p-2 rounded-full shadow-md hover:text-white transition-colors', correctedColor)}>
      <Icon size={20} />
    </Link>
  )
}

export default BubbleIcon