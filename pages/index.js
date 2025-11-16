export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-[#fffaf2] to-white text-[#081029]">

      {/* HERO / HEADER */}
      <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-amber-500 flex items-center justify-center shadow-inner overflow-hidden">
              <img
                src="https://i.postimg.cc/GHzLw0hY/illustration-of-naamam-a-sacred-symbol-of-vaishnavite-in-india-vector.jpg"
                alt="Tirupati Balaji"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-lg">Hotel Shree Balaji</div>
              <div className="text-xs text-gray-500">Inspired by Lord Tirupati Balaji</div>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li><a href="#rooms" className="hover:underline">Rooms</a></li>
              <li><a href="#amenities" className="hover:underline">Amenities</a></li>
              <li><a href="#places" className="hover:underline">Visit</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* TOP HERO SECTION */}
      <section className="bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=60')] bg-cover bg-center h-72 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-12 bg-white/70 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold">Hotel Shree Balaji</h1>
          <p className="mt-2 text-sm text-gray-700 max-w-xl">
            Steps from Kaal Bhairav Temple — comfortable stays, complimentary breakfast & free Wi-Fi.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#rooms" className="px-4 py-2 bg-amber-500 text-white rounded">View Rooms</a>
            <a href="#contact" className="px-4 py-2 border border-amber-500 text-amber-600 rounded">Contact & Book</a>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Rooms & Suites</h2>
        <p className="mt-1 text-sm text-gray-600">Three thoughtfully designed categories to suit every traveller.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Deluxe Room",
              price: "₹2,499 / night",
              desc: "City view, king bed, modern comforts.",
              img: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=1200&q=60",
            },
            {
              title: "Executive Suite",
              price: "₹3,999 / night",
              desc: "Spacious suite with seating area.",
              img: "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?auto=format&fit=crop&w=1200&q=60",
            },
            {
              title: "Heritage Room",
              price: "₹1,899 / night",
              desc: "Cozy, traditional decor, budget friendly.",
              img: "https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?auto=format&fit=crop&w=1200&q=60",
            }
          ].map((r, i) => (
            <article key={i} className="border rounded-lg overflow-hidden bg-white">
              <img src={r.img} alt={r.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{r.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="font-bold text-amber-600">{r.price}</div>
                  <div className="flex gap-2">
                    <a href="#contact" className="px-3 py-1 rounded border text-sm">Enquire</a>
                    <a href="#contact" className="px-3 py-1 rounded bg-amber-500 text-white text-sm">Book</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="max-w-6xl mx-auto px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold">Amenities</h2>
        <p className="mt-1 text-sm text-gray-600">Comfort-forward services included with your stay.</p>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Complimentary Breakfast",
            "Free Wi-Fi",
            "24/7 Reception",
            "Daily Housekeeping",
            "Room Service",
            "Airport Pickup (on request)",
          ].map((a) => (
            <li key={a} className="p-4 border rounded-lg bg-[#fffaf2]">
              <div className="font-semibold">{a}</div>
              {a === "Complimentary Breakfast" && (
                <div className="text-xs text-gray-600 mt-1">Indian & continental options available</div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* PLACES */}
      <section id="places" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Explore Varanasi</h2>
        <p className="mt-1 text-sm text-gray-600">
          Nearby attractions and pilgrimage sites — perfect for first-time visitors.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {[
              {
                name: "Kaal Bhairav Temple",
                note: "Major temple of Varanasi",
                map: "https://maps.app.goo.gl/B1WqH4GwCsLyiE1NA",
              },
              {
                name: "Dashashwamedh Ghat",
                note: "Evening aarti & boat rides",
                map: "https://maps.app.goo.gl/hBHaamDDYvHEH9QL6",
                boat: true,
              },
              {
                name: "Kashi Vishwanath Dham",
                note: "Sacred temple complex",
                map: "https://maps.app.goo.gl/y32869zNnXV24PGB8",
              },
              {
                name: "Tulsi Manas Temple",
                note: "Historic temple & cultural spot",
                map: "https://maps.app.goo.gl/gFdWkSEE46dJyV1V9",
              },
            ].map((p, i) => (
              <div key={i} className="p-4 border rounded-lg bg-white">
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-gray-600">{p.note}</div>
                  </div>

                  <div className="flex items-center gap-3 ml-auto">
                    {p.boat && (
                      <a
                        href="mailto:reservations@shreebalaji.example?subject=Boat%20Ride%20Booking"
                        className="px-3 py-1 bg-amber-500 text-white rounded text-sm"
                      >
                        Book Boat Ride
                      </a>
                    )}

                    <a href={p.map} target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/512px-Google_Maps_icon_%282020%29.svg.png"
                        alt="Google Maps"
                        className="w-7 h-auto object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="p-4 border rounded-lg bg-white">
            <h4 className="font-semibold">Quick Tips</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-2">
              <li>Respect local customs near ghats & temples.</li>
              <li>Best visiting months: October — March.</li>
              <li>Evening aarti at Dashashwamedh Ghat is a must-see.</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="w-full bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-start gap-4">
            <div className="font-semibold">Hotel Shree Balaji</div>
            <div className="text-sm text-gray-600">
              A-12, Near Kaal Bhairav Temple, Varanasi, Uttar Pradesh
              <br />Phone: +91 98XXXXXXXX | Email: info@shreebalaji.example
            </div>
          </div>

          <div className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Hotel Shree Balaji — All rights reserved
          </div>

        </div>
      </footer>
    </div>
  );
}
