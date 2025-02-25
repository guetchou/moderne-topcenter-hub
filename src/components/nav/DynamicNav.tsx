
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useMenus } from "@/hooks/useMenus";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  Globe, 
  Search, 
  User,
  Bell,
  Sun,
  Moon,
  Settings,
  LayoutDashboard,
  Users,
  Building2,
  ChevronDown,
  Phone,
  Calendar,
  MessageCircle,
  Clock
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { SearchDialog } from "./SearchDialog";
import { useAuth } from "@/hooks/useAuth";

export const DynamicNav = () => {
  const { data: headerMenus, isLoading } = useMenus("header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isAdmin } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const serviceItems = [
    { 
      label: "Centre d'appel",
      icon: Phone,
      href: "/services/call-center"
    },
    { 
      label: "Rendez-vous",
      icon: Calendar,
      href: "/devis"
    },
    { 
      label: "Chat en direct",
      icon: MessageCircle,
      href: "/contact"
    },
    { 
      label: "Support 24/7",
      icon: Clock,
      href: "/contact"
    }
  ];

  const adminMenuItems = [
    { 
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin"
    },
    { 
      label: "Gestion des actualités",
      icon: Building2,
      href: "/admin/news"
    },
    { 
      label: "Paramètres",
      icon: Settings,
      href: "/settings"
    }
  ];

  const userMenuItems = [
    { 
      label: "Portail Client",
      icon: Users,
      href: "/client"
    },
    { 
      label: "Paramètres",
      icon: Settings,
      href: "/settings"
    }
  ];

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' }
  ];

  if (isLoading || !headerMenus) {
    return <div className="h-20 animate-pulse bg-muted"></div>;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo et Marque */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/94200422-356e-4b69-8e4c-c385cc1eb543.png" 
              alt="TopCenter Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-primary hidden sm:inline-block">
              TopCenter
            </span>
          </Link>
        </div>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
          {/* Services Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                Services
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Nos Services</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {serviceItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  onClick={() => navigate(item.href)}
                  className="cursor-pointer"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {headerMenus?.map((menu) => (
            <div key={menu.id} className="flex items-center space-x-6">
              {menu.items?.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group",
                    isActive(item.url) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {isAuthenticated && (
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full text-[10px] flex items-center justify-center text-primary-foreground">
                3
              </span>
            </Button>
          )}

          {/* Admin Menu - Only shown if user is admin */}
          {isAdmin && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Building2 className="h-5 w-5" />
                  <span className="hidden sm:inline-block">Admin</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Administration</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {adminMenuItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    className="cursor-pointer"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* User Menu - Only shown if authenticated */}
          {isAuthenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline-block">Mon compte</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Mon espace</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userMenuItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    className="cursor-pointer"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Not authenticated - show login button */}
          {!isAuthenticated && (
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
              <User className="h-5 w-5 mr-2" />
              Connexion
            </Button>
          )}

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => {
                    // Logique de changement de langue ici
                    document.documentElement.lang = lang.code;
                  }}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Navigation Mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Services Section Mobile */}
                <div className="space-y-2">
                  <h3 className="font-semibold mb-2">Nos Services</h3>
                  {serviceItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="outline"
                      className="w-full justify-start"
                      size="lg"
                      onClick={() => {
                        navigate(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.label}
                    </Button>
                  ))}
                </div>

                {/* Main Navigation Mobile */}
                {headerMenus?.map((menu) => (
                  <div key={menu.id} className="flex flex-col space-y-4">
                    {menu.items?.map((item) => (
                      <Link
                        key={item.id}
                        to={item.url}
                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}

                {/* Admin & User Sections Mobile - Only if authenticated */}
                {isAuthenticated && (
                  <div className="pt-6 border-t space-y-4">
                    {isAdmin && (
                      <div className="space-y-2">
                        <h3 className="font-semibold mb-2">Administration</h3>
                        {adminMenuItems.map((item) => (
                          <Button
                            key={item.href}
                            variant="outline"
                            className="w-full justify-start"
                            size="lg"
                            onClick={() => {
                              navigate(item.href);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <item.icon className="mr-2 h-5 w-5" />
                            {item.label}
                          </Button>
                        ))}
                      </div>
                    )}

                    <div className="space-y-2">
                      <h3 className="font-semibold mb-2">Mon espace</h3>
                      {userMenuItems.map((item) => (
                        <Button
                          key={item.href}
                          variant="outline"
                          className="w-full justify-start"
                          size="lg"
                          onClick={() => {
                            navigate(item.href);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <item.icon className="mr-2 h-5 w-5" />
                          {item.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Dialogue de recherche */}
      <SearchDialog 
        open={isSearchOpen} 
        onOpenChange={setIsSearchOpen}
      />
    </nav>
  );
};
