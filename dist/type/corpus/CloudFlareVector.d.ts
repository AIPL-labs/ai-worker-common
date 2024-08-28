type VectorFloatArray = Float32Array | Float64Array;
declare type VectorizeVectorMetadata = string | number | boolean | string[] | Record<string, string | number | boolean | string[]>;
export type CloudflareVector = {
    /** The ID for the vector. This can be user-defined, and must be unique. It should uniquely identify the object, and is best set based on the ID of what the vector represents. */
    id: string;
    /** The vector values */
    values: VectorFloatArray | number[];
    /** The namespace this vector belongs to. */
    namespace?: string;
    /** Metadata associated with the binding. Includes the values of the other fields and potentially additional details. */
    metadata?: Record<string, VectorizeVectorMetadata>;
};
export {};
//# sourceMappingURL=CloudFlareVector.d.ts.map