export const getStrengthLabel = (score) => {
   if (score === 7) {
      return {
         label: "Godlike",
         color: "var(--godlike-password-color)",
         width: "100%",
      };
   }

   if (score >= 6) {
      return {
         label: "Very Strong",
         color: "var(--very-strong-password-color)",
         width: "100%",
      };
   }

   if (score >= 5) {
      return {
         label: "Strong",
         color: "var(--strong-password-color)",
         width: "75%",
      };
   }

   if (score >= 3) {
      return {
         label: "Average",
         color: "var(--average-password-color)",
         width: "50%",
      };
   }

   if (score >= 1) {
      return {
         label: "Weak",
         color: "var(--poor-password-color)",
         width: "25%",
      };
   }

   return { label: "Too Short", color: "var(--mid-color)", width: "0%" };
};
