"use client"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";

 
 interface AnimeSearchProps {
    onSearch: (query: string) => void;
 }

export function AnimeSearch({ onSearch }: AnimeSearchProps) {

    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(onSearch) {
            onSearch(query);
        }
    }

    const handleClear = () => {
        setQuery("");
        if(onSearch) {
            onSearch("");
        }
    }

    return (
        <div>
            <div className="w-full max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="relative">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-2 w-5 text-muted-foreground" />
                        <Input type="text" placeholder="Search Anime" value={query} onChange={(e) => setQuery(e.target.value)}
                         className="pl-12 pr-24 h-14 text-lg bg-card border-2 focus-visible:ring-accent" />
                         {query && (
                            <Button type="button" variant="ghost" size="sm" onClick={handleClear} className="absolute right-20 top-1/2 -translate-y-1/2">
                                <X className="h-4 w-4" />
                            </Button>
                         )}

                         <Button type="submit" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90">Search</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}