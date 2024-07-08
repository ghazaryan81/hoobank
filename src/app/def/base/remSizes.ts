/* prettier-ignore */
export const remSizes = {
	fix:    16,   // px
	relate: 62.5, // %
	get current() {
		return this.fix * this.relate / 100;
	}
};
