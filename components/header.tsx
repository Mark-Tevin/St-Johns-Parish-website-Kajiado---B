"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Sun, Moon, Laptop } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-sky-50/80 backdrop-blur-md dark:bg-gray-900 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-serif text-xl font-bold sm:text-2xl text-sky-900 dark:text-white">St. John's Parish Kajiado</span>
        </Link>
        <nav className="hidden md:flex md:space-x-4 lg:space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`text-sm font-medium transition-colors cursor-pointer hover:text-sky-600 dark:hover:text-sky-400 ${
                      isActive("/") ? "text-sky-600 dark:text-sky-400 font-semibold" : "text-sky-800 dark:text-gray-300"
                    }`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 text-sky-800 dark:text-gray-300 data-[state=open]:text-sky-600 dark:data-[state=open]:text-sky-400">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-gray-900 border border-sky-100 dark:border-gray-800 shadow-lg">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-sky-600 dark:hover:text-sky-400 focus:bg-sky-50 dark:focus:bg-gray-800"
                        >
                          <div className="text-sm font-medium leading-none text-sky-900 dark:text-white">
                            About Us
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our history, mission, and vision
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/parish-office"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-50 hover:text-sky-600 focus:bg-sky-50 focus:text-sky-600"
                        >
                          <div className="text-sm font-medium leading-none">Parish Office</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Contact information and office hours
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/legacy-of-service"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-50 hover:text-sky-600 focus:bg-sky-50 focus:text-sky-600"
                        >
                          <div className="text-sm font-medium leading-none">Legacy of Service</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn the history of priests, catechists, and apostolic impact
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/church-groups" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`text-sm font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                      isActive("/church-groups") ? "text-sky-600 dark:text-sky-400 font-semibold" : "text-sky-800 dark:text-gray-300"
                    }`}
                  >
                    Church Groups
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/outstations" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`text-sm font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                      isActive("/outstations") ? "text-sky-600 dark:text-sky-400 font-semibold" : "text-sky-800 dark:text-gray-300"
                    }`}
                  >
                    Outstations
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/programs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`text-sm font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                      isActive("/programs") ? "text-sky-600 dark:text-sky-400 font-semibold" : "text-sky-800 dark:text-gray-300"
                    }`}
                  >
                    Programs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/sacraments" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`text-sm font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                      isActive("/sacraments") ? "text-sky-600 dark:text-sky-400 font-semibold" : "text-sky-800 dark:text-gray-300"
                    }`}
                  >
                    Sacraments
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 text-sky-800 dark:text-gray-300 data-[state=open]:text-sky-600 dark:data-[state=open]:text-sky-400">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-gray-900 border border-sky-100 dark:border-gray-800 shadow-lg">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/resources#downloads"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-sky-600 dark:hover:text-sky-400 focus:bg-sky-50 dark:focus:bg-gray-800"
                        >
                          <div className="text-sm font-medium leading-none text-sky-900 dark:text-white">
                            Downloads
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                            Forms, documents, and bulletins
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/resources#tenders"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-sky-600 dark:hover:text-sky-400 focus:bg-sky-50 dark:focus:bg-gray-800"
                        >
                          <div className="text-sm font-medium leading-none text-sky-900 dark:text-white">
                            Tenders
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                            Tender opportunities and procurement
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/resources#gallery"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-sky-600 dark:hover:text-sky-400 focus:bg-sky-50 dark:focus:bg-gray-800"
                        >
                          <div className="text-sm font-medium leading-none text-sky-900 dark:text-white">
                            Gallery
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                            Photos of parish life and events
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`text-sm font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                      isActive("/contact") ? "text-sky-600 dark:text-sky-400 font-semibold" : "text-sky-800 dark:text-gray-300"
                    }`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="secondary" className="hidden sm:inline-flex bg-sky-500 hover:bg-sky-600 text-white" asChild>
            <Link href="/donate">Donate</Link>
          </Button>
          {mounted && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative w-10 h-10 rounded-full transition-colors duration-300"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <span className="sr-only">Toggle theme</span>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="absolute inset-0 rounded-full border-2 border-transparent transition-colors duration-300 group-hover:border-slate-400 dark:group-hover:border-slate-700" />
              </Button>
            </div>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-sky-50 dark:bg-gray-900 border-l border-sky-100">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-4"
                >
                  {[
                    { href: "/", label: "Home" },
                    {
                      href: "/about",
                      label: "About",
                      subItems: [
                        { href: "/about", label: "About Us" },
                        { href: "/parish-office", label: "Parish Office" },
                        { href: "/legacy-of-service", label: "Legacy of Service" },
                      ],
                    },
                    { href: "/church-groups", label: "Church Groups" },
                    { href: "/outstations", label: "Outstations" },
                    { href: "/programs", label: "Programs" },
                  { href: "/sacraments", label: "Sacraments" },
                    {
                      href: "/resources",
                      label: "Resources",
                      subItems: [
                        { href: "/resources#downloads", label: "Downloads" },
                        { href: "/resources#tenders", label: "Tenders" },
                        { href: "/resources#gallery", label: "Gallery" },
                      ],
                    },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <div key={item.href}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg font-medium ${
                            isActive(item.href) ? "text-sky-600 dark:text-sky-400" : "text-sky-800 dark:text-gray-300"
                          } hover:text-sky-600 dark:hover:text-sky-400 transition-colors`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                      {item.subItems && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <motion.div key={subItem.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Link
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-base ${
                                  isActive(subItem.href) ? "text-sky-600 dark:text-sky-400" : "text-sky-800 dark:text-gray-300"
                                } hover:text-sky-600 dark:hover:text-sky-400 transition-colors`}
                              >
                                {subItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm font-medium text-sky-900 dark:text-white">Theme</p>
                    <Button variant="outline" onClick={() => setTheme("light")} className="justify-start border-sky-200 text-sky-700 hover:bg-sky-100">
                      <Sun className="mr-2 h-4 w-4" />
                      <span>Light</span>
                    </Button>
                    <Button variant="outline" onClick={() => setTheme("dark")} className="justify-start border-sky-200 text-sky-700 hover:bg-sky-100">
                      <Moon className="mr-2 h-4 w-4" />
                      <span>Dark</span>
                    </Button>
                    <Button variant="outline" onClick={() => setTheme("system")} className="justify-start border-sky-200 text-sky-700 hover:bg-sky-100">
                      <Laptop className="mr-2 h-4 w-4" />
                      <span>System</span>
                    </Button>
                  </div>
                  <Button variant="secondary" asChild className="bg-sky-500 hover:bg-sky-600 text-white">
                    <Link href="/donate">Donate</Link>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
