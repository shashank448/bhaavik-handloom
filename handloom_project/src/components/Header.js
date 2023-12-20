import { NavLink } from "react-router-dom"

const mapstyle = {
    textAlign: 'center',
}
const p = {
    padding: '20px',
}

const Header = () => {
  return (
    <header>
                <a href="#">Logo</a>
                <h1 style={mapstyle}>Bhaavik Handloom</h1>
                <nav>
                    <div style={mapstyle}>
                        <NavLink to="/" style={p}>Home</NavLink>
                        <NavLink to="/about" style={p}>About</NavLink>
                        <NavLink to="/gallery" style={p}>Gallery</NavLink>
                    </div>
                </nav>
    </header>
  )
}

export default Header;
