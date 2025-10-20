import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Star,
  Croissant,
  TicketPercent,
  CalendarDays,
  UserPlus,
  Rss,
  Share2,
  HelpCircle,
  Mail,
  MapPin,
  Clock3,
  Users,
  ExternalLink,
} from "lucide-react";

type MenuItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href?: string;
};

type Column = {
  heading: string;
  items: MenuItem[];
};

const columns: Column[] = [
  {
    heading: "Explore Our Menu",
    items: [
      { icon: <Croissant className="size-5" />, title: "Pastries Galore", desc: "Delicious treats made fresh daily!" },
      { icon: <img src="/icons8-crepe-96.png" alt="Crepe" className="size-5" />, title: "Crepe Delights", desc: "Savor our sweet and savory crepes." },
      { icon: <TicketPercent className="size-5" />, title: "Special Offers", desc: "Check out our latest promotions!" },
      { icon: <CalendarDays className="size-5" />, title: "Events Calendar", desc: "Join us for upcoming events and specials." },
    ],
  },
  {
    heading: "More to Explore",
    items: [
      { icon: <Star className="size-5" />, title: "Customer Reviews", desc: "See what our customers are saying!" },
      { icon: <UserPlus className="size-5" />, title: "Join Us", desc: "Become part of our community today!" },
      { icon: <Rss className="size-5" />, title: "Follow Us", desc: "Stay updated on our latest news." },
    ],
  },
  {
    heading: "Stay Connected",
    items: [
      { icon: <Share2 className="size-5" />, title: "Social Media", desc: "Connect with us on social platforms." },
      { icon: <HelpCircle className="size-5" />, title: "Frequently Asked", desc: "Find answers to common questions here." },
    ],
  },
  {
    heading: "Get In Touch",
    items: [
      { icon: <Mail className="size-5" />, title: "Contact Info", desc: "Reach out for inquiries or feedback." },
      { icon: <MapPin className="size-5" />, title: "Location Map", desc: "Find us easily in Rolla, Missouri." },
      { icon: <Clock3 className="size-5" />, title: "Business Hours", desc: "Visit us during our open hours." },
      { icon: <Users className="size-5" />, title: "Join Our Team", desc: "Explore career opportunities with us." },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const close = () => setOpen(false);
  const openMenu = () => setOpen(true);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close if clicked outside (when open)
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        triggerRef.current &&
        !triggerRef.current.contains(t)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      {/* Top bar */}
      <div className="w-full px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="font-semibold text-xl tracking-wide text-black">
            Alafolie
          </a>

          {/* Center: Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              className="text-sm hover:text-gray-900 text-gray-600" 
              href="#"
              onMouseEnter={openMenu}
            >
              Home Page
            </a>

            {/* Trigger (Menu Options) */}
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={close}
            >
              <button
                ref={triggerRef}
                className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                aria-expanded={open}
                aria-controls="mega-menu"
                onClick={() => setOpen((v) => !v)} // mobile/tablet tap support
              >
                Menu Options
              </button>
            </div>

            <a 
              className="text-sm hover:text-gray-900 text-gray-600" 
              href="#"
              onMouseEnter={openMenu}
            >
              About Us
            </a>
            <a 
              className="text-sm hover:text-gray-900 text-gray-600 inline-flex items-center gap-1" 
              href="#"
              onMouseEnter={openMenu}
            >
              Contact Us <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </a>
          </nav>

          {/* Right: Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden sm:inline-flex items-center rounded-xl border border-black px-3 py-2 text-sm text-black hover:bg-gray-50"
              onMouseEnter={openMenu}
            >
              Menu
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-xl border border-transparent bg-black px-3 py-2 text-sm text-white hover:bg-gray-900"
              onMouseEnter={openMenu}
            >
              Visit
            </a>
          </div>
        </div>
      </div>

      {/* Mega panel - positioned below navbar */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mega-menu"
            ref={panelRef}
            role="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full bg-white border-b shadow-lg"
            onMouseEnter={openMenu}
            onMouseLeave={close}
          >
            <div className="w-full px-4 lg:px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {columns.map((col) => (
                  <div key={col.heading} className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                      {col.heading}
                    </h3>
                    <ul className="space-y-3">
                      {col.items.map((item) => (
                        <li key={item.title}>
                          <a
                            href={item.href || "#"}
                            className="group grid grid-cols-[20px,1fr] gap-3 rounded-xl p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                          >
                            <span className="mt-0.5 text-gray-700">{item.icon}</span>
                            <span className="flex flex-col">
                              <span className="font-medium text-gray-900 group-hover:underline">
                                {item.title}
                              </span>
                              <span className="text-sm text-gray-600">
                                {item.desc}
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom bar inside the dropdown */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t mt-6 pt-6">
                <p className="text-sm text-gray-700">
                  Ready to indulge?{" "}
                  <a href="#" className="font-medium underline underline-offset-2">
                    Sign up for free
                  </a>
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl border border-black px-3 py-2 text-sm text-black hover:bg-gray-50"
                  >
                    <ExternalLink className="size-4" />
                    Order Online
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl border border-black px-3 py-2 text-sm text-black hover:bg-gray-50"
                  >
                    <ExternalLink className="size-4" />
                    View Menu
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile nav */}
      <div className="md:hidden border-t bg-white">
        <div className="w-full px-4 py-2 flex gap-4 text-sm">
          <a href="#" onClick={() => setOpen((v) => !v)}>Home Page</a>
          <button
            className="inline-flex items-center gap-1"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu Options
          </button>
          <a href="#" onClick={() => setOpen((v) => !v)}>About Us</a>
          <a href="#" onClick={() => setOpen((v) => !v)}>Contact Us</a>
        </div>
        {/* Mobile panel rendered below bar */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="w-full px-4 pb-4"
            >
              <div className="rounded-2xl border bg-white shadow-sm">
                <div className="grid grid-cols-1 gap-6 p-6">
                  {columns.map((col) => (
                    <div key={col.heading} className="space-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                        {col.heading}
                      </h3>
                      <ul className="space-y-3">
                        {col.items.map((item) => (
                          <li key={item.title}>
                            <a
                              href={item.href || "#"}
                              className="group grid grid-cols-[20px,1fr] gap-3 rounded-xl p-2 hover:bg-gray-50"
                            >
                              <span className="mt-0.5 text-gray-700">{item.icon}</span>
                              <span className="flex flex-col">
                                <span className="font-medium text-gray-900 group-hover:underline">
                                  {item.title}
                                </span>
                                <span className="text-sm text-gray-600">
                                  {item.desc}
                                </span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t px-6 py-4">
                  <p className="text-sm text-gray-700">
                    Ready to indulge?{" "}
                    <a href="#" className="font-medium underline underline-offset-2">
                      Sign up for free
                    </a>
                  </p>
                  <div className="flex items-center gap-2">
                    <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-black px-3 py-2 text-sm text-black hover:bg-gray-50">
                      <ExternalLink className="size-4" />
                      Order Online
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-black px-3 py-2 text-sm text-black hover:bg-gray-50">
                      <ExternalLink className="size-4" />
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
