import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import demoVideo from "../media/demovideo.mp4";
import thumbnail from "../media/thumbnail.png";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) videoRef.current.volume = newVolume;
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
    setProgress(newTime);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => setProgress(video.currentTime);
    const setDurationFromVideo = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", setDurationFromVideo);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", setDurationFromVideo);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-10 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-hci-navy tracking-tight">
              Transforming Hospital Rooms Into Smart, Connected Healing Spaces
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-3xl">
              Experience HCI's innovative healthcare technology solutions
              through our interactive product demonstrations. Designed for
              hospital IT staff, administrators, and decision-makers to explore
              our complete ecosystem.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-hci-blue hover:bg-hci-blue/90 text-white font-medium px-6 md:px-8 w-full sm:w-auto"
                asChild
              >
                <a href="#products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-hci-navy text-hci-navy hover:bg-gray-100 w-full sm:w-auto mt-3 sm:mt-0"
              >
                Watch Overview
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-200 w-full relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={thumbnail}
                >
                  <source src={demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Play Button */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center focus:outline-none"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-hci-blue/90 flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                    >
                      {isPlaying ? (
                        <path
                          fillRule="evenodd"
                          d="M5.25 4.5A.75.75 0 0 1 6 3.75h2.25a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-15zm10.5 0a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1-.75-.75v-15z"
                          clipRule="evenodd"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Controls */}
                {/* <div className="absolute bottom-0 left-0 w-full bg-black/60 px-4 py-2 flex flex-col gap-2">
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.1"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full accent-hci-blue"
                  />
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-white">
                      {formatTime(progress)} / {formatTime(duration)}
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24 accent-hci-blue"
                    />
                  </div>
                </div> */}
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-hci-navy/10 to-transparent opacity-70 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper to format time
const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" + secs : secs}`;
};

export default HeroSection;
