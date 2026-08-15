import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function WhatsAppFab() {
  return (
    <motion.a
      href={CLINIC.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile randevu al"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 20 }}
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl shadow-primary/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </motion.a>
  );
}
