import { Video, Share2, Palette } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: "video" | "social" | "branding"
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "video":
        return <Video size={40} className="text-[#0061F2]" />
      case "social":
        return <Share2 size={40} className="text-[#0061F2]" />
      case "branding":
        return <Palette size={40} className="text-[#0061F2]" />
      default:
        return null
    }
  }

  return (
    <div className="bg-[#1E1E1E] p-8 rounded-md border border-[#333333] card-hover shadow-lg hover:shadow-[0_10px_20px_rgba(0,97,242,0.1)]">
      <div className="mb-6">{getIcon()}</div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-[#0061F2] transition-colors">{title}</h3>
      <p className="text-[#B0B0B0]">{description}</p>
    </div>
  )
}
