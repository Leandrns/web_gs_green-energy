// SplashScreen.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgb(0, 207, 45) 5%,rgb(255, 205, 60));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(255, 205, 60), 0px 5px 20px 0px rgb(0, 207, 45);
    @keyframes spinning82341 {
        to {
            transform: rotate(360deg);
        }
    }
`
const Spinner1 = styled.div`
    background-color: rgb(36, 36, 36);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    filter: blur(10px);
`

const Splash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #e8e8e8;
  color: white;
  font-size: 1.5rem;
  animation: fadeInOut 3s ease;
  z-index: 3;

@keyframes fadeInOut {
  0% { opacity: 1; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
`
const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Define o tempo de exibição da splash screen em milissegundos
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <Splash>
        <Spinner>
            <Spinner1></Spinner1>
        </Spinner>
    </Splash>
  );
};

export default SplashScreen;
