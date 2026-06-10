import { QrCode } from 'lucide-react'

interface ArtisanCardProps {
  name: string
  village: string
  craft: string
  daysToMake: number
  image?: string
}

export default function ArtisanCard({ name, village, craft, daysToMake, image }: ArtisanCardProps) {
  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:border-accent transition-colors duration-300">
      {/* Image Section */}
      <div className="relative h-48 bg-secondary border-b border-border flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <svg className="w-16 h-16 text-muted-foreground mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-4">
        {/* Header with QR Icon */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{village}</p>
          </div>
          <div className="p-2 bg-secondary rounded-lg border border-border group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 flex-shrink-0">
            <QrCode className="w-5 h-5 text-accent" />
          </div>
        </div>

        {/* Craft Type Badge */}
        <div>
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent font-medium">
            {craft}
          </span>
        </div>

        {/* Days to Make */}
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Crafting Time</p>
          <p className="text-sm font-semibold text-foreground mt-1">
            {daysToMake} {daysToMake === 1 ? 'day' : 'days'}
          </p>
        </div>

        {/* Action Button */}
        <button className="mt-4 w-full py-2 px-4 border border-accent text-accent text-sm font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  )
}
