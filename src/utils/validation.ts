export function validatePassword(p1: string, p2: string): string | null {
  if (p1 !== p2) return 'Пароли должны совпадать.';
  if (p1.length < 8) return 'Длина пароля должна быть больше 8.';
  return null;
}
