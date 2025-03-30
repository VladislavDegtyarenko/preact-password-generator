export const generatePasswordFromSettings = (settings) => {
   if (settings.length < 1) {
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

   let password = "";

   if (!allowedCharacters) return setPassword("");

   for (const index of indexes) {
      password += allowedCharacters[index % allowedCharacters.length];
   }

   return password;
};
