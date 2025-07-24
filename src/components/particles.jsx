import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        zIndex: -1,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#f20574",
        },
        links: {
          color: "#f20574",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#f20574",
          },
          polygon: {
            nb_sides: 3,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesComponent;
