import Logo from '../assets/logo.jpg';

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={Logo} alt="profile picture" />
            <h2>Jessel</h2>
            <p>Computer Science</p>
        </div>
    );
}

export default Card