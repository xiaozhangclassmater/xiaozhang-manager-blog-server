type keyofValue<T> = { [K in keyof T]: T[K] }
