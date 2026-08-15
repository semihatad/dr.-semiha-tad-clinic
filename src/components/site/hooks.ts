import { useEffect, useState } from "react";
import { CLINIC } from "@/lib/clinic";

/** Dinamik açık/kapalı durumu (Türkiye saati). */
export function useOpenStatus() {
  const [state, setState] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const compute = () => {
      const parts = new Intl.DateTimeFormat("tr-TR", {
        timeZone: "Europe/Istanbul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).formatToParts(new Date());
      const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
      const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
      const mins = hour * 60 + minute;
      const open = mins >= CLINIC.openHour * 60 && mins < CLINIC.closeHour * 60;
      setState({ open, label: open ? "Şu Anda Açık" : "Şu Anda Kapalı" });
    };
    compute();
    const t = setInterval(compute, 30_000);
    return () => clearInterval(t);
  }, []);

  return state;
}

/** Scroll-spy: görünür bölümün id'sini döner. */
export function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.3;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}
