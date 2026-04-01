import { useEffect, useRef } from "react";

export const useTelemetry = () => { 
    const buffer = useRef<{ x: number; y: number; t: number }[]>([]);
    const BUFFER_LIMIT = 50;


useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => { 
        buffer.current.push({ 
            x: e.clientX,
            y: e.clientY,
            t: Date.now()
        });

        if (buffer.current.length >= BUFFER_LIMIT) { 
            sendData([...buffer.current]);
            buffer.current = [];
        }
    };

    const sendData = async (data: any) => { 
        try { 
            await fetch('http://localhost:8080/ingest', { 
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ events: data }),
            });
        } catch (err) { 
            console.error("Telemetry failed to send: ", err );
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
}