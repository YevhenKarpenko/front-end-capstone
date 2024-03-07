function Nav(props){
    return(
    <nav>   
     <img src={props.logo}/>
     <ul>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Menu</a>
            </li>
            <li>
                <a>LogIn</a>
            </li>   
            <li>
                <a>Order online</a>
            </li>
            <li>
                <a>Reservations</a>
            </li>
        </ul>
        </nav>

    )
}

export default Nav

