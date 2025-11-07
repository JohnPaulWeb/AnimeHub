import { useEffect, useState } from "react"
import { AnimeSearch } from "./AnimeSearch"
import { Spinner } from "@/components/ui/spinner"
import AnimeCard from "./AnimeCard"
import { Button } from "@/components/ui/button"




interface Anime {
    mal_ud: number
    title: string
    title_english: string
    images: {
        jpg: {
            large_image_url: string
        }
    }

    score?: number
    episodes: number 
    status?: string
    year?: number
    genres?: Array<{ name: string }>
}

export function AnimeGrid() {


    const [animes, setAnimes] = useState<Anime[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [hasMore, setHasmore] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")

    const fetchAnime = async (pageNum: number, query = "") => {
        setLoading(true)

        try {
            const url = query ? `/api/anime?q=${encodeURIComponent(query)}&page=${pageNum}` : `/api/anime?page=${pageNum}`

            const response = await fetch(url)
            const data = await response.json()

            if (pageNum === 1) {
                setAnimes(data.data || [])
            } else {
                setAnimes((prev) => [...prev, ...(data.data || [])])
            }

            setHasmore(data.pagination?.has_next_page || false)
        } catch (error) {
            console.error("[v0] Error fetching anime: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAnime(1)
    }, [])

    const handleSearch = (query: string) => {
        setSearchQuery(query)
        setPage(1)
        fetchAnime(1, query)
    }

    const handleLoadMore = () => {
        const nextPage = page + 1
        setPage(nextPage)
        fetchAnime(nextPage, searchQuery)
    }

    return (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">
                    {searchQuery ? "Search Results" : "AnimeHub"}
                </h2>
                <p className="text-lg text-muted-foreground">
                    {searchQuery ? `Showing results for "${searchQuery}"` : "Discover the most popular anime series"}
                </p>
            </div>

            <AnimeSearch onSearch={handleSearch} />

            {loading && page === 1 ? (
                <div className="flex justify-center items-center py-20">
                    <Spinner className="h-12 w-12" />
                </div>
            ): (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {animes.map((anime) => (
                            <AnimeCard key={anime.mal_ud} anime={anime} />
                        ))}
                    </div>

                    {hasMore && (
                        <div className="flex justify-center pt-8">
                            <Button onClick={handleLoadMore}
                            disabled={loading}
                            size="lg"
                            variant="outline"
                            className="min-w-[200px] bg-transparent">
                                {loading ? (
                                    <>
                                        <Spinner className="mr-2 h-4 w-4" />
                                        Loading...
                                    </>
                                ) : (
                                    "Load More"
                                )}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    )

}