import Link from "next/link";

export default function Navbar({ menu, business }) {

  return (
    <nav>

      <h2>{business.name}</h2>

      <div>
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.slug}
          >
            {item.title}
          </Link>
        ))}
      </div>

    </nav>
  );
}