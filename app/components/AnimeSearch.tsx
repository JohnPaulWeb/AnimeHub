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

    return (
        <div>
            <div className="w-full max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="relative">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-2 w-5 text-muted-foreground" />
                    </div>
                </form>
            </div>
        </div>
    )
}