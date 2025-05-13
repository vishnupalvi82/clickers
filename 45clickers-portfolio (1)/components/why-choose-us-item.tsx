import { CheckCircle } from "lucide-react"

interface WhyChooseUsItemProps {
  title: string
  description: string
}

export default function WhyChooseUsItem({ title, description }: WhyChooseUsItemProps) {
  return (
    <div className="flex gap-4 hover-scale p-2 rounded-md">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle className="text-[#0061F2]" size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#B0B0B0]">{description}</p>
      </div>
    </div>
  )
}
