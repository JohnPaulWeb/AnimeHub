"use client"

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";


export function AnimeHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-muted">
                
            {/* <div className="absolute  inset-0 bg-[url('anime.jpg')] opacity-5 bg-cover bg-center" /> */}

            <div className="container relative mx-auto px-4 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">ANIME<span className="text-accent">HUB</span></h1>
                    </div>

                    <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                    The Purpose of this website to people want to watch Anime
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                            <Search className="mr-2 h-5 w-5" />
                            Browse Anime
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                            <Link href="#trending">View Trending</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}