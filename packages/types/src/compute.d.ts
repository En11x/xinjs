type ComputeTo<To, From = unknown> = (source: From) => To
type Computable<To, From = unknown> = To | ComputeTo<To, From>
