type LooseAutocomplete<T extends string> = T | Omit<string, T>;
// type IconType = LooseAutocomplete<"sm" | "xs">;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
// type ComplexObj = Prettify<Type1 & Type2 & ...TypeN>

type IsEqual<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends 
	(<T>() => T extends Y ? 1 : 2) ? true : false;
