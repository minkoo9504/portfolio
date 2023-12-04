import React, { useState, useEffect } from 'react';
import './intro.css';

const Intro = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [isBlinking, setIsBlinking] = useState(true);
  const completionWord = 'KANG MIN KOO PORTFOLIO        ';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        const nextChar = completionWord[prevTitleValue.length];

        // 모든 글자를 타이핑했을 때, 깜빡임 효과 전환 및 초기화
        if (prevTitleValue.length === completionWord.length) {
          setIsBlinking(!isBlinking);
          setBlogTitle('');
        }

        return prevTitleValue + nextChar;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  }, [blogTitle, isBlinking, completionWord]);

  return ( 
    <section className="Intro">
      <h1>
        <span>{blogTitle}</span>
        <span className={`blink ${isBlinking ? 'active' : ''}`}>l</span>
      </h1>
    </section>
  );
}

export default Intro;