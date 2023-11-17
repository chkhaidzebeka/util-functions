type LooseAutocomplete<T extends string> = T | Omit<string, T>;
// type IconType = LooseAutocomplete<"sm" | "xs">;
