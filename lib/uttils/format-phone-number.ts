export const formatPhoneNumber = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (!numbers) return "";

  if (numbers.length === 1 && (numbers === "7" || numbers === "8")) return "+7";

  let body = numbers;
  if (["7", "8"].includes(body[0])) {
    body = body.slice(1);
  }
  body = body.slice(0, 10);

  let result = "+7";
  if (body.length > 0) result += ` (${body.slice(0, 3)}`;
  if (body.length >= 4) result += `) ${body.slice(3, 6)}`;
  if (body.length >= 7) result += `-${body.slice(6, 8)}`;
  if (body.length >= 9) result += `-${body.slice(8, 10)}`;
  console.log(result);

  return result;
};
