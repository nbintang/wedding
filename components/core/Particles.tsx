"use client";

import React, { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
  
    // Initialize tsParticles
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true },
        fpsLimit: 60,

        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#B0A695",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          size: {
            value: { min: 3, max: 10 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          zIndex: {
            value: 0,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
