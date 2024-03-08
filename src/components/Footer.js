import '../App.css';
import logo from '../assets/Logo .svg'

function Footer(props){
    return(
       <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Adress: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> ++ 0123 456 78</li>
                        <li>Email: <br/> littlelemon@lemon.com </li>
                    </ul>
                </div>

                <div>
                    <h3>Socials Media Linkes</h3>
                    <ul>
                        <li><a>Facebook</a></li>
                         <li><a>Instagram</a></li>
                        <li><a>Twitter</a></li>
                    </ul>
                </div>

            </section>
       </footer>
    )
}

export default Footer