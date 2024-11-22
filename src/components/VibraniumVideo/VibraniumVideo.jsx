import styled from "styled-components"
import React from 'react';

const Video = styled.section`
    padding: 90px 50px 0 50px;
`

const VideoContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto; 
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 8px;
    &:hover{
            transition: all 0.4s ease-in-out;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
        
    }
`;


export default function VibraniumVideo() {
  return (
    <Video>
        <VideoContainer>
            <iframe
                src="https://www.youtube.com/embed/GOvKuxUUxu0"
                title="Vídeo sobre o Vibranium"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </VideoContainer>
    </Video>
  )
}
