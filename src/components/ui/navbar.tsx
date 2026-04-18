import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/liquid-glass-button';
import React from 'react';
import { cn } from '@/lib/utils';
import logoSvg from '@/assets/images/logo.svg';

const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
];

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const location = useLocation();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setMenuState(false);
    }, [location.pathname]);

    return (
        <header>
            <nav className="fixed left-0 w-full z-50 px-2 top-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex gap-1 items-center text-xl font-bold tracking-tight text-foreground">
                                <img src={logoSvg} alt="Kadix logo" className="h-6 w-auto" />
                                <span>adix<span className="text-primary">.</span></span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 flex items-center justify-center cursor-pointer p-2.5 lg:hidden text-foreground">
                                {menuState ? (
                                    <X className="size-6 transition-transform duration-200" />
                                ) : (
                                    <Menu className="size-6 transition-transform duration-200" />
                                )}
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            className={cn(
                                                "block duration-150 text-sm font-medium transition-colors hover:text-primary",
                                                location.pathname === item.href ? "text-primary" : "text-muted-foreground"
                                            )}>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cn(
                            "bg-background/95 mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none transition-all duration-300",
                            menuState ? "block" : "hidden lg:flex"
                        )}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                onClick={() => setMenuState(false)}
                                                className={cn(
                                                    "block duration-150 text-base font-medium transition-colors hover:text-primary",
                                                    location.pathname === item.href ? "text-primary" : "text-muted-foreground"
                                                )}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors border-0 h-10 px-6">
                                    <Link to="/contact" onClick={() => setMenuState(false)}>
                                        <span className="font-semibold">Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
