export function getLengthScore(length) {
   if (length >= 20) return 3;
   if (length >= 12) return 2;
   if (length >= 8) return 1;
   return 0;
}
