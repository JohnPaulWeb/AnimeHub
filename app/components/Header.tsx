import Link from "next/link";


export function Header() {

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="text-2xl font-bold">
                        ANIME<span className="text-accent">HUB</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
                    Home
                    </Link>
                    <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
                    Media
                    </Link>
                    <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
                    Genres
                    </Link>
                </nav>
            </div>
        </header>
    )
}