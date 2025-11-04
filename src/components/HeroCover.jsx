import Spline from '@splinetool/react-spline';
import { Search } from 'lucide-react';

export default function HeroCover() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
            Young professionals • Adventure • Luxury
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Explore bold, luxury adventures with TRAVEL MASTER
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Clean, minimalist, and highly visual journeys across the globe.
            Discover curated treks, cultural immersions, and ocean escapes.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto] bg-white/80 backdrop-blur rounded-xl p-2 ring-1 ring-slate-200 shadow">
            <div className="flex items-center gap-2 px-3">
              <Search className="h-5 w-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search tours, destinations, or activities"
                className="w-full bg-transparent outline-none placeholder:text-slate-400 text-slate-900 py-2"
              />
            </div>
            <a
              href="#tours"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
            >
              Browse All Tours
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span>Deep ocean blue • Bright gold • Off-white</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-sky-900" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-slate-50 ring-1 ring-slate-200" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
