import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Tours', href: '#tours' },
    { label: 'Dolomites Trek', href: '#dolomites' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="text-xl font-extrabold tracking-tight">
              <span className="text-slate-900">TRAVEL</span>{' '}
              <span className="text-emerald-600">MASTER</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#tours"
                className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-white font-medium shadow hover:bg-emerald-700"
              >
                Browse All Tours
              </a>
            </nav>

            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#tours"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 bg-emerald-600 text-white text-center font-medium"
              >
                Browse All Tours
              </a>
            </div>
          </div>
        )}
      </header>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} TRAVEL MASTER. All rights reserved.</p>
          <p>Adventure awaits — travel with confidence.</p>
        </div>
      </footer>
    </div>
  );
}
