import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function InteractiveThreeCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number | undefined;
    let cleanup = () => {};
    let mounted = true;

    const init = async () => {
      const THREE = await import("three");
      if (!mounted) return;

      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0, 0, 5);

      const light = new THREE.PointLight(0xf5d3a4, 1.2, 15);
      light.position.set(3, 3, 3);
      scene.add(light);

      const ambient = new THREE.AmbientLight(0xffffff, 0.45);
      scene.add(ambient);

      const geometry = new THREE.IcosahedronGeometry(1.75, 3);
      const material = new THREE.MeshStandardMaterial({
        color: 0xffd6a5,
        roughness: 0.25,
        metalness: 0.35,
        emissive: 0x4f2900,
        emissiveIntensity: 0.1,
        flatShading: false,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const resize = () => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      resize();

      const pointer = { x: 0, y: 0 };

      const handlePointerMove = (event: PointerEvent) => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
        pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
      };

      canvas.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("resize", resize);

      const animate = () => {
        mesh.rotation.x += 0.002;
        mesh.rotation.y += 0.003;
        mesh.rotation.z += 0.001;

        mesh.rotation.x += pointer.y * 0.001;
        mesh.rotation.y += pointer.x * 0.002;

        camera.position.x = pointer.x * 0.45;
        camera.position.y = -pointer.y * 0.35;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);

      cleanup = () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        canvas.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("resize", resize);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    };

    init();

    return () => {
      mounted = false;
      cleanup();
    };
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe",
        className,
      )}
    >
      <canvas ref={canvasRef} className="hero-scene-canvas w-full h-[420px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm shadow-soft">
          Touch to rotate
        </div>
      </div>
    </div>
  );
}
