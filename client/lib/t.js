// Resuelve claves con puntos ("contact.send") sobre un diccionario; devuelve la clave si falta.
export function createT(dict) {
  return (key) =>
    key.split(".").reduce((node, part) => node?.[part], dict) ?? key;
}
