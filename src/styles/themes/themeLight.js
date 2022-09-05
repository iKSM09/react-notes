import { tonalPalettes } from "./tonalPalettes";
import { typography } from "./typography";

export const themeLight = {
  id: "light",
  background: tonalPalettes.neutral.neutral099,
  onBackground: tonalPalettes.neutral.neutral010,
  // Primary Tones
  primary: tonalPalettes.primary.primary040,
  onPrimary: tonalPalettes.primary.primary100,
  primaryContainer: tonalPalettes.primary.primary090,
  onPrimaryContainer: tonalPalettes.primary.primary010,
  // Secondary Tones
  secondary: tonalPalettes.secondary.secondary040,
  onSecondary: tonalPalettes.secondary.secondary100,
  secondaryContainer: tonalPalettes.secondary.secondary090,
  onSecondaryContainer: tonalPalettes.secondary.secondary010,
  // Tertiary Tones
  tertiary: tonalPalettes.tertiary.tertiary040,
  onTertiary: tonalPalettes.tertiary.tertiary100,
  tertiaryContainer: tonalPalettes.tertiary.tertiary090,
  onTertiaryContainer: tonalPalettes.tertiary.tertiary010,
  // Error Tones
  error: tonalPalettes.error.error040,
  onError: tonalPalettes.error.error100,
  errorContainer: tonalPalettes.error.error090,
  onErrorContainer: tonalPalettes.error.error010,
  // Surface Tones
  surface: tonalPalettes.neutral.neutral099,
  surface01: "#F8F2FA", // surface + 05% primary
  surface02: "#F4EDF7", // surface + 08% primary
  surface03: "#F0E8F4", // surface + 11% primary
  surface04: "#EEE6F3", // surface + 12% primary
  surface05: "#EBE3F1", // surface + 14% primary
  onSurface: tonalPalettes.neutral.neutral010,
  surfaceVariant: tonalPalettes.neutralVariant.neutralVariant090,
  onSurfaceVariant: tonalPalettes.neutralVariant.neutralVariant030,
  outline: tonalPalettes.neutralVariant.neutralVariant050,
  ...typography,
};
