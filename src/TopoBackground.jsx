import React, { useEffect, useRef } from 'react';

const TopographicBackground = ({ externalAudioRef }) => {
    const canvasRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);

    useEffect(() => {
        if (!externalAudioRef.current || analyserRef.current) return;

        const initAudio = () => {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioCtx = new AudioContext();
            
            const source = audioCtx.createMediaElementSource(externalAudioRef.current);
            const analyser = audioCtx.createAnalyser();
            analyser.minDecibels = -92.5; //-100
            analyser.maxDecibels = 0; //-30
            analyser.smoothingTimeConstant = 0.75; //0.65 //0.8
            analyser.fftSize = 256;
            source.connect(analyser);
            analyser.connect(audioCtx.destination);

            audioContextRef.current = audioCtx;
            analyserRef.current = analyser;
        };

        const handleInteraction = () => {
            initAudio();
            window.removeEventListener('click', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        return () => window.removeEventListener('click', handleInteraction);
    }, [externalAudioRef]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];
        const p = new Uint8Array(512);
        const perm = Array.from({ length: 256 }, () => Math.floor(Math.random() * 256));
        for (let i = 0; i < 512; i++) p[i] = perm[i % 256];

        const simplexNoise = (xin, yin) => {
            let n0, n1, n2;
            const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
            const s = (xin + yin) * F2;
            const i = Math.floor(xin + s);
            const j = Math.floor(yin + s);
            const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
            const t = (i + j) * G2;
            const X0 = i - t;
            const Y0 = j - t;
            const x0 = xin - X0;
            const y0 = yin - Y0;
            let i1, j1;
            if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }
            const x1 = x0 - i1 + G2;
            const y1 = y0 - j1 + G2;
            const x2 = x0 - 1.0 + 2.0 * G2;
            const y2 = y0 - 1.0 + 2.0 * G2;
            const ii = i & 255;
            const jj = j & 255;
            const gi0 = p[ii + p[jj]] % 12;
            const gi1 = p[ii + i1 + p[jj + j1]] % 12;
            const gi2 = p[ii + 1 + p[jj + 1]] % 12;
            let t0 = 0.5 - x0 * x0 - y0 * y0;
            if (t0 < 0) n0 = 0.0; else { t0 *= t0; n0 = t0 * t0 * (grad3[gi0][0] * x0 + grad3[gi0][1] * y0); }
            let t1 = 0.5 - x1 * x1 - y1 * y1;
            if (t1 < 0) n1 = 0.0; else { t1 *= t1; n1 = t1 * t1 * (grad3[gi1][0] * x1 + grad3[gi1][1] * y1); }
            let t2 = 0.5 - x2 * x2 - y2 * y2;
            if (t2 < 0) n2 = 0.0; else { t2 *= t2; n2 = t2 * t2 * (grad3[gi2][0] * x2 + grad3[gi2][1] * y2); }
            return 70.0 * (n0 + n1 + n2);
        };

        let width, height;
        const step = 10; //10 //20-30+
        let time = 0;
        let morphTime = 0;
        
        let audioData = new Uint8Array(128); 
        let grid = new Float32Array(0);

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2); // capped at 2 for performance on 4k+ screens
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            
            const cols = Math.ceil(width / step) + 1;
            const rows = Math.ceil(height / step) + 1;
            grid = new Float32Array(cols * rows);
        };

        const lerp = (v1, v2, target) => (target - v1) / (v2 - v1);

        const draw = () => {
            let volume = 0;
            let bass = 0;
            if (analyserRef.current) {
                analyserRef.current.getByteFrequencyData(audioData);
                let sum = 0;
                for (let i = 0; i < audioData.length; i++) sum += audioData[i];
                volume = sum / audioData.length;
                bass = audioData[0] || 0;
            }

            time += 0.0001 + (volume * 0.00005);
            morphTime += 0.0001 + (volume * 0.00005);

            const currentScale = 0.001 + (bass * 0.0000000725); //0.0000000725
            const noiseIntensity = 0.8 + (volume * 0.0001);

            ctx.fillStyle = '#000000'; //#0a0a0a
            ctx.fillRect(0, 0, width, height);

            const baseAlpha = 0.0008 + (volume * 0.0285); //0.0008 || 0.0004 + (volume * 0.0185)
            ctx.strokeStyle = `rgba(252, 45, 45, ${baseAlpha})`;
            ctx.lineWidth = 2 + (volume * 0.0375);
            ctx.lineCap = 'round';
            ctx.beginPath();

            const cols = Math.ceil(width / step) + 1;
            const rows = Math.ceil(height / step) + 1;

            for (let i = 0; i < cols; i++) {
                const xComp = i * step * currentScale;
                for (let j = 0; j < rows; j++) {
                    grid[i * rows + j] = simplexNoise(xComp, j * step * currentScale + time) * noiseIntensity;
                }
            }

            const numLines = 5;
            const dynamicLevels = [];
            for (let k = 0; k < numLines; k++) {
                let lvl = Math.sin(morphTime + (k * (Math.PI / numLines)));
                dynamicLevels.push(lvl * 0.45);
            }

            for (let i = 0; i < cols - 1; i++) {
                const x = i * step;
                const iRows = i * rows;
                const iNextRows = (i + 1) * rows;

                for (let j = 0; j < rows - 1; j++) {
                    const y = j * step;
                    const v0 = grid[iRows + j];
                    const v1 = grid[iNextRows + j];
                    const v2 = grid[iNextRows + (j + 1)];
                    const v3 = grid[iRows + (j + 1)];

                    for (let l = 0; l < dynamicLevels.length; l++) {
                        const threshold = dynamicLevels[l];
                        
                        let state = 0;
                        if (v0 > threshold) state += 8;
                        if (v1 > threshold) state += 4;
                        if (v2 > threshold) state += 2;
                        if (v3 > threshold) state += 1;

                        if (state === 0 || state === 15) continue;

                        const top = { x: x + lerp(v0, v1, threshold) * step, y: y };
                        const right = { x: x + step, y: y + lerp(v1, v2, threshold) * step };
                        const bottom = { x: x + lerp(v3, v2, threshold) * step, y: y + step };
                        const left = { x: x, y: y + lerp(v0, v3, threshold) * step };

                        switch (state) {
                            case 1: case 14: ctx.moveTo(left.x, left.y); ctx.lineTo(bottom.x, bottom.y); break;
                            case 2: case 13: ctx.moveTo(bottom.x, bottom.y); ctx.lineTo(right.x, right.y); break;
                            case 3: case 12: ctx.moveTo(left.x, left.y); ctx.lineTo(right.x, right.y); break;
                            case 4: case 11: ctx.moveTo(top.x, top.y); ctx.lineTo(right.x, right.y); break;
                            case 5: ctx.moveTo(top.x, top.y); ctx.lineTo(left.x, left.y); ctx.moveTo(bottom.x, bottom.y); ctx.lineTo(right.x, right.y); break;
                            case 6: case 9: ctx.moveTo(top.x, top.y); ctx.lineTo(bottom.x, bottom.y); break;
                            case 7: case 8: ctx.moveTo(top.x, top.y); ctx.lineTo(left.x, left.y); break;
                            case 10: ctx.moveTo(top.x, top.y); ctx.lineTo(right.x, right.y); ctx.moveTo(bottom.x, bottom.y); ctx.lineTo(left.x, left.y); break;
                        }
                    }
                }
            }

            ctx.stroke();
            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div style={{ width: '100vw', height: '100vh', background: '#0a0a0a', position: 'relative' }}>
            <audio
                ref={externalAudioRef}
                crossOrigin="anonymous"
                loop
            />
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
};

export default TopographicBackground;
