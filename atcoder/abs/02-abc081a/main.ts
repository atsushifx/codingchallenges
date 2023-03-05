/*
 * atcoder typescript template
 */
import * as fs from "fs";

// stdin
const inputs: string = (fs.readFileSync(process.stdin.fd, "utf8")).trim()
const inputArray: string[] = inputs.split(/\s/)
let inputIndex = 0;

// atcoder lib:stdin
function getNext(): string {
	return inputArray[inputIndex++];
}

function getNextNum(): number {
	return Number(getNext());
}

function getNums(N: number): number[] {
	const arr: number[] = [];
	for (let i: number = 0; i < N; ++i) {
		arr[i] = getNextNum();
	}
	return arr;
}

// lib:stdout
let outputBuffer: string = ""
function print(out: string | number | bigint): void;
function print<T>(out: Array<T>, separator: string): void;
function print<T>(out: string | number | bigint | Array<T>, separator?: string) {
	if (Array.isArray(out)) {
		outputBuffer += out.join(separator);
	} else {
		outputBuffer += out;
	}
}

function println(out: string | number | bigint): void;
function println<T>(out: Array<T>, separator: string): void;
function println<T>(out: string | number | bigint | Array<T>, separator?: string) {
	if (Array.isArray(out)) {
		print(out, separator || "");
	} else {
		print(out);
	}
	print("\n");
}

function flush(): void {
	console.log(outputBuffer);
}

// exec main
main();
flush();


// main : write answer in this function
function main() {
	// Input
	const s: number[] = inputs.split("").map((x) => Number(x));

	// Answer
	const sum = s.reduce((a: number, b: number) => a + b, 0);

	// Out
	print(sum);
}

