export const generatePasswordFromSettings = (settings) => {
   if (
      settings.length < 4 ||
      [
         settings.lowercase,
         settings.uppercase,
         settings.numbers,
         settings.symbols,
      ].every((v) => v === false)
   ) {
      return undefined;
   }

   const lowercase = "abcdefghijklmnopqrstuvwxyz";
   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbers = "0123456789";
   const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";

   let allowedCharacters = "";

   if (settings.lowercase) allowedCharacters += lowercase;
   if (settings.uppercase) allowedCharacters += uppercase;
   if (settings.numbers) allowedCharacters += numbers;
   if (settings.symbols) allowedCharacters += symbols;

   const indexes = window.crypto.getRandomValues(
      new Uint32Array(settings.length)
   );

   const newPassword = indexes.reduce((password, index) => {
      return password + allowedCharacters[index % allowedCharacters.length];
   }, "");

   return newPassword;
};
