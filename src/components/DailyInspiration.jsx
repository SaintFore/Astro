import { useState, useEffect } from "preact/hooks";

export default function DailyInspiration() {
    const inspirations = [
        { quote: "每一天都是新的开始", author: "未知", emoji: "🌅" },
        { quote: "成功来自于不断的努力", author: "爱迪生", emoji: "💡" },
        { quote: "相信自己，你可以做到", author: "华特·迪士尼", emoji: "✨" },
        { quote: "困难只是成功路上的垫脚石", author: "拿破仑", emoji: "🏔️" },
        { quote: "创新是区分领导者和跟随者的关键", author: "史蒂夫·乔布斯", emoji: "🚀" },
        { quote: "代码改变世界", author: "程序员", emoji: "💻" },
        { quote: "今天的努力是明天的奇迹", author: "未知", emoji: "🌟" },
        { quote: "梦想不会逃跑，逃跑的总是自己", author: "村上春树", emoji: "🎯" },
        { quote: "学习是一辈子的事情", author: "爱因斯坦", emoji: "📚" },
        { quote: "保持好奇心，保持饥饿感", author: "史蒂夫·乔布斯", emoji: "🔥" }
    ];

    const [currentInspiration, setCurrentInspiration] = useState(inspirations[0]);
    const [isFlipping, setIsFlipping] = useState(false);
    const [stars, setStars] = useState([]);
    const [timeOfDay, setTimeOfDay] = useState("morning");

    // 根据时间设置问候
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 6) setTimeOfDay("night");
        else if (hour < 12) setTimeOfDay("morning");
        else if (hour < 18) setTimeOfDay("afternoon");
        else setTimeOfDay("evening");

        // 创建星星
        const newStars = [];
        for (let i = 0; i < 20; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                delay: Math.random() * 5,
                duration: 3 + Math.random() * 4
            });
        }
        setStars(newStars);
    }, []);

    const getNewInspiration = () => {
        setIsFlipping(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * inspirations.length);
            setCurrentInspiration(inspirations[randomIndex]);
            setTimeout(() => setIsFlipping(false), 300);
        }, 250);
    };

    const getTimeBasedStyle = () => {
        const styles = {
            morning: {
                background: 'linear-gradient(135deg, #FF9A8B 0%, #A8E6CF 100%)',
                textColor: '#2c3e50'
            },
            afternoon: {
                background: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
                textColor: '#2c3e50'
            },
            evening: {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                textColor: '#ffffff'
            },
            night: {
                background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                textColor: '#ecf0f1'
            }
        };
        return styles[timeOfDay];
    };

    const containerStyle = {
        ...getTimeBasedStyle(),
        borderRadius: '25px',
        padding: '2.5rem',
        margin: '2rem 0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        border: '2px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    };

    const quoteStyle = {
        fontSize: '1.8rem',
        fontWeight: '400',
        color: getTimeBasedStyle().textColor,
        margin: '1rem 0',
        lineHeight: '1.6',
        opacity: isFlipping ? 0 : 1,
        transform: isFlipping ? 'rotateY(90deg) scale(0.8)' : 'rotateY(0deg) scale(1)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        textShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 2
    };

    const authorStyle = {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: getTimeBasedStyle().textColor,
        opacity: 0.8,
        marginTop: '1rem',
        opacity: isFlipping ? 0 : 0.8,
        transform: isFlipping ? 'translateY(10px)' : 'translateY(0)',
        transition: 'all 0.5s ease 0.1s',
        position: 'relative',
        zIndex: 2
    };

    const emojiStyle = {
        fontSize: '4rem',
        margin: '1rem 0',
        display: 'block',
        animation: 'bounce 2s infinite',
        opacity: isFlipping ? 0 : 1,
        transform: isFlipping ? 'scale(0) rotate(180deg)' : 'scale(1) rotate(0deg)',
        transition: 'all 0.5s ease 0.2s',
        position: 'relative',
        zIndex: 2
    };

    const buttonStyle = {
        background: 'rgba(255,255,255,0.2)',
        border: '2px solid rgba(255,255,255,0.3)',
        borderRadius: '50px',
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: getTimeBasedStyle().textColor,
        cursor: 'pointer',
        marginTop: '2rem',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 2,
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    const starStyle = (star) => ({
        position: 'absolute',
        width: `${star.size}px`,
        height: `${star.size}px`,
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '50%',
        left: `${star.x}%`,
        top: `${star.y}%`,
        animation: `twinkle ${star.duration}s ease-in-out infinite`,
        animationDelay: `${star.delay}s`,
        pointerEvents: 'none',
        zIndex: 1
    });

    const getTimeGreeting = () => {
        const greetings = {
            morning: "🌅 早安时光",
            afternoon: "☀️ 午后阳光",
            evening: "🌆 傍晚时分",
            night: "🌙 夜深人静"
        };
        return greetings[timeOfDay];
    };

    return (
        <div 
            style={containerStyle}
            onClick={getNewInspiration}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px) scale(1.02)';
                e.target.style.boxShadow = '0 35px 70px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
            }}
        >
            <style>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                }
                
                @keyframes twinkle {
                    0%, 100% { 
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 1;
                        transform: scale(1.5);
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                .inspiration-button:hover {
                    background: rgba(255,255,255,0.3) !important;
                    border: 2px solid rgba(255,255,255,0.5) !important;
                    transform: translateY(-2px) scale(1.05) !important;
                }
            `}</style>
            
            {/* 背景星星 */}
            {stars.map(star => (
                <div key={star.id} style={starStyle(star)}></div>
            ))}
            
            {/* 时间问候 */}
            <div style={{
                fontSize: '1rem',
                opacity: 0.7,
                marginBottom: '1rem',
                fontWeight: '500',
                color: getTimeBasedStyle().textColor,
                position: 'relative',
                zIndex: 2
            }}>
                {getTimeGreeting()}
            </div>
            
            {/* 表情符号 */}
            <span style={emojiStyle}>{currentInspiration.emoji}</span>
            
            {/* 名言 */}
            <blockquote style={quoteStyle}>
                "{currentInspiration.quote}"
            </blockquote>
            
            {/* 作者 */}
            <cite style={authorStyle}>
                — {currentInspiration.author}
            </cite>
            
            {/* 按钮 */}
            <button 
                className="inspiration-button"
                style={buttonStyle}
                onClick={(e) => {
                    e.stopPropagation();
                    getNewInspiration();
                }}
            >
                ✨ 获取新灵感 ✨
            </button>
            
            {/* 装饰性渐变 */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                animation: 'float 6s ease-in-out infinite',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>
        </div>
    );
}
