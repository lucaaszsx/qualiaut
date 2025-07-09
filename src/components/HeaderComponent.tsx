'use client';

import { useTheme } from '@/context/ThemeContext';
import { Moon, Menu, Sun, X } from 'lucide-react';
import { useState } from 'react';
import Styles from '@/styles/components/HeaderComponentStyle.module.css';
import AppLogo from './AppLogoComponent';
import NavList from './NavListComponent';
import Button from './ButtonComponent';

export default function HeaderComponent() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={Styles.header} role="banner" aria-labelledby="app-title">
            <div className="container">
                <div className={Styles.branding}>
                    <div className={Styles.logoArea}>
                        <AppLogo className={Styles.logo} />
                    </div>
                    <div className={Styles.brandText}>
                        <h1 id="app-title">Qualiaut</h1>
                    </div>
                </div>
                <div>
                    <button
                        className={Styles.mobileMenuButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Fechar o menu" : "Abrir o menu"}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <div className={Styles.menu}>
                    <nav className={Styles.nav} aria-label="Área de navegação">
                        <NavList className={Styles.navList} />
                    </nav>
                    <div className={Styles.actionButtons}>
                        <Button
                            className={Styles.loginButton}
                            href="/signin"
                        >
                            Iniciar Sessão
                        </Button>
                        <Button
                            className={Styles.toggleThemeButton}
                            onClick={toggleTheme}
                        >
                            {theme === 'light' ? <Moon /> : <Sun />}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}