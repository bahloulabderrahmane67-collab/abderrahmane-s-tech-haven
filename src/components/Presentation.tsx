import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Play, Pause, Volume2, Mic } from "lucide-react";

export function Presentation() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setCurrent(a.currentTime);
      setProgress((a.currentTime / (a.duration || 1)) * 100);
    };
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) a.pause();
    else a.play();
    setPlaying(!playing);
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    a.currentTime = ratio * duration;
  };

  // 32 bars for a faux waveform
  const bars = Array.from({ length: 40 });

  return (
    <Section id="presentation" eyebrow="02 — Présentation" title="Présentation orale">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/10 to-primary/40 blur-2xl rounded-3xl opacity-60" />
        <div className="relative glass rounded-2xl p-6 sm:p-8 border-primary/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <span className="absolute inset-0 rounded-xl bg-primary/30 blur-lg animate-pulse" />
              <span className="relative w-12 h-12 rounded-xl bg-primary/15 border border-primary/40 text-primary flex items-center justify-center">
                <Mic size={20} />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[11px] text-primary uppercase tracking-wider">
                {"// audio.track"}
              </p>
              <h3 className="font-semibold truncate">Présentation — Abderrahmane BAHLOUL</h3>
            </div>
            {playing && (
              <div className="hidden sm:flex items-center gap-1 text-primary">
                <Volume2 size={16} />
                <span className="text-xs font-mono">LIVE</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <button
              onClick={toggle}
              aria-label={playing ? "Pause" : "Lecture"}
              className="shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition glow"
            >
              {playing ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
            </button>

            <div className="flex-1 min-w-0">
              <div
                onClick={seek}
                className="relative h-12 flex items-center gap-[3px] cursor-pointer group"
              >
                {bars.map((_, i) => {
                  const filled = (i / bars.length) * 100 < progress;
                  const h = 20 + Math.abs(Math.sin(i * 1.3)) * 70;
                  return (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`flex-1 rounded-full transition-colors ${
                        filled ? "bg-primary" : "bg-muted-foreground/25 group-hover:bg-muted-foreground/40"
                      }`}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between mt-2 font-mono text-[11px] text-muted-foreground">
                <span>{fmt(current)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>
          </div>

          <audio ref={audioRef} src="/presentation.m4a" preload="metadata" />
        </div>
      </div>
    </Section>
  );
}
