/* ::: Navigation ::: */
import Link from 'next/link';
import NavStyles from '../styles/NavStyles.module.css';


export default function Navigation() {

    return (<nav
        className={NavStyles.nav_wrap}>
        <ul
            className={NavStyles.nav_list_wrap}
        >
            <li
                className={NavStyles.nav_list}
            >
                <div
                    className={NavStyles.link_div}
                >
                    <Link
                        className={NavStyles.nav_link}
                        href='/'>
                        Spotlight
                    </Link>
                </div>
            </li>
            <li
                className={NavStyles.nav_list}
            >
                <div
                    className={NavStyles.link_div}
                >
                    <Link
                        className={NavStyles.nav_link}
                        href='/art-pieces'>
                        Art Pieces
                    </Link>

                </div>
            </li>
            <li
                className={NavStyles.nav_list}
            >
                <div
                    className={NavStyles.link_div}
                >
                    <Link
                        className={NavStyles.nav_link}
                        href='/favourites'>
                        Favourites
                    </Link>
                </div>
            </li>
        </ul>
    </nav>
    );

}
