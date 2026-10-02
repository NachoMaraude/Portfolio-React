// Resuelve claves con puntos ("contact.send") y variables {name}; devuelve la clave si falta.
export function createT(dict) {
  return (key, vars) => {
    const value = key.split(".").reduce((node, part) => node?.[part], dict) ?? key;
    return vars
      ? value.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`))
      : value;
  };
}
