import Link from 'next/link';

export default function NavListComponent({ className = '' }: { className: string }) {
    return (
        <ul className={className}>
            <li>
                <Link href="/" aria-label="Ir para a página inicial">Início</Link>
            </li>
            <li>
                <Link href="/hub" aria-label="Ir para a página de hub das mães">Hub</Link>
            </li>
            <li>
                <Link href="/care-space" aria-label="Ir para a página de espaço de cuidado">Espaço de Cuidado</Link>
            </li>
            <li>
                <Link href="/rights" aria-label="Ir para a página de direitos">Direitos</Link>
            </li>
            <li>
                <Link href="/chat" aria-label="Ir para o chat em tempo real">Chat</Link>
            </li>
        </ul>
    );
}