export default function Navigation() {
  const navmenu = {
    home: '/',
    orders: '/orders',
    about: '/about',
    contact: '/contact',
  };

  return (
    <nav>
      <p>Wonder Woods</p>
      <ul>
        {Object.keys(navmenu).map((item) => (
          <li key={`navitem_${item}`}>
            <a href={navmenu[item]}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
