import { getLengthScore } from "./getLengthScore";

export const getPasswordStrength = (password) => {
   const length = password.length;
   if (!password || length === 0) return 0;

   const hasLower = /[a-z]/.test(password);
   const hasUpper = /[A-Z]/.test(password);
   const hasNumber = /[0-9]/.test(password);
   const hasSymbol = /[^A-Za-z0-9]/.test(password);

   const typesCount = [hasLower, hasUpper, hasNumber, hasSymbol].filter(
      Boolean
   ).length;

   // Basic formula: strength based on length and character variety
   let score = getLengthScore(length) + typesCount;

   // Max score: 3 (length) + 4 (variety) = 7
   return Math.min(score, 7);
};
