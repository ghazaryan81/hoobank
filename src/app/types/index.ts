export type s = string;
export type n = number;
export type b = boolean;

export type f1<T1, R> = (p1: T1) => R;
export type f1o1<T1, R> = (p1?: T1) => R;

export type f2<T1, T2, R> = (p1: T1, p2: T2) => R;
export type f2o1<T1, T2, R> = (p1: T1, p2?: T2) => R;
export type f2o2<T1, T2, R> = (p1?: T1, p2?: T2) => R;

export type f3<T1, T2, T3, R> = (p1: T1, p2: T2, p: T3) => R;
export type f3o1<T1, T2, T3, R> = (p1: T1, p2: T2, p?: T3) => R;
export type f3o2<T1, T2, T3, R> = (p1: T1, p2?: T2, p?: T3) => R;
export type f3o3<T1, T2, T3, R> = (p1?: T1, p2?: T2, p?: T3) => R;

export interface IObj<T1> {
  [k: s]: T1;
}

export interface IObjNested<T1> {
  [k: s]: IObj<T1>;
}
