import { useState, useEffect } from "preact/hooks";

export default function Greeting({message}) {
    const randomMessage = () => message[(Math.floor(Math.random() * message.length))];

    const [greeting, setGreeting] = useState(message[0]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [particles, setParticles] = useState([]);

    // 创建粒子效果
    const createParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 15; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 2,
                duration: 2 + Math.random() * 3
            });
        }
        setParticles(newParticles);
    };

    const handleGreetingChange = () => {
        setIsAnimating(true);
        createParticles();
        setTimeout(() => {
            setGreeting(randomMessage());
            setTimeout(() => setIsAnimating(false), 300);
        }, 200);
    };

    useEffect(() => {
        createParticles();
    }, []);

    const greetingStyle = {
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%)',
        borderRadius: '0px',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.1), inset 0 0 30px rgba(0, 255, 255, 0.05)',
        border: '1px solid rgba(0, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Courier New", monospace'
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        background: 'linear-gradient(45deg, #00ffff, #ffffff)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        margin: '0 0 1.5rem 0',
        textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
        transform: isAnimating ? 'scale(0.9) rotateX(90deg)' : 'scale(1) rotateX(0deg)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isAnimating ? 0 : 1,
        fontFamily: '"Courier New", monospace',
        letterSpacing: '2px'
    };

    const buttonStyle = {
        background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(0, 128, 255, 0.2))',
        border: '1px solid #00ffff',
        borderRadius: '0px',
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        color: '#00ffff',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        position: 'relative',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
        fontFamily: '"Courier New", monospace'
    };

    const particleStyle = (particle) => ({
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: '#00ffff',
        borderRadius: '50%',
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        animation: `float ${particle.duration}s ease-in-out infinite`,
        animationDelay: `${particle.delay}s`,
        pointerEvents: 'none',
        boxShadow: '0 0 4px #00ffff'
    });

    return (
        <div style={greetingStyle}>
            <style>{`
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.7;
                    }
                    50% { 
                        transform: translateY(-20px) rotate(180deg);
                        opacity: 1;
                    }
                }
                
                .greeting-button:hover {
                    transform: translateY(-2px) scale(1.05) !important;
                    box-shadow: 0 0 30px rgba(0, 255, 255, 0.4) !important;
                    background: linear-gradient(45deg, rgba(0, 255, 255, 0.3), rgba(0, 128, 255, 0.3)) !important;
                }
                
                .greeting-button:active {
                    transform: translateY(0px) scale(0.98) !important;
                }
            `}</style>
            
            {/* 背景粒子 */}
            {particles.map(particle => (
                <div key={particle.id} style={particleStyle(particle)}></div>
            ))}
            
            {/* 主标题 */}
            <h3 style={titleStyle}>
                {greeting}! ACCESS_GRANTED
            </h3>
            
            {/* 冷峻按钮 */}
            <button 
                className="greeting-button"
                style={buttonStyle}
                onClick={handleGreetingChange}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = isAnimating ? 'scale(0.95)' : 'scale(1)';
                }}
            >
                [RANDOMIZE_GREETING]
            </button>
            
            {/* 装饰性光晕 */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                animation: 'rotate 20s linear infinite',
                pointerEvents: 'none'
            }}></div>
            
            <style>{`
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}