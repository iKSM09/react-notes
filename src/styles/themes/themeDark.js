import { tonalPalettes } from "./tonalPalettes";
import { typography } from "./typography";

export const themeDark = {
  id: "dark",
  background: tonalPalettes.neutral.neutral010,
  onBackground: tonalPalettes.neutral.neutral090,
  // Primary Tones
  primary: tonalPalettes.primary.primary080,
  onPrimary: tonalPalettes.primary.primary020,
  primaryContainer: tonalPalettes.primary.primary030,
  onPrimaryContainer: tonalPalettes.primary.primary090,
  // Secondary Tones
  secondary: tonalPalettes.secondary.secondary080,
  onSecondary: tonalPalettes.secondary.secondary020,
  secondaryContainer: tonalPalettes.secondary.secondary030,
  onSecondaryContainer: tonalPalettes.secondary.secondary090,
  // Tertiary Tones
  tertiary: tonalPalettes.tertiary.tertiary080,
  onTertiary: tonalPalettes.tertiary.tertiary020,
  tertiaryContainer: tonalPalettes.tertiary.tertiary030,
  onTertiaryContainer: tonalPalettes.tertiary.tertiary090,
  // Error Tones
  error: tonalPalettes.error.error080,
  onError: tonalPalettes.error.error020,
  errorContainer: tonalPalettes.error.error030,
  onErrorContainer: tonalPalettes.error.error090,
  // Surface Tones
  surface: tonalPalettes.neutral.neutral010,
  surface01: "#272329", // surface + 05% primary
  surface02: "#2C2830", // surface + 08% primary
  surface03: "#322C37", // surface + 11% primary
  surface04: "#342E39", // surface + 12% primary
  surface05: "#38313D", // surface + 14% primary
  onSurface: tonalPalettes.neutral.neutral080,
  surfaceVariant: tonalPalettes.neutralVariant.neutralVariant030,
  onSurfaceVariant: tonalPalettes.neutralVariant.neutralVariant080,
  outline: tonalPalettes.neutralVariant.neutralVariant060,
  ...typography,
};
