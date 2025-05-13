import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-[#1E1E1E] p-8 rounded-md border border-[#333333] relative card-hover shadow-lg hover:shadow-[0_10px_20px_rgba(0,97,242,0.1)]">
      <Quote className="absolute top-4 right-4 text-[#0061F2]/20" size={48} />
      <p className="text-lg mb-6 relative z-10 text-[#B0B0B0]">{quote}</p>
      <p className="font-semibold text-[#0061F2]">- {author}</p>
    </div>
  )
}
