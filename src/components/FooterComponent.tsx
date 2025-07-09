import Styles from '@/styles/components/FooterComponentStyle.module.css'
import AppLogo from './AppLogoComponent';
import NavList from './NavListComponent';
import Link from 'next/link';

export default function FooterComponent() {
    return (
        <footer className={Styles.footer}>
            <div className="container">
                <div className={Styles.grid}>
                    <div className={Styles.branding}>
                        <div className={Styles.logoArea}>
                            <AppLogo className={Styles.logo} />
                        </div>
                        <div className={Styles.brandText}>
                            <h1 id="app-title">Qualiaut</h1>
                        </div>
                        <div className={Styles.brandDescription}>
                            <p>Uma plataforma dedicada ao apoio e suporte de mães de crianças atípicas,
                            oferecendo conexão, recursos e orientação em uma comunidade acolhedora.</p>
                        </div>
                        <div className={Styles.brandCopy}>
                            <p>&copy; {new Date().getFullYear()} Qualiaut. Todos os direitos reservados.</p>
                        </div>
                    </div>
                    <nav className={Styles.navigationNav}>
                        <h2 className={Styles.navHeading}>Navegação</h2>
                        <NavList className={Styles.navList} />
                    </nav>
                    <nav className={Styles.supportNav}>
                        <h2 className={Styles.navHeading}>Suporte</h2>
                        <ul className={Styles.navList}>
                            <ul>
                                <li>
                                    <Link href="mailto:contato@gmail.com" aria-label="Entrar em contato por e-mail">Contato</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy" aria-label="Acessar a política de privacidade">Política de Privacidade</Link>
                                </li>
                                <li>
                                    <Link href="/terms" aria-label="Acessar os termos de uso">Termos de Uso</Link>
                                </li>
                            </ul>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}