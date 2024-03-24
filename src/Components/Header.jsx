import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='mx-auto bg-dark'>
            <div className='container-xxl'>
            <nav className='navbar bg-dark navbar-dark  px-md-5 navbar-expand-md  ms-auto w-100'>
                <Link className='Rlink' to="/"><div className='navbar-brand'>TonyMart</div></Link>
                <form className='input-group d-flux w-md-50 w-50'>
                    <input type="text" placeholder='search items' className=' mx-auto form-control w-50 py-1 px-2 ' />
                    <span class="material-symbols-outlined bg-warning input-group-text ">
                        search
                    </span>
                </form>
                <button className="navbar-toggler" itemType='button' data-bs-toggle="collapse" data-bs-target="#navbarScroll" >
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>

                <div className='navbar-collapse collapse' id="navbarScroll">
                    <ul className='navbar-nav mx-auto'>
                        <li className='nav-item px-md-3'>
                            <Link to="/login" className='nav-link' href="" style={style}>
                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>Login
                            </Link>
                        </li>
                        <li className='nav-item px-md-3'>
                            <a className='nav-link' href="" style={style}>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span><span>Favarote</span>
                                </a>
                        </li>
                        <li className='nav-item px-md-3 '>
                            <a className='nav-link' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} href="">
                                <span class="material-symbols-outlined">
                                    shopping_cart
                                </span>
                                cart</a>
                        </li>
                        <li className='nav-item px-md-3'>
                            <a className='nav-link' href=""><span class="material-symbols-outlined">
                                more_vert
                            </span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='px-md-5 bg-dark text-light row-1 p-2'>
                <ul className='list-inline col-12 col-md-6' style={{ ...style, justifyContent: 'space-between' }}>
                    <li className='list-inline-item ' data-bs-toggle='dropdown' style={{ display: 'flex', alignItems: 'center' }}>
                        <span class="material-symbols-outlined">
                            apps
                        </span> <span className='dropdown-toggle'  data-bs-toggle='dropdown'>Shop Catagories</span>
                    <ul className="dropdown-menu bg-light shadow ">
                        <li><a className="dropdown-item " href="#">Action</a></li>
                        <li><a className="dropdown-item " href="#">Another action</a></li>
                        <li><a className="dropdown-item " href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <Link className='text-light' to="/store"><li className='list-inline-item'>Our Store</li></Link>
                    <Link className='text-light' to="/blog"><li className='list-inline-item'>Blogs</li></Link>
                    <Link className='text-light' to="/contactPage"><li className='list-inline-item'>Contact</li></Link>
                </ul>
            </div>
            </div>
        </div>
    )
}
let style = { display: 'flex', alignItems: 'center', justifyContent: 'center' }
export default Header