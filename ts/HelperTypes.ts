type LooseAutocomplete<T extends string> = T | Omit<string, T>;
// type IconType = LooseAutocomplete<"sm" | "xs">;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
// type ComplexObj = Prettify<Type1 & Type2 & ...TypeN>
