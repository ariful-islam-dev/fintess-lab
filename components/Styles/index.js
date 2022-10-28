import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C23A55",
      dark: "#D23F57",
      light: "#FAE4E9",
    },
    secondary: {
      gray900: "#111827",
      main: "#1F2937",
      gray700: "#374151",
      gray600: "#4B5563",
      gray500: "#6B7280",
      gray400: "#9CA3AF",
      gray300: "#D1D5DB",
      gray200: "#E5E7EB",
      gray100: "#F3F4F6",
      gray50: "#F9FAFB",
    },
  },
 
  fontName: {
    barlow: "'Barlow Condensed', sans-serif",
    inter: "'Inter', sans-serif;",
  },
  font: {
    interRegular14: `400 14px 'Inter', sans-serif`,
    interMedium14: `500 14px 'Inter', sans-serif`,
    interMedium16: `500 16px 'Inter', sans-serif`,
    interSemiBold16: `600 16px 'Inter', sans-serif`,
    interSemiBold20: `600 20px 'Inter', sans-serif`,
    barlowSemiBold20: `600 20px 'Barlow Condensed', sans-serif`,
    barlowSemiBold24: `600 24px 'Barlow Condensed', sans-serif`,
    barlowSemiBold32: `700 32px 'Barlow Condensed', sans-serif`,
  },

  fontSize: {
    f32: "32px",
    f16: "16px",
    f14:'14px'
  },
});

export { theme };

