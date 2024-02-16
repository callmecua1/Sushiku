import './customNavbar.css'




export const Navbar = () => {
    

    const openTab = () => {
        let openTabButton = document.querySelector('.openTab-btn')
        let navbarMenu = document.getElementById('navbar-tab')

        openTabButton.addEventListener('click', ()=> {
            navbarMenu.style.left = "0px"
        })
    }


    const closeTab = () => {
        let openButton = document.getElementById('open-tab-button')
        document.getElementById('navbar-tab').style.left = "1200px"
        setTimeout(()=>{
            openButton.style.display = "block"
        }, 400)
    }

 

    return(
        <div className="navbar">
            <h2 className='navbar-title'>Sushiku</h2>
            <img src="/src/assets/icon/settings.png" id='open-tab-button' className='openTab-btn' onClick={()=>openTab()} alt="button" />
            <nav id='navbar-tab'>
                <ul className=' lg:font-semibold'>
                    <li >Home</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Contact Us</li>
                    <li>Whats New?</li>
                </ul>
                <img src="/src/assets/icon/close (1).png" id='close-tab-button' className='closeTab-btn' onClick={()=>closeTab()} alt="button" />
            </nav>
        </div>
    )
}

