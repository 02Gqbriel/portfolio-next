export default function mapToRange(
	value: number,
	srcRange: [number, number],
	dstRange: [number, number]
) {
	return value < srcRange[0] || value > srcRange[1]
		? NaN
		: ((value - srcRange[0]) * (dstRange[1] - dstRange[0])) /
				(srcRange[1] - srcRange[0]) +
				dstRange[0];
}

/**
    export default function convertToRange(
        value: number,
        srcRange: [number, number],
        dstRange: [number, number]
    ) {
        // value is outside source range return
        if (value < srcRange[0] || value > srcRange[1]) {
            return NaN;
        }

        var srcMax = srcRange[1] - srcRange[0],
            dstMax = dstRange[1] - dstRange[0],
            adjValue = value - srcRange[0];

        return (adjValue * dstMax) / srcMax + dstRange[0];
    }
 */
