export default function Footer({ business }) {

    return (
      <footer>
  
        <h2>{business.name}</h2>
  
        <p>{business.address}</p>
  
        <p>{business.phone}</p>
  
      </footer>
    );
  }