import type { Publication, PublicationType } from "@/content/speaking";

export const NAVY = "#1e3a5f";
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const TYPE_STYLES: Record<PublicationType, { label: string; color: string }> = {
  talk: { label: "Talk", color: "#4285F4" },
  article: { label: "Article", color: "#0f9d58" },
  panel: { label: "Panel", color: "#a142f4" },
  press: { label: "Press", color: "#b45309" },
  podcast: { label: "Podcast", color: "#14b8a6" },
};

export function VideoThumb({ pub, className }: { pub: Publication; className: string }) {
  const hasVideo = Boolean(pub.videoUrl && pub.videoUrl !== "#");
  if (!pub.thumbnail) return null;

  return (
    <a
      href={hasVideo ? pub.videoUrl : undefined}
      target={hasVideo ? "_blank" : undefined}
      rel={hasVideo ? "noopener noreferrer" : undefined}
      aria-label={hasVideo ? `Watch: ${pub.title}` : undefined}
      className={`relative block group ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}${pub.thumbnail}`}
        alt={pub.title}
        className={`w-full h-full ${pub.preserveThumbnail ? "object-contain bg-black" : "object-cover"}`}
      />
      {hasVideo && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
          <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1" fill={NAVY}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      )}
    </a>
  );
}

export function videoLabel(videoUrl: string): string {
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) return "Watch on YouTube";
  if (videoUrl.includes("dailymotion.com")) return "Watch on Dailymotion";
  return "Watch video";
}

export function CtaButtons({ pub }: { pub: Publication }) {
  const hasVideo = Boolean(pub.videoUrl && pub.videoUrl !== "#");
  const hasLink = Boolean(pub.url && pub.url !== "#");
  if (!hasVideo && !hasLink) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {hasVideo && (
        <a
          href={pub.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: NAVY }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          {videoLabel(pub.videoUrl!)}
        </a>
      )}
      {hasLink && (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full border transition-colors hover:bg-gray-50"
          style={{ color: NAVY, borderColor: NAVY }}
        >
          View →
        </a>
      )}
    </div>
  );
}
