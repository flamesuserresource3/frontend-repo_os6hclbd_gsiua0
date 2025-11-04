import { useMemo, useState } from 'react';
import { Filter, MapPin, Star } from 'lucide-react';

const TOURS = [
  {
    id: 'dolo-7',
    title: '7-Day Alpine Trek to the Dolomites',
    region: 'Europe',
    activity: 'Trekking',
    price: 2190,
    img: 'https://images.unsplash.com/photo-1508261303786-0e2a4b40f07b?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 'inca-5',
    title: 'Inca Trail Express to Machu Picchu',
    region: 'South America',
    activity: 'Trekking',
    price: 1890,
    img: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0eb?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 'sail-7',
    title: 'Greek Isles Luxury Sailing',
    region: 'Europe',
    activity: 'Cruise',
    price: 2790,
    img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1600&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 'safari-6',
    title: 'Serengeti Big Five Safari',
    region: 'Africa',
    activity: 'Wildlife',
    price: 3490,
    img: 'https://images.unsplash.com/photo-1543877087-ebf71fde2be1?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
  },
];

const REGIONS = ['All', 'Europe', 'Asia', 'Africa', 'South America', 'North America', 'Oceania'];
const ACTIVITIES = ['All', 'Trekking', 'Cultural', 'Cruise', 'Wildlife'];

export default function ToursExplorer() {
  const [region, setRegion] = useState('All');
  const [activity, setActivity] = useState('All');
  const [price, setPrice] = useState(4000);

  const filtered = useMemo(() => {
    return TOURS.filter((t) =>
      (region === 'All' || t.region === region) &&
      (activity === 'All' || t.activity === activity) &&
      t.price <= price
    );
  }, [region, activity, price]);

  return (
    <section id="tours" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Explore our tours</h2>
            <p className="text-slate-600">Filter by region, activity, and price to find your next adventure.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-amber-600">
            <Star className="h-5 w-5 fill-amber-400" />
            <span className="text-sm">Featured Deals</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 items-end mb-8 bg-white rounded-xl p-4 ring-1 ring-slate-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Region</label>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full rounded-lg border-slate-300">
              {REGIONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Activity</label>
            <select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full rounded-lg border-slate-300">
              {ACTIVITIES.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Max Price: ${price}</label>
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour) => (
            <a
              key={tour.id}
              href={tour.id === 'dolo-7' ? '#dolomites' : '#tours'}
              className="group overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{tour.title}</h3>
                  <span className="text-emerald-700 font-bold">From ${tour.price}</span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{tour.region}</span>
                  <span>{tour.activity}</span>
                  <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-amber-400 text-amber-600" />{tour.rating}</span>
                </div>
              </div>
            </a>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full flex items-center justify-center rounded-xl border border-dashed border-slate-300 p-10 text-slate-500">
              <Filter className="h-5 w-5 mr-2" /> No tours match these filters. Try broadening your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
