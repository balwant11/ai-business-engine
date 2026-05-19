import Link from "next/link";

export default function NavbarMinimal({ menu, business }) {
  return (
    <header className="w-full bg-secondary py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-xl font-semibold text-primary">
          {business.name}
        </Link>
        <nav className="flex space-x-6">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.slug}
              className="text-primary/60 hover:text-primary transition-colors text-sm"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
