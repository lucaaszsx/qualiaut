'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { motion } from 'framer-motion';
import Styles from '@/styles/pages/LoadingPageStyle.module.css';

export default function Loading() {
    return (
        <div className="container">
            <DotLottieReact
                src="/assets/images/illustrations/PaperPlane.lottie"
                loop
                autoplay
            />

            <div className={Styles.message}>
                Carregando... {/* Usar framer motion aqui depois */}
            </div>
        </div>
    );
}