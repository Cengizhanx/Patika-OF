import React from 'react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import { Button } from '@chakra-ui/react'
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {

    const { loggedIn } = useAuth();
    console.log(loggedIn);

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">🛒 E-Commerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li><Link to="/">Products</Link></li>
                </ul>
            </div>

            <div className={styles.right}>
                {
                    !loggedIn && (
                        <>
                            <Link to="/signin">
                                <Button colorScheme='blue'>Login</Button>
                            </Link>

                            <Link to="/signup">
                                <Button colorScheme='green'>Register</Button>
                            </Link></>
                    )
                }

                {
                    loggedIn && (
                        <>
                            <Link to="/profile">
                                <Button colorScheme='orange'>Profile</Button>
                            </Link>
                        </>
                    )
                }

            </div>
        </nav>
    )
}

export default Navbar