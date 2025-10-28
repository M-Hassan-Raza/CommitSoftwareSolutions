"use client";

import { useEffect } from "react";

// Global flag to ensure console log only appears once
let hasLoggedBrand = false;

export default function ConsoleBrand() {
  useEffect(() => {
    if (hasLoggedBrand) return;
    
    try {
      const styles = getComputedStyle(document.documentElement);
      const primary = styles.getPropertyValue("--primary").trim();
      const foreground = styles.getPropertyValue("--foreground").trim();

      // Convert OKLCH to RGB for console colors
      const primaryColor = primary ? `oklch(${primary})` : "#8e8e8e";
      const foregroundColor = foreground ? `oklch(${foreground})` : "#252525";

      const logoStyle = `color: ${primaryColor}; font-weight: bold; font-family: monospace; font-size: 12px; line-height: 1.2;`;
      const taglineStyle = `color: ${foregroundColor}; font-weight: bold; font-family: monospace; font-size: 10px;`;

      // ASCII Art Commit Software Solutions Logo
      const commitLogo = `%c
 ██████╗ ██████╗ ███╗   ███╗███╗   ███╗██╗████████╗
██╔════╝██╔═══██╗████╗ ████║████╗ ████║██║╚══██╔══╝
██║     ██║   ██║██╔████╔██║██╔████╔██║██║   ██║   
██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║   
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║   ██║   
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   

███████╗ ██████╗ ███████╗████████╗██╗    ██╗ █████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██╔════╝╚══██╔══╝██║    ██║██╔══██╗██╔══██╗██╔════╝
███████╗██║   ██║█████╗     ██║   ██║ █╗ ██║███████║██████╔╝█████╗  
╚════██║██║   ██║██╔══╝     ██║   ██║███╗██║██╔══██║██╔══██╗██╔══╝  
███████║╚██████╔╝██║        ██║   ╚███╔███╔╝██║  ██║██║  ██║███████╗
╚══════╝ ╚═════╝ ╚═╝        ╚═╝    ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

███████╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
███████╗██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║███████╗
╚════██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║
███████║╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
%c
Building Tomorrow's Software Today`;

      console.log(commitLogo, logoStyle, taglineStyle);
      hasLoggedBrand = true;
    } catch (_) {
      // Fallback plain log
      console.log("Commit Software Solutions — Building Tomorrow's Software Today");
      hasLoggedBrand = true;
    }
  }, []);

  return null;
}