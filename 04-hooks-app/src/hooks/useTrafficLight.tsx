import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);

    // Countdown effect
    useEffect(() => {
        if (countdown === 0) return;
        console.log({ countdown });

        const intervalId = setInterval(() => {
            console.log('setInterval llamado');
            setCountdown(prev => prev - 1); 
        }, 1000);

        return () => {
            console.log('Cleanup interval');
            clearInterval(intervalId);
        };
    }, [countdown]);

    // Change light color effect
    useEffect(() => {
        if (countdown > 0) return;

        setCountdown(5);
        
        if (light === 'red') {
            setLight('yellow');
            return;
        }
        if (light === 'yellow') {
            setLight('green');
            return;
        }
        if (light === 'green') {
            setLight('red');
            return;
        }
    }, [countdown, light]);

    return {
        // Values
        countdown,

        // Computed
        percentage: countdown/5 * 100,
        redLight: light === 'red' ? colors[light] : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors[light] : 'bg-gray-500',
        greenLight: light === 'green' ? colors[light] : 'bg-gray-500',
        
        // Methods / Actions
    }
}
