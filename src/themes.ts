export const THEME_STORAGE_KEY = "portfolio-theme";

export type ThemeId =
  | "ocean"
  | "forest"
  | "sunset"
  | "cosmic"
  | "cherry"
  | "midnight";

export interface Theme {
  id: ThemeId;
  name: string;
  emoji: string;
  tagline: string;
  accent: string;
  accentRgb: string;
}

export const DEFAULT_THEME_ID: ThemeId = "ocean";

export const themes: Theme[] = [
  {
    id: "ocean",
    name: "Ocean",
    emoji: "🌊",
    tagline: "Steady & professional",
    accent: "#1d4ed8",
    accentRgb: "29 78 216",
  },
  {
    id: "forest",
    name: "Forest",
    emoji: "🌲",
    tagline: "Calm & grounded",
    accent: "#166534",
    accentRgb: "22 101 52",
  },
  {
    id: "sunset",
    name: "Sunset",
    emoji: "🔥",
    tagline: "Warm & bold",
    accent: "#c2410c",
    accentRgb: "194 65 12",
  },
  {
    id: "cosmic",
    name: "Cosmic",
    emoji: "✨",
    tagline: "Creative & curious",
    accent: "#6d28d9",
    accentRgb: "109 40 217",
  },
  {
    id: "cherry",
    name: "Cherry",
    emoji: "🍒",
    tagline: "Energetic & fun",
    accent: "#be185d",
    accentRgb: "190 24 93",
  },
  {
    id: "midnight",
    name: "Midnight",
    emoji: "🌙",
    tagline: "Cool & focused",
    accent: "#0f766e",
    accentRgb: "15 118 110",
  },
];

export const themeMap = Object.fromEntries(
  themes.map((theme) => [theme.id, theme]),
) as Record<ThemeId, Theme>;
