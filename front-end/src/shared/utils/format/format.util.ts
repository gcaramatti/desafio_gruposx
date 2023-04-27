class Convert {
  stringToNumber(string: string): number {
    if (!string) return 0;

    return parseInt(string);
  }
}

export default new Convert();
