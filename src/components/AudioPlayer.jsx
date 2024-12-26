import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa"; // Hoparlör ikonları için
import intro from "../music/Silinmez.mp3";

const AudioPlayer = () => {
  const audioRef = useRef(null); // Ses elementini referanslamak için
  const [isPlaying, setIsPlaying] = useState(false); // Müzik çalma durumu

  // Ses kontrol fonksiyonu
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Müziği durdur
    } else {
      audioRef.current.play(); // Müziği çal
    }
    setIsPlaying(!isPlaying); // Durumu tersine çevir
  };

  return (
    <div className="app">
      {/* Müzik dosyası */}
      <audio ref={audioRef} src={intro} autoPlay loop />

      {/* Hoparlör butonu */}
      <div className="ml-2">
        {isPlaying ? (
          <FaVolumeUp size={40} className="ml-2 mt-4" onClick={toggleAudio} />
        ) : (
          <FaVolumeMute onClick={toggleAudio} size={40} className="ml-2 mt-4" />
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
