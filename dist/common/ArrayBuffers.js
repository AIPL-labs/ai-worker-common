const splitArrayBuffer = (buffer, chunkSize) => {
    const result = [];
    const byteLength = buffer.byteLength;
    let offset = 0;
    while (offset < byteLength) {
        const chunk = buffer.slice(offset, offset + chunkSize);
        result.push(chunk);
        offset += chunkSize;
    }
    return result;
};
const reassembleChunks = (chunks) => {
    const totalLength = chunks.reduce((acc, chunk) => acc + chunk.byteLength, 0);
    const resultBuffer = new ArrayBuffer(totalLength);
    const resultView = new Uint8Array(resultBuffer);
    let offset = 0;
    for (const chunk of chunks) {
        resultView.set(new Uint8Array(chunk), offset);
        offset += chunk.byteLength;
    }
    return resultBuffer;
};
export const ArrayBuffers = { splitArrayBuffer, reassembleChunks };
//# sourceMappingURL=ArrayBuffers.js.map