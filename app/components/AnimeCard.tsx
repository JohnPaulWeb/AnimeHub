import { Card, CardContent } from "@/components/ui/card"
import { Badge, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



interface AnimeCardProps {
    anime: {
        mal_id: number
        title: string 
        title_english?: string
        images: {
            jpg: {
                large_image_url: string 
            }
        }

        score?: number
        episodes?: number
        status?: string 
        year?: number 
        genres?: Array<{ name: string }>
    }
}


export function AnimeCard({ anime}: AnimeCardProps) {
    const displayTitle = anime.title_english || anime.title
    return (
        <Link href={`/anime/${anime.mal_id}`}>
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image src={anime.images.jpg.large_image_url || "/placeholder.svg"} alt={displayTitle} fill
                     className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                      {anime.score && (
                        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full flex items-center gap-1.5 font-semibold">
                            <Star className="h-4 w-4 fill-current" />
                            <span>{anime.score.toFixed(1)}</span>
                            
                        </div>
                      )}
                </div>
                <CardContent className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                        {displayTitle}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {anime.episodes && (
                            <Badge variant="secondary" className="text-xs">
                                {anime.episodes} Episodes
                            </Badge>
                        )}
                        {anime.year && (
                            <Badge variant="secondary" className="text-xs">
                                {anime.year}
                            </Badge>      
                        )}
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}