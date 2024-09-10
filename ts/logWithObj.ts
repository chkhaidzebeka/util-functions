/**
 * 
 * @param strings 
 * @param values 
 * 
 * @usage  logWithObjs\`state.value.textTranslations[`${key}`] = `${value}`\`;
 */
export const logWithObjs = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const parts: (string | unknown)[] = []

  strings.forEach((string, i) => {
    parts.push(string)
    if (i < values.length) {
      parts.push(values[i])
    }
  })

  console.log(...parts)
}
