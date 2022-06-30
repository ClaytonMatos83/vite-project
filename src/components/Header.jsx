import styles from'./Header.module.css'

import cmLogo from '../assets/cm-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={cmLogo} alt="Logotipo do CM feed"/>
        </header>
    );
}