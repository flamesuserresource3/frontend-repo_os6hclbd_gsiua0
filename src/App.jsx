import HeaderNav from './components/HeaderNav';
import HeroCover from './components/HeroCover';
import ToursExplorer from './components/ToursExplorer';
import TourDetailDolomites from './components/TourDetailDolomites';
import { Mail, Phone, User } from 'lucide-react';

function App() {
  return (
    <div className="font-inter text-slate-900">
      <HeaderNav />
      <main className="pt-28">
        <HeroCover />
        <ToursExplorer />
        <TourDetailDolomites />

        {/* About / Our Guides */}
        <section id="about" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">About TRAVEL MASTER</h2>
              <p className="mt-2 text-slate-700">
                We design unforgettable, luxury-leaning adventures for ambitious travelers. Our mission is to blend
                clean, minimalist aesthetics with authentic, high-impact experiences.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: 'Elena Rossi',
                  role: 'Lead Mountain Guide',
                  img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
                },
                {
                  name: 'Marcus Lee',
                  role: 'Expedition Director',
                  img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
                },
                {
                  name: 'Sara Delgado',
                  role: 'Cultural Specialist',
                  img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1200&auto=format&fit=crop',
                },
              ].map((p) => (
                <div key={p.name} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-sm text-slate-600">{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking / Contact */}
        <section id="contact" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">Booking & Inquiries</h2>
              <p className="mt-2 text-slate-700">
                Have dates in mind? Send an inquiry and our specialists will confirm availability and craft the perfect itinerary.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thanks! Your inquiry has been received. We\'ll be in touch shortly.');
                }}
                className="md:col-span-2 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input required type="text" className="w-full rounded-lg border-slate-300 pl-9" placeholder="Alex Morgan" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input required type="email" className="w-full rounded-lg border-slate-300 pl-9" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input type="tel" className="w-full rounded-lg border-slate-300 pl-9" placeholder="+1 (555) 555-5555" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Dates</label>
                    <input type="text" className="w-full rounded-lg border-slate-300" placeholder="e.g., June 10–17" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea className="w-full rounded-lg border-slate-300" rows={5} placeholder="Tell us about your group and interests..." />
                  </div>
                  <div className="sm:col-span-2 flex items-center justify-between">
                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" className="rounded border-slate-300" /> Subscribe to featured deals
                    </label>
                    <button type="submit" className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700">
                      Submit Inquiry
                    </button>
                  </div>
                </div>
              </form>

              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <h3 className="font-semibold text-slate-900">Why book with us?</h3>
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                  <li>Small groups, expert local guides</li>
                  <li>Flexible departures for busy professionals</li>
                  <li>Luxury-leaning options without losing authenticity</li>
                  <li>Fast response times and transparent pricing</li>
                </ul>
                <div className="mt-6 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-sm text-slate-600">
                    Prefer to talk? Email concierge@travelmaster.com or call +1 (555) 010-2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
