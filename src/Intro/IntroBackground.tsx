import { useEffect, useRef } from 'react';
import sample from '/videos/3582634365.mp4';

type IntroBackgroundProps = {
    updateHeight: (height?: number) => void;
}

const IntroBackground = (props?: IntroBackgroundProps) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        props?.updateHeight && props.updateHeight(ref.current?.offsetHeight);
    }, [ref]);
    

    return (
        <video ref={ref} className="w-full h-full absolute top-0 left-0 -z-10 object-fill" autoPlay loop muted>
            <source src={sample} type="video/mp4" />
        </video>
    );
};

export default IntroBackground;
