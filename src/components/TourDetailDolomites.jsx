import { useState } from 'react';
import { Calendar, CheckCircle2, XCircle } from 'lucide-react';

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Venice and Transfer to Cortina',
    details:
      'Meet your guide at Venice (VCE). Private transfer to Cortina d’Ampezzo. Welcome briefing, gear check, and aperitivo with panoramic views of the Dolomites.',
  },
  {
    day: 2,
    title: 'Tre Cime di Lavaredo Loop',
    details:
      'Iconic circuit beneath the Three Peaks. 10km moderate hike showcasing towering spires and alpine meadows. Overnight in a charming rifugio.',
  },
  { day: 3, title: 'Lago di Braies & Fanes-Senes Plateau', details: 'Sunrise at Lago di Braies followed by a scenic hike across the Fanes-Senes-Braies Park with limestone formations and wildflowers.' },
  { day: 4, title: 'Alta Via Panorama', details: 'Traverse a section of the Alta Via 1 with sweeping valley views. Optional via ferrata for the adventurous.' },
  { day: 5, title: 'Sella Group Traverse', details: 'High-altitude trek across the Sella massif. Expect rugged landscapes, ladders, and unrivaled vistas.' },
  { day: 6, title: 'Val Gardena & Seceda Ridges', details: 'Photogenic ridgelines at Seceda with dramatic cliff drops and rolling knolls. Cultural evening in Ortisei.' },
  { day: 7, title: 'Bolzano & Departure', details: 'Short morning walk, transfer through wine country to Bolzano. Optional museum visit before onward travel.' },
];

export default function TourDetailDolomites() {
  const [openDay, setOpenDay] = useState(1);

  return (
    <section id="dolomites" className="bg-white">
      {/* Header / Hero */}
      <div className="relative">
        <div className="aspect-[16/6] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500043357865-c6b8827edf2b?q=80&w=2400&auto=format&fit=crop"
            alt="Dolomites ridgelines"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">7-Day Alpine Trek to the Dolomites</h2>
          <p className="mt-2 max-w-3xl text-white/90">
            A refined, adventure-focused journey through Italy’s most dramatic mountains. Expert guides, boutique stays, and unforgettable ridgelines.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Pricing */}
        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          <div className="lg:col-span-2">
            <div className="rounded-2xl ring-1 ring-slate-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-slate-600 font-semibold">Tier</th>
                    <th className="px-4 py-3 text-slate-600 font-semibold">What’s included</th>
                    <th className="px-4 py-3 text-slate-600 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-semibold">Standard</td>
                    <td className="px-4 py-3 text-slate-700">
                      Boutique accommodations, daily breakfasts, luggage transfers, certified guide, park fees.
                    </td>
                    <td className="px-4 py-3 text-emerald-700 font-bold">$2,190 pp</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-semibold">Premium</td>
                    <td className="px-4 py-3 text-slate-700">
                      All Standard features plus premium stays, private transfers, gourmet dinners, and photography session.
                    </td>
                    <td className="px-4 py-3 text-emerald-700 font-bold">$3,290 pp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-center gap-4 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="h-5 w-5" />
              <span>Departures: May – October</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-700"
            >
              BOOK NOW
            </a>
            <p className="text-xs text-slate-500">No payment required to inquire. Secure your dates in minutes.</p>
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Daily Itinerary</h3>
          <div className="divide-y divide-slate-200 rounded-2xl ring-1 ring-slate-200 overflow-hidden">
            {itinerary.map((item) => (
              <details
                key={item.day}
                open={openDay === item.day}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDay(openDay === item.day ? 0 : item.day);
                }}
                className="group"
              >
                <summary className="list-none cursor-pointer bg-white px-4 py-4 hover:bg-slate-50 flex items-start justify-between">
                  <div>
                    <span className="text-sm font-semibold text-emerald-700">Day {item.day}</span>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  </div>
                  <span className="ml-4 mt-1 text-slate-400">{openDay === item.day ? '−' : '+'}</span>
                </summary>
                <div className="bg-white px-4 pb-4 text-slate-700">{item.details}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Inclusions / Exclusions */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Inclusions</h3>
            <ul className="space-y-2 text-slate-700">
              {[
                '6 nights boutique lodging + 1 rifugio night',
                'Daily breakfast, 2 gourmet dinners (Premium: 5)',
                'Certified English-speaking mountain guide',
                'All ground transfers and luggage transport',
                'National park permits and entrance fees',
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Exclusions</h3>
            <ul className="space-y-2 text-slate-700">
              {[
                'International flights',
                'Travel insurance',
                'Lunches and beverages unless specified',
                'Personal hiking gear and tips',
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-slate-400 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Gallery</h3>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {[
              'https://images.unsplash.com/photo-1508261303786-0e2a4b40f07b?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1500043357865-c6b8827edf2b?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
            ].map((src, idx) => (
              <div key={idx} className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-slate-200">
                <img src={src} alt="Dolomites gallery" className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
