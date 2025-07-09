'use client';

import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Styles from '@/styles/components/ButtonComponentStyle.module.css';

type ButtonType = 'primary' | 'secondary' | 'danger';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    typeStyle?: ButtonType;
    href?: string;
    ariaLabel?: string;
    children: ReactNode
}
export default function ButtonComponent({
    typeStyle = 'primary',
    href,
    ariaLabel,
    children,
    ...props
}: ButtonProps) {
    const router = useRouter();
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (props.disabled) {
            e.preventDefault();
            return;
        }
        if (href) {
            e.preventDefault();
            router.push(href);
        }
        if (props.onClick) props.onClick(e);
    };

    return (
        <button
            onClick={handleClick}
            className={`${Styles.button} button-${typeStyle} ${props.className ?? ''}`}
            aria-label={ariaLabel ?? ''}
            {...props}
        >
            {children}
        </button>
    );
}