import {
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react";
import type { SocialMedia } from "@/common/types";

export const socialMedia: SocialMedia[] = [
  {
    platform: "email",
    label: { en: "Email", id: "Email" },
    handle: "zafif.kerja@gmail.com",
    url: "mailto:zafif.kerja@gmail.com",
    icon: EnvelopeSimpleIcon,
  },
  {
    platform: "instagram",
    label: { en: "Instagram", id: "Instagram" },
    handle: "@zafif_hilmi",
    url: "https://instagram.com/zafif_hilmi",
    icon: InstagramLogoIcon,
  },
  {
    platform: "linkedin",
    label: { en: "LinkedIn", id: "LinkedIn" },
    handle: "M. Zafif Hilmi A.",
    url: "https://linkedin.com/in/Zapip",
    icon: LinkedinLogoIcon,
  },
  {
    platform: "github",
    label: { en: "GitHub", id: "GitHub" },
    handle: "@Zapip",
    url: "https://github.com/Zapip",
    icon: GithubLogoIcon,
  },
  {
    platform: "tiktok",
    label: { en: "TikTok", id: "TikTok" },
    handle: "@zapip_",
    url: "https://tiktok.com/@zapip_",
    icon: TiktokLogoIcon,
  },
];