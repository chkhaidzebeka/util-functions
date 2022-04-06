const getTypes = (target, name = "MyType") => {
  if (typeof target !== "object" || target === null)
    return console.warn("not a valid object");

  if (Array.isArray(target)) target = target[0];

  let result = Object.entries(target).reduce((acc, next) => {
    return (acc += `${next[0]}: ${typeof next[1]}; `);
  }, `type ${name} = {`);

  result += "};";

  return result;
};
