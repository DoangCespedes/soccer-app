import Link from "next/link"
import styles from './Navigation.module.css';

const Links = [{
    label: 'Home',
    route: '/'
},
{
    label: 'About',
    route: '/About'
},
{
    label: 'Post',
    route: '/Post'
}
]
export const Navigation = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    {Links.map(({ label, route }) =>
                        <li key={route}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}