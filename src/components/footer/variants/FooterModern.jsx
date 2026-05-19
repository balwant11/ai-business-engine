import Link from "next/link";

export default function FooterModern({ business }) {
  return (
    <footer className="bg-primary text-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">{business.name}</h3>
          <p className="text-secondary/70 leading-relaxed mb-6 max-w-sm">
            {business.editorial_summary || "Delivering excellence and quality in every interaction."}
          </p>
          <div className="flex space-x-4">
            {business.facebook && <a href={business.facebook} target="_blank" rel="noreferrer" className="text-secondary/50 hover:text-accent transition-colors">Facebook</a>}
            {business.instagram && <a href={business.instagram} target="_blank" rel="noreferrer" className="text-secondary/50 hover:text-accent transition-colors">Instagram</a>}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-secondary/70">
            <li className="flex items-start">
              <span className="mr-3 mt-1">📍</span>
              <span>{business.full_address}</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">📞</span>
              <a href={`tel:${business.phone}`} className="hover:text-accent transition-colors">{business.phone}</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Business Hours</h4>
          <ul className="space-y-2 text-secondary/70">
            {business.weekday_hours && business.weekday_hours.map((hour, idx) => (
              <li key={idx} className="text-sm border-b border-secondary/10 pb-2 mb-2 last:border-0">{hour}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-secondary/10 text-center text-secondary/50 text-sm">
        <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
