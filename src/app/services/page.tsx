import Image from 'next/image';
import { Hero, Activities, Hotels, Transport, Events } from '@/components/services';

export default function Services() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <Activities />
            <Hotels />
            <Transport />
            <Events />
        </div>
    );
}
